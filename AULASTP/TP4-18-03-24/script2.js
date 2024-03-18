
    function mostraValores() {
        var x = document.getElementById("frm1");
        var texto = "";
        for (var i = 0; i < x.length; i++) {
            texto += x.elements[i].name + ": " + x.elements[i].value + "<br>";
        }
        document.getElementById("valores").innerHTML = texto;
    }