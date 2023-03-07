document.getElementById("btn-deposit").addEventListener("click", function () {
  let chenk = document.getElementById('deposit-field')
  if (chenk.value) {
    const newDepositAmount = getInputFieldValueById("deposit-field");
    const previousDepositTotal = getTextElementValueById("deposit-total");

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById("deposit-total", newDepositTotal);

    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    console.log(newBalanceTotal);
    setTextElementValueById("balance-total", newBalanceTotal);

  } else {
    alert('please inter a number')
  }
});

