const filter = function() {

    const portfolio = document.querySelector("#portfolio");
    console.log(portfolio)
    const portfolioFilters = portfolio.querySelectorAll(".portfolio__filter li");

    const portfolioList = portfolio.querySelectorAll(".portfolio__list li");

    portfolioFilters.forEach(function(elems) {
        if (!elems) return;

        elems.addEventListener('click', function() {

            let data = elems.dataset.filter;
            console.log(data)

            portfolioFilters.forEach(function(elem) {
                elem.classList.remove('active');
            });

            this.classList.add('active');
            

            portfolioList.forEach(function(e) {
                switch (data) {
                    case 'sites':
                        e.style.display = 'block';
                        if (e.dataset.filter !== 'sites') e.style.display = 'none';
                    break;
                    case 'logo':
                        e.style.display = 'block';
                        if (e.dataset.filter !== 'logo') e.style.display = 'none';
                    break;
                    case 'design':
                        e.style.display = 'block';
                        if (e.dataset.filter !== 'design') e.style.display = 'none';
                    break;
                    default:
                        e.style.display = 'block';
                };
            });
        });
    });
};

filter('portfolio'); // id