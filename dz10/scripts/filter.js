const filter = function() {

    const main = document.getElementById("portfolio");
    console.log(main)
    const filter = main.getElementsByClassName("portfolio__filter");
    
    let btns,
        btn;

    for (let i = 0; i < filter.length; i++) {
        btns = filter[i];
        let li = btns.children;
        console.log(li);
        for (let i = 0; i < li.length; i++) {    
            btn = li[i];
            btn.addEventListener('click', function() {

                for (let i = 0; i < li.length; i++) {
                    li[i].classList.remove('active');
                }             

                this.classList.add('active');
                
                if (this.dataset.filter == "sites") {
                    showSites();
                } else if (this.dataset.filter == "logo") {
                    showLogo();
                } else if (this.dataset.filter == "design") {
                    showDesign();
                } else {
                    showAll();
                };
            });
        };
    };
   

    const ul = main.getElementsByClassName("portfolio__list");
    
    let list;
    for (let i = 0; i < ul.length; i++) {
        list = ul[i];
    };

    let item = list.querySelectorAll('[data-filter]');
    const showSites = function() {
        item.forEach(function(element) {
            element.style.display = 'block';
            if (element.dataset.filter !== "sites") element.style.display = 'none';
        });
    };

    const showLogo = function() {
        item.forEach(function(element) {
            element.style.display = 'block';
            if (element.dataset.filter !== "logo") element.style.display = 'none';
        });
    };

    const showDesign = function() {
        item.forEach(function(element) {
            element.style.display = 'block';
            if (element.dataset.filter !== "design") element.style.display = 'none';
        });
    };

    const showAll = function() {
        item.forEach(function(element) {
            element.style.display = 'block';
        });
    };
    
};

filter('portfolio'); // id