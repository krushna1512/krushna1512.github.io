// load sections dynamically
function loadPage(page){
  fetch(`sections/${page}.html`)
  .then(res => res.text())
  .then(html => {
    document.getElementById("content").innerHTML = html;

    document.querySelectorAll(".nav-right a").forEach(a=>a.classList.remove("active"));
    event.target.classList.add("active");
  });
}

// DARK MODE
const root=document.documentElement;
const icon=document.querySelector('.theme-toggle i');
const saved=localStorage.getItem('theme')||'light';
root.setAttribute('data-theme',saved);

function setIcon(){
 icon.className=root.getAttribute('data-theme')==='dark'
 ?'fa-solid fa-sun'
 :'fa-solid fa-moon';
}
setIcon();

document.querySelector('.theme-toggle').onclick=()=>{
 const t=root.getAttribute('data-theme')==='dark'?'light':'dark';
 root.setAttribute('data-theme',t);
 localStorage.setItem('theme',t);
 setIcon();
}
