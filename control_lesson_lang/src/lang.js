const Lang = function() {
    let data = [];

    let inputFormElem = null;
    let wordInput = null;
    let wordtranslateInput = null;

    let listWrapper = null;
    let listTitle = null;
    let listTitleWord = null;
    let listTitleTranslate = null;
    let allListElem = null;

    console.log(data);

    this.init = (idElem) => {
        const rootElem = document.querySelector('#' + idElem);
        rootElem.classList.add('app');

        if (!rootElem) return;

        inputFormElem = document.createElement('div');
        inputFormElem.classList.add('lang__form');

        wordInput = document.createElement('input');
        wordInput.classList.add('form_inputWord');
        wordInput.type = 'text';
        wordInput.name = 'word_input';
        wordInput.placeholder = 'Word';

        wordtranslateInput = document.createElement('input');
        wordtranslateInput.classList.add('form_inputTranslate');
        wordtranslateInput.type = 'text';
        wordtranslateInput.name = 'translate_input';
        wordtranslateInput.placeholder = 'Translate';

        const addBtnElem = document.createElement('button');
        addBtnElem.classList.add('form_btn');
        addBtnElem.innerHTML = '+';

        listWrapper = document.createElement('div');
        listWrapper.classList.add('lang__list_wrapper');

        listTitle = document.createElement('div');
        listTitle.classList.add('list__title');

        listTitleWord = document.createElement('span');
        listTitleWord.classList.add('list__title_word');
        listTitleWord.innerHTML = 'Word';

        listTitleTranslate = document.createElement('span');
        listTitleTranslate.classList.add('list__title_translate');
        listTitleTranslate.innerHTML = 'Translate';

        allListElem = document.createElement('ul');
        allListElem.classList.add('lang__list');

        inputFormElem.append(wordInput, wordtranslateInput, addBtnElem);
        listTitle.append(listTitleWord, listTitleTranslate);
        listWrapper.append(listTitle, allListElem);
        rootElem.append(inputFormElem, listWrapper);

        addBtnElem.addEventListener('click', add);
    }

    const add = () => {
        if (wordInput.value == 0 || wordtranslateInput.value == 0) return;

        const word = wordInput.value;
        const translate = wordtranslateInput.value;

        wordInput.value = '';
        wordtranslateInput.value = '';

        itemData = {
            word: word,
            translate: translate
        };

        data.push(itemData);

        update();
    };

    const remove = (index = null) => {
        // console.log(index);
        
        data.splice(index, 1);
        update();
    };

    const get = (index = null) => {
        if (index >= 0) return data[index];

        return data;
    };

    const listen = (index = null) => {
        const item = get(index);
        // console.log(item);

        if (!item) return;

        let speech = new SpeechSynthesisUtterance(item.translate);
		speech.voice = window.speechSynthesis.getVoices()[2];
		window.speechSynthesis.speak(speech);
    };

    const update = () => {
        allListElem.innerHTML = '';

        data.forEach((item, index) => {
            // console.log(item, index)
            const listItem = document.createElement('li');
            listItem.classList.add('list__item');

            let listItemWord = document.createElement('span');
            listItemWord.classList.add('list__item_word');
            listItemWord.innerHTML = item.word;

            let listItemTranslate = document.createElement('span');
            listItemTranslate.classList.add('list__item_translate');
            listItemTranslate.innerHTML = item.translate;

            let listItemListen = document.createElement('button');
            listItemListen.classList.add('list__item_listen');

            let listItemRemove = document.createElement('button');
            listItemRemove.classList.add('list__item_remove');

            listItem.append(listItemWord, listItemTranslate, listItemListen, listItemRemove);
            allListElem.append(listItem);

            listItemRemove.addEventListener('click', () => {
                remove(index);
            });

            listItemListen.addEventListener('click', () => {
                listen(index);
            });
        })
    };

    this.init('lang');
};

window.addEventListener('load', () => { new Lang(); });