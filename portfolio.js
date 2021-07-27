let mobileDropDownBtn = document.getElementById('menu-btn');
let mobileExpandedMenu = document.getElementById('mobile-expanded-menu');

let arrayOfMenuNodes = [mobileDropDownBtn, mobileExpandedMenu];

for (let i = 0; i < arrayOfMenuNodes.length; i++) {
  arrayOfMenuNodes[i].addEventListener('click', function() {
    document.getElementById('mobile-expanded-menu').classList.toggle('disabled');
    document.querySelector('html').classList.toggle('no-overflow-y'); 
  });
}