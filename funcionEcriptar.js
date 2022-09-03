function encriptar(){
    var texto = document.querySelector("#ingresaTexto").value;
    var textoEncriptado = texto.replace(/a/gi, "ai").replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".textoSalida").value = textoEncriptado;
    document.querySelector("#ingresaTexto").value;
}
    var encriptarBtn = document.querySelector("#btnEncriptar"); 
    encriptarBtn.onclick = encriptar;

    function desencriptar(){
        var texto = document.querySelector("#ingresaTexto").value; var textoDesencriptado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.querySelector(".textoSalida").value = textoDesencriptado;
        document.querySelector("#ingresaTexto").value;
    }

    var desencriptarBtn = document.querySelector("#btnDesencriptar"); desencriptarBtn.onclick = desencriptar;