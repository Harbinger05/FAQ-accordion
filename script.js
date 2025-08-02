const question = document.querySelectorAll('.flex-question')
const answer = document.querySelectorAll('.answer')
const icon = document.querySelectorAll('.icon')


question.forEach((question, i) => {
    question.addEventListener('click', () => {
        const isAlreadyOpen = answer[i].classList.contains('show');

        answer.forEach((answer, index) => {
            answer.classList.remove('show');
            icon[index].src = 'images/icon-plus.svg';
        });

        if (!isAlreadyOpen) {
            answer[i].classList.add('show');
            icon[i].src = 'images/icon-minus.svg';
        }

        icon[i].classList.toggle('rotate')
    });
});