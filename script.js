/* モーダル */
const images = document.querySelectorAll(".zoom-img");
const modal = document.querySelector(".img-modal");
const modalImg = document.querySelector(".img-modal img");

if (modal) {
    images.forEach((img) => {
        img.addEventListener('click', () => {
            modal.classList.add('active');
            modalImg.src = img.src;
        });
    });
    modal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

const tabs = document.querySelectorAll('.tab-btn');
const pcView = document.querySelector('.results-pc');
const spView = document.querySelector('.results-sp');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(btn => {
            btn.classList.remove('active');
        });
        tab.classList.add('active');
        if(tab.dataset.target === 'pc'){
            pcView.classList.add('active-view');
            spView.classList.remove('active-view');
        }else{
            spView.classList.add('active-view');
            pcView.classList.remove('active-view');
        }
    });
});
/* ハンバーガー */
const hambuegerLogo = document.getElementById('hamburgerLogo');
const innerSp = document.getElementById('innerSp');
const overlay = document.getElementById('overlay');

hamburgerLogo.addEventListener('click', () => {
    hambuegerLogo.classList.toggle('active');
    innerSp.classList.toggle('active');
    overlay.classList.toggle('active');
});
overlay.addEventListener('click', () => {
    hambuegerLogo.classList.remove('active');
    innerSp.classList.remove('active');
    overlay.classList.remove('active');
});