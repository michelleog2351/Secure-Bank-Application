import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

public class PasswordHashingWithSalt {

    public static void main(String[] args) {
        String password = "mySecurePassword";

        // When registering
        String salt = generateSalt();
        String hashedPassword = hashPassword(password, salt);

        System.out.println("Password: " + password);
        System.out.println("Salt: " + salt);
        System.out.println("Hashed Password: " + hashedPassword);

        // When logging in
        String loginAttemptPassword = "mySecurePassword"; // User input
        String hashedLoginAttempt = hashPassword(loginAttemptPassword, salt);

        if (hashedPassword.equals(hashedLoginAttempt)) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Login failed!");
        }
    }

    public static String hashPassword(String password, String salt) {
        String saltedPassword = password + salt;
        String hashedPassword = null;
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(saltedPassword.getBytes());
            byte[] hashedBytes = md.digest();
            hashedPassword = Base64.getEncoder().encodeToString(hashedBytes);
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return hashedPassword;
    }

    public static String generateSalt() {
        SecureRandom random = new SecureRandom();
        byte[] saltBytes = new byte[16];
        random.nextBytes(saltBytes);
        return Base64.getEncoder().encodeToString(saltBytes);
    }
}
