var E4M = E4M || {};

E4M = {
    setUp: function () {
      //module init
        //this.startModule('Functions');
        //this.startModule('Carousel');
        //call plugin slide easy for me

        if(E4M.Carousel){
            this.initCarousel("#wrapCarouselE4m-banner","#carouselE4m-banner",1,true,true,10000);
            this.initCarousel("#wrapCarouselE4m-product","#carouselE4m-product",1,false,true,7000);
            //this.initCarousel("#wrapCarouselE4m-product-b","#carouselE4m-product-b",1,false,false,7000);
            this.initCarousel("#wrapCarouselE4m-secondary-a","#carouselE4m-secondary-a",1,false,false,10000);
            this.initCarousel("#wrapCarouselE4m-secondary-b","#carouselE4m-secondary-b",1,false,true,10000);
            this.initCarousel("#wrapCarouselE4m-secondary-c","#carouselE4m-secondary-c",1,false,false,10000);
        }

        if(E4M.Tab){
          E4M.Tab.setUp();
        }

        if(E4M.CustomSelect){
          E4M.CustomSelect.setUp();
        }
    },

    startModule: function(module){
      if(typeof(E4M[module]) == 'object'){
          if(typeof(E4M[module].init) == 'function'){
            E4M[module].init();
          }
      }
    },

    initCarousel: function(container,selector,maxThumbVisible,alertThumbLegend,autoPlay, time){
      if(document.querySelector(container) != null){
        var carouselE4m = new E4M.Carousel();
        carouselE4m._container = container;
        carouselE4m._selector = selector;
        carouselE4m._maxThumbVisible = maxThumbVisible;
        carouselE4m._boolShowFullLegend = alertThumbLegend;
        carouselE4m._auto = autoPlay;
        carouselE4m._time = time;
        carouselE4m.setUp();

        return carouselE4m;
      }
    }

};

$(document).ready( function () { E4M.setUp(); });