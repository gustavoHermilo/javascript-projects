document.getElementById("calculateBtn").onclick=function() {
    const bill= Number(document.getElementById("bill").value);
    const tip= Number(document.getElementById("tip").value);

    if (bill<= 0 || tip<0){
        document.getElementById("result").textContent=
            "Please enter valid numbers.";
            return;
    }
    const tipAmount = bill*(tip/100);
    const total= bill + tipAmount;

    document.getElementById("result").textContent=
        `Tip:$${tipAmount.toFixed(2)} | Total:$${total.toFixed(2)}`;
};
