const cityNames=['Santiago', 'Los Angeles', 'Punta Arenas', 'Chillan', 'Talca', 'Valparaiso'];
let cityList= document.getElementById("city_list");
let cardsClima= '';
let cityLabel= '';

$(document).ready(function(){
    for(let i= 0; i< cityNames.length; i++){
        $("#city_list").append("<option>" + cityNames[i] + "</option>");
        console.log(cityNames[i])
    }
    $("#clima_btn").click(function(){
        cityLabel= ($("#city_list").val()).toString().toLowerCase();
        $.get("https://api.weatherapi.com/v1/forecast.json?key=4d800615a5ef4220a41210502240305&q=" +
        cityLabel + " chile&days=10&aqi=no&alerts=no", function(data){
                const pais= (data.location.country).toString();
                const ciudad= (data.location.name).toString(); 
                console.log(pais);
                $.each(data.forecast.forecastday, function(i, item){
                    $("#city_label").val(cityLabel.toUpperCase());
                    cardsClima= '<div class="card my-2" style="width: 18rem;">' +
                        '<img src="img/cloud.jpeg" class="card-img-top" alt="...">' +
                        '<div class="card-body">' +
                        '<h5 class="card-title">Lunes</h5>' +
                        '<p class="card-text">Temperatura Máxima: ' + item.maxtemp_c + "<br>"
                        "Temperatura Mínima: " + item.mintemp_c + "</p>" +
                        '<a href="#" class="btn btn-primary">Go somewhere</a> </div>' +
                        '</div>';
                    $("#clima_display").append(cardsClima);
                })

                
        })
    })
})