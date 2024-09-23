



function main() {
    // let canvas = document.querySelector('.canvas');
    let html = document.querySelector('html');
    // let menu = document.querySelector('.menu');
    let menuSvg = document.querySelector('.menuSvg');
    let deskMenu = document.querySelector('.desktopMenu');
    let mobileMenu = document.querySelector('.mobileMenu');
    let width = window.innerWidth;

    let menuOpen = false;

    if(window.innerWidth > 480) {
        deskMenu.style.display = 'flex';
        mobileMenu.style.display = 'none';
        menuSvg.style.display = 'none';
    }

    menuSvg.addEventListener('click', () => {
        if(menuOpen) {
            menuOpen = false;
            mobileMenu.style.display = 'none';
            // console.log('menu closed');
            return;
        }
        mobileMenu.style.display = 'flex';
        menuOpen = true;
    });

    window.addEventListener('resize', () => {
        // console.log("resize");
        if(window.innerWidth <= 480) {
            deskMenu.style.display = 'none';
            mobileMenu.style.display = 'none';
            menuSvg.style.display = 'block';
            menuOpen = false;
            // console.log("less than 480");
        } else {
            deskMenu.style.display = 'flex';
            mobileMenu.style.display = 'none';
            menuSvg.style.display = 'none';
            // console.log('greater than 480');
        }
    })
    // html.style.height =screen.height;
    // let gl = canvas.getContext('webgl');
    // console.log(window);
    // console.log(screen);
    // if(!gl) {
    //     console.log("Webgl not found. Browser may not support it.");
    //     return;
    // }
    
    // let width = window.outerWidth,
    //     height = window.outerHeight;
    // const pi = 3.14159265;
    // canvas.width = width;
    // canvas.height = height;
    
    // gl.clearColor(0.0,0.0,0.0,1.0);
    // gl.clear(gl.COLOR_BUFFER_BIT);
    
    // let particles = [];

}

// function animate() {
//     gl.fillRect(0,0,width,height);


//     requestAnimationFrame(animate);
// }




main();