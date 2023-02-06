/*функция для закрытия promotion*/

function promotionClose() {

    let closeBtn = document.querySelector('.promotion__close');
    let promotinBlock = document.querySelector('.promotion__close');

    closeBtn.addEventListener('click', () => {
        promotinBlock.classList.add('.close');
    });
}
/*выбор валют*/
function curency() {

    let currencyBtn = document.querySelector('.currency__item-active');
    let currencySubMenu = document.querySelector('.carrency__sub-menu');

    currencyBtn.addEventListener('click', () => {
        currencySubMenu.classList.add('.--open-menu');
    });
}