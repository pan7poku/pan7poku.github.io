$( function() {
$('#tw-tteop2').click(function() {
$('#tw-tteop2').hide();
$('#img-tww4').show();
const rst2 = $('#netwit').text();
const fxx = rst2.replace(/\u3000/g,"\x20");
const f3z = fxx.replace(/:/g,"\x20");
const fbb = f3z.replace(/\x20/g,"%20OR%20");
const fxx7 = fbb.split('/');
const fxx1 = fxx7[0];
const rssUrl = "http://twitter-great-rss.herokuapp.com/feed/search?q=" + fxx1 + "%20%E3%83%89%E3%83%A9%E3%83%9E%20OR%20%E3%83%8D%E3%83%83%E3%83%88%E3%83%95%E3%83%AA%E3%83%83%E3%82%AF%E3%82%B9%20OR%20netflix%20OR%20%E3%83%8D%E3%83%88%E3%83%95%E3%83%AA%20OR%20%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%AA%E3%83%BC%20OR%20%E3%82%A2%E3%83%8B%E3%83%A1%20-RT%20lang:ja%20&url_id_hash=997da77560f958b1f5910c3d87e4186a19ac7743";
  function parseRSS(url, callback) {
    $.ajax({
      url: 'https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent(url),
      dataType: 'json',
      success: function(data) {
        callback(data);
      }
    });
  }
  html = "";
  parseRSS(rssUrl, function(rss) {
      var items = rss.items;
      for(var i = 0; i < items.length; i++) {
            html += "<p><a href='" + items[i].link + "'>" + "@" + items[i].title + "</a></p>";  
html += '<div class="content t-ttt2">' + items[i].content + '</div>';
      }
const twe4 = $("#twre45");
    twe4.html(html);


$( function() {
  $('#tw-tteop').show();
$('#img-tww4').hide();
});

  });


  });
  });