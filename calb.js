$(function(){$("#tw-tteop2").click(function(){$("#tw-tteop2").hide();$("#img-tww4").show();const d=$("#netwit").text();const g=d.replace(/\u3000/g,"\x20");const a=g.replace(/:/g,"\x20");const f=a.replace(/\x20/g,"%20OR%20");const c=f.split("/");const h=c[0];const b="http://twitter-great-rss.herokuapp.com/feed/search?q="+h+"%20%E3%83%89%E3%83%A9%E3%83%9E%20OR%20%E3%83%8D%E3%83%83%E3%83%88%E3%83%95%E3%83%AA%E3%83%83%E3%82%AF%E3%82%B9%20OR%20netflix%20OR%20%E3%83%8D%E3%83%88%E3%83%95%E3%83%AA%20OR%20%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%AA%E3%83%BC%20OR%20%E3%82%A2%E3%83%8B%E3%83%A1%20-RT%20lang:ja%20&url_id_hash=997da77560f958b1f5910c3d87e4186a19ac7743";function e(i,j){$.ajax({url:"https://api.rss2json.com/v1/api.json?rss_url="+encodeURIComponent(i),dataType:"json",success:function(k){j(k)}})}html="";e(b,function(m){var j=m.items;for(var k=0;k<j.length;k++){html+="<p><a href='"+j[k].link+"'>@"+j[k].title+"</a></p>";html+='<div class="content t-ttt2">'+j[k].content+"</div>"}const l=$("#twre45");l.html(html);$(function(){$("#tw-tteop").show();$("#img-tww4").hide()})})})});