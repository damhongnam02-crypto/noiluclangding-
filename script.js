document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const el=document.querySelector(a.getAttribute("href"));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}}));
document.addEventListener("DOMContentLoaded",()=>{
  const nav=document.querySelector(".nav");
  const items=document.querySelectorAll(".section,.statement,.quote,.work-grid article,.pillars article,.hero-card");
  items.forEach(el=>el.classList.add("reveal"));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
  items.forEach(el=>observer.observe(el));
  window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",window.scrollY>20),{passive:true});
});
