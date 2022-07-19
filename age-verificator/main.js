function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.querySelector(`input#txtano`)
  var res = document.querySelector(`div#res`)

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    alert('[ERROR] Verifique os dados e tente novamente');
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 10) {
        // CRIANCA
        img.setAttribute('src', './src/homem-crianca.svg')
      }
      else if (idade < 21) {
        // jOVEM
        img.setAttribute('src', './src/homem-jovem.svg')
      }
      else if (idade < 50) {
        // Adulto
        img.setAttribute('src', './src/homem-adulto.svg')
      }
     else {
      // Idoso
      img.setAttribute('src', './src/homem-idoso.svg')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'

      if (idade >= 0 && idade < 10) {
        // CRIANCA
        img.setAttribute('src', './src/mulher-crianca.svg')

      }
      else if (idade < 21) {
        // jOVEM
        img.setAttribute('src','./src/mulher-jovem.svg')

      }
      else if (idade < 50) {
        // Adulto
        img.setAttribute('src','./src/mulher-adulta.svg')
      }
     else {
      // Idoso
      img.setAttribute('src','./src/mulher-idosa.svg')
      }
    } 
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }
}