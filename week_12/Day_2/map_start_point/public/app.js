
const initialize = function(){

    const container = document.querySelector('#main-map');
    const center = {lat: -50.6067956, lng: 165.968396};
    const zoom = 14;

    const otherMarker ={lat: 35.3098065, lng: -91.5679114};


    const map = new MapWrapper(container, center, zoom);
    map.addMarker(center);

    const bounceButton = document.getElementById('button-bounce-markers');
    bounceButton.addEventListener('click', map.bounceMarkers.bind(map));

    map.addClickEvent();

  };

window.addEventListener('DOMContentLoaded', initialize);
