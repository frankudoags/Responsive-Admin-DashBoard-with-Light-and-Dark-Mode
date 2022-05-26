const openBtn = document.querySelector('#menu-btn'),
     closeBtn = document.querySelector('#close-btn'),
     sideMenu = document.querySelector('aside'),
     themeToggler  = document.querySelector('.theme-toggler');

    //  Open MENU event listener
    openBtn.addEventListener('click', (e) => {
        sideMenu.style.display = 'block';
        e.preventDefault();
    });
    //  Close MENU event listener
    closeBtn.addEventListener('click', (e) => {
        sideMenu.style.display = 'none';
        e.preventDefault();
    });
    //Light and Dark Mode Toogler Event Listener
    themeToggler.addEventListener('click', (e) => {
        document.body.classList.toggle('dark-theme-variables');
        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
    })