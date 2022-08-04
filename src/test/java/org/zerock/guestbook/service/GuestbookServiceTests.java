package org.zerock.guestbook.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.zerock.guestbook.dto.GuestbookDTO;
import org.zerock.guestbook.dto.PageRequestDTO;
import org.zerock.guestbook.dto.PageResultDTO;
import org.zerock.guestbook.entity.Guestbook;

@SpringBootTest
public class GuestbookServiceTests {

    @Autowired
    private GuestbookService service; // 서비스를 부르면 서비스 impl이 같이들어옴
    // 부르고 면 service, serviceimpl이 같이 들어옴
    // 부를때 같

    // @Test
    // void testRegister() {
    //     GuestbookDTO dto = GuestbookDTO.builder()
    //             .title("sampleTitle")
    //             .content("sampleContent")
    //             .writer("sample Writer")
    //             .build();

    //     // System.out.println(service.register(dto));
    //     service.register(dto);

    // }

    // @Test
    // public void testList() {
    //     PageRequestDTO requestDTO = PageRequestDTO.builder().page(1).size(10).build();
    //     PageResultDTO<GuestbookDTO, Guestbook> resultDTO = service.getList(requestDTO);
    //     resultDTOPrint(resultDTO);
    // }




    @Test
    public void testSearch() {
        PageRequestDTO requestDTO = PageRequestDTO.builder().page(1).size(10).type("c").keyword("1").build();
        PageResultDTO<GuestbookDTO, Guestbook> resultDTO = service.getList(requestDTO) ;
        System.out.println(" search test -----------------------------------------");
        resultDTOPrint(resultDTO);
        System.out.println(" search test -----------------------------------------");

    }


    public void resultDTOPrint(PageResultDTO<GuestbookDTO, Guestbook> resultDTO){
        System.out.println("prev: " + resultDTO.isPrev());
        System.out.println("next: " + resultDTO.isNext());
        System.out.println("Total: " + resultDTO.getTotalPage());
        System.out.println("-----------------------------------------");
        for (GuestbookDTO dto : resultDTO.getDtoList()) {
            System.out.println(dto);
        }
        System.out.println("-----------------------------------------");
        resultDTO.getPageList().forEach(i -> System.out.println(i + " "));
    }


}
