class User {
    #obj = {};

    constructor(data) {
        if (!data) return;
        if (data.phone == undefined || data.phone.length == 0) return;

        this.#obj = data;
    };
    edit(data) {
        if (!data) return;
        
        this.#obj = {...this.#obj, ...data};
    };
    get() {
        return this.#obj;
    };
};
// let user = new User();

// console.log(user);
// user.edit( {name: 'Alex', color: 'green', lastName: 'Pupkins', phone: '7777777'} );
// console.log(user.obj.name);
// console.log(user.get());
// console.log(user.obj);


class Contacts {
    lastId = 0;
    #data = [];
    add(data) {
        let contact = new User(data);
        const contactKeys = Object.keys(contact.get());
        if (contactKeys.length == 0) return;
        this.lastId++;
        contact.id = this.lastId;
        this.#data.push(contact);
    }
    edit (id, obj) {
        if (!id) return;
        const item = this.#data.find(item => item.id == id);
        if (!item) return;
        item.edit(obj);
    }
    remove (id) {
        if (!id) return;
        const newData = this.#data.filter(item => item.id != id); 
        this.#data = newData;
    }
    get (id, print = false) {
        if (id > 0) {
            const item = this.#data.find(item => item.id == id);
            if (item) {
                return print ? item.get() : item;
            }
        } else if (!id && print) {
            this.#data.forEach(item => console.log(item.get()));
            return;
        }
        return this.#data;
    }
};
// const noteBook = new Contacts();

// noteBook.add({ name: 'Denis', lastName: 'White', phone: '5093748729' });
// noteBook.add({ name: 'Tom', lastName: '', email: 'tom@gmail.com', phone: '6738984' } );
// noteBook.edit(2, { name: 'Kate', color: 'pink' });
// console.log(noteBook);
// console.log(noteBook.get(false, true));


class ContactsApp extends Contacts {
    contactsNameInput = null;
    contactslastNameInput = null;
    contactsPhoneInput = null;
    contactsNoteInput = null;

    contactsFormElem = null;
    contactsListElem = null;

    numId = 0;
    constructor (id) {
        super()
        this.id = id;
        this.data = [];
        this.app();
    }



    onAdd(event) {
        if (event.code != 'Enter' || !event.ctrlKey) return;
        if (!this.contactsPhoneInput) return;
        this.numId++;

        this.name = this.contactsNameInput.value;
        this.lastName = this.contactslastNameInput.value;
        this.phone = this.contactsPhoneInput.value;
        this.note = this.contactsNoteInput.value;

        // console.log(this.name, this.lastName, this.phone, this.note);

        this.add({
            name: this.name,
            lastName: this.lastName,
            phone: this.phone,
            note: this.note
        })

        this.update();
        
        this.contactsNameInput.value = '';
        this.contactslastNameInput.value = '';
        this.contactsPhoneInput.value = '';
        this.contactsNoteInput.value = '';
    }

    update() {
        this.data = this.get();

        this.contactsListElem.innerHTML = '';
        // console.log(this.data);

        this.data.forEach(contact => {
            let id = contact.id;
            contact = contact.get();

            const contactElem = document.createElement('li');
            contactElem.classList.add('contact');

            const contactRemoveElem = document.createElement('button');
            contactRemoveElem.classList.add('contact__remove');
            contactRemoveElem.innerHTML = '+'

            if (contact.name) contactElem.innerHTML = `
            <h3 class="contact__item contact__name">${contact.name}</h3>`;
            if (contact.lastName) contactElem.innerHTML += `<h3 class="contact__item contact__lastName">${contact.lastName}</h3>`;
            if (contact.phone) contactElem.innerHTML += `<h3 class="contact__item contact__phone">${contact.phone}</h3>`;
            if (contact.note) contactElem.innerHTML += `<h3 class="contact__item contact_note">${contact.note}</h3>`;

            contactElem.append(contactRemoveElem);
            this.contactsListElem.append(contactElem);

            contactRemoveElem.addEventListener('click', (event) => {
                this.onRemove(id);
            });

            contactElem.addEventListener('dblclick', (event) => {
                this.onEdit(id);
            })
        })
    }

    onEdit(id) {

    }

    onRemove(id) {
        // console.log(id);
        this.remove(id);
        this.update();
    }

    app() {
        const rootElem = document.querySelector('#' + this.id);
        rootElem.classList.add('contacts');

        this.contactsFormElem = rootElem.querySelector('.contacts__form');
        this.contactsListElem = rootElem.querySelector('.contacts__list');

        if (!this.contactsFormElem || !this.contactsListElem) return;

        this.contactsNameInput = document.createElement('input');
        this.contactsNameInput.type = 'text';
        this.contactsNameInput.name = 'contact_name';
        this.contactsNameInput.placeholder = 'Name';
        this.contactsNameInput.classList.add = 'contacts__form input';

        this.contactslastNameInput = document.createElement('input');
        this.contactslastNameInput.type = 'text';
        this.contactslastNameInput.name = 'contact_lastName';
        this.contactslastNameInput.placeholder = 'lastName';
        this.contactslastNameInput.classList.add = 'contacts__form input';

        this.contactsPhoneInput = document.createElement('input');
        this.contactsPhoneInput.type = 'text';
        this.contactsPhoneInput.name = 'contact_phone';
        this.contactsPhoneInput.placeholder = 'Phone*';
        this.contactsPhoneInput.classList.add = 'contacts__form input';

        this.contactsNoteInput = document.createElement('input');
        this.contactsNoteInput.type = 'text';
        this.contactsNoteInput.name = 'contact_note';
        this.contactsNoteInput.placeholder = 'Note';
        this.contactsNoteInput.classList.add = 'contacts__form input';

        this.contactsFormElem.append(this.contactsNameInput, this.contactslastNameInput, this.contactsPhoneInput, this.contactsNoteInput);

        this.contactsNameInput.addEventListener('keyup', (event) => {
            this.onAdd(event);
        });
        this.contactslastNameInput.addEventListener('keyup', (event) => {
            this.onAdd(event);
        });
        this.contactsPhoneInput.addEventListener('keyup', (event) => {
            this.onAdd(event);
        });
        this.contactsNoteInput.addEventListener('keyup', (event) => {
            this.onAdd(event);
        });
    }
}

new ContactsApp('root');