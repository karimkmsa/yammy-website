var areacountry = document.getElementById('areacountry');
var area = document.querySelectorAll('.area-item h2');
console.log(area);
var myHttp = new XMLHttpRequest;
let areaArr = []
categMeals = []
intgMeals = []



// to go to anther page with country
for (var i = 0; i < area.length; i++) {
    area[i].addEventListener('click', function(e) {
        let countryName = e.target.getAttribute('cantoury');
        localStorage.setItem('count', JSON.stringify(`${countryName}`))
        location.href = "areacountry.html"
    })
}

//aside bar
$('.center').click(function() {
        let navWidth = $(".nav-list").outerWidth();
        console.log(-navWidth + "px");
        if ($('aside').css('left') === '0px') {

            $('aside').animate({ left: `${-navWidth+'px'}` }, 1000)

            $('.fa-xmark').addClass('d-none')

            $('.manu').removeClass('d-none')


        } else {
            $('aside').animate({ left: '0' }, 1000, function() {
                $(' aside ul li ').animate({
                    marginTop: '10px'
                }, 1000)
            })

            $('.fa-xmark').removeClass('d-none')

            $('.manu').addClass('d-none')


        }
    })
    // laading
$(document).ready(function() {
    $('.loading').fadeOut(1000);
});
