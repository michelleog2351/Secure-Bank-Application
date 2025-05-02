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
  
  // $(document).on("click", "#confirmWithdraw", function () {
  //   const withdrawAmount = parseFloat($("#withdrawAmount").val());
  //   if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
  //     showTransactionAlert("Please enter a valid withdrawal amount.");
  //     return;
  //   }

  //   // Fetch current balance before proceeding
  //   $.ajax({
  //     url: "/balance",
  //     type: "POST",
  //     contentType: "application/json",
  //     data: JSON.stringify({ accountNo }),
  //     success: function (res) {
  //       const balance = res.balance;

  //       if (withdrawAmount > balance) {
  //         showTransactionAlert(
  //           "Insufficient funds. Please enter a lower amount."
  //         );
  //       } else {
  //         updateBalance(accountNo, withdrawAmount, false); // Proceed with withdrawal
  //         hideTransactionAlert();
  //       }
  //     },
  //     error: function () {
  //       showTransactionAlert("Failed to check balance. Try again.");
  //     },
  //   });
  // });

  appendActionButtons();

  // function showTransactionAlert(message) {
  //   if (!$("#transactionAlert").length) {
  //     $("#transactionForm").prepend(
  //       `<div id="transactionAlert" class="alert alert-danger mt-2">${message}</div>`
  //     );
  //   } else {
  //     $("#transactionAlert").text(message);
  //   }
  // }
  
  // function hideTransactionAlert() {
  //   $("#transactionAlert").remove();
  // }
  

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
});
