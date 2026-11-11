
const performances = {
    "swan-lake": {
        title: "Лебединое озеро",
        genre: "Балет",
        image: "images/swan-lake.jpg",
        duration: "2 часа 30 минут",
        age: "6+",
        author: "Пётр Ильич Чайковский",
        country: "Россия",
        description: "Знаменитый балет о любви, верности и борьбе добра со злом.",
        about: "«Лебединое озеро» — один из самых известных балетов в мире. История рассказывает о принце Зигфриде и прекрасной Одетте, превращённой злым волшебником в лебедя. Музыка Петра Ильича Чайковского и выразительная хореография сделали это произведение классикой балетного искусства."
    },

    "cherry-orchard": {
        title: "Вишнёвый сад",
        genre: "Драма",
        image: "images/cherry-orchard.jpg",
        duration: "2 часа 40 минут",
        age: "12+",
        author: "Антон Павлович Чехов",
        country: "Россия",
        description: "История семьи, которая сталкивается с переменами и потерей родового имения.",
        about: "«Вишнёвый сад» — пьеса Антона Павловича Чехова о смене эпох, человеческих отношениях и невозможности остановить время. Герои пытаются сохранить привычный мир, но оказываются перед необходимостью принять перемены."
    },

    "inspector": {
        title: "Ревизор",
        genre: "Комедия",
        image: "images/inspector.jpg",
        duration: "2 часа 20 минут",
        age: "12+",
        author: "Николай Васильевич Гоголь",
        country: "Россия",
        description: "Сатирическая комедия о чиновниках, которые принимают случайного гостя за важного проверяющего.",
        about: "«Ревизор» — знаменитая комедия Николая Васильевича Гоголя. Произведение высмеивает взяточничество, лицемерие и страх перед начальством. Ошибка городских чиновников приводит к череде комичных событий."
    },

    "hamlet": {
        title: "Гамлет",
        genre: "Драма",
        image: "images/hamlet.jpg",
        duration: "3 часа",
        age: "16+",
        author: "Уильям Шекспир",
        country: "Великобритания",
        description: "Трагедия датского принца, который пытается узнать правду о смерти своего отца.",
        about: "«Гамлет» — одна из наиболее известных трагедий Уильяма Шекспира. В центре сюжета находятся вопросы долга, справедливости, мести и нравственного выбора. Герой сталкивается с предательством и пытается найти своё место в мире."
    },

    "nutcracker": {
        title: "Щелкунчик",
        genre: "Балет",
        image: "images/nutcracker.jpg",
        duration: "2 часа",
        age: "6+",
        author: "Пётр Ильич Чайковский",
        country: "Россия",
        description: "Волшебная рождественская история о девочке Мари и заколдованном принце.",
        about: "«Щелкунчик» — сказочный балет на музыку Петра Ильича Чайковского. История переносит зрителей в мир чудес, где оживают игрушки, происходят невероятные приключения и добро побеждает зло."
    },

    "phantom": {
        title: "Призрак оперы",
        genre: "Мюзикл",
        image: "images/phantom.jpg",
        duration: "2 часа 30 минут",
        age: "12+",
        author: "Эндрю Ллойд Уэббер",
        country: "Великобритания",
        description: "Романтическая история о таинственном обитателе Парижской оперы и молодой певице.",
        about: "«Призрак оперы» — известный мюзикл Эндрю Ллойда Уэббера по мотивам романа Гастона Леру. В центре сюжета — талантливая певица Кристина и загадочный музыкальный гений, скрывающийся под зданием оперного театра."
    },

    "onegin": {
        title: "Евгений Онегин",
        genre: "Опера",
        image: "images/onegin.jpg",
        duration: "3 часа",
        age: "12+",
        author: "Пётр Ильич Чайковский",
        country: "Россия",
        description: "Лирическая опера о любви, упущенных возможностях и сложных человеческих чувствах.",
        about: "«Евгений Онегин» — опера Петра Ильича Чайковского по одноимённому роману в стихах Александра Сергеевича Пушкина. В центре сюжета — история Татьяны Лариной и Евгения Онегина. Их отношения раскрывают темы любви, гордости, сожаления и необратимости жизненного выбора."
    },

    "carmen": {
        title: "Кармен",
        genre: "Опера",
        image: "images/carmen.jpg",
        duration: "2 часа 50 минут",
        age: "12+",
        author: "Жорж Бизе",
        country: "Франция",
        description: "Драматическая история страсти, ревности и стремления к свободе.",
        about: "«Кармен» — знаменитая опера французского композитора Жоржа Бизе по мотивам новеллы Проспера Мериме. Действие разворачивается в Испании. Свободолюбивая Кармен оказывается в центре трагической истории любви и ревности, связанной с солдатом Хозе и тореадором Эскамильо."
    },

    "romeo-juliet": {
        title: "Ромео и Джульетта",
        genre: "Драма",
        image: "images/romeo-juliet.jpg",
        duration: "2 часа 30 минут",
        age: "12+",
        author: "Уильям Шекспир",
        country: "Великобритания",
        description: "Трагическая история любви двух молодых людей из враждующих семей.",
        about: "«Ромео и Джульетта» — трагедия Уильяма Шекспира о любви, противостоянии семей и роковых обстоятельствах. Молодые Ромео Монтекки и Джульетта Капулетти влюбляются друг в друга, несмотря на давнюю вражду между их семьями. Произведение поднимает вопросы любви, предрассудков и ответственности за собственные поступки."
    }
};

const REVIEWS_KEY = "theatrical-world-reviews";

const params = new URLSearchParams(window.location.search);
const performanceId = params.get("id");
const performance = performances[performanceId];

