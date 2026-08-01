// Select all FAQ question headers
const questions = document.querySelectorAll('.faq-question');

questions.forEach((question, index) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.icon');

    // Toggle visibility
    answer.classList.toggle('hidden');

    // Toggle icon state
    if (answer.classList.contains('hidden')) {
      icon.innerText = '+';
      console.log(`FAQ item ${index + 1} closed`);
    } else {
      icon.innerText = '-';
      console.log(`FAQ item ${index + 1} opened`);
    }
  });
});
