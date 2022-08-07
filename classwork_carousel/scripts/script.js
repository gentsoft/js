const slider = function(opt) {

    if (!opt.name || !opt.btns.left || !opt.btns.right) return;

    const listElem = document.querySelector('#' + opt.name);

    if (!listElem || listElem.children.length <= 1) return;

    const btnLeft = document.querySelector('#' + opt.btns.left);
    const btnRight = document.querySelector('#' + opt.btns.right);

    const bulletList = document.querySelectorAll('.bullet__item');
    
    const bullet1 = document.querySelector('#' + opt.bullets.n1);
    const bullet2 = document.querySelector('#' + opt.bullets.n2);
    const bullet3 = document.querySelector('#' + opt.bullets.n3);
    const bullet4 = document.querySelector('#' + opt.bullets.n4);

    if (!btnLeft || !btnRight) return;

    let newListElem;

    let parent = document.querySelector('.slider__list');
    const images = parent.querySelectorAll('img');

    let imagesArr = [];
    images.forEach(function(elem) {
        let src = elem.getAttribute('src');
        elem = src.replace('images/', '');
        imagesArr.push(elem);
    })

    const reset = function() {

        listElem.style.transform = `translateX(0%)`;
        x = 0;
    }

    const elemAfter = function(x) {

        newListElem = document.createElement('div');
        newListElem.classList.add('slider__item');

        let image = imagesArr.shift();

        let img = document.createElement('img');
        img.setAttribute('src', `images/${image}`);
        newListElem.setAttribute('id', 'new');
        // console.log(x)

        newListElem.append(img);
        parent.append(newListElem);

        if (x == 400) reset();
    }

    const prevNext = function() {

        let x = listElem.style.transform;
        
        if (!x) {
            x = 0;
        } else {
            x = x.replace('translateX(', '');
            x = x.replace('%)', '');
            x = Math.abs(x);
        }
        console.log(x)
        
        const dir = (this == btnLeft) ? 'prev' : 'next';

        x += 20 * (dir == 'prev' ? -1 : 1);

        let stopPoint = (listElem.children.length - 1) * 20;
        if (stopPoint > 380) stopPoint = 380;
        
        console.log(stopPoint)

        if (x <= stopPoint) listElem.style.transform = `translateX(-${x}%)`;
        if (x > (stopPoint - 100)) elemAfter(x);
        
        if (dir == 'prev' && x <= 0) listElem.style.transform = `translateX(-${stopPoint}%)`;

        autoSlide();

        if (x >= 100 && x < 200) {
            bulletList.forEach(function(item) {
                item.classList.remove('active');
            })
            bullet2.classList.add('active');
        } else if (x >= 200 && x < 300) {
            bulletList.forEach(function(item) {
                item.classList.remove('active');
            })
            bullet3.classList.add('active');
        } else if (x >= 300 && x < 400) {
            bulletList.forEach(function(item) {
                item.classList.remove('active');
            })
            bullet4.classList.add('active');
        } else if (x >= 400 || x == 0) {
            bulletList.forEach(function(item) {
                item.classList.remove('active');
            })
            bullet1.classList.add('active');
        }
    };


    const bulletFirst = function() {

        listElem.style.transform = 'translateX(0%)';
        bulletList.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.toggle('active');
    };

    const bulletSecond = function() {

        listElem.style.transform = 'translateX(-100%)';
        bulletList.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.toggle('active');
    };

    const bulletThird = function() {

        listElem.style.transform = 'translateX(-200%)';
        bulletList.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.toggle('active');
    };

    const bulletForth = function() {

        listElem.style.transform = 'translateX(-300%)';
        bulletList.forEach(function(item) {
            item.classList.remove('active');
        });
        this.classList.toggle('active');
    };

    // btnLeft.addEventListener('click', prev);
    // btnRight.addEventListener('click', next);

    btnLeft.addEventListener('click', prevNext);
    btnRight.addEventListener('click', prevNext);

    bullet1.addEventListener('click', bulletFirst);
    bullet2.addEventListener('click', bulletSecond);
    bullet3.addEventListener('click', bulletThird);
    bullet4.addEventListener('click', bulletForth);

    let time;

    const autoSlide = function() {
        time = setTimeout(prevNext, 3000)
    }

    autoSlide();
};

window.addEventListener('load', function() {
    
    const slider1_options = {
        name: 'slider1',
        btns: {
            left: 'slider1_btn_left',
            right: 'slider1_btn_right'
        },
        bullets: {
            n1: 'bullet_1',
            n2: 'bullet_2',
            n3: 'bullet_3',
            n4: 'bullet_4'
        }
    };

    slider(slider1_options);

    // const sld2Opts = {
    //     name: 'slider2',
    //     btns: {
    //         left: 'slider2_btn_left',
    //         right: 'slider2_btn_right'
    //     }
    // };

    // slider(sld2Opts);

});