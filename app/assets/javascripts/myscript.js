// JavaScript Document



$(document).ready(function() { // Allows information popups for channel and profile "?" buttons.
	$('#sellers, #buyers, .createUser').hide();

	$('.showBuySell').click(function() {
		$('#sellers, #buyers').fadeIn(300).css('z-index', 1000);
		$('.overlay2').fadeIn(200);
	});
	$('.overlay2').click(function () {
		$('#buyers, #sellers').fadeOut();
	});
	

	function shadow() {
		$('.link1').css('text-shadow', '2px 2px  lime');
		};
	function noShadow (){
		$('.link1').css('text-shadow', 'none');
		};

	
	$('.drop-link').toggle(function() {
						$(this).next('.drop-menu').slideDown (300);	
						$(this).css('text-shadow', '2px 2px  lime');
											
				},
				function () {
					$(this).next('.drop-menu').slideUp(300);
					$(this).css('text-shadow', 'none');
					});//end toggle
					
					  
		$('.drop-menu2').css({'border': '1px solid #ccc',
							'width':'550px',
							'box-shadow': '4px 4px 4px #666',
							'margin-left': '20px',
							'padding-left': '20px',
							'border-radius': '5px',
							'color':'#000'
							});//End CSS
		
		
		
		
		var origin1 = {'margin-left':'449px'};
		var origin2 = {'margin-left':'438px'};
		var origin3 = {'margin-left':'451px'};
		var origin4 = {'margin-left':'407px'};
		var origin5 = {'margin-left':'451px'};
		
		$('.arrow1, .link1').toggle(function() {
				$('.arrow1').css({'-moz-transform': 'rotate(-180deg)',
									'-webkit-transform':'rotate(-180deg)'
				});//end CSS
				$('.arrow1').animate({
					'margin-left': '0px',
					//'margin-top': '-424px'
					},100, 'linear'
					);
					$('.drop-link').next('.menu1').slideDown (300);
					$('.link1').css('text-shadow', '2px 2px  lime');
		},
		function() {
				$('.arrow1').css({'-moz-transform': 'rotate(0deg)',
								'-webkit-transform':'rotate(0deg)'
				});
				$('.arrow1').animate(origin1,300, 'linear');
					$('.drop-link').next('.menu1').slideUp (300);
				 $('.link1').css('text-shadow', 'none');
			}); // End toggle 1
			
			$('.arrow2, .link2').toggle(function() {
				$('.arrow2').css({'-moz-transform': 'rotate(-180deg)',
				'-webkit-transform':'rotate(-180deg)'
				});//end CSS
				$('.arrow2').animate({
					'margin-left': '0px',
					//'margin-top': '-424px'
					},100, 'linear'
					);
					$('.drop-link').next('.menu2').slideDown (300);
					$('.link2').css('text-shadow', '2px 2px  lime');
		},
		function() {
				$('.arrow2').css({'-moz-transform': 'rotate(0deg)',
				'-webkit-transform':'rotate(0deg)'
				});
				$('.arrow2').animate(origin2,300, 'linear');
					$('.drop-link').next('.menu2').slideUp (300);
					$('.link2').css('text-shadow', 'none');
			}); // End toggle 2
			
			$('.arrow3, .link3').toggle(function() {
				$('.arrow3').css({'-moz-transform': 'rotate(-180deg)',
				'-webkit-transform':'rotate(-180deg)'
				});//end CSS
				$('.arrow3').animate({
					'margin-left': '0px',
					//'margin-top': '-424px'
					},100, 'linear'
					);
					$('.drop-link').next('.menu3').slideDown (300);
					$('.link3').css('text-shadow', '2px 2px  lime');
		},
		function() {
				$('.arrow3').css({'-moz-transform': 'rotate(0deg)',
				'-webkit-transform':'rotate(0deg)'
				});
				$('.arrow3').animate(origin3,300, 'linear');
					$('.drop-link').next('.menu3').slideUp (300);
					$('.link3').css('text-shadow', 'none');
			}); // End toggle 3
			
			$('.arrow4, .link4').toggle(function() {
				$('.arrow4').css({'-moz-transform': 'rotate(-180deg)',
				'-webkit-transform':'rotate(-180deg)'
				});//end CSS
				$('.arrow4').animate({
					'margin-left': '0px',
					//'margin-top': '-424px'
					},100, 'linear'
					);
					$('.drop-link').next('.menu4').slideDown (300);
					$('.link4').css('text-shadow', '2px 2px  lime');
		},
		function() {
				$('.arrow4').css({'-moz-transform': 'rotate(0deg)',
				'-webkit-transform':'rotate(0deg)'
				});
				$('.arrow4').animate(origin4,300, 'linear');
					$('.drop-link').next('.menu4').slideUp (300);
					$('.link4').css('text-shadow', 'none');
			}); // End toggle 4
			
			$('.arrow5, .link5').toggle(function() {
				$('.arrow5').css({'-moz-transform': 'rotate(-180deg)',
				'-webkit-transform':'rotate(-180deg)'
				});//end CSS
				$('.arrow5').animate({
					'margin-left': '0px',
					//'margin-top': '-424px'
					},100, 'linear'
					);
					$('.drop-link').next('.menu5').slideDown (300);
					$('.link5').css('text-shadow', '2px 2px  lime');
		},
		function() {
				$('.arrow5').css({'-moz-transform': 'rotate(0deg)',
				'-webkit-transform':'rotate(0deg)'
				});
				$('.arrow5').animate(origin5,300, 'linear');
					$('.drop-link').next('.menu5').slideUp (300);
					$('.link5').css('text-shadow', 'none');
			}); // End toggle 5
		
	
	
	$('.searchImage').mouseenter(function(){
		$('.fuzz').fadeIn(300)	
		
		});
		
		
		
	$('.drop-menu').hide();
	var original = $('.img0').css({'background-image': 'url(images/middle-logo.png)',
									'marginLeft': '413px',
									'border':'none'
									 })
	
	$('.searchImage').hover(function(){
		$(this).append('<div class="fuzz"></div>');
		
			$('.fuzz').css({
					'positon': 'absolute',
					'height': '125px',
					'width': '125px',
					'border-radius': '110px',
					'background-color': '#000',
					'opacity': .6,
					'z-index': 20
				});//end css
		$(this).prepend('<button class="within">Enlarge</button> <button class="item">Item Page</button>');
			$('.within, .item').css({
				'position': 'absolute',
				'text-align': 'center',
				'margin-left': '13px',
				'margin-top': '20px',
				'z-index': 21,
				'font-family': '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
				'width': '100px',
				'font-size': '.8em',
				'border-radius': '25px',
				'backgground-color': '#09f'
			
			});//end css
			
			$('.item').css({
			
				'margin-top': '70px',
				
			});//end css
		$(this).css('border', '10px solid #09f');
		},
		function () {
				$(this).css('border', '10px solid #666666');
				$('.within, .fuzz, .item').remove();
			}); // End hover Searchimage
			
	$('.image').each(function() {
			var centerPhoto = $(this).css('background-image');
			$(this).hover(function() {
				$(this).css('border', '10px solid #09f');
					$('.img0').css(
					{
						'background-image': centerPhoto,
						'z-index': 200,
						'marginLeft': '403px',
					});//End CSS
			},
			function() {
				$(this).css('border', '10px solid #666666');
					$('.img0').css({'background-image': 'url(images/middle-logo.png)',
									'marginLeft': '413px',
									'border':'none',
									'backgroundColor':'transparent',
									'z-index':10
									 });
						
				}); //End hover
		}); // End each
		
	

var total = $('.image').length;
var angle = 90;


var children =0;
var radius = 50;
var offset2 = 0;

 
    function drawers(selector, center, radius, n, offsetleft, offsettop)
    {
    
    var alpha = Math.PI * 2 / n;
           
    $(selector).each(function(index)
    {
        var theta = alpha * index;
        var pointx  =  Math.floor(Math.cos( theta ) * radius);
        var pointy  = Math.floor(Math.sin( theta ) * radius );
		
		if(index > Math.floor(n/2))
		{
		   offset2 = 60 * index - (offsetleft+50);
		}else{
		  offset2 = -50*index;
		}
		
        $(this).css('margin-left', pointx + offsetleft + offset2 + 'px');
        $(this).css('margin-top', pointy + offsettop + 'px');
    });
   

    }

       
       
/*
drawers('.image',50, 300, total, 300, 350);
*/

drawers('.image',50, 330, total, 400, 190);
//drawEllipse('.image',50, 60, 400, 500, 360);
                  

			$('.overlay2, #channelPopUp, #profilePopUp').hide();
			
			$('#profile-info').click(function() {
				$('.overlay2, #profilePopUp').fadeIn(700);
					
						});//End Question Mark Click
					$('.overlay2').click(function() {
							$(this).fadeOut(700);
							$('#profilePopUp').fadeOut(700);
						});//End Click fuzz	
				$('#channel-info').click(function() {
					$('.overlay2').fadeIn(700);
					$('#channelPopUp').fadeIn(700);
						});//End Question Mark Click
					$('.overlay2').click(function() {
							$(this).fadeOut(700);
							$('#channelPopUp').fadeOut(700);
						});//End Click fuzz
					
						
				
				
				
		
				$('.box').fancybox({
					overlayColor: '#666',
					overlayOpacity: .8,
					transitionIn: 'fade',
					transitionOut: 'fade',
					titlePosition: 'over'
					});

		
        }); //End Ready
		
		// JavaScript Document