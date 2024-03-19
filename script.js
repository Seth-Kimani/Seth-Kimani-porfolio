document.addEventListener("DOMContentLoaded", () => {

	const links = document.querySelectorAll('.link');
	const bar = document.querySelector('.bar');
	const modal = document.querySelector('.modal');
	const nav = document.querySelector('nav');
	const close = document.querySelector('.close');
	
	
	modal.style.display = 'none';
	
	function closeModal() {
		modal.style.display = 'none';
		nav.style.display = 'flex';
	}
	
	bar.addEventListener("click", () => {
		modal.style.display = 'flex';
	})
	
	close.addEventListener("click", closeModal);
	
	links.forEach((link) => {
		link.addEventListener("click", (e) => {
			e.preventDefault();
			
			links.forEach(link => {
				link.classList.remove('active');
			});
	
			
			const targetId = link.getAttribute('href').substring(1); // Get the target section ID
			const targetSection = document.getElementById(targetId);
			
			if (targetSection) {
				const offset = 60; // Adjust this value to set the desired offset
				const scrollPosition = targetSection.offsetTop - offset;
				
				window.scrollTo({
					top: scrollPosition,
					behavior: 'smooth' // Optional: Add smooth scrolling
				});
			}
			
			modal.style.display = 'none';	
			
			if (link.classList.contains('active')) return
			link.classList.add('active');
		})
	});
});

