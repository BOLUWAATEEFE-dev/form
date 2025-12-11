// Select all accordion items
const items = document.querySelectorAll('.item');

items.forEach(item => {
    const question = item.querySelector('.question');
    const answer = item.querySelector('.answer');
    const toggleBtn = item.querySelector('.toggle');

    //All answers will be hiden by default
    answer.style.display = "none";

    question.addEventListener('click', () => {
        const isOpen = answer.style.display === "block";

        // Close all other open accordions
        document.querySelectorAll('.answer').forEach(ans => {
            ans.style.display = "none";
        });
        document.querySelectorAll('.toggle').forEach(btn => {
            btn.textContent = "+";
        });

        // Toggle the clicked one accordion
        if (!isOpen) {
            answer.style.display = "block";
            toggleBtn.textContent = "-";
        }
    });
});
