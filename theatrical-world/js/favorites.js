
const FAVORITES_KEY = "theatrical-world-favorites";

const performancesData = {
    "swan-lake": {
        title: "Лебединое озеро",
        genre: "Балет",
        image: "images/swan-lake.jpg"
    },
    "cherry-orchard": {
        title: "Вишнёвый сад",
        genre: "Драма",
        image: "images/cherry-orchard.jpg"
    },
    "inspector": {
        title: "Ревизор",
        genre: "Комедия",
        image: "images/inspector.jpg"
    },
    "hamlet": {
        title: "Гамлет",
        genre: "Драма",
        image: "images/hamlet.jpg"
    },
    "nutcracker": {
        title: "Щелкунчик",
        genre: "Балет",
        image: "images/nutcracker.jpg"
    },
    "phantom": {
        title: "Призрак оперы",
        genre: "Мюзикл",
        image: "images/phantom.jpg"
    },
    "onegin": {
        title: "Евгений Онегин",
        genre: "Опера",
        image: "images/onegin.jpg"
    },
    "carmen": {
        title: "Кармен",
        genre: "Опера",
        image: "images/carmen.jpg"
    },
    "romeo-juliet": {
        title: "Ромео и Джульетта",
        genre: "Драма",
        image: "images/romeo-juliet.jpg"
    }
};

function getFavorites() {
    try {
        const saved = JSON.parse(
            localStorage.getItem(FAVORITES_KEY) || "[]"
        );

        return Array.isArray(saved)
            ? [...new Set(saved.filter(id => performancesData[id]))]
            : [];
    } catch {
        return [];
    }
}

function saveFavorites(favorites) {
    localStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(favorites)
    );
}

function toggleFavorite(id) {
    if (!performancesData[id]) {
        return;
    }

    const favorites = getFavorites();

    const updated = favorites.includes(id)
        ? favorites.filter(item => item !== id)
        : [...favorites, id];

    saveFavorites(updated);
    updateFavoriteButtons();
    renderFavorites();
}

function updateFavoriteButtons() {
    const favorites = getFavorites();

    document.querySelectorAll("[data-favorite-id]").forEach(button => {
        const id = button.dataset.favoriteId;
        const isFavorite = favorites.includes(id);

        button.textContent = isFavorite
            ? "♥ В избранном"
            : "♡ В избранное";

        button.classList.toggle("btn-dark", isFavorite);
        button.classList.toggle("btn-outline-dark", !isFavorite);

        button.setAttribute(
            "aria-pressed",
            String(isFavorite)
        );
    });
}

function renderFavorites() {
    const grid = document.getElementById("favorites-grid");

    if (!grid) {
        return;
    }

    const favorites = getFavorites();

    const count = document.getElementById("favorites-count");
    const empty = document.getElementById("favorites-empty");
    const clearButton = document.getElementById("clear-favorites");

    if (count) {
        count.textContent = favorites.length;
    }

    if (empty) {
        empty.hidden = favorites.length > 0;
    }

    if (clearButton) {
        clearButton.disabled = favorites.length === 0;
    }

    grid.replaceChildren();

    favorites.forEach(id => {
        const performance = performancesData[id];

        const column = document.createElement("div");
        column.className = "col";

        const card = document.createElement("article");
        card.className = "card h-100 border-0 shadow-sm";

        const imageWrapper = document.createElement("div");
        imageWrapper.className = "ratio ratio-4x3 bg-white";

        const image = document.createElement("img");
        image.src = performance.image;
        image.alt = `Афиша спектакля ${performance.title}`;
        image.className = "w-100 h-100 object-fit-contain";

        imageWrapper.append(image);

        const content = document.createElement("div");
        content.className = "card-body d-flex flex-column";

        const title = document.createElement("h2");
        title.className = "card-title h5 fw-bold";
        title.textContent = performance.title;

        const genre = document.createElement("p");
        genre.className = "card-text text-secondary mb-3";
        genre.textContent = performance.genre;

        const actions = document.createElement("div");
        actions.className = "d-flex flex-wrap gap-2 mt-auto";

        const link = document.createElement("a");
        link.href = `performance.html?id=${encodeURIComponent(id)}`;
        link.className = "btn btn-dark";
        link.textContent = "Подробнее";

        const removeButton = document.createElement("button");
        removeButton.type = "button";
        removeButton.className = "btn btn-outline-danger";
        removeButton.textContent = "Удалить";

        removeButton.addEventListener("click", () => {
            toggleFavorite(id);
        });

        actions.append(link, removeButton);
        content.append(title, genre, actions);
        card.append(imageWrapper, content);
        column.append(card);
        grid.append(column);
    });
}

document.addEventListener("click", event => {
    const button = event.target.closest("[data-favorite-id]");

    if (button) {
        toggleFavorite(button.dataset.favoriteId);
    }
});

document.getElementById("clear-favorites")?.addEventListener(
    "click",
    () => {
        if (confirm("Очистить всё избранное?")) {
            saveFavorites([]);
            updateFavoriteButtons();
            renderFavorites();
        }
    }
);

window.addEventListener("storage", event => {
    if (event.key === FAVORITES_KEY) {
        updateFavoriteButtons();
        renderFavorites();
    }
});

updateFavoriteButtons();
renderFavorites();
