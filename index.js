import{a as u,S as d,i as a}from"./assets/vendor-B4VkUtbg.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f="57871135-89d344ac017899a51ac096d94",m="https://pixabay.com/api/";function y(i){return u.get(m,{params:{key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const c=document.querySelector(".gallery"),p=document.querySelector(".loader"),g=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(i){const r=i.map(t=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t.largeImageURL}">
            <img
              class="gallery-image"
              src="${t.webformatURL}"
              alt="${t.tags}"
            />

            <div class="info">
              <div class="info-item">
                <span class="info-title">Likes</span>
                <span>${t.likes}</span>
              </div>

              <div class="info-item">
                <span class="info-title">Views</span>
                <span>${t.views}</span>
              </div>

              <div class="info-item">
                <span class="info-title">Comments</span>
                <span>${t.comments}</span>
              </div>

              <div class="info-item">
                <span class="info-title">Downloads</span>
                <span>${t.downloads}</span>
              </div>
            </div>
          </a>
        </li>
      `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function v(){c.innerHTML=""}function L(){p.classList.add("is-visible")}function b(){p.classList.remove("is-visible")}const l=document.querySelector(".form");l.addEventListener("submit",i=>{i.preventDefault();const t=l.elements["search-text"].value.trim();if(t===""){a.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}v(),L(),y(t).then(o=>{if(o.hits.length===0){a.error({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(o.hits)}).catch(()=>{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{b(),l.reset()})});
//# sourceMappingURL=index.js.map