function getPerformanceReviews(id) {
    try {
        const saved = JSON.parse(
            localStorage.getItem(REVIEWS_KEY) || "[]"
        );

        if (!Array.isArray(saved)) {
            return [];
        }

        return saved.filter(review =>
            review &&
            review.performance === id &&
            Number.isInteger(review.rating) &&
            review.rating >= 1 &&
            review.rating <= 5
        );
    } catch {
        return [];
    }
}

function createPerformanceReview(review) {
    const card = document.createElement("article");
    card.className = "card border-0 bg-light";

    const body = document.createElement("div");
    body.className = "card-body p-4";

    const header = document.createElement("div");
    header.className = "d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3";

    const name = document.createElement("h3");
    name.className = "h5 fw-bold mb-0";
    name.textContent = review.name;

    const date = document.createElement("span");
    date.className = "text-secondary small";

    const reviewDate = new Date(review.date);

    date.textContent = Number.isNaN(reviewDate.getTime())
        ? ""
        : reviewDate.toLocaleDateString("ru-RU");

    header.append(name, date);

    const rating = document.createElement("p");
    rating.className = "text-warning fw-bold fs-5 mb-3";
    rating.textContent =
        "★".repeat(review.rating) +
        "☆".repeat(5 - review.rating);

    const text = document.createElement("p");
    text.className = "card-text mb-0";
    text.textContent = review.text;

    body.append(header, rating, text);
    card.append(body);

    return card;
}

function renderPerformanceReviews(id) {
    const reviews = getPerformanceReviews(id);

    const list = document.getElementById(
        "performance-reviews-list"
    );

    const summary = document.getElementById(
        "performance-reviews-summary"
    );

    const empty = document.getElementById(
        "performance-reviews-empty"
    );

    list.replaceChildren();

    empty.hidden = reviews.length > 0;

    if (reviews.length === 0) {
        summary.textContent = "Отзывов пока нет";
        return;
    }

    const totalRating = reviews.reduce(
        (sum, review) => sum + review.rating,
        0
    );

    const averageRating = totalRating / reviews.length;

    summary.textContent =
        `Средняя оценка: ${averageRating.toFixed(1)} из 5 · Отзывов: ${reviews.length}`;

    reviews
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach(review => {
            list.append(createPerformanceReview(review));
        });
}

if (performance) {
    document.title = `${performance.title} — Театральный мир`;

    document.getElementById("breadcrumb-title").textContent =
        performance.title;

    document.getElementById("performance-title").textContent =
        performance.title;

    document.getElementById("performance-genre").textContent =
        performance.genre;

    document.getElementById("performance-description").textContent =
        performance.description;

    document.getElementById("performance-duration").textContent =
        performance.duration;

    document.getElementById("performance-age").textContent =
        performance.age;

    document.getElementById("performance-author").textContent =
        performance.author;

    document.getElementById("performance-country").textContent =
        performance.country;

    document.getElementById("performance-about").textContent =
        performance.about;

    const image = document.getElementById("performance-image");
    image.src = performance.image;
    image.alt = `Афиша спектакля ${performance.title}`;

    const favoriteButton = document.getElementById(
        "performance-favorite"
    );

    favoriteButton.dataset.favoriteId = performanceId;

    if (typeof updateFavoriteButtons === "function") {
        updateFavoriteButtons();
    }



    renderPerformanceReviews(performanceId);

} else {
    document.title = "Спектакль не найден — Театральный мир";

    const details = document.getElementById("performance-details");

    details.innerHTML = `
        <div class="col-12">
            <div class="alert alert-warning p-4">
                <h1 class="h3 fw-bold mb-3">Спектакль не найден</h1>
                <p>Проверьте ссылку или вернитесь в каталог.</p>
                <a href="catalog.html" class="btn btn-dark">
                    Перейти в каталог
                </a>
            </div>
        </div>
    `;

    const aboutSection = document.getElementById(
        "performance-about"
    ).closest("section");

    const reviewsSection = document.getElementById(
        "performance-reviews-list"
    ).closest("section");

    if (aboutSection) {
        aboutSection.hidden = true;
    }

    if (reviewsSection) {
        reviewsSection.hidden = true;
    }
}

window.addEventListener("pageshow", () => {
    if (performance) {
        renderPerformanceReviews(performanceId);
    }
});

window.addEventListener("storage", event => {
    if (event.key === REVIEWS_KEY && performance) {
        renderPerformanceReviews(performanceId);
    }
});

// Отзывы сохраняются отдельно для каждого спектакля в браузере.
const inlineReviewForm = document.getElementById("review-form");
if (inlineReviewForm && performance) {
 inlineReviewForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!inlineReviewForm.reportValidity()) return;
  const name = document.getElementById("review-name").value.trim();
  const reviewText = document.getElementById("review-text").value.trim();
  const rating = Number(document.getElementById("review-rating").value);
  const message = document.getElementById("review-message");
  if (!name || reviewText.length < 5 || !Number.isInteger(rating) || rating < 1 || rating > 5) return;
  try {
   const stored = JSON.parse(localStorage.getItem(REVIEWS_KEY) || "[]");
   const reviews = Array.isArray(stored) ? stored : [];
   reviews.push({id: (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())), performance: performanceId, name, text: reviewText, rating, date: new Date().toISOString()});
   localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviews));
   inlineReviewForm.reset();
   message.className = "alert alert-success";
   message.textContent = "Ваш отзыв опубликован!";
   message.hidden = false;
   renderPerformanceReviews(performanceId);
  } catch (error) {
   message.className = "alert alert-danger";
   message.textContent = "Не удалось сохранить отзыв в этом браузере.";
   message.hidden = false;
  }
 });
}
