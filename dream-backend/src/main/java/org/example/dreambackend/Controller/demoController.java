package org.example.dreambackend.Controller;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class demoController {
    @Operation(summary = "Lấy thông tin người dùng", description = "API này trả về thông tin người dùng theo ID")
    @GetMapping("/api/user")
    public String getUser(
            @Parameter(description = "ID của người dùng", required = true)
            @RequestParam String userId) {
        return "User ID: " + userId;
    }
}
