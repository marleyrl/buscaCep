function verificarCep(){

    var cep = document.getElementById('checkcep').value
    
    if ( cep != ""){
      
        var url = "https://brasilapi.com.br/api/cep/v1/"+cep
        
        var req = new XMLHttpRequest();
        req.open("GET",url)
        req.send()
        
        req.onload = function(){
            if(req.status === 200){

                var estado = JSON.parse(req.response)
                document.getElementById("txtestado").value = estado.state
                
                var cidade = JSON.parse(req.response)
                document.getElementById("txtcidade").value = cidade.city
                
                var bairro = JSON.parse(req.response)
                document.getElementById("txtbairro").value = bairro.neighborhood

                var rua = JSON.parse(req.response)
                document.getElementById("txtrua").value = rua.street
            }
            else if(req.status===404){
                alert("CEP INVALIDO")
            }
            else{
                alert("Erro ao Buscar o CEP")
            }
        }
    }

}
window.onload = function(){
    var txtverificar = document.getElementById("txtverificar")
    txtverificar.addEventListener("click",verificarCep)

}