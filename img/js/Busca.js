/*https://www.devmedia.com.br/filtrando-listas-html-com-jquery/26398*/
$(function(){
  $("#campoBusca").keyup(function(){
    var texto = $(this).val();
    $("#conteudos section").css("display", "block");
    $("#conteudos section").each(function(){
      if($(this).text().toUpperCase().indexOf(texto.toUpperCase()) < 0)
      $(this).css("display", "none");
    });
  });
});
