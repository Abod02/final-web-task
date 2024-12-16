

// Filter Functionality
document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        document.querySelectorAll(".meal-card").forEach((card) => {
            if (filter === "all" || card.dataset.category === filter) {
                card.parentElement.style.display = "block";
            } else {
                card.parentElement.style.display = "none";
            }
        });
    });
});

// Change Image on Order
document.querySelectorAll(".meal-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".meal-card");
        const img = card.querySelector(".card-img-top");
        img.src = "https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=";
    });
});
