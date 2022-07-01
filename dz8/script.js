let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8')

let title = document.createElement('title');
title.innerHTML = 'Home work N8';

document.head.appendChild(metaUtf8);
document.head.appendChild(title);

// html.setAttribute('lang', 'en');

let h2 = document.createElement('h2');
h2.innerHTML = 'Choose Your Options';
document.body.appendChild(h2);
h2.style.fontSize = '48px';
h2.style.fontWeight = '300';
h2.style.textAlign = 'center';

let p1 = document.createElement('p');
p1.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
document.body.appendChild(p1);
p1.classList.add('p1');

let stylep1 = document.createElement('style');
stylep1.innerHTML = `
    .p1 {
        text-align: center;
        margin-bottom: 50px;
        color: #ccc;
    }
`;

document.head.appendChild(stylep1);

let div1 = document.createElement('div');
div1.innerHTML = '';
document.body.appendChild(div1);
div1.classList.add('contain');

let styleopt = document.createElement('style');
styleopt.innerHTML = `
    .contain {
        display: flex;
        justify-content: space-between;
        // align-items: center;
        border: 2px solid #ededed;
        border-radius: 15px;
        margin: 0 200px;
        overflow: hidden;
    }
`;

document.head.appendChild(styleopt);

// -----------------------------------

let div2 = document.createElement('div');
div2.innerHTML = '';
div1.appendChild(div2);
div2.classList.add('option__list');

let style = document.createElement('style');
style.innerHTML = `
    .option__list {
        padding: 100px 120px;
        // width: 100%;
        align-items: center;
        text-align: center;
        flex: 1 1;
    }

    .option__list:hover {
        background-color: #8f75be;
    }
`;

document.head.appendChild(style);

let span1 = document.createElement('span');
span1.innerHTML = 'freelancer';
div2.appendChild(span1);
span1.classList.add('option__title');

let style2 = document.createElement('style');
style2.innerHTML = `
    .option__title {
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 2.5px;
        color: #ccc;
        text-transform: uppercase;
    }

    .option__list:hover .option__title {
        color: #ffc80a;
    }
`;

document.head.appendChild(style2);

let init1 = document.createElement('h2');
init1.innerHTML = 'Initially  designed to';
div2.appendChild(init1);
init1.classList.add('option__h2');

let style_h2 = document.createElement('style');
style_h2.innerHTML = `
    .option__h2 {
        font-size: 34px;
        font-weight: 400;
        letter-spacing: 2.5px;
        text-transform: uppercase;
    }

    .option__list:hover .option__h2 {
        color: #fff;
    }
`;

document.head.appendChild(style_h2);

let p3 = document.createElement('p');
p3.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
div2.appendChild(p3);
p3.classList.add('p1');

let btn1 = document.createElement('button');
btn1.innerHTML = 'start here';
div2.appendChild(btn1);
btn1.classList.add('option__btn');

let style_btn = document.createElement('style');
style_btn.innerHTML = `
    .option__btn {
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1px;
        text-transform: uppercase;
        background-color: #fff;
        padding: 15px 20px;
        border: 2px solid #ffc80a;
        border-radius: 30px;
    }

    .option__list:hover .option__btn {
        background-color: #8f75be;
        color: #fff;
    }
`;

document.head.appendChild(style_btn);

// -----------------------------------

let div3 = document.createElement('div');
div3.innerHTML = '';
div1.appendChild(div3);
div3.classList.add('option__list');

let span2 = document.createElement('span');
span2.innerHTML = 'studio';
div3.appendChild(span2);
span2.classList.add('option__title');

let init2 = document.createElement('h2');
init2.innerHTML = 'Initially  designed to';
div3.appendChild(init2);
init2.classList.add('option__h2');

let p4 = document.createElement('p');
p4.innerHTML = 'But I must explain to you how all this mistaken idea of denouncing';
div3.appendChild(p4);
p4.classList.add('p1');

let btn2 = document.createElement('button');
btn2.innerHTML = 'start here';
div3.appendChild(btn2);
btn2.classList.add('option__btn');