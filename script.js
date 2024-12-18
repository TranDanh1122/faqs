let faqs = document.querySelectorAll('.faq_question')
let handleExplode = (e) => {
    e.target.closest('.faq').toggleAttribute('explode')
}
faqs.forEach(faq => faq.addEventListener('click' , handleExplode))