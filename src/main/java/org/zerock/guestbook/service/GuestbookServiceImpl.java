package org.zerock.guestbook.service;
import org.zerock.guestbook.entity.Guestbook;
import org.zerock.guestbook.entity.QGuestbook;

import java.util.Optional;
import java.util.function.Function;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.zerock.guestbook.dto.GuestbookDTO;
import org.zerock.guestbook.dto.PageRequestDTO;
import org.zerock.guestbook.dto.PageResultDTO;


import org.zerock.guestbook.repository.GuestbookRepository;

import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Log4j2
@Service
@RequiredArgsConstructor //
public class GuestbookServiceImpl implements GuestbookService {
    private final GuestbookRepository gbRepository;

    @Override
    public void remove(Long gno) {
        log.info(gno + "removed");
        gbRepository.deleteById(gno);

    }

    @Override
    public void modify(GuestbookDTO dto) {
        log.info(dto + "modified");
        // Entity를 먼저 찾는 이유 : entity 에 부분만 변경할 수 없고 다 들고와서 수정해야할 부분을 수정하고 넣어줘야하기때문에

        Optional<Guestbook> result = gbRepository.findById(dto.getGno());
        if (result.isPresent()) {// result가 null값이 아니라면
            Guestbook entity = result.get(); // entity 로 형변환한 dto를 가져오고
            entity.changeTitle(dto.getTitle()); // dto에서entity를 부분적으로
            entity.changeContent(dto.getContent()); // 수정할 것들을 바꿔주고
            gbRepository.save(entity); // repo를 이용하여 entity를 세이브
        }

    }

    // 이 파일을 service가 그대로 가져가서 repository를 계속 순환하게됨
    // 이를 방지하기위해 여기서만쓰게끔 final을 붙여주고
    @Override
    public Long register(GuestbookDTO dto) {
        // log.info("dto endtered");
        Guestbook entity = dtoToEntity(dto);
        // gbRepository.count();
        gbRepository.save(entity);
        return entity.getGno();

        /// dto로 가져온 파일들에는 gno는 null이나 entity로 바뀌어 서버에 submit 된
        // 순간 gno가 생기고 그 번호를 가져올수있게되고 리턴을 gno에 맞게 long

    }

    @Override
    public GuestbookDTO read(Long gno) {

        Optional<Guestbook> result = gbRepository.findById(gno);
        // if(result.isPresent()){
        // GuestbookDTO dto = entityToDTO(result.get());
        // return dto;
        // }
        return result.isPresent() ? entityToDTO(result.get()) : null;

    }

    @Override
    public PageResultDTO<GuestbookDTO, Guestbook> getList(PageRequestDTO requestDTO) {
        Pageable pageable = requestDTO.getPageable(Sort.by("gno").descending());
        BooleanBuilder booleanBuilder = getSearch(requestDTO);

        Page<Guestbook> result = gbRepository.findAll(booleanBuilder, pageable);
        Function<Guestbook, GuestbookDTO> fn = new Function<Guestbook, GuestbookDTO>() {
            @Override
            public GuestbookDTO apply(Guestbook entity) {
                return entityToDTO(entity);

            }
        };
        return new PageResultDTO<>(result, fn);
    }

    // PageresultDTO >> Guestbook으로 바꾸고 getlist 합니다

    private BooleanBuilder getSearch(PageRequestDTO requestDTO) {
        String type = requestDTO.getType();
        String keyword = requestDTO.getKeyword();

        BooleanBuilder booleanBuilder = new BooleanBuilder();
        QGuestbook qGuestbook = QGuestbook.guestbook; // 관련된 테이블에 대한 쿼리 객체
        BooleanExpression expression = qGuestbook.gno.gt(0L);
        booleanBuilder.and(expression);
        if (type == null || type.trim().length() == 0)
            return booleanBuilder;

        BooleanBuilder conditionBuilder = new BooleanBuilder();
        if (type.contains("t"))
            conditionBuilder.or(qGuestbook.title.contains(keyword));

        if (type.contains("c"))
            conditionBuilder.or(qGuestbook.content.contains(keyword));

        if (type.contains("w"))
            conditionBuilder.or(qGuestbook.writer.contains(keyword));
        booleanBuilder.and(conditionBuilder);

        return booleanBuilder;
    }
}
