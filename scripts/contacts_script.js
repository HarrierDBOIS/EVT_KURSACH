function initMap() {
    try {
        const myMap = new ymaps.Map("map", {
            center: [55.755864, 37.583662], // Новинский бульвар, 8
            zoom: 16
        });

        const myPlacemark = new ymaps.Placemark([55.755864, 37.583662], {
            hintContent: 'Офис SecureConsult',
            balloonContent: 'Москва, Новинский бульвар, 8'
        });

        myMap.geoObjects.add(myPlacemark);
    } catch (error) {
        showMapError();
    }
}

function showMapError() {
    document.getElementById("map").style.display = "none";
    document.getElementById("map-error").style.display = "block";
}

window.addEventListener("load", function () {
    if (typeof ymaps !== "undefined") {
        ymaps.ready(initMap);
    } else {
        showMapError();
    }
});
