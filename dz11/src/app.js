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

        if (!contact || !contact.get) return;

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
    contactsAddBtn = null;

    contactsFormElem = null;
    contactsListElem = null;

    editStatus = false;
    editId = null;

    numId = 0;
    constructor () {
        super()
        this.data = [];
        
        this.app('root');
    }

    app(id) {
        const rootElem = document.querySelector('#' + id);
        rootElem.classList.add('contacts');

        this.contactsFormElem = rootElem.querySelector('.contacts__form');
        this.contactsListElem = rootElem.querySelector('.contacts__list');

        if (!this.contactsFormElem || !this.contactsListElem) return;

        this.contactsNameInput = document.createElement('input');
        this.contactsNameInput.type = 'text';
        this.contactsNameInput.name = 'contact_name';
        this.contactsNameInput.placeholder = 'Name';

        this.contactslastNameInput = document.createElement('input');
        this.contactslastNameInput.type = 'text';
        this.contactslastNameInput.name = 'contact_lastName';
        this.contactslastNameInput.placeholder = 'lastName';

        this.contactsPhoneInput = document.createElement('input');
        this.contactsPhoneInput.type = 'text';
        this.contactsPhoneInput.name = 'contact_phone';
        this.contactsPhoneInput.placeholder = 'Phone*';

        this.contactsNoteInput = document.createElement('input');
        this.contactsNoteInput.type = 'text';
        this.contactsNoteInput.name = 'contact_note';
        this.contactsNoteInput.placeholder = 'Note';

        this.contactsAddBtn = document.createElement('button');
        this.contactsAddBtn.innerHTML = 'Add';
        this.contactsAddBtn.classList.add = 'contacts__form_btn';

        this.contactsFormElem.append(this.contactsNameInput, this.contactslastNameInput, this.contactsPhoneInput, this.contactsNoteInput, this.contactsAddBtn);

        this.contactsAddBtn.addEventListener('click', () => {
            this.onAdd();
        });

        this.contactsAddBtn.addEventListener('click', () => {
            this.onSave();
        });
    }

    update() {
        this.data = this.get();

        this.contactsListElem.innerHTML = '';

        this.data.forEach(contact => {
            let id = contact.id;
            contact = contact.get();

            const contactElem = document.createElement('div');
            contactElem.classList.add('contact');
            const contactTitle = document.createElement('div');
            contactTitle.classList.add('contact__title');
            
            const contactTitleName = document.createElement('span');
            contactTitleName.innerHTML = contact.name;
            
            const contactTitleLastName = document.createElement('span');
            contactTitleLastName.innerHTML = contact.lastName;

            const contactContains = document.createElement('ul');
            contactContains.classList.add('contact__contain');

            const contactContainsData = document.createElement('li');

            const contactCorrectSection = document.createElement('li');
            contactCorrectSection.classList.add('contact__correction');

            const contactRemoveElem = document.createElement('button');
            contactRemoveElem.classList.add('contact__remove');
            contactRemoveElem.innerHTML = 'Remove';

            const contactEditElem = document.createElement('button');
            contactEditElem.classList.add('contact__edit');
            contactEditElem.innerHTML = 'Edit';

            if (contact.name) contactContainsData.innerHTML = `
            <h3 class="contact__item contact__name">${contact.name}</h3>`;
            if (contact.lastName) contactContainsData.innerHTML += `<h3 class="contact__item contact__lastName">${contact.lastName}</h3>`;
            if (contact.phone) contactContainsData.innerHTML += `<h3 class="contact__item contact__phone">${contact.phone}</h3>`;
            if (contact.note) contactContainsData.innerHTML += `<h3 class="contact__item contact_note">${contact.note}</h3>`;

            contactCorrectSection.append(contactRemoveElem, contactEditElem);
            contactTitle.append(contactTitleName, contactTitleLastName);
            contactContains.append(contactContainsData, contactCorrectSection);
            contactElem.append(contactTitle, contactContains);
            this.contactsListElem.append(contactElem);

            contactElem.addEventListener('click', () => {
                event.stopPropagation();
                contactContains.classList.toggle('active');
            });

            contactRemoveElem.addEventListener('click', (event) => {
                this.onRemove(id);
            });

            contactEditElem.addEventListener('click', (event) => {
                this.onEdit(id);
            });
        })
    }

    onAdd() {
        if (this.editStatus) return;

        if (!this.contactsPhoneInput || this.contactsPhoneInput == '') return;
        
        // !!! не работает вторая часть услови this.contactsPhoneInput = пустой строке!!!

        this.numId++;

        this.name = this.contactsNameInput.value;
        this.lastName = this.contactslastNameInput.value;
        this.phone = this.contactsPhoneInput.value;
        this.note = this.contactsNoteInput.value;

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

    onEdit(id) {
        this.data = this.get(id, true);

        if (!this.data) return;

        this.editStatus = true;
        this.editId = id;

        this.contactsNameInput.value = '';
        this.contactslastNameInput.value = '';
        this.contactsPhoneInput.value = '';
        this.contactsNoteInput.value = '';
        if (this.data.name && this.data.name.length > 0) this.contactsNameInput.value = this.data.name;
        if (this.data.lastName && this.data.lastName.length > 0) this.contactslastNameInput.value = this.data.lastName;
        if (this.data.phone && this.data.phone.length > 0) this.contactsPhoneInput.value = this.data.phone;
        if (this.data.note && this.data.note.length > 0) this.contactsNoteInput.value = this.data.note;

        this.name = this.contactsNameInput.value;
        this.lastName = this.contactslastNameInput.value;
        this.phone = this.contactsPhoneInput.value;
        this.note = this.contactsNoteInput.value;
        this.update();
    }

    onSave(event) {
        if (!this.editId || !this.editStatus) return;
        if (!this.contactsPhoneInput || this.contactsPhoneInput == '') return;

        this.name = this.contactsNameInput.value;
        this.lastName = this.contactslastNameInput.value;
        this.phone = this.contactsPhoneInput.value;
        this.note = this.contactsNoteInput.value;

        this.data = this.get(this.editId);

        this.data.edit({
            name: this.name,
            lastName: this.lastName,
            phone: this.phone,
            note: this.note
        })

        this.editStatus = false;
        this.editId = null;

        this.update();
        
        this.contactsNameInput.value = '';
        this.contactslastNameInput.value = '';
        this.contactsPhoneInput.value = '';
        this.contactsNoteInput.value = '';
    }

    onRemove(id) {
        // console.log(id);
        this.remove(id);
        this.update();
    }
}

new ContactsApp();