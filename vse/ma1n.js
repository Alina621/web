
let reviews = document.querySelectorAll('.review');
let currentReview = 0;

function showReview(index) {
  reviews.forEach(review => review.classList.remove('active'));
  reviews[index].classList.add('active');
}

function nextReview() {
  currentReview++;
  if (currentReview >= reviews.length) {
    currentReview = 0;
  }
  showReview(currentReview);
}

setInterval(nextReview, 5000); // Change review every 5 seconds


  
  
  // Функция для открытия модального окна
  function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
  }

  // Функция для закрытия модального окна
  function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
  }

  // Закрытие модального окна при клике за его пределами
  window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
      event.target.style.display = 'none';
    }
  }


