import{S as h,i as y}from"./assets/vendor-46aac873.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector(".form"),i=document.querySelector(".gallery"),c=document.querySelector(".loader"),g=new h(".gallery a",{captionsData:"alt",captionDelay:250});l.addEventListener("submit",L);function L(n){n.preventDefault(),i.innerHTML="";const a=l.search.value.trim(),s=new URL("https://pixabay.com/api/");s.searchParams.append("key","41672055-9590fca4951a86a4742f5f771"),s.searchParams.append("q",a),s.searchParams.append("image_type","photo"),s.searchParams.append("orientation","horizontal"),s.searchParams.append("safesearch",!0),c.classList.remove("hide"),fetch(s).then(t=>{if(!t.ok)throw new Error("Your request is not ok!");return c.classList.add("hide"),t.json()}).then(t=>{t.hits.length===0&&y.error({title:"Sorry, there are no images matching your search query.",message:"Please, try again!",color:"#EF4040",messageColor:"#FFF",titleColor:"#FFF",theme:"dark",progressBarColor:"#B51B1B"}),i.innerHTML="",i.innerHTML=t.hits.reduce((e,{webformatURL:r,largeImageURL:o,tags:p,likes:u,views:d,comments:f,downloads:m})=>e+`<li class='gallery-item'>
                        <a class='gallery-link' href='${o}'>
                            <img
                                class='gallery-image'
                                src='${r}'
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
                        `,""),g.refresh()}).catch(t=>console.log(t)).finally(()=>l.reset())}
//# sourceMappingURL=commonHelpers.js.map
