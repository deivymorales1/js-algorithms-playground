/*
Crea una funcion que convierta cualquier frase a una SEO slug

Una seo slug es un fragmento de URL optimizado para posicionamiento web:
cursos-de-victor-robles-web

Ejemplos:
transformarURL('Cursos de Victor Robles WEB');

Devuelve: 
cursos-de-victor-robles-web

*/

function transformarURL(url){


  return withBlank = url.replace(/\s/g, '-').toLowerCase();

}


console.log(transformarURL('Cursos de Victor Robles WEB'));
