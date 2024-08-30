const prDiv = document.querySelector(".profile-items-div");
		const prBtn = document.querySelector(".profile-img");
		const mdOBtn = document.querySelector(".mdl-btn-div");
		const mdDiv = document.querySelector(".modules");
		const mdCBtn = document.querySelector(".fa-xmark");


		prBtn.addEventListener('click', openPr);
		prDiv.addEventListener('click', closePr);
		mdOBtn.addEventListener('click', openMdl);
		mdCBtn.addEventListener('click', closeMdl);

		function openPr(){
			prDiv.style.display = 'flex';
		}
		function closePr(){
			prDiv.style.display = 'none';
		}
		function openMdl(){
			mdDiv.style.display = 'flex';
		}
		function closeMdl(){
			mdDiv.style.display = 'none';
		}
		// ====================================
		const dMdlDiv = document.querySelector(".modules-for-desktop");
		const dMdlSdiv = document.querySelector(".dtop-mdl-div");
		const dMdlBtn = document.querySelector(".dtop-mdl-btn");

		dMdlBtn.addEventListener('click',dopenmdl);

		function dopenmdl(){
			dMdlDiv.classList.toggle(".modules-for-desktop-active");
			dMdlSdiv.classList.toggle(".dtop-mdl-div-active");
		}