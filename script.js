let currentRating = 0;

function setRating(rating) {
    currentRating = rating;

    const stars = document.querySelectorAll(".stars span");
    stars.forEach((star, index) => {
        if (index < rating) {
            star.style.color = "gold";
        } else {
            star.style.color = "white";
        }
    });
}


function resetRating() {
    currentRating = 0;
    const stars = document.querySelectorAll(".stars span");
    stars.forEach(star => {
        star.style.color = "white";
    });
}


function addReview() {
    const bookName = document.getElementById("bookName").value;
    const reviewText = document.getElementById("reviewText").value;

    if (bookName === "" || reviewText === "" || currentRating === 0) {
        alert("يرجى إدخال جميع البيانات واختيار التقييم");
        return;
    }

    const review = {
        book: bookName,
        text: reviewText,
        rating: currentRating
    };

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(review);
    localStorage.setItem("reviews", JSON.stringify(reviews));

    displayReviews();
}

function displayReviews() {
    const container = document.getElementById("reviewsContainer");
    container.innerHTML = "";

    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

    reviews.forEach(r => {
        const card = document.createElement("div");
        card.classList.add("review-card");

      card.innerHTML = `
    <h3>${r.book}</h3>
    <p>${r.text}</p>
    <p>التقييم: ${"⭐".repeat(r.rating)}</p>
    <button onclick="deleteReview(${index})">حذف</button>

    `;

        container.appendChild(card);
    });
}

window.onload = displayReviews;

/* Scroll Animation */
window.addEventListener("scroll", function() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
});
function toggleMode() {
    document.body.classList.toggle("light-mode");
}
function deleteReview(index) {
    let reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.splice(index, 1);
    localStorage.setItem("reviews", JSON.stringify(reviews));
    displayReviews();
}   