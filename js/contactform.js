        let motivo = document.getElementById("motivo")
        motivo.addEventListener("change",(evento)=>{let valor = evento.target.value
            console.log(valor)
            if(valor !== "otros"){
                document.getElementById("otrosmotivos").setAttribute("class","escondido")
            }
            if(valor === "otros"){
                document.getElementById("otrosmotivos").setAttribute("class","revelado")
            }
        })