const restaurants = [
    { name: 'The Yard Milkshake Bar', url: 'https://www.theyardmilkshakebar.com/' },
    { name: 'Jeni’s', url: 'https://jenis.com/' },
    { name: 'The Optimist', url: 'https://www.theoptimistrestaurant.com/' }
];

let len = restaurants.length;

document.getElementById('recomm-restaurant').addEventListener('click', function() {
    const randInx = Math.floor(Math.random() * len);
    const selected = restaurants[randInx];
    alert('We recommend: ' + selected.name);
});