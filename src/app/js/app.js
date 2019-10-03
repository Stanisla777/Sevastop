

$(document).ready(function ($) {

    /*Карта в футере */

    ymaps.ready(init);

    function init () {
        var myMap = new ymaps.Map("map", {
            // Центр карты, указываем коордианты
            center:[44.607813, 33.518075],
            // Масштаб, тут все просто
            zoom: 18,
            // Отключаем все элементы управления
            controls: []
        });
        // Создание метки


        var myPlacemark = new ymaps.Placemark([44.607813, 33.518075], {
            iconCaption: 'улица Кулакова, 13'
        }, {
            // preset: 'islands#pinkDotIcon'

            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/metka.svg',
            // Размеры метки.
            iconImageSize: [45, 50],
            iconCaption: 'улица Кулакова, 13'
        },);

        // Добавление метки на карту
        myMap.geoObjects.add(myPlacemark);
    }




});


