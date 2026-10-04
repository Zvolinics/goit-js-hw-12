import{a as L,S as w,i as a}from"./assets/vendor-C1DvvBV_.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const b="57871135-89d344ac017899a51ac096d94",S="https://pixabay.com/api/";async function f(o,e){return(await L.get(S,{params:{key:b,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}})).data}const p=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function g(o){const e=o.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img
              class="gallery-image"
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
          </a>

          <div class="info">
            <div class="info-item">
              <span class="info-title">Likes</span>
              <span>${r.likes}</span>
            </div>

            <div class="info-item">
              <span class="info-title">Views</span>
              <span>${r.views}</span>
            </div>

            <div class="info-item">
              <span class="info-title">Comments</span>
              <span>${r.comments}</span>
            </div>

            <div class="info-item">
              <span class="info-title">Downloads</span>
              <span>${r.downloads}</span>
            </div>
          </div>
        </li>
      `).join("");p.insertAdjacentHTML("beforeend",e),q.refresh()}function R(){p.innerHTML=""}function y(){h.classList.add("is-visible")}function v(){h.classList.remove("is-visible")}function d(){m.classList.remove("is-hidden")}function l(){m.classList.add("is-hidden")}const P=document.querySelector(".form"),B=document.querySelector(".load-more");let i=1,n="";P.addEventListener("submit",E);B.addEventListener("click",M);async function E(o){if(o.preventDefault(),n=o.currentTarget.elements["search-text"].value.trim(),!n){a.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}i=1,l(),R(),y();try{const e=await f(n,i);if(e.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(e.hits),e.hits.length<15||i*15>=e.totalHits?(l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):d()}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{v()}}async function M(){i+=1,l(),y();try{const o=await f(n,i);g(o.hits);const e=document.querySelector(".gallery-item");if(e){const{height:r}=e.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}o.hits.length<15||i*15>=o.totalHits?(l(),a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):d()}catch{i-=1,a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),d()}finally{v()}}
//# sourceMappingURL=index.js.map
