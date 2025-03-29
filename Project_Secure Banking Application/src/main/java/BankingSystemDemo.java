    public class BankingSystemDemo {

    //time and state demo!!!!
    private static double accountBalance = 1000.0; // Shared bank account balance

    public static void main(String[] args) {
        Thread depositThread = new Thread(new DepositTask(), "Depositor");
        Thread withdrawalThread = new Thread(new WithdrawalTask(), "Withdrawer");

        depositThread.start();
        withdrawalThread.start();

        try {
            depositThread.join();
            withdrawalThread.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Expected balance should be 1000.0 if deposits and withdrawals are equal.
        System.out.println("Final account balance: " + accountBalance);
    }

    static class DepositTask implements Runnable {
        @Override
        public void run() {
            for (int i = 0; i < 100; i++) {
                double amount = 10.0; // Deposit amount
                
                // synchronized (BankingSystemDemo.class) {                 //FIX
                //     accountBalance += amount; // For deposit
                // }
                
                accountBalance += amount;
                System.out.println(Thread.currentThread().getName() + " deposited: " + amount);
                try {
                    Thread.sleep(10); // Simulate processing delay
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    static class WithdrawalTask implements Runnable {
        @Override
        public void run() {
            for (int i = 0; i < 100; i++) {
                double amount = 10.0; // Withdrawal amount
                // Simulate a potential overdraft without checking balance properly
                
                // synchronized (BankingSystemDemo.class) {                    //FIX
                //      accountBalance -= amount; // For withdrawal
                // }
                
                accountBalance -= amount;
                System.out.println(Thread.currentThread().getName() + " withdrew: " + amount);
                try {
                    Thread.sleep(10); // Simulate processing delay
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
}