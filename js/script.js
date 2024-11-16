const imgs = document.querySelectorAll('.header-slider ul img');
const prevBtn = document.querySelector('.control-prev');
const nextBtn = document.querySelector('.control-next');

let n = 0;

function changeSlide() {
    for(let i=0; i<imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prevBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(n > 0) 
    {
        n--;
    }
    else
    {
        n = imgs.length-1;
    }
    changeSlide();
})

nextBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    if(n < imgs.length-1) 
    {
        n++;
    }
    else
    {
        n = 0;
    }
    changeSlide();
})

// const scrollContainer = document.querySelectorAll('.products');
// for(const item of scrollContainer){
//     item.addEventListener('wheel', (e)=>{
//         e.preventDefault();
//         item.scrollLeft += e.deltaY;
//     });
// }

document.addEventListener("DOMContentLoaded", function () {
    // Select all product sliders
    const productSliders = document.querySelectorAll('.products-slider');
    
    productSliders.forEach(slider => {
        const productsContainer = slider.querySelector('.products');
        const controlPrev = slider.querySelector('.control-prev');
        const controlNext = slider.querySelector('.control-next');
        const scrollAmount = 220; // Adjust based on image width + gap

        controlPrev.addEventListener('click', function (e) {
            e.preventDefault();
            productsContainer.scrollBy({
                left: -scrollAmount, // Scroll left
                behavior: 'smooth',
            });
        });

        controlNext.addEventListener('click', function (e) {
            e.preventDefault();
            productsContainer.scrollBy({
                left: scrollAmount, // Scroll right
                behavior: 'smooth',
            });
        });
    });
});

// Products Slider (With price)
const productsWithPriceContainer = document.querySelector('.products-slider-with-price .products');
const ctrlPrev = document.querySelector('.products-slider-with-price .control-prev');
const ctrlNext = document.querySelector('.products-slider-with-price .control-next');
const scrollAmt = 220;

ctrlPrev.addEventListener('click', function (e) {
    e.preventDefault();
    productsWithPriceContainer.scrollBy({
        left: -scrollAmt,
        behavior: 'smooth',
    });
});

ctrlNext.addEventListener('click', function (e) {
    e.preventDefault();
    productsWithPriceContainer.scrollBy({
        left: scrollAmt,
        behavior: 'smooth',
    });
});
