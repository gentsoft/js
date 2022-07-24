const getToolTips = function() {
    const toolTips = document.querySelectorAll('[data-tooltips');
    console.log(toolTips);
    let div = document.querySelector('#content1');

    if (toolTips.length == 0) return;

    const takeTooltips = function(event) {
        
        let attribute = this.getAttribute('title');
        div.innerHTML = attribute;

        this.removeAttribute('title');

        div.classList.add('tooltips');
        div.style.left = (event.x - 25) + 'px';
        div.style.top = (event.y - 25) + 'px';
    }

    const returnAttributeTitle = function() {
        this.setAttribute('title', div.innerHTML);

        div.classList.remove('tooltips');
        div.innerHTML = '';
    }

    toolTips.forEach(function(elem) {
        elem.addEventListener('mouseover', takeTooltips);

        elem.addEventListener('mouseleave', returnAttributeTitle)
    });
};

window.addEventListener('load', function() {
    getToolTips();
})