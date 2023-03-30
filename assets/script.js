let ukuranlayar = window.innerWidth;
const audio = document.querySelector('.audio');
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

$(window).on('load', function() {
    if($('.dashboard').hasClass('aktif')) {
        $('.myicon').css({
            'display': 'inline-block'
        })
    }
    if(scookie != 'null') {
        $('.myicon').css({
            'display': 'inline-block'
        })
        if(ukuranlayar <= 850) {
            $('.nav').css({
                'display': 'inline-block',
            })
        } else if(ukuranlayar > 850) {
            $('.nav').css({
                'display': 'none',
            })
        }
    } else {
        $('.nav').css({
            'display': 'none',
        })
    }
   
})


$('.myicon').on('click', function() {
    if($('.myicon i').hasClass('fa-play')) {
        $('.myicon').html('<i class="fas fa-pause"></i>');
        audio.play(); 
    } else {
        $('.myicon').html('<i class="fas fa-play"></i>');
        audio.pause();
    }
 });

var cookie  = getCookie('login'); 
var scookie = String(cookie); 

$('.open').on('click', function() {
    $('body, html').animate({
        scrollTop: 0,
    },0)
   


    if(ukuranlayar <= 850) {
        $('.nav').css({
            'display':'inline-block',
        })
    } else if(ukuranlayar > 850) {
        $('.nav').css({
            'display':'none',
        })
    }

    $('.invite').addClass('buka'); 
    $('.dashboard').addClass('aktif'); 
    $('.myicon').css({
        'display': 'inline-block'
    })
    audio.play(); 
    setCookie('login','true',1);    
})

$(window).on('scroll', function() {
	let value = $(this).scrollTop();
    let href  = $('.health-protocol').offset().top - 500;
    let lovestory = $('.love-story').offset().top - 300; 
	
	$('.hero .image').css({
		'transform': `translate(0px, ${value/13}%)`
	});

	$('.hero .title2').css({
		'transform':`translate(0px, ${value/12}%)` 
	})
	
	if(value > 0  && value <= 529) $('.logo1, .logo2, .logo3, .logo4').css({'filter': 'brightness(1)'})
	if(value > 529  && value <= 1408) $('.logo1, .logo2, .logo3, .logo4').css({'filter': 'brightness(0)'})
	if(value > 1408 && value <= 2626) $('.logo1, .logo2, .logo3, .logo4').css({'filter': 'brightness(1)'})
	if(value > 2626 && value <= 3507) $('.logo1, .logo2, .logo3, .logo4').css({'filter': 'brightness(0)'})
    if(value > 3507) $('.logo1, .logo2, .logo3, .logo4').css({'filter': 'brightness(1)'})
    if(value > lovestory) {
        $('.love-story .hilang').each((index, item) => {
            setTimeout(() => $('.love-story .hilang').eq(index).addClass('muncul'), index * 500); 
        })
    }

	
	if(value > href) {
		$('.protocol').each(function(i) {
			setTimeout(() => {
				$('.protocol').eq(i).addClass('muncul');
			}, 350 * i + 1);
		})
	} else {
		$('.protocol').removeClass('muncul');
	}
	
})

AOS.init({
	// Global settings:
	disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	initClassName: 'aos-init', // class applied after initialization
	animatedClassName: 'aos-animate', // class applied on animation
	useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	
  
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 150, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 1000, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: true, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation  
  });

gsap.from('.image', {
	duration: 0.5,
	y:'-200%',
	opacity:0, 
});

$('.page-link').on('click', function(e) {
	e.preventDefault(); 
	var href = $(this).attr('href'); 
	var href = $(href); 
	var href = href.offset().top - 150; 
	$('html').animate({
		scrollTop: href
	}, 1000, 'easeInOutExpo');
	
}); 

$('.slider2').slick({
	lazyLoad: 'ondemand',
  	slidesToShow: 2,
  	slidesToScroll: 1
})

$('.slider').slick({
	autoplay:true,  
	autoplaySpeed: 1000,
	centerMode: true,
	centerPadding: '60px',
	slidesToShow: 2,
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 2
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  });
	  


	document.addEventListener('click', async function(e) {
		if(e.target.classList.contains('copy')) {
			e.preventDefault();
			let rekening = e.target.dataset.rekening;
			await navigator.clipboard.writeText(rekening); 
			Swal.fire(
				'Good job!',
				'Copy Success!',
				'success'
			);
		}
	})



	// Mengatur waktu akhir perhitungan mundur
    var countDownDate = new Date("Sept 19, 2025 11:00:00").getTime();
    // Memperbarui hitungan mundur setiap 1 detik
    var x = setInterval(function() {
        // Untuk mendapatkan tanggal dan waktu hari ini
        var now = new Date().getTime();
        // Temukan jarak antara sekarang dan tanggal hitung mundur
        var distance = countDownDate - now;
    
        // Perhitungan waktu untuk hari, jam, menit dan detik
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        const hari = document.querySelector('.hari');
        const jam = document.querySelector('.jam');
        const menit = document.querySelector('.menit');
        const detik = document.querySelector('.detik');
        hari.innerHTML = days; 
        jam.innerHTML = hours; 
        menit.innerHTML = minutes;
        detik.innerHTML = seconds;
  
        // Jika hitungan mundur selesai, tulis beberapa teks 
            if (distance < 0) {
                clearInterval(x);
                hari.innerHTML = 0; 
                jam.innerHTML = 0; 
                menit.innerHTML = 0;
                detik.innerHTML = 0;
            }
        }, 1000);