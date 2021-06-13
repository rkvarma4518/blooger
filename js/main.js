


// click to scroll top
$('.uparrow img').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})






    document.getElementById('frmsearch').onsubmit = function() {
        window.location = 'http://www.google.com/search?q=' + document.getElementById('txtsearch').value;
        return false;
    }