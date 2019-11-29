$( function() {
google.load("feeds", "1");
$('#tw-tteop2').click(function() {
$('#img-tww4').show();
$('#tabw7').show();
const rst2 = $('#netwit').text();
const fxx = rst2.replace(/\u3000/g,"\x20");
const f3z = fxx.replace(/:/g,"\x20");
const fbb = f3z.replace(/\x20/g,"%20OR%20");
const fxx7 = fbb.split('/');
const fxx1 = fxx7[0];
const mmo3 = "http://twitter-great-rss.herokuapp.com/feed/search?q=" + fxx1 + "%20%E3%83%89%E3%83%A9%E3%83%9E%20OR%20%E3%83%8D%E3%83%83%E3%83%88%E3%83%95%E3%83%AA%E3%83%83%E3%82%AF%E3%82%B9%20OR%20netflix%20OR%20%E3%83%8D%E3%83%88%E3%83%95%E3%83%AA%20OR%20%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%82%BF%E3%83%AA%E3%83%BC%20OR%20%E3%82%A2%E3%83%8B%E3%83%A1%20-RT%20lang:ja%20&url_id_hash=997da77560f958b1f5910c3d87e4186a19ac7743";
function loadFeed() {
    const feed = new google.feeds.Feed(mmo3);
    feed.setNumEntries(20);
    feed.load(function(result) {
        var html;
        if (!result.error) {
            html = '';
            if (result.feed.entries.length) {
                html += '<ul>';
                for (var i = 0; i < result.feed.entries.length; i++) {
                    const entry = result.feed.entries[i];
                    html += '<li><a href="' + entry.link + '" target="_blank" rel="noopener noreferrer">' + "@" + entry.title + '</a><br />';
                    html += '<span class="content">' + entry.contentSnippet + '</span></li>';
                }
                html += '</ul>';
           }
       }
       else {
           html = '<p>none</p>';
       }
       const container = document.getElementById("twre4");
       container.innerHTML = html;

$(function(){
	$(container).each(function(){
		$(this).find("li:gt(2)").each(function(){$(this).hide();});
		$(this).append('<p class="ton-tow2z">もっと見る</p>');
$('#img-tww4').hide();
		$(this).find("p:last").click(function(){$(this).parent().find("li").show(400); $(this).remove();});
	});
});

    });
}
google.setOnLoadCallback(loadFeed);

$( function() {
$('#tw-tteop2').hide();
  $('#tw-tteop').show();
} );

} );
  } );