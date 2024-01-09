import{S as h,i as y}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const i=document.querySelector(".form"),n=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new h(".gallery a",{captionsData:"alt",captionDelay:250});i.addEventListener("submit",L);function L(l){l.preventDefault(),n.innerHTML="";const a=i.search.value.trim(),s=new URL("https://pixabay.com/api/");s.searchParams.append("key","41672055-9590fca4951a86a4742f5f771"),s.searchParams.append("q",a),s.searchParams.append("image_type","photo"),s.searchParams.append("orientation","horizontal"),s.searchParams.append("safesearch",!0),c.classList.remove("hide"),fetch(s).then(r=>{if(!r.ok)throw new Error("Your request is not ok!");return r.json()}).then(r=>{r.hits.length===0&&y.error({title:"Sorry, there are no images matching your search query.",message:"Please, try again!",color:"#EF4040",messageColor:"#FFF",titleColor:"#FFF",theme:"dark",progressBarColor:"#B51B1B"}),n.innerHTML=r.hits.reduce((e,{webformatURL:t,largeImageURL:o,tags:p,likes:u,views:d,comments:f,downloads:m})=>e+`<li class='gallery-item'>
                        <a class='gallery-link' href='${o}'>
                            <img
                                class='gallery-image'
                                src='${t}'
                                alt='${p}'
                                width='360'
                                height='200'
                                />
                        </a>
                        <ul class='gallery-statistic'>
                            <li><p class='statistic'>🩵Likes: <span>${u}</span></p></li>
                            <li><p class='statistic'>👁Views: <span>${d}</span></p></li>
                            <li><p class='statistic'>💬Comments: <span>${f}</span></p></li>
                            <li><p class='statistic'>⌛Downloads: <span>${m}</span></p></li>
                        </ul>    
                        `,""),g.refresh()}).catch(r=>console.log(r)).finally(()=>{c.classList.add("hide"),i.reset()})}
//# sourceMappingURL=commonHelpers.js.map
