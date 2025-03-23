import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.Base64;

public class PasswordHashingWithSalt {

    public static void main(String[] args) {
        String password = "mySecurePassword";
        String hashedPassword = hashPassword(password);
        System.out.println("Password: " + password);
        System.out.println("Hashed Password: " + hashedPassword);
    }

    public static String hashPassword(String password) {
        String salt = generateSalt();
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