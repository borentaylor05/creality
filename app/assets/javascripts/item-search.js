// JavaScript Document
$(document).ready(function(){
	
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
				$('.arrow1').css({'-moz-transform': 'rotate(-180deg)'
				});//end CSS
				$('.arrow1').animate({
					'margin-left': '0px',
					//'margin-top': '-424px'
					},100, 'linear'
					);
					$('.drop-link').next('.menu1').slideDown (300);
		},
		function() {
				$('.arrow1').css({'-moz-transform': 'rotate(0deg)'
				});
				$('.arrow1').animate(origin1,300, 'linear');
					$('.drop-link').next('.menu1').slideUp (300);
			}); // End toggle 1
			
			$('.arrow2, .link2').toggle(function() {
				$('.arrow2').css({'-moz-transform': 'rotate(-180deg)'
				});//end CSS
				$('.arrow2').animate({
					'margin-left': '0px',
					//'margin-top': '-424px'
					},100, 'linear'
					);
					$('.drop-link').next('.menu2').slideDown (300);
		},
		function() {
				$('.arrow2').css({'-moz-transform': 'rotate(0deg)'
				});
				$('.arrow2').animate(origin2,300, 'linear');
					$('.drop-link').next('.menu2').slideUp (300);
			}); // End toggle 2
			
			$('.arrow3, .link3').toggle(function() {
				$('.arrow3').css({'-moz-transform': 'rotate(-180deg)'
				});//end CSS
				$('.arrow3').animate({
					'margin-left': '0px',
					//'margin-top': '-424px'
					},100, 'linear'
					);
					$('.drop-link').next('.menu3').slideDown (300);
		},
		function() {
				$('.arrow3').css({'-moz-transform': 'rotate(0deg)'
				});
				$('.arrow3').animate(origin3,300, 'linear');
					$('.drop-link').next('.menu3').slideUp (300);
			}); // End toggle 3
			
			$('.arrow4, .link4').toggle(function() {
				$('.arrow4').css({'-moz-transform': 'rotate(-180deg)'
				});//end CSS
				$('.arrow4').animate({
					'margin-left': '0px',
					//'margin-top': '-424px'
					},100, 'linear'
					);
					$('.drop-link').next('.menu4').slideDown (300);
		},
		function() {
				$('.arrow4').css({'-moz-transform': 'rotate(0deg)'
				});
				$('.arrow4').animate(origin4,300, 'linear');
					$('.drop-link').next('.menu4').slideUp (300);
			}); // End toggle 4
			
			$('.arrow5, .link5').toggle(function() {
				$('.arrow5').css({'-moz-transform': 'rotate(-180deg)'
				});//end CSS
				$('.arrow5').animate({
					'margin-left': '0px',
					//'margin-top': '-424px'
					},100, 'linear'
					);
					$('.drop-link').next('.menu5').slideDown (300);
		},
		function() {
				$('.arrow5').css({'-moz-transform': 'rotate(0deg)'
				});
				$('.arrow5').animate(origin5,300, 'linear');
					$('.drop-link').next('.menu5').slideUp (300);
			}); // End toggle 5
		
		});//End ready