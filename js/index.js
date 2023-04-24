"use strict";

 //burger menu

  const burger = document.querySelector('.burger');
   const burgerMenu = document.querySelector('.header__body');
 burger.addEventListener('click', burgers);
 
  function burgers(){
    burger.classList.toggle('open');
     burgerMenu.classList.toggle('active');
    document.body.style.overflow = 'visible';
     if(burger.classList.contains('open')){
        document.body.style.overflow = 'hidden';
     }
  }


  //ссылки
 
   const items = document.querySelectorAll('.menu-item');
    items.forEach(item =>{
        const menuItem = item; 
     menuItem.addEventListener('click', clicke);
    });
     function clicke(){;
        burger.classList.remove('open');
        burgerMenu.classList.remove('active');
         document.body.style.overflow = 'visible';
     }

    
     //swiper

     new Swiper('.swiper', {
      loop: true,
      })
      

      //scroll top

      const scrollElement = document.querySelector('.scroll-top');
       window.addEventListener('scroll', function (e){
           if(window.pageYOffset >= 2000){
            scrollElement.classList.add('act');
          }
          if(window.pageYOffset <= 1999){
            scrollElement.classList.remove('act');
          }
       });
        scrollElement.addEventListener('click', function (e){
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
          scrollElement.classList.remove('act');
        })
         