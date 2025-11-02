  let nextLink="";let nb2="";let gonzu="";let gonzu2="";let ga=$('#chatBox');  
                 const openBtn=document.getElementById("openChatBtn");const chatPopup=document.getElementById("chatPopup");const closeBtn=document.getElementById("closeChatBtn");const chatBox=document.getElementById("chatBox");const inputField=document.getElementById("chatInput");let isSending = false; const button = document.getElementById("sendBtn");
inputField.addEventListener("keydown", function(e) {  if (e.key === "Enter" && !isSending) {    isSending = true;      button.click();
    setTimeout(() => {      isSending = false;    }, 1000);  }});             
 var gg2= function(){  function fetchAllPages(keyword, pageUrl, collected, maxPages){  pageUrl =nextLink;    collected = collected || [];
    maxPages = maxPages || 5;
 $.ajax({      url: pageUrl,      type: 'GET',      dataType: 'html',      success: function(html){        const doc = $('<div>').html(html);
 doc.find('#list .list-item').each(function(){          collected.push({            title: $(this).find(".list-item-titlezz a").text(),            link: $(this).find(".x-top-post78").attr('href'),            text77: $(this).find(".bla-top-a2").text()            });  });
  nextLink = doc.find(".blog-pager-older7g").text(); nb2=nextLink.length;           console.log('取得完了', collected.length, '件');          showResults(collected);
 },      error: function(xhr){     console.log('取得エラー:', xhr.status);  }}); }
  function showResults(data){const count = data.length;
 if(nb2 > 5){ const html =  data.map(p =>
      `<div class="link-all-ct"><a href="${p.link}" target="_blank" class="aftehurr aftehurr55">${p.title}</a><p class="tenbebe">${p.text77}</p></div>`
    ).join(''); ga.append(`<div class="message bot"><span>`+html+`</span></div><div class="message bot"><button id="moreBtn">もっと取得する</button></div>`);}    else{   const html = `${count} 件 ${nextLink}` + data.map(p =>
      `<div class="link-all-ct"><a href="${p.link}" target="_blank" class="aftehurr aftehurr55">${p.title}</a><p class="tenbebe">${p.text77}</p></div>`
    ).join('');   ga.append('<div class="message bot"><span>'+html+'</span></div>');} }
fetchAllPages();  };
                 
 var gg1= function(){const papa=nextLink.length;
  function fetchAllPages(keyword, pageUrl, collected, maxPages){   if(papa > 5){  pageUrl = nextLink;}else{pageUrl = 'https://www.net-frx.com/search?q='+gonzu;}
    collected = collected || [];    maxPages = maxPages || 5;
  $.ajax({      url: pageUrl,      type: 'GET',      dataType: 'html',      success: function(html){        const doc = $('<div>').html(html);
        doc.find('#list .list-item').each(function(){          collected.push({            title: $(this).find(".list-item-titlezz a").text(),
            link: $(this).find(".x-top-post78").attr('href'),            text77: $(this).find(".bla-top-a2").text()            }); });
 nextLink = doc.find(".blog-pager-older7g").text(); nb2=nextLink.length; 
          console.log('取得完了', collected.length, '件');
          showResults(collected);  },      error: function(xhr){   ga.append('<div class="message bot"><span>エラーです🤔<br/>検索ワードを変えて試してみて下さい。</span></div>');      }    });  }
  function showResults(data){const count = data.length;const dao=data.length;if(dao==0){  ga.append('<div class="message bot"><span>0件です🤔<br/>検索ワードを変えて試してみて下さい👏</span></div>'); }else{    const html = data.map(p =>
      `<a href="${p.link}" target="_blank" class="aftehurr aftehurr55">${p.title}</a><p class="tenbebe">${p.text77}</p>`
    ).join('');                if(nb2 > 5){ gg2();}     ga.append('<div class="message bot"><span>'+html+'</span></div>');} }
fetchAllPages(); };


      let nu0="";const nu1="%20";const nu2="%20OR%20";nu0=nu1;
 document.getElementById("sendBtn").addEventListener("click", function() {let jaa="";nextLink="";
  gonzu= document.getElementById("chatInput").value;ga.append('<div class="message user"><span>'+gonzu+'</span></div>');
    const mi=gonzu.toLowerCase();
    if (gonzu.includes("配信") && gonzu.includes("終了")) {ga.append(`<div class="message bot"><span>💡 Netflixの配信終了作品は以下のページでご確認ください。<br/><br/>✅ 配信終了作品<br/><a href="https://www.net-frx.com/p/netflix-expiring.html" target="_blank" rel="noopener noreferrer" class="aftehurr345">https://www.net-frx.com/p/netflix-expiring.html</a><br/><br/>✅ 過去の配信終了作品<br/><a href="https://www.net-frx.com/p/netflix-leaved-all.html" target="_blank" rel="noopener noreferrer" class="aftehurr345">https://www.net-frx.com/p/netflix-leaved-all.html</a></span></div>`);}else if (gonzu.includes("配信予定")) {ga.append(`<div class="message bot"><span>✅ Netflix配信予定掲載ページ<br/><a href="https://www.net-frx.com/p/netflix-coming-soon.html" target="_blank" rel="noopener noreferrer" class="aftehurr345">https://www.net-frx.com/p/netflix-coming-soon.html</a></span></div>`);}else if (mi.includes("モード")) {
 
     if (mi.includes("or")) {nu0=nu2;ga.append('<div class="message bot"><span>✅ 検索モードを <b>or</b> に切り替えました。</span></div>');} else if (mi.includes("and")){ nu0=nu1;ga.append('<div class="message bot"><span>✅ 検索モードを <b>and</b> に切り替えました。</span></div>');}else{ga.append('<div class="message bot"><span>⚠️ モードは「and」または「or」で指定してください。</span></div>');}}else{   ga.append('<div class="message bot"><span>⏳ 作品を検索中です...</span></div>'); gonzu=gonzu.replace(/ /g, nu0).replace(/　/g, nu0);
     
      if (mi.includes("海外") && mi.includes("tv")) {jaa='<br/>💡 海外TVドラマライナップ一覧は以下のページでもご確認できます。<br/><p class="sentanko88"><a href="https://www.net-frx.com/p/netflix-drama-line-up.html" target="_blank" rel="noopener noreferrer" class="aftehurr345">https://www.net-frx.com/p/netflix-drama-line-up.html</a></p>'}
      
      ga.append('<div class="message bot"><span><p class="sentanko88">📝Get Freax 検索ワード一覧URL<br/><a href="https://www.net-frx.com/search?q='+gonzu+'&max-results=20" target="_blank" rel="noopener noreferrer" class="aftehurr345">https://www.net-frx.com/search?q='+gonzu+'</a></p>'+jaa+'</span></div>');
 gg1();} chatBox.scrollTop = chatBox.scrollHeight; });
 $(document).on('click', '#moreBtn', function(){ $(this).hide();gg1(); });
      $(document).on('click', '#closeChatBtn, .sabu777, .sabu777ob', function(e){ const id = e.target.id; if (id !== "chatBox" && id !== "chatInput" && id !== "inputContainer" && id !== "sendBtn") {  const zazmm7 = $('#chatPopup,.sabu777, .sabu777ob, #inputField'); zazmm7.fadeOut(50);   $('body').removeClass('sccansell'); $(".menu-dbb1, #ad-bottom-f1ads, #ad-bottom-pc0").fadeIn(200);  } });  
