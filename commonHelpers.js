import{S as c}from"./assets/vendor-10cb7c31.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function a(r){const i="https://pixabay.com/api/",o="44033528-44943d254def6182670dcc208",n=new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${i}?${n}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}function u({webformatURL:r,largeImageURL:i,tags:o,likes:n,views:e,comments:t,downloads:s}){return`<li class="gallery">
      <a href=${i}>
        <img src=${r} alt="${o}" />
        <div class="info">
        <div class="info-rating">
        <h3>Likes</h3>
        <p>${n}</p>
        </div>
        <div class="info-rating">
        <h3>Views</h3>
        <p>${e}</p>
        </div>
        <div class="info-rating">
        <h3>Comments</h3>
        <p>${t}</p>
        </div>
        <div class="info-rating">
        <h3>Downloads</h3>
        <p>${s}</p>
        </div>
        </div>
        </a>
    </li>`}function d(r){return r.map(u).join("")}const f=document.querySelector(".js-form"),h=document.querySelector(".js-gallery-list"),l=document.querySelector(".loader");console.log(l);f.addEventListener("submit",m);function m(r){r.preventDefault();const i=r.currentTarget.elements.search.value;l.classList.remove("visually-hidden"),a(i).then(o=>{o.hits.length,h.innerHTML=d(o.hits),refresh(),lightbox=new c(".gallery a",{})}).catch(o=>{console.log(o)}).finally(()=>l.classList.add("visually-hidden")),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
