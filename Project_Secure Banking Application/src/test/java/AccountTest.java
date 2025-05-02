public import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class AccountTest {

    @Test
    void testDeposit() {
        Account account = new Account("John", 100.0);
        account.deposit(50.0);
        assertEquals(150.0, account.getBalance());
    }
}
 {
    
}
