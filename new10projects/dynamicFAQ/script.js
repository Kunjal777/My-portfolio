const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;

    // Close all other items
    document.querySelectorAll('.faq-item').forEach((item) => {
      if (item !== faqItem) {
        item.classList.remove('active');
      }
    });

    // Toggle clicked item
    faqItem.classList.toggle('active');
  });
});
