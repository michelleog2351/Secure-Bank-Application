import java.util.HashMap;
import java.util.Scanner;

public class SimpleMFA {
    static HashMap<String, String> users = new HashMap<>();
    static String correctOTP = "123456"; // Simulated OTP

    public static void main(String[] args) {
        users.put("admin", "password123");
        users.put("user1", "securepass");

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter username: ");
        String username = scanner.nextLine();

        System.out.print("Enter password: ");
        String password = scanner.nextLine();

        if (users.containsKey(username) && users.get(username).equals(password)) {
            System.out.println("OTP has been sent to your registered phone (simulated): 123456");

            System.out.print("Enter the OTP: ");
            String enteredOTP = scanner.nextLine();

            if (validateOTP(enteredOTP)) {
                System.out.println("Login successful!");
            } else {
                System.out.println("Invalid OTP. Access denied.");
            }
        } else {
            System.out.println("Invalid username or password.");
        }

        scanner.close();
    }

    public static boolean validateOTP(String enteredOTP) {
        return correctOTP.equals(enteredOTP);
    }
}
