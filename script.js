	const openLogin= document.querySelector('.login');
	const openSignUp= document.querySelector('.tff');
	const loginPage= document.querySelector('#log-in');
	const signUpPage= document.querySelector('#sign_up');
	const closeLogin= document.querySelector('.close-login');
	const closeSignUp= document.querySelector('.closesignup');
	const go2log= document.querySelector('.go2login');
	const go2reg= document.querySelector('.go_reg');
	const goTop= document.querySelector('.go-to-top');
	const nav= document.querySelector('header');
	const closeNavMenu= document.querySelector('#closeMenu');
	const openNavMenu= document.querySelector('#openMenu');
	const navBar = document.querySelector('.nav-bar');
	const regFirst = document.querySelector('.s-box');





		closeLogin.addEventListener('click',close);
		openLogin.addEventListener('click',show);
		go2log.addEventListener('click',show);
		openSignUp.addEventListener('click',showsup);
		go2reg.addEventListener('click',showsup);
		closeSignUp.addEventListener('click',closesup);
		openNavMenu.addEventListener('click',showmenu);
		closeNavMenu.addEventListener('click',hidemenu);
		// quickEnrol.addEventListener('click', openLoginForEnrol);
		// regFirst.addEventListener('click', openReg);
		function show(){
			loginPage.style.display = 'flex';
			loginPage.style.right = '0';
			closeLogin.style.display = 'block';
			signUpPage.style.display = 'none';

		}
		function close(){
			loginPage.style.display = 'none'
			closeLogin.style.display = 'none'

		}
		function showsup(){
			// signUpPage.style.display = '';

			loginPage.style.display = 'flex'
			closeLogin.style.display = 'block';
		}
		function closesup(){
			signUpPage.style.display = 'none'
			closeLogin.style.display = 'none'

		}
		function showmenu(){
			navBar.style.left="0%";
			closeNavMenu.style.display="block";
			closeNavMenu.style.marginLeft="0%";
		}
		function hidemenu(){
			navBar.style.left="-100%";
			closeNavMenu.style.marginLeft="100%";
		}
		function gotop(){
			goTop.style.bottom = '100%';

		}
		function openReg(){
			loginPage.style.display='flex';
			closeLogin.style.display = 'flex'
		}
		function scrollValue() {
    	var navbar = document.getElementById('come-to-top');
    	var scroll = window.scrollY;
    	if (scroll < 260) {
        goTop.style.bottom = '100%';
        nav.style.position = 'relative';
        nav.style.background = 'none';
   		} else {
        goTop.style.bottom = '5%';
        goTop.style.display = 'flex'
        nav.style.position = 'fixed';
        nav.style.background = 'white';
    	}
	}

	window.addEventListener('scroll', scrollValue);
	//////////////////////////////////////////////
	if(screen.width<=500){

		function myZoomFunction()
		{
    		var Page = document.querySelector('body');
   	 		Page.style.zoom=0.3;
		}
	}
	else{}

	// const vulGyaBsdk = document.querySelector(".vulgya");
	// const yaadKarBtn = document.querySelector(".forget_password");

	// yaadKarBtn.addEventListener('click',yaadkar);
	// vulGyaBsdk.addEventListener('click',closeYaadkar);

	// function yaadkar(){
		// vulGyaBsdk.style.display='flex';
	// }
	// function closeYaadkar(){
		// vulGyaBsdk.style.display='none';
	// }
	 function checkPswd() {
        var userId = "iamsomnath";
        var confirmPassword ="6295997568";
        var password = document.getElementById("password").value;
        var confirmId = document.getElementById("uname").value;

        if (password == confirmPassword && confirmId == userId) {
               document.querySelector(".login-form").action ="classroom/classroom.html";
   
        }
        else if(password == "" || confirmId == ""){
        	alert("UserName Or Password Tera baap ake Dalega BSDK")
        }
        else{
            alert("Passwords do not match.");
        }
        console.log(password);

    }
      $(".forget_password").click(function(){
        Swal.fire(
            'Khabar Khete to Vulo ni Password Ki vabe Vulegele ??',
        )
    });
    $(".srch").click(function(){
       Swal.fire({
  			icon: 'error',
  			width: '1000px',
  			title: 'Oops...',
 			text: 'Filhal 1 hi Course Hai Search Karke Koi Faida Nahi Hai',
  			// footer: '<a href="">Why do I have this issue?</a>'
})
    });
     $("#fcours").click(function(){
        Swal.fire({
  			icon: 'error',
  			width: '1000px',
  			title: 'Oops...',
 			text: 'Filhal 1 hi Course Hai Search Karke Koi Faida Nahi Hai',
  			// footer: '<a href="">Why do I have this issue?</a>'
})
    });
     $("#quickEnroll").click(function(){
        Swal.fire(
  			'Please Login',
  			'With UserName and Password',
  			'question'
			)
    });