
window.onload = function(){
    AOS.init();
};

window.addEventListener('scroll' , () => {
    const navbar = document.querySelector('.header');

    navbar.classList.toggle('sticky' , window.scrollY > 300);
})




const hamBtn = document.querySelector('.hamburgur-btn'),
navTog = document.querySelector('.nav');

hamBtn.addEventListener('click', toggleNav);

function toggleNav(){
 hamBtn.classList.toggle('open')   
 navTog.classList.toggle('active');
};

document.addEventListener('click' , (e) => {
   if(e.target.closest('.nav-links')) {

    toggleNav();

    console.log('true')
   }
});


    const filterCont = document.querySelector('.filter'),
    menuCont = document.querySelector('.menu-all-items');
    
    filterCont.addEventListener('click', (event) => {

        if(event.target.classList.contains('filter-item') &
        !event.target.classList.contains('active')){

         const target = event.target.getAttribute('data-target');   
            
        document.querySelector('.filter-item.active').classList.remove('active');
        event.target.classList.add('active');

        menuCont.querySelector('.tab-content.active').classList.remove('active');
        menuCont.querySelector(target).classList.add('active');

        AOS.init();
        }
    })
