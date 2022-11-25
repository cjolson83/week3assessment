var restaurantList = ['Yoshitomo', 'Sgt. Peffers', 'Ika Ramen', 'Mas Chingon', 'Benson Brewery', 'Hartland Bar-B-Que'];

const random = Math.floor(Math.random() * restaurantList.length);

function restRec(evt) {
    alert(restaurantList[random])}


let restaurantRec = document.querySelector('#restaurantRec');

restaurantRec.addEventListener('click', restRec);

