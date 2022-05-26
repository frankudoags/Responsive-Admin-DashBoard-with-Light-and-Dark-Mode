const openBtn = document.querySelector('#menu-btn'),
     closeBtn = document.querySelector('#close-btn'),
     sideMenu = document.querySelector('aside'),
     themeToggler  = document.querySelector('.theme-toggler'),
     dashBoardAnchor = document.querySelectorAll('.anc');


    const dataItems =  {
        
    };

    dashBoardAnchor.forEach((anchor) => {
        if(anchor.classList.contains('active')) {
            dataItems.activeElem = anchor;
        }
    });



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

    // Set active class to clicked anchor tag
    dashBoardAnchor.forEach( (anchor) => {
        anchor.addEventListener('click', (e) => {
            if(dataItems.activeElem === anchor) return;
            
            dataItems.activeElem.classList.remove('active');
            dataItems.activeElem = e.currentTarget;
            dataItems.activeElem.classList.add('active');
    
        })
    })