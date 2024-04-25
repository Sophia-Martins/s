var placa
var veiculo

armazenamento = localStorage

localStorage.setItem("ithi-7hg0","carro1")
localStorage.setItem("jghfuh","carro2")
localStorage.setItem("ghjfij","carro3")



function salvar(){

placa=document.getElementById('placasalvar') .value
veiculo=document.getElementById('veiculosalvar') .value
localStorage.setItem(placa,veiculo)
alert('salvo')
}



function buscar() {
    placa = document.getElementById('placa').value
alert(placaVeiculo)
    veiculo = localStorage.getItem(placaVeiculo)
    alert(veiculo)
    document.getElementById("valor").innerHTML = veiculo
}
