$(document).ready(function () {
    const accountNo = "12345";  // Replace with actual logged-in user's account number
    
    // Dynamically append action buttons
    function appendActionButtons() {
        $('#accountActions').html('');  // Clear previous content
        $('#accountActions').append(`
            <button id="checkBalance">Check Balance</button>
            <button id="depositButton">Deposit</button>
            <button id="withdrawButton">Withdraw</button>
            <button id="logoutButton">Logout</button>
        `);
    }

    // Handle the action button clicks
    $(document).on('click', '#checkBalance', function() {
        checkBalance(accountNo);
    });

    $(document).on('click', '#depositButton', function() {
        $('#transactionForm').html(`
            <input type="number" id="depositAmount" placeholder="Enter deposit amount" />
            <button id="confirmDeposit">Confirm Deposit</button>
        `);
    });

    $(document).on('click', '#withdrawButton', function() {
        $('#transactionForm').html(`
            <input type="number" id="withdrawAmount" placeholder="Enter withdrawal amount" />
            <button id="confirmWithdraw">Confirm Withdrawal</button>
        `);
    });

    $(document).on('click', '#logoutButton', function() {
        // Implement logout functionality here
        alert('Logging out...');
        window.location.href = "login.html"; // Redirect to login page or home page
    });

    // Handle deposit confirmation
    $(document).on('click', '#confirmDeposit', function() {
        const depositAmount = parseFloat($('#depositAmount').val());
        if (!isNaN(depositAmount) && depositAmount > 0) {
            updateBalance(accountNo, depositAmount, true);  // true for deposit
        } else {
            alert('Please enter a valid amount.');
        }
    });

    // Handle withdrawal confirmation
    $(document).on('click', '#confirmWithdraw', function() {
        const withdrawAmount = parseFloat($('#withdrawAmount').val());
        if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
            updateBalance(accountNo, withdrawAmount, false);  // false for withdraw
        } else {
            alert('Please enter a valid amount.');
        }
    });

    // Initially append action buttons
    appendActionButtons();

    // Function to check balance (replace with your backend logic)
    function checkBalance(accountNo) {
        // Simulate balance check (You can use an AJAX call to get balance from backend)
        $('#balanceInfo').html("Current balance: $1000.00"); // Example balance
    }

    // Function to update balance (either deposit or withdraw)
    function updateBalance(accountNo, amount, isDeposit) {
        // Simulate balance update (You can use an AJAX call to update balance in the database)
        const action = isDeposit ? "Deposited" : "Withdrew";
        $('#balanceInfo').html(`${action} $${amount}. New balance: $1000.00`); // Example
    }
});
