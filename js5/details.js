var myHttp = new XMLHttpRequest;
detailsMeal = []


function getMeals() {
    if (localStorage.getItem('mealsval') != null) {
        let counName = JSON.parse(localStorage.getItem('mealsval'));
        myHttp.open('GET', `https://www.themealdb.com/api/json/v1/1/search.php?s=${counName}`);
        myHttp.send();
        myHttp.addEventListener('readystatechange', function() {
            if (myHttp.readyState == 4) {
                detailsMeal = JSON.parse(myHttp.response).meals;
                console.log(detailsMeal[0]);

                displaydetails()

            }
        })


    }
}


function displaydetails() {
    var cartona = ` <div class="row p-5">
    <div class="col-lg-4 text-center">
        <img src="${detailsMeal[0].strMealThumb}" alt="" class="w-100">
        <h2>${detailsMeal[0].strMeal}</h2>
    </div>
    <div class="col-lg-7">
        <h2>Instructions</h2>
        <p>${detailsMeal[0].strInstructions}</p>
        <p><span class="fw-bolder">Category</span>: Side</p>
        <p><span class="fw-bolder">Recipes </span>: </p>
        <ul class="menu1">
            <li>${detailsMeal[0].strIngredient1}</li>
            <li>${detailsMeal[0].strIngredient2}</li>
            <li>${detailsMeal[0].strIngredient3}</li>
            <li>${detailsMeal[0].strIngredient4}</li>
            <li>${detailsMeal[0].strIngredient5}</li>
            <li>${detailsMeal[0].strIngredient6}</li>

        </ul>
        <p><span class="fw-bolder">Recipes </span>: </p>
        <ul class="menu2">
            <li>${detailsMeal[0].strMeasure1}</li>
            <li>${detailsMeal[0].strMeasure2}</li>


        </ul>
        <a class="btn btn-success mt-5" href="${detailsMeal[0].strSource}" target="_blank">Source</a>
        <a class="btn btn-danger mt-5" href="${detailsMeal[0].strYoutube}" target="_blank">youtube</a>

    </div>
</div>`;



    document.querySelector('.details').innerHTML = cartona;
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
