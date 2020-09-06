

$(function(){
    

    enquire.register("screen and (min-width: 768px)", {
        match : function() {     
            
        $(window).resize(function(){location.reload();});
               
       var menu = ['<img class="icon" src="images/icon/m-icon01.svg" alt=""/><span>次料管理</span>', 
				   '<img class="icon" src="images/icon/m-icon02.svg" alt=""/><span>模具管理</span>',
				   '<img class="icon" src="images/icon/m-icon03.svg" alt=""/><span>產銷排程管理</span>',
				   '<img class="icon" src="images/icon/m-icon04.svg" alt=""/><span>現場生產管理</span>'
				  ]

        var mySwiper = new Swiper ('.swiper-container', {
                    loop : true,
                    initialSlide: 0,
                    direction: 'vertical',
                    effect: 'fade',


                pagination: {
                  el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                      return '<span class="' + className + '">' + (menu[index]) + '</span>';
                    },
                },

                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              })


        $('.swiper-pagination-bullet').hover(function() {
          $( this ).trigger( "click" );
       });

            
            

        }
    });
			
    
    
    enquire.register("screen and (max-width: 767px)", {
        match : function() {
            
             var menu = ['<img class="icon" src="images/icon/m-icon01.svg" alt=""/> <span>次料管理</span>', 
				   		 '<img class="icon" src="images/icon/m-icon02.svg" alt=""/><span>模具管理</span>',
				         '<img class="icon" src="images/icon/m-icon03.svg" alt=""/><span>產銷排程管理</span>',
				         '<img class="icon" src="images/icon/m-icon04.svg" alt=""/><span>現場生產管理</span>'
				        ]

            var mySwiper = new Swiper ('.swiper-container', {
                    loop : true,
                    initialSlide: 0,
				 	effect: 'fade',
                pagination: {
                  el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                      return '<span class="' + className + '">' + (menu[index]) + '</span>';
                    },
                },

                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              })


       
            
            
            


        }

    });

 		
    
    

    



});

