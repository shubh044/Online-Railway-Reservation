package com.saur.userAuthentication;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Set;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.sau.userAuthentication.controllers.AuthController;
import com.sau.userAuthentication.models.ERole;
import com.sau.userAuthentication.models.Role;
import com.sau.userAuthentication.models.User;
import com.sau.userAuthentication.payload.request.LoginRequest;
import com.sau.userAuthentication.repository.RoleRepository;
import com.sau.userAuthentication.repository.UserRepository;

@SpringBootTest

class UserAuthenticationApplicationTests {
	
	@Autowired
    private AuthController authController;

	@Test
	void contextLoads() {
	}

	@Test
    void testAuthenticateUser() {
        // Create a sample LoginRequest object for testing
        LoginRequest loginRequest = new LoginRequest("123456","123456");

        // Call the method you want to test
        ResponseEntity<?> responseEntity = authController.authenticateUser(loginRequest);

        // Assertions
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode()); // Verify the HTTP status
        assertNotNull(responseEntity.getBody()); // Verify that the response body is not null
    }
}
