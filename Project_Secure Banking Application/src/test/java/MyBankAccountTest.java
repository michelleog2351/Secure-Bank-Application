import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class MyBankAccountTest {

    private BankAccount account;

    @BeforeEach
    void setUp() {
        account = new BankAccount(100.00);
    }

    @Test
    void testInitialBalance() {
        assertEquals(100.00, account.getBalance());
    }

    @Test
    void testDeposit() {
        account.deposit(50.00);
        assertEquals(150.00, account.getBalance());
    }

    @Test
    void testWithdraw() {
        account.withdraw(30.00);
        assertEquals(70.00, account.getBalance());
    }

    @Test
    void testWithdrawMoreThanBalance() {
        account.withdraw(150.00);
        assertEquals(100.00, account.getBalance(), "Should not allow overdraft");
    }
}
