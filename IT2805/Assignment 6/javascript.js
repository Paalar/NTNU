function taxation() {
    var inc = document.getElementById("income").value; //gets the value from the id income.
    var wealth = document.getElementById("wealth").value; // get the value from the id wealth.
    var tax = (0.33 * inc) + (wealth * 0.20); // calculates the tax between the wealth and income
    document.getElementById("tax").value = tax; // gives the id tax the value of the calculation above

}
