(() => {
 const root = document.getElementById('quiz-app'); if (!root) return;
 const questions = [
  {title:'Какое настроение у вас сегодня?', choices:[['Хочу посмеяться','inspector'],['Хочу романтики','romeo-juliet'],['Хочу задуматься','hamlet'],['Хочу волшебства','nutcracker']]},
  {title:'Что интереснее всего на сцене?',choices:[['Танец и пластика','swan-lake'],['Вокал и музыка','phantom'],['Диалоги и актёры','cherry-orchard'],['Юмор','inspector']]},
  {title:'Какую атмосферу вы предпочитаете?',choices:[['Сказочную','nutcracker'],['Таинственную','phantom'],['Страстную','carmen'],['Классическую','onegin']]},
  {title:'Какая история привлекает больше?',choices:[['О любви','romeo-juliet'],['О сложном выборе','hamlet'],['О человеческих слабостях','inspector'],['О переменах','cherry-orchard']]},
  {title:'Какой жанр вам ближе?',choices:[['Балет','swan-lake'],['Опера','carmen'],['Комедия','inspector'],['Мюзикл','phantom']]}
 ];
 const shows = {
  'swan-lake':['Лебединое озеро','Балет'], 'cherry-orchard':['Вишнёвый сад','Драма'], inspector:['Ревизор','Комедия'], hamlet:['Гамлет','Драма'], nutcracker:['Щелкунчик','Балет'], phantom:['Призрак оперы','Мюзикл'], onegin:['Евгений Онегин','Опера'], carmen:['Кармен','Опера'], 'romeo-juliet':['Ромео и Джульетта','Драма']
 };
 let step=0; let answers=[];
 const el=(tag, cls, txt) => {const e=document.createElement(tag);if(cls)e.className=cls;if(txt)e.textContent=txt;return e;};
 function render() {
  root.replaceChildren();
  if (step===questions.length) {
   const counts={}; answers.forEach(id=>counts[id]=(counts[id]||0)+1);
   const id=Object.keys(counts).sort((a,b)=>counts[b]-counts[a] || answers.indexOf(a)-answers.indexOf(b))[0];
   const show=shows[id];
   root.append(el('h3','h4 fw-bold mt-3','Вам подойдёт: '+show[0]));
   root.append(el('p','text-secondary','Жанр: '+show[1]+'. Рекомендация основана на ваших ответах.'));
   const img=el('img','img-fluid rounded quiz-result-image mb-3');img.src='images/'+id+'.jpg';img.alt='Афиша: '+show[0];root.append(img,el('div',''));
   const actions=el('div','d-flex gap-2 flex-wrap mt-2');const link=el('a','btn btn-dark','Подробнее');link.href='performance.html?id='+encodeURIComponent(id);
   const fav=el('button','btn btn-outline-dark','♡ В избранное');fav.type='button';fav.dataset.favoriteId=id;
   const again=el('button','btn btn-warning','Пройти заново');again.type='button';again.addEventListener('click',()=>{step=0;answers=[];render();});
   actions.append(link,fav,again);root.append(actions);window.updateFavoriteButtons?.();window.showTheaterToast?.('Подбор спектакля завершён');return;
  }
  const progress=el('div','quiz-progress mb-3');const bar=el('div');bar.style.width=(step/questions.length*100)+'%';progress.append(bar);root.append(progress,el('p','text-secondary small','Вопрос '+(step+1)+' из '+questions.length),el('h3','h5 fw-bold mb-3',questions[step].title));
  questions[step].choices.forEach(([label,id])=>{const btn=el('button','quiz-option',label);btn.type='button';btn.addEventListener('click',()=>{answers[step]=id;step++;render();});root.append(btn);});
  if(step>0){const back=el('button','btn btn-outline-secondary mt-3','← Назад');back.type='button';back.addEventListener('click',()=>{step--;render();});root.append(back);}
 }
 render();
})();
