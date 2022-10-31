var myHttp = new XMLHttpRequest;
let areaArr = []
categMeals = []
intgMeals = []


function getMeals() {
    if (localStorage.getItem('ingr') != null) {
        let counName = JSON.parse(localStorage.getItem('ingr'));
        myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/filter.php?i=${counName}`);
        myHttp.send();
        myHttp.addEventListener('readystatechange', function() {
            if (myHttp.readyState == 4) {
                areaArr = JSON.parse(myHttp.response).meals;

                displayArea()

            }
        })


    }
}


function displayArea() {
    var cartona = ``;

    for (let i = 0; i < areaArr.length; i++) {

        cartona += `
                <div class="col-lg-3 ">
                <div class="item position-relative ">
                    <img src="${areaArr[i].strMealThumb} " class="w-100 " alt=" ">
                    <div class=" position-absolute item-caption d-flex align-items-center ">
                        <h2 class="ms-3 m">${areaArr[i].strMeal}</h2>
                    </div>
                </div>
            </div>
                `

    }

    document.querySelector('.ingmeals').innerHTML = cartona;
    let meal = document.querySelectorAll('.m');
    let item = document.querySelectorAll('.item');
    for (let s = 0; s < meal.length; s++) {
        meal[s].addEventListener('click', function(e) {
            var categorys = $(e.target).text()
            localStorage.setItem('mealsval', JSON.stringify(`${categorys}`))
            location.href = "details.html"
        })
    }
}
getMeals()

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
