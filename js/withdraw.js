document.getElementById("btn-withdraw").addEventListener("click", function () {
  let chenk = document.getElementById('withdraw-field')
  if (chenk.value) {
    const newWithdrawAmount = getInputFieldValueById("withdraw-field");
    const previousWithdrawTotal = getTextElementValueById("withdraw-total");
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
  }
  else {
    alert('please input a number')
  }


});
