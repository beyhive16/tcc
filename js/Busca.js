/*https://www.devmedia.com.br/filtrando-listas-html-com-jquery/26398*/
$(function(){
  $("#campoBusca").keyup(function(){
    var texto = $(this).val();
    $("#conteudos section h3").css("display", "block");
    $("#conteudos section h3").each(function(){
      if($(this).text().toUpperCase().indexOf(texto.toUpperCase()) < 0){
        $(this).css("display", "none");
      }
    });
  });
});

/*
const titulos = document.querySelector('#conteudos section');
const campoBusca = document.forms['busca'].querySelector('input');
campoBusca.addEventListener('keyup',function(e){
  const termo = e.target.value.toLowerCase();
  const resultados = titulos.getElementsByTagName('h3');
  Array.from(resultados).forEach(function(resultado){
    const titulo = resultado.firstElementChild.textContent;
    if(titulo.toLowerCase().indexOf(termo) != -1){
        resultado.style.display = 'block';
    }else {
      resultado.style.display = 'none';
    }
  })
})
*/
