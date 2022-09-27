"js" `/pages/${href}/script.js`


// Carrega o documento HTML da página na memória:
$.get(page.html, function (content) {

  // Carrega o CSS da página, no <head> da página "index.html":
  $('#pageCSS').attr('href', page.css);

  // Exibe HTML na página no elemento <main>:
  $('#content').html(content);

  //cCarrega e executa o JavaScript da página:
  $.getScript(page.js);
});


// Função que troca o título da página:
function setTitle(title = '') {

// Se não definiu um title...
if (title == '') {

  // Título padrão da página será nomeDoSite + sloganDoSite:
  $('title').html("Mulheres.Tech .:. Programadoras do Futuro");
} else {

  // Título da página será nomeDoSite + nomeDaPágina:
  $('title').html("Mulheres.Tech .:. " + title);

}

}

// jQuery → Executa aplicativo "runApp" quando o documento estiver pronto:
$(document).ready(runApp);