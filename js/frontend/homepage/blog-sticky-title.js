let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    var stickyContainer = document.querySelector('.stick-container');
    var originalPosition = document.querySelector('.fifth-section-container').offsetTop;
    var bottomDisplay = document.querySelector('.fifth-section-container').offsetHeight;
    var bottomPosition = originalPosition + bottomDisplay;
    var scrollTop = window.scrollY || window.pageYOffset;
    var threshold = -100;
    var bottomthreshold = -490;

    if (window.innerWidth <= 767) {
        stickyContainer.style.setProperty("position", "static", "important");
        stickyContainer.style.setProperty("width", "100%", "important");
        stickyContainer.style.top = '';
        stickyContainer.style.bottom = ''; 
       
    }else if(window.innerWidth <= 803){

        threshold = -80;
        bottomthreshold = -350;

        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '40%';
                stickyContainer.style.top = '14%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '40%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '18.3%';
            }
    
        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '40%';
                stickyContainer.style.top = '14%'; 
                stickyContainer.style.bottom = ''; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }
    
        }
    
        lastScrollTop = scrollTop;

    }else if(window.innerWidth <= 925){

        threshold = -80;
        bottomthreshold = -350;

        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '40%';
                stickyContainer.style.top = '14%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '40%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '17.7%';
            }
    
        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '40%';
                stickyContainer.style.top = '14%'; 
                stickyContainer.style.bottom = ''; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }
    
        }
    
        lastScrollTop = scrollTop;

    }else if(window.innerWidth <= 991){

        threshold = -80;
        bottomthreshold = -350;

        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '35%';
                stickyContainer.style.top = '16%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '35%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '17%';
            }
    
        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '35%';
                stickyContainer.style.top = '16%'; 
                stickyContainer.style.bottom = ''; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }
    
        }
    
        lastScrollTop = scrollTop;

    }else if(window.innerWidth <= 992){

        threshold = -80;
        bottomthreshold = -350;

        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = '16%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '15%';
            }
    
        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = '16%'; 
                stickyContainer.style.bottom = ''; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }
    
        }
    
        lastScrollTop = scrollTop;

    }else if(window.innerWidth <= 1091){

        threshold = -70;
        bottomthreshold = -360;

        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = '13%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '12.8%';
            }
    
        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = '13%'; 
                stickyContainer.style.bottom = ''; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }
    
        }
    
        lastScrollTop = scrollTop;
    }else if(window.innerWidth <= 1191){

        threshold = -70;
        bottomthreshold = -400;

        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = '13%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '12.7%';
            }
    
        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = '13%'; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }
    
        }
    
        lastScrollTop = scrollTop;

    }else if(window.innerWidth <= 1291){

         threshold = -50;
        bottomthreshold = -450;

        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = '10%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '12.7%';
            }
    
        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '45%';
                stickyContainer.style.top = '10%'; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }
    
        }
    
        lastScrollTop = scrollTop;
    }else if(window.innerWidth <= 1391){

        threshold = -100;
       bottomthreshold = -500;

       if (scrollTop > lastScrollTop) {
           if (scrollTop >= originalPosition + threshold) {
               stickyContainer.style.position = 'fixed';
               stickyContainer.style.width = '45%';
               stickyContainer.style.top = '15%';
               stickyContainer.style.bottom = ''; 
           } 
           if (scrollTop >= bottomPosition + bottomthreshold){
               stickyContainer.style.position = 'absolute';
               stickyContainer.style.width = '45%';
               stickyContainer.style.top = ''; 
               stickyContainer.style.bottom = '12.7%';
           }
   
       } else {
           if (scrollTop <= bottomPosition + bottomthreshold) {
               stickyContainer.style.position = 'fixed';
               stickyContainer.style.width = '45%';
               stickyContainer.style.top = '15%'; 
           }
           if (scrollTop <= originalPosition + threshold) {
               stickyContainer.style.position = 'static';
               stickyContainer.style.width = '100%';
           }
   
       }
   
       lastScrollTop = scrollTop;

    }else if(window.innerWidth <= 1491){

    threshold = -100;
   bottomthreshold = -480;

   if (scrollTop > lastScrollTop) {
       if (scrollTop >= originalPosition + threshold) {
           stickyContainer.style.position = 'fixed';
           stickyContainer.style.width = '45%';
           stickyContainer.style.top = '15%';
           stickyContainer.style.bottom = ''; 
       } 
       if (scrollTop >= bottomPosition + bottomthreshold){
           stickyContainer.style.position = 'absolute';
           stickyContainer.style.width = '45%';
           stickyContainer.style.top = ''; 
           stickyContainer.style.bottom = '11%';
       }

   } else {
       if (scrollTop <= bottomPosition + bottomthreshold) {
           stickyContainer.style.position = 'fixed';
           stickyContainer.style.width = '45%';
           stickyContainer.style.top = '15%'; 
       }
       if (scrollTop <= originalPosition + threshold) {
           stickyContainer.style.position = 'static';
           stickyContainer.style.width = '100%';
       }

   }

   lastScrollTop = scrollTop;
    }else if(window.innerWidth <= 1591){

        threshold = -100;
    bottomthreshold = -480;

    if (scrollTop > lastScrollTop) {
        if (scrollTop >= originalPosition + threshold) {
            stickyContainer.style.position = 'fixed';
            stickyContainer.style.width = '45%';
            stickyContainer.style.top = '15%';
            stickyContainer.style.bottom = ''; 
        } 
        if (scrollTop >= bottomPosition + bottomthreshold){
            stickyContainer.style.position = 'absolute';
            stickyContainer.style.width = '45%';
            stickyContainer.style.top = ''; 
            stickyContainer.style.bottom = '11%';
        }

    } else {
        if (scrollTop <= bottomPosition + bottomthreshold) {
            stickyContainer.style.position = 'fixed';
            stickyContainer.style.width = '45%';
            stickyContainer.style.top = '15%'; 
        }
        if (scrollTop <= originalPosition + threshold) {
            stickyContainer.style.position = 'static';
            stickyContainer.style.width = '100%';
        }

    }

    lastScrollTop = scrollTop;
    }else if(window.innerWidth <= 1691){

    threshold = -100;
   bottomthreshold = -480;

   if (scrollTop > lastScrollTop) {
       if (scrollTop >= originalPosition + threshold) {
           stickyContainer.style.position = 'fixed';
           stickyContainer.style.width = '45%';
           stickyContainer.style.top = '15%';
           stickyContainer.style.bottom = ''; 
       } 
       if (scrollTop >= bottomPosition + bottomthreshold){
           stickyContainer.style.position = 'absolute';
           stickyContainer.style.width = '45%';
           stickyContainer.style.top = ''; 
           stickyContainer.style.bottom = '10.5%';
       }

   } else {
       if (scrollTop <= bottomPosition + bottomthreshold) {
           stickyContainer.style.position = 'fixed';
           stickyContainer.style.width = '45%';
           stickyContainer.style.top = '15%'; 
       }
       if (scrollTop <= originalPosition + threshold) {
           stickyContainer.style.position = 'static';
           stickyContainer.style.width = '100%';
       }

   }

   lastScrollTop = scrollTop;
    }else if(window.innerWidth <= 1791){

    threshold = -100;
    bottomthreshold = -480;

    if (scrollTop > lastScrollTop) {
        if (scrollTop >= originalPosition + threshold) {
            stickyContainer.style.position = 'fixed';
            stickyContainer.style.width = '40%';
            stickyContainer.style.top = '15%';
            stickyContainer.style.bottom = ''; 
        } 
        if (scrollTop >= bottomPosition + bottomthreshold){
            stickyContainer.style.position = 'absolute';
            stickyContainer.style.width = '40%';
            stickyContainer.style.top = ''; 
            stickyContainer.style.bottom = '10%';
        }

    } else {
        if (scrollTop <= bottomPosition + bottomthreshold) {
            stickyContainer.style.position = 'fixed';
            stickyContainer.style.width = '40%';
            stickyContainer.style.top = '15%'; 
        }
        if (scrollTop <= originalPosition + threshold) {
            stickyContainer.style.position = 'static';
            stickyContainer.style.width = '100%';
        }

    }

    lastScrollTop = scrollTop;
    }else if(window.innerWidth <= 1920){

        threshold = -100;
        bottomthreshold = -480;

        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '35%';
                stickyContainer.style.top = '15%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '35%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '9.5%';
            }

        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '35%';
                stickyContainer.style.top = '15%'; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }

        }

        lastScrollTop = scrollTop;

    }else if(window.innerWidth <= 2175){

        threshold = -100;
        bottomthreshold = -500;

        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '35%';
                stickyContainer.style.top = '23%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '35%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '9.5%';
            }
    
        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '35%';
                stickyContainer.style.top = '23%'; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }
    
        }
    
        lastScrollTop = scrollTop;

    }else if(window.innerWidth <= 2456){

        threshold = -100;
        bottomthreshold = -490;

        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '31%';
                stickyContainer.style.top = '23%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '31%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '8.5%';
            }
    
        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '31%';
                stickyContainer.style.top = '23%'; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }
    
        }
    
        lastScrollTop = scrollTop;

    }else{
        if (scrollTop > lastScrollTop) {
            if (scrollTop >= originalPosition + threshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '28%';
                stickyContainer.style.top = '23%';
                stickyContainer.style.bottom = ''; 
            } 
            if (scrollTop >= bottomPosition + bottomthreshold){
                stickyContainer.style.position = 'absolute';
                stickyContainer.style.width = '28%';
                stickyContainer.style.top = ''; 
                stickyContainer.style.bottom = '8.5%';
            }
    
        } else {
            if (scrollTop <= bottomPosition + bottomthreshold) {
                stickyContainer.style.position = 'fixed';
                stickyContainer.style.width = '28%';
                stickyContainer.style.top = '23%'; 
            }
            if (scrollTop <= originalPosition + threshold) {
                stickyContainer.style.position = 'static';
                stickyContainer.style.width = '100%';
            }
    
        }
    
        lastScrollTop = scrollTop;
    }
    
});