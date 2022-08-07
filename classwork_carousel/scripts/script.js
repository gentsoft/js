const slider = function(opt) {

    if (!opt.name || !opt.btns.left || !opt.btns.right) return;

    const listElem = document.querySelector('#' + opt.name);

    if (!listElem || listElem.children.length <= 1) return;

    const btnLeft = document.querySelector('#' + opt.btns.left);
    const btnRight = document.querySelector('#' + opt.btns.right);

    if (!btnLeft || !btnRight) return;

    const prev = function() {
        
        let x = listElem.style.transform;

        if (!x) {
            x = 0;
        } else {
            x = x.replace('translateX(', '');
            x = x.replace('%)', '');
            x = Math.abs(x);
        }

        x -= 100;

        listElem.style.transform = `translateX(-${x}%)`;

    };

    const next = function() {
        let x = listElem.style.transform;

        if (!x) {
            x = 0;
        } else {
            x = x.replace('translateX(', '');
            x = x.replace('%)', '');
            x = Math.abs(x);
        }

        x += 100;

        const stopPoint = (listElem.children.length - 1) * 100;

        if (x <= stopPoint) listElem.style.transform = `translateX(-${x}%)`;
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
        
        const dir = (this == btnLeft) ? 'prev' : 'next';

        x += 100 * (dir == 'prev' ? -1 : 1);

        const stopPoint = (listElem.children.length - 1) * 100;

        if (x <= stopPoint) listElem.style.transform = `translateX(-${x}%)`;
        else if (x > stopPoint) listElem.style.transform = `translateX(0%)`;
        
        if (dir == 'prev' && x < 0) listElem.style.transform = `translateX(-${stopPoint}%)`;
    };

    // btnLeft.addEventListener('click', prev);
    // btnRight.addEventListener('click', next);

    btnLeft.addEventListener('click', prevNext);
    btnRight.addEventListener('click', prevNext);

};

window.addEventListener('load', function() {
    
    const slider1_options = {
        name: 'slider1',
        btns: {
            left: 'slider1_btn_left',
            right: 'slider1_btn_right'
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