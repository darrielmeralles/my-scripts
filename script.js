$('h1, h2, h3, h4, h5, h6').each(function() {
    if ($(this).text().trim() === '') {
        $(this).remove();
    }
});