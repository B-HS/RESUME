package org.zerock.guestbook.dto;

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Builder
@AllArgsConstructor
@Data
public class PageRequestDTO { // DB에서의 어떠한 조건의 페이지를 요청한다
    private int page;
    private int size;
    private String type;
    private String keyword;

    public PageRequestDTO() {
        page = 1;
        size = 10;

    }

    public Pageable getPageable(Sort sort) {
        return PageRequest.of(page - 1, size, sort); // JPA는 pagerequest 시작을 0으로 시작함
    }

}
