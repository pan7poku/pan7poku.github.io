$(function(){google.load("feeds","1");$("#tw-tteop2-t").click(function(){$("#img-tww4").show();$("#tw-tteop2-t").hide();const e=$("#netwit").text();const g=e.replace(/\u3000/g,"\x20");const b=g.replace(/:/g,"\x20");const f=b.replace(/\x20/g,"%20OR%20");const d=f.split("/");const h=d[0];const c="http://twitter-great-rss.herokuapp.com/feed/search?q="+h+"%20%E3%83%89%E3%83%A9%E3%83%9E%20OR%20%E3%83%8D%E3%83%83%E3%83%88%E3%83%95%E3%83%AA%E3%83%83%E3%82%AF%E3%82%B9%20OR%20netflix%20OR%20%E3%83%8D%E3%83%88%E3%83%95%E3%83%AA%20OR%20%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%AA%E3%83%BC%20OR%20%E3%82%A2%E3%83%8B%E3%83%A1%20-RT%20lang:ja%20min_faves:2%20&url_id_hash=997da77560f958b1f5910c3d87e4186a19ac7743";function a(){const i=new google.feeds.Feed(c);i.setNumEntries(20);i.load(function(j){var m;if(!j.error){m="";if(j.feed.entries.length){m+="<ul>";for(var l=0;l<j.feed.entries.length;l++){const n=j.feed.entries[l];m+='<li><a href="'+n.link+'" target="_blank" rel="noopener noreferrer">@'+n.title+"</a><br />";m+='<span class="content">'+n.contentSnippet+"</span></li>"}m+="</ul>"}}else{m="<p>none</p>"}const k=document.getElementById("twre42");k.innerHTML=m;$(function(){$(k).each(function(){$(this).find("li:gt(2)").each(function(){$(this).hide()});$(this).append('<p class="ton-tow2z">もっと見る</p>');$("#img-tww4").hide();$(this).find("p:last").click(function(){$(this).parent().find("li").show(400);$(this).remove()})})})})}google.setOnLoadCallback(a);$(function(){$("#tw-tteop2").hide();$("#tw-tteop").show()})})});