  var STORAGE_KEY = 'watchlist';

  function safeParse(key){
  try {
    return JSON.parse(localStorage.getItem(key)) || [];
  } catch {
    return [];
  }
}

  
function updateWatchCount(){
  const list = safeParse(STORAGE_KEY);
  const el = document.getElementById('watch-count');
  if(el) el.textContent = list.length;
}
  
  
function getWatchlist(){
  return safeParse(STORAGE_KEY);
}

function saveWatchlist(list){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  updateWatchCount();
}

document.addEventListener('click', async e => { updateWatchCount();
  const btn = e.target.closest('.watch-remove-btn');
  if (!btn) return;

const card = btn.closest('article.list-item-xx-fx-noo');
  if (!card) return;
  

const titleEl = card.querySelector('.list-item-titlezz');
  const text2 = titleEl ? titleEl.textContent.trim() : "";
const url = card.dataset.id;
  


  let list = getWatchlist();
  const index = list.findIndex(item => item.url === url);
  if (index === -1) return;
if (!(await fixedConfirm('\u300C' + text2 + '\u300D' + 'をWatchlistから削除しますか\uff1f'))) return;
  list.splice(index, 1);
  saveWatchlist(list);

card.style.transition = 'opacity 0.3s ease';
  card.style.opacity = '0';
  setTimeout(() => card.remove(), 300); // アニメーション後に削除

  if (typeof showFixedMessage === 'function') {
$(".addwat")
  .html('削除しました')
  .fadeIn(200)
  .delay(1500)
  .fadeOut(800);
  }
}); 
