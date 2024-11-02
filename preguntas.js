$(document).ready(function(){
    $('.faq-question').on('click', function(){
        $(this).next('.faq-answer').toggleClass('active');
    });
});