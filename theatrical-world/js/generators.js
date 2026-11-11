
const generatorPerformances = [
    {
        id: "swan-lake",
        title: "Лебединое озеро",
        genre: "Балет",
        image: "images/swan-lake.jpg",
        description: "История любви, верности и борьбы добра со злом."
    },
    {
        id: "cherry-orchard",
        title: "Вишнёвый сад",
        genre: "Драма",
        image: "images/cherry-orchard.jpg",
        description: "Трогательная история о переменах, прошлом и будущем."
    },
    {
        id: "inspector",
        title: "Ревизор",
        genre: "Комедия",
        image: "images/inspector.jpg",
        description: "Остроумная комедия о человеческих слабостях."
    },
    {
        id: "hamlet",
        title: "Гамлет",
        genre: "Драма",
        image: "images/hamlet.jpg",
        description: "История о справедливости, мести и нравственном выборе."
    },
    {
        id: "nutcracker",
        title: "Щелкунчик",
        genre: "Балет",
        image: "images/nutcracker.jpg",
        description: "Волшебная сказка о приключениях, чудесах и доброте."
    },
    {
        id: "phantom",
        title: "Призрак оперы",
        genre: "Мюзикл",
        image: "images/phantom.jpg",
        description: "Загадочная история любви и музыки."
    },
    {
        id: "onegin",
        title: "Евгений Онегин",
        genre: "Опера",
        image: "images/onegin.jpg",
        description: "Лирическая история о любви, чувствах и упущенных возможностях."
    },
    {
        id: "carmen",
        title: "Кармен",
        genre: "Опера",
        image: "images/carmen.jpg",
        description: "Страстная история любви, ревности и стремления к свободе."
    },
    {
        id: "romeo-juliet",
        title: "Ромео и Джульетта",
        genre: "Драма",
        image: "images/romeo-juliet.jpg",
        description: "Трагическая история любви двух молодых людей из враждующих семей."
    }
];

const moodRecommendations = {
    romantic: [
        "swan-lake",
        "phantom",
        "onegin",
        "romeo-juliet"
    ],
    funny: [
        "inspector"
    ],
    thoughtful: [
        "cherry-orchard",
        "hamlet",
        "onegin"
    ],
    magical: [
        "nutcracker",
        "swan-lake"
    ],
    dramatic: [
        "hamlet",
        "phantom",
        "cherry-orchard",
        "carmen",
        "romeo-juliet"
    ]
};

const randomButton = document.getElementById("random-button");
const randomResult = document.getElementById("random-result");

const moodButton = document.getElementById("mood-button");
const moodSelect = document.getElementById("mood-select");
const moodResult = document.getElementById("mood-result");
const moodMessage = document.getElementById("mood-message");

let lastRandomId = null;
let lastMoodId = null;

function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function getRandomPerformance(excludedId = null) {
    const available = generatorPerformances.filter(
        performance => performance.id !== excludedId
    );

    return getRandomItem(
        available.length > 0 ? available : generatorPerformances
    );
}

function createPerformanceCard(performance) {
    const card = document.createElement("article");
    card.className = "card border-0 bg-light overflow-hidden";

    const imageWrapper = document.createElement("div");
    imageWrapper.className = "ratio ratio-4x3 bg-white";

    const image = document.createElement("img");
    image.className = "w-100 h-100 object-fit-contain";
    image.src = performance.image;
    image.alt = `Афиша спектакля ${performance.title}`;

    imageWrapper.append(image);

    const content = document.createElement("div");
    content.className = "card-body p-4";

    const genre = document.createElement("span");
    genre.className = "badge text-bg-warning mb-3";
    genre.textContent = performance.genre;

    const title = document.createElement("h3");
    title.className = "h4 fw-bold mb-3";
    title.textContent = performance.title;

    const description = document.createElement("p");
    description.className = "text-secondary mb-4";
    description.textContent = performance.description;

    const actions = document.createElement("div");
    actions.className = "d-flex flex-wrap gap-2";

    const detailsLink = document.createElement("a");
    detailsLink.className = "btn btn-dark";
    detailsLink.href =
        `performance.html?id=${encodeURIComponent(performance.id)}`;
    detailsLink.textContent = "Подробнее";

    const favoriteButton = document.createElement("button");
    favoriteButton.type = "button";
    favoriteButton.className = "btn btn-outline-dark";
    favoriteButton.dataset.favoriteId = performance.id;
    favoriteButton.textContent = "♡ В избранное";

    actions.append(detailsLink, favoriteButton);

    content.append(
        genre,
        title,
        description,
        actions
    );

    card.append(imageWrapper, content);

    return card;
}

function showPerformance(container, performance) {
    container.replaceChildren(
        createPerformanceCard(performance)
    );

    if (typeof updateFavoriteButtons === "function") {
        updateFavoriteButtons();
    }
}

randomButton.addEventListener("click", () => {
    const performance = getRandomPerformance(lastRandomId);

    lastRandomId = performance.id;

    showPerformance(randomResult, performance);
});

moodButton.addEventListener("click", () => {
    const selectedMood = moodSelect.value;

    if (!selectedMood || !moodRecommendations[selectedMood]) {
        moodMessage.textContent = "Сначала выберите настроение.";
        moodMessage.className = "alert alert-warning mt-3 mb-0";
        moodResult.replaceChildren();
        return;
    }

    moodMessage.textContent = "";
    moodMessage.className = "mt-3 mb-0";

    const recommendedIds = moodRecommendations[selectedMood];

    const availableIds = recommendedIds.filter(
        id => id !== lastMoodId
    );

    const selectedId = getRandomItem(
        availableIds.length > 0 ? availableIds : recommendedIds
    );

    const performance = generatorPerformances.find(
        item => item.id === selectedId
    );

    if (!performance) {
        moodMessage.textContent = "Не удалось подобрать спектакль.";
        moodMessage.className = "alert alert-danger mt-3 mb-0";
        moodResult.replaceChildren();
        return;
    }

    lastMoodId = performance.id;

    showPerformance(moodResult, performance);
});

moodSelect.addEventListener("change", () => {
    moodMessage.textContent = "";
    moodMessage.className = "mt-3 mb-0";
});
