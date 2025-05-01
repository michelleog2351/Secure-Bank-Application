$(document).ready(function () {
  const accountNo = sessionStorage.getItem("accountNo");
  // if (!accountNo) {
  //   alert("No account number found. Redirecting to login.");
  //   window.location.href = "login.html";
  // }
  
  function appendActionButtons() {
    $("#accountActions").html("");
    $("#accountActions").append(`
            <button id="checkBalance" class="btn btn-primary">Check Balance</button>
            <button id="depositButton" class="btn btn-primary">Deposit</button>
            <button id="withdrawButton" class="btn btn-primary">Withdraw</button>
            <button id="logoutButton" class="btn btn-primary">Logout</button>
        `);
  }

  $(document).on("click", "#checkBalance", function () {
    $("#transactionForm").empty();
    checkBalance(accountNo);
  });

  $(document).on("click", "#depositButton", function () {
    $("#transactionForm").empty();

    $("#transactionForm").html(`
            <input type="number" class="form-control-sm" id="depositAmount" placeholder="Enter deposit amount" min="0" />
            <button id="confirmDeposit" class="btn btn-secondary">Confirm Deposit</button>
        `);
  });

  $(document).on("click", "#withdrawButton", function () {
    $("#transactionForm").empty();

    $("#transactionForm").html(`
            <input type="number" class="form-control-sm" id="withdrawAmount" placeholder="Enter withdrawal amount" min="0" />
            <button id="confirmWithdraw" class="btn btn-success">Confirm Withdrawal</button>
        `);
  });

  $(document).on("click", "#logoutButton", function () {
    alert("Logging out...");
    window.location.href = "login.html";
  });

  $(document).on("click", "#confirmDeposit", function () {
    const depositAmount = parseFloat($("#depositAmount").val());
    if (!isNaN(depositAmount) && depositAmount > 0) {
      updateBalance(accountNo, depositAmount, true);
    } else {
      alert("Please enter a valid amount.");
    }
  });

  $(document).on("click", "#confirmWithdraw", function () {
    const withdrawAmount = parseFloat($("#withdrawAmount").val());
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
      updateBalance(accountNo, withdrawAmount, false);
    } else {
      alert("Please enter a valid amount.");
    }
  });

  appendActionButtons();

  let currentBalance = 1000.00;
  function checkBalance() {
    $("#balanceInfo").html(`Current balance: €${currentBalance.toFixed(2)}`);
  }
  function updateBalance(accountNo, amount, isDeposit) {
    currentBalance = isDeposit ? currentBalance + amount : currentBalance - amount;
    checkBalance();
  }
  
});
