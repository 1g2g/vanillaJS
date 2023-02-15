const container = document.getElementById("map");
const mapping = (lat, lng) => {
  let options = {
    center: new kakao.maps.LatLng(lat, lng),
    level: 3,
  };
  let map = new kakao.maps.Map(container, options);
};
const geolocationSuccess = (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  mapping(lat, lng);
};
const getLocationFail = () => {
  mapping(37.402056, 127.108212);
};
navigator.geolocation.getCurrentPosition(geolocationSuccess, getLocationFail);
