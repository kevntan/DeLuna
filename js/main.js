/* Menu toggle */ 
const showMenu = (toggleId, navId)=>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener('click', ()=>{
      nav.classList.toggle('show')
      toggle.classList.toggle('bx-x')
    })
  }
}
showMenu('header-toggle','nav-menu')

/* show and hide menu */
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
/* Active link */
navLink.forEach(n => n.classList.remove('active'));
this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/* Jquery carousel */
$(document).ready(function(){
	/* Set Options */
	
	// Fade speed
	var speed = 500;			
	// Auto slider options
	var autoswitch = true;		
	// Auto slider speed
	var autoswitch_speed = 4000	
	
	// Add initial active class
	$('.slide').first().addClass('active');
	
	// Hide all slides
	$('.slide').hide();
	
	// Show first slide
	$('.active').show();
	
	// Next Handler
	$('#next').on('click', nextSlide);
	
	// Prev Handler
	$('#prev').on('click', prevSlide);
	
	// Auto Slider Handler
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);
	}
	
	// Switch to next slide
	function nextSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	
	// Switch to prev slide
	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});
	
// Show first slide
$('.active').show();

// Next Handler
$('#next').on('click', nextSlide);

// Prev Handler
$('#prev').on('click', prevSlide);

// Auto Slider Handler
if(autoswitch == true){
	setInterval(nextSlide,autoswitch_speed);
}