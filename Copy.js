function Copiar() {
    var copiar = document.getElementById('msg');
    copiar.select();
    document.execCommand('copy');

    alert("Copiado");    
}

var copiarBtn = document.querySelector("#btnCopiar"); copiarBtn.onclick = Copiar;

