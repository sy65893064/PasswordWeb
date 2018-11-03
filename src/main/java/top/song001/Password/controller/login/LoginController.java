package top.song001.Password.controller.login;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/login")
public class LoginController {

    @RequestMapping("/tologin")
    public String toLogin() {
        return "login";
    }

}
