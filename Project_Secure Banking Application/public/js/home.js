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

  let currentBalance = 0.0;
  function checkBalance() {
    $("#balanceInfo").html(`Current balance: €${currentBalance.toFixed(2)}`);
  }
  function updateBalance(_accountNo, amount, isDeposit) {
    currentBalance = isDeposit
      ? currentBalance + amount
      : currentBalance - amount;
    checkBalance();
  }

  // doesn't work
  // function updateBalance(accountNo, amount, isDeposit) {
  //   const endpoint = isDeposit ? "/deposit" : "/withdraw";

  //   $.post(endpoint, { accountNo, amount }, function (data) {
  //     currentBalance = data.newBalance;
  //     checkBalance();
  //   }).fail(function (xhr) {
  //     const errorMsg =
  //       xhr.status === 400 ? "Insufficient funds." : "Transaction failed.";
  //     alert(errorMsg);
  //   });
  // }
});
