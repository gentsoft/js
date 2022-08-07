const gallery = function() {

    let gallery = document.querySelector('#gallery');

    if (!gallery) return;

    let list = gallery.querySelectorAll('.gallery__thumbs li');
    console.log(list)

    let galleryPreview = document.querySelector('.gallery__preview');
    galleryPreview.classList.add('hide');

    let btnClose = gallery.querySelector('.gallery__preview_close');

    list.forEach(function(elems) {

        const showGalleryImage = function(event) {
            event.preventDefault();

            let a = elems.querySelector('a').getAttribute('href');

            galleryPreview.innerHTML = '';
            let image = document.createElement('img');
            image.setAttribute("src", a);
            image.classList.add('image');

            galleryPreview.append(image);
            galleryPreview.append(btnClose);
            
            galleryPreview.classList.remove('hide');
        };

        btnClose.addEventListener('click', function() {
            galleryPreview.classList.add('hide');
            galleryPreview.innerHTML = '';
        })

        elems.addEventListener('click', showGalleryImage);
    })
};

gallery('gallery'); // id