const scam = "15f53be40c96f3f37966cffc7c22fc4d";
$(function(){
const gg = $("#mv55dtt").data("zonb");
const genn = $("#mv55dtt").data("gemh");
const ffm = "tt1205489";
const url = "https://api.themoviedb.org/3/" + genn + "/" + gg + "?api_key=" + scam + "&amp;append_to_response=credits";
fetch(url, {
credentials: "same-origin",
cache: 'force-cache'
}).then(function(response) {
return response.json();
}).then(function(huu) {
const tm1 = document.getElementById("zon5");
const tmyy = document.getElementById("zon-y0");
const tm2 = document.getElementById("zon6");
const tm3 = document.getElementById("zon7");
const tmbb = JSON.stringify(huu["runtime"]);
const price = JSON.stringify(huu["budget"]);
const num5 = Number(price).toLocaleString();
const price2 = JSON.stringify(huu["revenue"]);
const num52 = Number(price2).toLocaleString();
const ena = JSON.stringify(huu["original_language"]);
const fxx = ena.replace(/"/g,"");
const goo5 = huu["credits"];
const remz = new Object(goo5);
tm1.innerHTML = tmbb;
tmyy.innerHTML = ("$") + num5;
tm2.innerHTML = ("$") + num52;
tm3.innerHTML = fxx;
$(function(){
const urlg = "https://api.themoviedb.org/3/" + genn + "/" + gg + "?api_key=" + scam + "&amp;language=ja";
fetch(urlg, {
credentials: "same-origin",
cache: 'force-cache'
}).then(function(response) {
return response.json();
}).then(function(huu2) {
const empp = "";
const ena = JSON.stringify(huu2["overview"]);
const fxxe = ena.replace(/"/g,"");
const count = 20;
const fxxetx = fxxe.length;
const pos = JSON.stringify(huu2['backdrop_path']);
const pos1 = pos.replace(/"/g,"");
const pos2 = "https://image.tmdb.org/t/p/w500" + pos1;
if (fxxetx > 10) {
$('blockquote').append(memo0);
const result1 = document.getElementById("sectiona22");
const result2 = document.getElementById("sectiona222");
const ena2 = JSON.stringify(huu2["tagline"]);
const fxxe2 = ena2.replace(/"/g,"");
result1.innerHTML = fxxe;
result2.innerHTML = fxxe2;
$('#postted').attr('src', pos2);
$(".second-btn").click(function(){
$(".ssbackg-bq").show();
$(".second-btn").hide();
$(".ssbackg-bq").addClass("fade-main2");
});
$("#sectiona222-e").click(function(){
$(".second-btn").show();
$(".ssbackg-bq").hide();
$(".second-btn").addClass("fade-main");
});
} else {$("#sectiona22, .second-btn").hide();
}}).catch(function(error) {
$(error).hide();
});});
$(function(){
const tex4 = $("#zon10").text();
const tecn = tex4.length;
  if (tecn &lt; 5) { 
 $(".photo-act").hide();
$(function(){
var boxap = document.getElementById("acny");
var boxap3 = document.querySelector('.photo-all');
for (var i = 0; i &lt; 5; i++) {
const acn0 = JSON.stringify(remz.cast[i]);
const anam0 = remz.cast[i]["name"];
const anam = anam0.replace(/"/g,"");
const anac0 = remz.cast[i]["character"];
const anac = anac0.replace(/"/g,"");
const animg0 = JSON.stringify(remz.cast[i]["profile_path"]);
const animg = animg0.replace(/"/g,"");
const animgok = "https://image.tmdb.org/t/p/w200" + animg; 
const koko = "<img src='" + animgok + "' alt="" />";
boxap3.innerHTML += "<div class="photo-act2">" + koko + "<div class="char-name">" + anac + "</div><div class="pers-name">" + anam + "</div></div>";
}});
$(function(){
const npbza = JSON.stringify(remz.cast[5]["name"]);
const npbz2a = npbza.replace(/"/g,"");
const cnpa = npbz2a.length;
if (cnpa > 5) {
const sd22 = "<div class='slide-r' id='slide-r'>&#9664;</div><div class='slide-l' id='slide-l'>&#9654;</div>";
const mr1 = "<div class='more-ca photo-act' id='more-ca'><span class='more-ca2'>[More]</span></div>";
$('.photo-all').append(mr1);
$('#ca-sst').prepend(sd22);
$(function(){
var button = document.querySelector(".slide-l");
button.onclick = function () {
document.querySelector('.photo-all').scrollLeft += 200;
document.querySelector('.slide-r').style.display = 'block';
};});
$(function(){
var button = document.querySelector(".slide-r");
button.onclick = function () {
document.querySelector('.photo-all').scrollLeft -= 200;
};});
$('#more-ca').click(function() {
$("#more-ca").hide();
for (var i = 5; i &lt; remz.cast.length; i++) {
const acn0 = JSON.stringify(remz.cast[i]);
const anam0 = remz.cast[i]["name"];
const anam = anam0.replace(/"/g,"");
const anac0 = remz.cast[i]["character"];
const anac = anac0.replace(/"/g,"");
const animg0 = JSON.stringify(remz.cast[i]["profile_path"]);
const animg = animg0.replace(/"/g,"");
const animgok = "https://image.tmdb.org/t/p/w200" + animg; 
const koko = "<img src='" + animgok + "' alt="" />";
$('.photo-all').append("<div class="photo-act2">" + koko + "<div class="char-name">" + anac + "</div><div class="pers-name">" + anam + "</div></div>");
}});}});}});}).catch(function(error) {
$(error).hide();
});});
$(function(){
const gg33 = $("#tv55dtt").data("tvdd");
const url6 = "https://api.themoviedb.org/3/tv/" + gg33 + "?api_key=" + scam + "&amp;append_to_response=credits";
fetch(url6, {
credentials: "same-origin",
cache: 'force-cache'
}).then(function(response) {
return response.json();
}).then(function(huutv) {
const cassy = huutv["credits"];
const gotz = new Object(cassy);
const tm1 = document.getElementById("zon5v");
const tm2 = document.getElementById("zon6v");
const ts2 = document.getElementById("zonss");
const tm3 = document.getElementById("zon7");
const tm77 = document.getElementById("zontv7");
const hou9 = JSON.stringify(huutv["last_air_date"]);
const kutin = hou9.replace(/"/g,"");
const hou91 = JSON.stringify(huutv["first_air_date"]);
const kutin1 = hou91.replace(/"/g,"");
const tm1i = JSON.stringify(huutv.episode_run_time[0]);
const tm2i = JSON.stringify(huutv.last_episode_to_air["season_number"]);
const ts2i = JSON.stringify(huutv.number_of_episodes);
tm1.innerHTML = tm1i;
tm2.innerHTML = tm2i;
ts2.innerHTML = ts2i;
tm3.innerHTML = kutin;
tm77.innerHTML = kutin1;
$(function(){
const url65 = "https://api.themoviedb.org/3/tv/" + gg33 + "?api_key=" + scam + "&amp;language=ja";
fetch(url65, {
credentials: "same-origin",
cache: 'force-cache'
}).then(function(response) {
return response.json();
}).then(function(huutv) {
$(function(){
const ena = JSON.stringify(huutv["overview"]);
const fxxe = ena.replace(/"/g,"");
const count = 20;
const fxxetx = fxxe.length;
const pos = JSON.stringify(huutv['backdrop_path']);
const pos1 = pos.replace(/"/g,"");
const pos2 = "https://image.tmdb.org/t/p/w500" + pos1;
if (fxxetx > 10) {
$('blockquote').append(memo1);
$('#postted').attr('src', pos2);
const result1 = document.getElementById("sectiona22");
result1.innerHTML = fxxe;
$(".second-btn").click(function(){
$(".ssbackg-bq").show();
$(".second-btn").hide();
$(".ssbackg-bq").addClass("fade-main2");
});
$("#sectiona222-e").click(function(){
$(".second-btn").show();
$(".ssbackg-bq").hide();
$(".second-btn").addClass("fade-main");
});} else {$("#sectiona22, .second-btn").hide();
}});
}).catch(function(error) {
$(error).hide();
});});
$(function(){
const tex4 = $("#zon10").text();
const tecn = tex4.length;
  if (tecn &lt; 5) { 
 $(".photo-act").hide();
$(function(){
var boxap3 = document.querySelector('.photo-all');
for (var i = 0; i &lt; 5; i++) {
const acn0 = JSON.stringify(cassy.cast[i]);
const anam0 = cassy.cast[i]["name"];
const anam = anam0.replace(/"/g,"");
const anac0 = cassy.cast[i]["character"];
const anac = anac0.replace(/"/g,"");
const animg0 = JSON.stringify(cassy.cast[i]["profile_path"]);
const animg = animg0.replace(/"/g,"");
const animgok = "https://image.tmdb.org/t/p/w200" + animg; 
const koko = "<img src='" + animgok + "' alt="" />";
boxap3.innerHTML += "<div class="photo-act2">" + koko + "<div class="char-name">" + anac + "</div><div class="pers-name">" + anam + "</div></div>";
}});
$(function(){
const npbza = JSON.stringify(cassy.cast[5]["name"]);
const npbz2a = npbza.replace(/"/g,"");
const cnpa = npbz2a.length;
if (cnpa > 5) {
const sd22 = "<div class='slide-r' id='slide-r'>&#9664;</div><div class='slide-l' id='slide-l'>&#9654;</div>";
const mr1 = "<div class='more-ca photo-act' id='more-ca'><span class='more-ca2'>[More]</span></div>";
$('.photo-all').append(mr1);
$('#ca-sst').prepend(sd22);
$(function(){
var button = document.querySelector(".slide-l");
button.onclick = function () {
document.querySelector('.photo-all').scrollLeft += 200;
document.querySelector('.slide-r').style.display = 'block';
};});
$(function(){
var button = document.querySelector(".slide-r");
button.onclick = function () {
document.querySelector('.photo-all').scrollLeft -= 200;
};});
$('#more-ca').click(function() {
$("#more-ca").hide();
for (var i = 5; i &lt; cassy.cast.length; i++) {
const acn0 = JSON.stringify(cassy.cast[i]);
const anam0 = cassy.cast[i]["name"];
const anam = anam0.replace(/"/g,"");
const anac0 = cassy.cast[i]["character"];
const anac = anac0.replace(/"/g,"");
const animg0 = JSON.stringify(cassy.cast[i]["profile_path"]);
const animg = animg0.replace(/"/g,"");
const animgok = "https://image.tmdb.org/t/p/w200" + animg; 
const koko = "<img src='" + animgok + "' alt="" />";
$('.photo-all').append("<div class="photo-act2">" + koko + "<div class="char-name">" + anac + "</div><div class="pers-name">" + anam + "</div></div>");
}});}});}});}).catch(function(error) {
$(error).hide();
});});
//tmdbbtv