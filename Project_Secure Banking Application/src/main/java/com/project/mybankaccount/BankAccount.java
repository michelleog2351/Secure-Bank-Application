package src.main.java.com.project.mybankaccount;
public class BankAccount
{
	//instance variables
	private double balance;
	private int accountNumber;
   
   //1st constructor - sets balance to zero
   public BankAccount(int accNo)
   {
      accountNumber = accNo;
      balance = 0.00;
   }
   
   //2nd constructor - gets account number
   public int getAccountNumber()
   {
      return accountNumber;
   }
   
   //1st constructor - sets balance to zero
   public BankAccount()
   {
      balance = 0.00;
   }
   
   //2nd constructor - sets constructor to specified amount
   public BankAccount(int accNo, double balanceIn)
   {  
      accountNumber = accNo;
      balance = balanceIn;
   }
   
	//methods

	//return the balance
	public double getBalance()
	{
		return balance;
	}
	
	//reduce the balance by amount
	public void withdraw(double amount)
	{
		if(amount <= balance) //if enought money
			balance = balance - amount; //balance -=amount
	}
   
	//increase the balance by amount
	public void deposit(double amount)
	{
		balance = balance + amount;	
	}
	
	

}//end class