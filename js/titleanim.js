    "use strict"
    let pagetitle = document.getElementsByTagName("title")[0]
    let nombres = ["e","e-","e-S","e-Sh","e-Sho","e-Shop","e-Shop","e-Shop","e-Shop","e-Shop","e-Sho","e-Sh","e-S","e-","e","."]
    let nombre = "e-Shop"
    let contador = 0
    let periodo = 166
    function cambiaTexto(){
        let texto = nombres[(contador % nombres.length)]
        pagetitle.innerText = texto
        contador++
        // if ((contador % nombres.length) === 0){
        // contador = 0
        // }
    }
    let intervalito = setInterval(cambiaTexto,periodo);