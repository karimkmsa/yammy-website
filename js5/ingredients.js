var myHttp = new XMLHttpRequest;

categMeals = []
intgMeals = []




//ingredients
function getIngredients() {
    myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    myHttp.send();
    myHttp.addEventListener('readystatechange', function() {
        if (myHttp.readyState == 4) {
            intgMeals = JSON.parse(myHttp.response).meals;

            displayIntg()


        }
    })
}

function displayIntg() {
    var cartona = ``;

    for (let i = 0; i < 20; i++) {

        cartona += `<div class="col-lg-3 col-md-6 ">
        <div class="item position-relative ">
            <div class="area-item  d-flex justify-content-center align-items-center  text-white  rounded-3" cantoury="Polish">
                <div class="text-center">
                    <i class="fa-solid fa-bowl-food fa-3x"></i>
                    <h2 class="my-3 m" cantoury="Polish ">${intgMeals[i].strIngredient}</h2>
                    <p>${intgMeals[i].strDescription.split(' ').splice(0,15).join(" ")}</p>
                </div>
            </div>

        </div>
    </div>`

    }

    document.querySelector('.ingredientMeals').innerHTML = cartona;
    let meal = document.querySelectorAll('.m');
    let item = document.querySelectorAll('.item');
    for (let s = 0; s < meal.length; s++) {
        meal[s].addEventListener('click', function(e) {
            var categorys = $(e.target).text()
            localStorage.setItem('ingr', JSON.stringify(`${categorys}`))
            location.href = "Ingredientsmeals.html"
        })
    }
}
getIngredients()

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
