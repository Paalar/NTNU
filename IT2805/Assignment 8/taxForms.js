var taxForms = [
  {
    realName: "Bruce Wayne",
    income: 750000,
    wealth: 300000
  },
  {
    realName: "John Blake",
    income: 440000,
    wealth: 832000
  },
  {
    realName: "Selina Kyle",
    income: 640000,
    wealth: 432000
  }
];

function over500k(taxForms) {
    if (taxForms["income"] >= 500000){
      return taxForms;
    }
}
console.log(taxForms.filter(over500k));
