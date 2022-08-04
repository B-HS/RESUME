// package org.zerock.guestbook.controller;


// import org.springframework.stereotype.Controller;
// import org.springframework.ui.Model;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.ModelAttribute;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.servlet.mvc.support.RedirectAttributes;
// import org.zerock.guestbook.dto.GuestbookDTO;
// import org.zerock.guestbook.dto.PageRequestDTO;
// import org.zerock.guestbook.service.GuestbookService;

// import lombok.AllArgsConstructor;
// import lombok.extern.log4j.Log4j2;


// @Controller
// @RequestMapping("guestbook")
// @Log4j2
// @AllArgsConstructor
// public class GuestbookController {
//     private final GuestbookService gbService;

//     @GetMapping({ "/" })
//     public String index() {
//         log.info("index...........");
//         return "redirect:/guestbook/list";
//     }

//     @GetMapping({ "/list" })
//     public void list(PageRequestDTO requestDTO, Model model) {
//         log.info("list...........");
//         model.addAttribute("result", gbService.getList(requestDTO));
//     }

//     @GetMapping({ "/register" })
//     public void register() {
//         log.info("someone regeisted");
//     }

//     @PostMapping( "/register" ) //post 작업을 위해 redirectAttributes를 사용하여 1회만 요청을 사용하게한다
//     public String registerPost(GuestbookDTO dto, RedirectAttributes ra) {
//         log.info("someone accessed to post regi");
//         Long gno = gbService.register(dto);
//         ra.addFlashAttribute("msg", gno);

//         return "redirect:/guestbook/list"; //genList할 필요없이 29번줄로 보내게끔 redirect를 쓴다 , redirect를 안 쓰면 진짜로 그냥 /list의 내용이아닌, resource의 list.html파일로 직접 넘어가게된다
//     }

//     @GetMapping({ "/read", "/modify" })
//     // pageRequest 커맨드객체, 이로 받은 것은 다음 페이지에서도 같이 넘어가짐
//     public void read(Long gno, Model model, @ModelAttribute("requestDTO") PageRequestDTO requestDTO){
//         log.info("someone read " + gno);
//         GuestbookDTO dto = gbService.read(gno);
//         model.addAttribute("dto", dto);
//     }


//     @PostMapping("/remove")
//     public String remove(Long gno, RedirectAttributes ra){
//         log.info(gno+"removed");
//         gbService.remove(gno);
//         ra.addFlashAttribute("msg", gno);
//         return "redirect:/guestbook/list";

//     }


//     @PostMapping("/modify")
//     public String modifyPost(GuestbookDTO dto, PageRequestDTO requestDTO, RedirectAttributes ra){
//         log.info(dto+"modifyPost");
//         gbService.modify(dto);
//         ra.addFlashAttribute("msg", dto.getGno()+"");
//         ra.addAttribute("gno", dto.getGno());
//         ra.addAttribute("page", requestDTO.getPage());
//         return "redirect:/guestbook/read";
//     }

    


// }
