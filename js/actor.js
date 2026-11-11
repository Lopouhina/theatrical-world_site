const actors = {
  "ermolova": {
    "name": "Мария Ермолова",
    "years": "1853–1928",
    "theatre": "Малый театр",
    "short": "Русская драматическая актриса, прославившаяся трагическими ролями и сценической выразительностью.",
    "bio": "С ранних лет играла на сцене Малого театра. Её искусство стало символом русской психологической школы актёрского мастерства.",
    "roles": "«Без вины виноватые» — Кручинина; «Орлеанская дева» — Иоанна д’Арк.",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20the%20Actress%20Maria%20Yermolova.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Portrait_of_the_Actress_Maria_Yermolova.jpg",
    "links": []
  },
  "kachalov": {
    "name": "Василий Качалов",
    "years": "1875–1948",
    "theatre": "Московский Художественный театр",
    "short": "Актёр МХТ, известный выразительной речью, сценическим темпераментом и глубокими характерами.",
    "bio": "Был одним из ведущих артистов Московского Художественного театра. Исполнял драматические роли в русской и зарубежной классике.",
    "roles": "«Гамлет» — Гамлет; «На дне» — Барон; «Братья Карамазовы» — Иван Карамазов.",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Vasily%20Kachalov.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Vasily_Kachalov.jpg",
    "links": [
      [
        "hamlet",
        "Гамлет"
      ]
    ]
  },
  "freindlich": {
    "name": "Алиса Фрейндлих",
    "years": "1934",
    "theatre": "БДТ имени Г. А. Товстоногова",
    "short": "Актриса театра и кино, известная многогранностью и точностью сценических образов.",
    "bio": "Работала в Театре имени Ленсовета, затем в Большом драматическом театре имени Г. А. Товстоногова. Играла в постановках по классическим и современным пьесам.",
    "roles": "«Малыш и Карлсон» — Малыш; «Укрощение строптивой» — Катарина.",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Alisa%20Freindlich.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Alisa_Freindlich.jpg",
    "links": []
  },
  "tabakov": {
    "name": "Олег Табаков",
    "years": "1935–2018",
    "theatre": "МХТ и Театр Олега Табакова",
    "short": "Актёр, режиссёр и педагог, один из создателей театра «Современник».",
    "bio": "Служил в «Современнике», руководил МХТ имени А. П. Чехова, основал собственный театр-студию и воспитал поколения актёров.",
    "roles": "«Ревизор» — Хлестаков; «Обыкновенная история» — Александр Адуев.",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/OlegTabakov.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:OlegTabakov.jpg",
    "links": [
      [
        "inspector",
        "Ревизор"
      ]
    ]
  },
  "smoktunovsky": {
    "name": "Иннокентий Смоктуновский",
    "years": "1925–1994",
    "theatre": "БДТ и МХАТ",
    "short": "Выдающийся драматический актёр, прославившийся тонким психологическим исполнением.",
    "bio": "Широкую известность получил после исполнения роли князя Мышкина в спектакле «Идиот» БДТ. Позднее работал во МХАТе.",
    "roles": "«Идиот» — князь Мышкин; «Гамлет» — знаменитая роль в кино (не сценическая постановка).",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/Inokenti%20Smoktunovski.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Inokenti_Smoktunovski.jpg",
    "links": []
  },
  "ulanova": {
    "name": "Галина Уланова",
    "years": "1910–1998",
    "theatre": "Мариинский и Большой театры",
    "short": "Легендарная балерина, воплотившая лирическую выразительность русского балета.",
    "bio": "Выступала в Ленинградском театре оперы и балета, затем в Большом театре. Её образы Джульетты и Жизели стали классическими.",
    "roles": "«Лебединое озеро» — Одетта-Одиллия; «Ромео и Джульетта» — Джульетта; «Жизель» — Жизель.",
    "image": "https://commons.wikimedia.org/wiki/Special:FilePath/%D0%93%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0%20%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B5%D0%B2%D0%BD%D0%B0%20%D0%A3%D0%BB%D0%B0%D0%BD%D0%BE%D0%B2%D0%B0.jpg",
    "source": "https://commons.wikimedia.org/wiki/File:Галина_Сергеевна_Уланова.jpg",
    "links": [
      [
        "swan-lake",
        "Лебединое озеро"
      ],
      [
        "romeo-juliet",
        "Ромео и Джульетта"
      ]
    ]
  }
};
const id = new URLSearchParams(location.search).get('id');
const actor = actors[id];
const root = document.getElementById('actor-content');
if (!actor) { root.innerHTML = '<div class="alert alert-warning">Актёр не найден. <a href="actors.html">Вернуться к списку</a></div>'; }
else {
 document.title = actor.name + ' — Театральный мир';
 document.getElementById('actor-crumb').textContent = actor.name;
 const links = actor.links.map(([id,name]) => `<a class="btn btn-outline-dark me-2 mb-2" href="performance.html?id=${id}">${name}</a>`).join('');
 root.innerHTML = `<div class="row g-4 align-items-start"><div class="col-md-4"><img src="${actor.image}" class="img-fluid w-100 rounded-4 shadow-sm" alt="${actor.name}"><p class="small text-secondary mt-2">Фото: <a href="${actor.source}" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a></p></div><div class="col-md-8"><h1 class="display-5 fw-bold mb-3">${actor.name}</h1><p class="text-secondary">${actor.years} · ${actor.theatre}</p><p class="lead">${actor.short}</p><h2 class="h4 mt-4">Биография и творческий путь</h2><p>${actor.bio}</p><h2 class="h4 mt-4">Известные сценические работы</h2><p>${actor.roles}</p><h2 class="h4 mt-4">Произведения в каталоге сайта</h2>${links ? `<p class="text-secondary small">На сайте представлены произведения, с которыми связано творчество артиста. Это не утверждение об участии в конкретной постановке сайта.</p>${links}` : '<p class="text-secondary">Постановок с подтверждённым соответствием в каталоге пока нет.</p>'}<div class="mt-4"><a href="actors.html" class="btn btn-dark">Все актёры</a></div></div></div>`;
}
