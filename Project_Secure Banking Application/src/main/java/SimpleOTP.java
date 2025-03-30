import java.util.HashMap;
import java.util.Scanner;

public class SimpleOTP {
    public static void main(String[] args)
    {
        HashMap<String, String> users = new HashMap<>();
        userOTP.put("test.admin1", "password123"); 

        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter the OTP: ");
        String userOTP = scanner.nextLine();

        if (validateOTP(userOTP))
        {
            System.out.println("login successful");
        }

        else{
            System.out.println("Invalid OTP");
        }
        scanner.close();
    }
    
    public static boolean validateOTP(String userOTP){
        return userOTP.equals("123456"); // Replace with real OTP logic
    }
    
}
