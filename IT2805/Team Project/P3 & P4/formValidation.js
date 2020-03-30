function validateForm() {
    var x = document.getElementById("email").value;

    {
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (!x.match(mailformat)) {
    alert("Du har skrevet inn en ugyldig e-postadresse");
    document.getElementById("email").style.border ="1px solid #FF0000";
    return false;
  } else {
    document.getElementById("email").style.border ="1px solid #47d147";
  }
}

    var y = document.getElementById("name").value;
    if (y == "") {
        alert("Navnet må være fyllet ut");
        document.getElementById("name").style.border ="1px solid #FF0000";
        return false;
    } else {
      document.getElementById("name").style.border ="1px solid #47d147";
    }
    var z = document.getElementById("puntext").value;
    if (z == "") {
        alert("Det må være tekst for pun beskrivelsen")
        document.getElementById("puntext").style.border ="1px solid #FF0000";
        return false;
    } else {
      document.getElementById("puntext").style.border ="1px solid #47d147";
    }
}
