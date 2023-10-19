//Részletek az órákról
//Passion-A8202
document.getElementById('Passion-A8202-gomb').addEventListener('click', function() {
  window.open('passion_A8202.html', 'blank');
});

//RoyalLady-10405
document.getElementById('RoyalLady-10405-gomb').addEventListener('click', function() {
  window.open('royal_lady.html', 'blank');
});

//Sportive
document.getElementById('Sportive-gomb').addEventListener('click', function() {
  window.open('sportive.html', 'blank');
});

//LaPassion-10220
document.getElementById('LaPassion-10220-gomb').addEventListener('click', function() {
  window.open('lapassion_10220.html', 'blank');
});

//Classic-01002
document.getElementById('Classic-01002-gomb').addEventListener('click', function() {
  window.open('Classic-01002.html', 'blank');
});

//Adventic
document.getElementById('Adventic-gomb').addEventListener('click', function() {
  window.open('Adventic.html', 'blank');
});



// Checkbox szűrés
function handleCheckboxChange(checkbox, cardElements) {
  checkbox.addEventListener('change', function() {
    const kijeloltElemek = Array.from(cardElements).filter(function(elem) {
      const kategoria = elem.getAttribute('data-kategoria');
      return checkbox.checked ? kategoria === checkbox.getAttribute('name') : true;
    });

    cardElements.forEach(function(elem) {
      if (kijeloltElemek.includes(elem)) {
        elem.style.display = 'inline-flex';
      } else {
        elem.style.display = 'none';
      }
    });
  });
}

// Kártyák
const PassionElem = document.querySelectorAll('#Passion-A8202-kartya');
const RoyalLadyElem = document.querySelectorAll('#RoyalLady-10405-kartya');
const SportiveElem = document.querySelectorAll('#Sportive-kartya');
const LaPassionElem = document.querySelectorAll('#LaPassion-10220-kartya');
const ClassicElem = document.querySelectorAll('#Classic-01002-kartya');
const AdventicElem = document.querySelectorAll('#Adventic-kartya');

// Checkboxok
const PassionCheckbox = document.getElementById('Passion-A8202-checkbox');
const RoyalLadyCheckbox = document.getElementById('RoyalLady-10405-checkbox');
const SportiveCheckbox = document.getElementById('Sportive-checkbox');
const LaPassionCheckbox = document.getElementById('LaPassion-10220-checkbox');
const ClassicCheckbox = document.getElementById('Classic-01002-checkbox');
const AdventicCheckbox = document.getElementById('Adventic-checkbox');

// Szűrés
handleCheckboxChange(PassionCheckbox, PassionElem);
handleCheckboxChange(RoyalLadyCheckbox, RoyalLadyElem);
handleCheckboxChange(SportiveCheckbox, SportiveElem);
handleCheckboxChange(LaPassionCheckbox, LaPassionElem);
handleCheckboxChange(ClassicCheckbox, ClassicElem);
handleCheckboxChange(AdventicCheckbox, AdventicElem);