const question = document.querySelectorAll('.flex-question')
const answer = document.querySelectorAll('.answer')
const icon = document.querySelectorAll('.icon')

question.forEach((question, i) => {
    question.addEventListener('click', () => {
        answer[i].classList.toggle('show')

        const isShown = answer[i].classList.contains('show');

        icon[i].src = isShown
            ? 'images/icon-plus.svg'
            : 'images/icon-minus.svg';

            icon[i].classList.toggle('rotate')
    })
})