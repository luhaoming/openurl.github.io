function dd(e){return console.log(e),!0}function tt(e){document.title=e}function getCookie(e){for(var t=e+"=",o=decodeURIComponent(document.cookie).split(";"),n=0;n<o.length;n++){for(var i=o[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return""}async function sv(e){var t={voucher_code:e},o=getCookie("csrftoken");let n=await fetch("/api/v2/voucher_wallet/save_voucher",{credentials:"include",headers:{accept:"application/json","accept-language":"zh-TW,zh;q=0.9,en-US;q=0.8,en;q=0.7","content-type":"application/json","sec-fetch-dest":"empty","sec-fetch-mode":"cors","sec-fetch-site":"same-origin","x-api-source":"pc","x-csrftoken":o,"x-requested-with":"XMLHttpRequest"},referrer:window.location.href,referrerPolicy:"no-referrer-when-downgrade",method:"POST",mode:"cors",body:JSON.stringify(t)});n.ok&&(data=await n.json(),null===data.error&&(svlist.push(e),dd("code found: ".concat(e)),tt("code found, open F12 mode to see result")))}async function doit(){void 0!==dict[idx]&&(codet=dict[idx],await sv(codet),idx++,setTimeout(doit,100))}var ask=prompt("dict split by comma");dict=ask.split(" ");var idx=0,org=window.location.origin;null!=ask?doit():dd("exit");
