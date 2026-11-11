
const REVIEWS_KEY = "theatrical-world-reviews";

const performanceNames = {
    "swan-lake": "Лебединое озеро",
    "cherry-orchard": "Вишнёвый сад",
    "inspector": "Ревизор",
    "hamlet": "Гамлет",
    "nutcracker": "Щелкунчик",
    "phantom": "Призрак оперы",
    "onegin": "Евгений Онегин",
    "carmen": "Кармен",
    "romeo-juliet": "Ромео и Джульетта"
};

const reviewForm = document.getElementById("review-form");
const reviewsContainer = document.getElementById("reviews-container");
const reviewsFilter = document.getElementById("reviews-filter");
const reviewsCount = document.getElementById("reviews-count");
const reviewsEmpty = document.getElementById("reviews-empty");
const reviewMessage = document.getElementById("review-message");
const reviewPerformance = document.getElementById("review-performance");

function getReviews() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(REVIEWS_KEY) || "[]"
        );

        return Array.isArray(saved)
            ? saved.filter(review =>
                review &&
                typeof review.id === "string" &&
                typeof review.name === "string" &&
                typeof review.text === "string" &&
                performanceNames[review.performance] &&
                Number.isInteger(review.rating) &&
                review.rating >= 1 &&
                review.rating <= 5
            )
            : [];
    } catch {
        return [];
    }
}

function saveReviews(reviews) {
    localStorage.setItem(
        REVIEWS_KEY,
        JSON.stringify(reviews)
    );
}

function getReviewWord(count) {
    if (count % 10 === 1 && count % 100 !== 11) {
        return "отзыв";
    }

    if (
        count % 10 >= 2 &&
        count % 10 <= 4 &&
        (count % 100 < 12 || count % 100 > 14)
    ) {
        return "отзыва";
    }

    return "отзывов";
}

function showReviewMessage(message, type = "success") {
    reviewMessage.textContent = message;

    reviewMessage.className =
        `alert alert-${type} mt-3`;

    reviewMessage.hidden = false;
}

function createReviewCard(review) {
    const card = document.createElement("article");
    card.className = "card border-0 shadow-sm";

    const body = document.createElement("div");
    body.className = "card-body p-4";

    const header = document.createElement("div");
    header.className =
        "d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3";

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

    const performance = document.createElement("a");
    performance.className =
        "d-inline-block link-dark fw-semibold text-decoration-none mb-3";

    performance.href =
        `performance.html?id=${encodeURIComponent(review.performance)}`;

    performance.textContent =
        performanceNames[review.performance];

    const rating = document.createElement("p");
    rating.className = "text-warning fw-bold fs-5 mb-3";

    rating.textContent =
        "★".repeat(review.rating) +
        "☆".repeat(5 - review.rating);

    const text = document.createElement("p");
    text.className = "card-text text-secondary mb-4";
    text.textContent = review.text;

    const deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.className = "btn btn-outline-danger btn-sm";
    deleteButton.textContent = "Удалить отзыв";

    deleteButton.addEventListener("click", () => {
        if (!confirm("Удалить этот отзыв?")) {
            return;
        }

        const reviews = getReviews().filter(
            item => item.id !== review.id
        );

        try {
            saveReviews(reviews);
            renderReviews();
            showReviewMessage("Отзыв удалён.");
        } catch {
            showReviewMessage(
                "Не удалось удалить отзыв. Проверьте настройки браузера.",
                "danger"
            );
        }
    });

    body.append(
        header,
        performance,
        rating,
        text,
        deleteButton
    );

    card.append(body);

    return card;
}

function renderReviews() {
    const reviews = getReviews();
    const selectedPerformance = reviewsFilter.value;

    const filtered = selectedPerformance
        ? reviews.filter(
            review => review.performance === selectedPerformance
        )
        : reviews;

    reviewsContainer.replaceChildren();

    filtered
        .slice()
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .forEach(review => {
            reviewsContainer.append(createReviewCard(review));
        });

    reviewsCount.textContent =
        `${filtered.length} ${getReviewWord(filtered.length)}`;

    reviewsEmpty.hidden = filtered.length > 0;
}

reviewForm.addEventListener("submit", event => {
    event.preventDefault();

    if (!reviewForm.reportValidity()) {
        return;
    }

    const name = document.getElementById("review-name").value.trim();
    const performance = reviewPerformance.value;
    const text = document.getElementById("review-text").value.trim();

    const ratingInput = document.querySelector(
        'input[name="rating"]:checked'
    );

    if (
        !name ||
        !performanceNames[performance] ||
        !ratingInput ||
        text.length < 10
    ) {
        showReviewMessage(
            "Пожалуйста, корректно заполните все поля.",
            "danger"
        );
        return;
    }

    const review = {
        id: typeof crypto !== "undefined" &&
            typeof crypto.randomUUID === "function"
            ? crypto.randomUUID()
            : `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        name,
        performance,
        rating: Number(ratingInput.value),
        text,
        date: new Date().toISOString()
    };

    const reviews = getReviews();
    reviews.push(review);

    try {
        saveReviews(reviews);
    } catch {
        showReviewMessage(
            "Не удалось сохранить отзыв. Проверьте настройки браузера.",
            "danger"
        );
        return;
    }

    reviewForm.reset();

    reviewPerformance.value = performance;
    reviewsFilter.value = performance;

    showReviewMessage("Ваш отзыв успешно опубликован!");

    renderReviews();
});

reviewsFilter.addEventListener("change", renderReviews);

const params = new URLSearchParams(window.location.search);
const performanceId = params.get("performance");

if (performanceNames[performanceId]) {
    reviewPerformance.value = performanceId;
    reviewsFilter.value = performanceId;
}

window.addEventListener("storage", event => {
    if (event.key === REVIEWS_KEY) {
        renderReviews();
    }
});

renderReviews();
