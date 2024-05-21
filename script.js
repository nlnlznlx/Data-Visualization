const costumes = [
    { url: 'img/02-StNicolas.png', name: 'Saint-Nicolas', info: 'Offered by Les Amis de Manneken-Pis' },
    { url: 'img/05-Elvis.png', name: 'Elvis Presley', info: 'Offered by the Brussels branch of the Elvis Presley fan club' },
    { url: 'img/34-Obelix.png', name: 'Obélix', info: 'Offered by Editions Albert René' },
    { url: 'img/01-foot.png', name: 'Diable Rouge', info: 'Offered by Union Royale Belge des sociétés de football' },
    { url: 'img/07-LouisXV.png', name: 'Louis XV', info: 'Offered by Louis XV in 1747' }
];

let currentCostume = -1;

window.addEventListener('load', function() {
    document.getElementById('costumeImage').style.display = 'none';
    document.getElementById('costumeInfo').textContent = 'Dress me up!';
});


function updateCostume() {
    if (currentCostume === -1) {
        document.getElementById('costumeImage').style.display = 'none'; // Hide if no costume is selected
        document.getElementById('costumeInfo').textContent = 'Dress me up!';
    } else {
        document.getElementById('costumeImage').style.display = 'block'; // Show when a costume is selected
        const costume = costumes[currentCostume];
        document.getElementById('costumeImage').src = costume.url;
        document.getElementById('costumeInfo').textContent = `${costume.name} - ${costume.info}`;
    }
}

function nextCostume() {
    currentCostume = (currentCostume + 1) % costumes.length;
    updateCostume();
}

function previousCostume() {
    currentCostume = (currentCostume - 1 + costumes.length) % costumes.length;
    updateCostume();
}
