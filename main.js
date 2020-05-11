var btn = document.querySelector('input#botao')
var input = document.querySelector('input#vr')
var div = document.querySelector('div#res')
let radio =  document.getElementsByName('tipo')

btn.addEventListener('click',calcular)
input.addEventListener('click',limpar)


/*o codigo abaixo adiciona o evento keypress e chama a funcao e
essa funcao verifica se a tecla pressionada é enter e se 
for enter chama a funcao calcular*/
document.addEventListener('keypress',function(e){//
  if (e.which==13) {//
    calcular();
  }else{
    false
  }
})
//funcao para calcular a base icms e o valor icms 
function calcular(){
 
 var valor = Number((input.value).replace(',','.'))

 var base=valor*(64.71/100)
 var icms= base*(17/100)
 
 div.innerHTML=`Base Icms: <strong>${base.toFixed(3).replace('.',',')}</strong>
    Valor Icms: <strong>${icms.toFixed(3).replace('.',',')}</strong>`
    
  if (radio[0].checked) {
      div.innerHTML+='<p>CFOP <strong>6202</strong></p>'
  } else if(radio[1].checked){
      div.innerHTML+='<p>CFOP <strong>5949</strong></p>'
  }
}
//a função abaixo limpa o valor do input quando é clicado
function limpar(){
    if (input!='') {
         this.value=''
         div.innerHTML=`Base Icms: <strong>0</strong>  Valor Icms:<strong> 0</strong>` 
  
    }
}