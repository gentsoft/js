let main = document.querySelector('.app__tasks');
let input = document.querySelector('.app__tasks_input')

let list = document.createElement('ul');
main.append(list);
list.setAttribute('class', 'listTasks');


let inputEnterTask = document.querySelector('input');
    inputEnter = function() {
        document.body.style.backgroundColor = '#ff9696';
    };

    inputEnter2 = function() {
        document.body.style.backgroundColor = 'rgba(150, 253, 255, 1)';
    };

inputEnterTask.addEventListener('click', inputEnter);
inputEnterTask.addEventListener('blur', inputEnter2);


let NewTask = function() {

    let length = list.children.length;
    // console.log(length);

    let task = document.createElement('li');
    task.classList.add('listTasks__li');

    let inputElem = document.querySelector('input');

    let label = document.createElement('label');
    label.setAttribute('for', 'checkbox' + (length + 1));
    label.classList.add('listTasks__label')

    let chBox = document.createElement('input');
    chBox.setAttribute('type', 'checkbox');
    chBox.setAttribute('id', 'checkbox' + (length + 1));

    let span = document.createElement('span');
    span.innerHTML = inputElem.value;
    span.classList.add('listTasks__span');

    task.append(label);
    label.append(chBox);
    label.append(span);
    list.append(task);

    inputElem.value = '';


    const completedTask = function() {

        if (chBox.checked) span.classList.add('span');
        else span.classList.remove('span');

    };

    label.addEventListener('click', completedTask);


    label.addEventListener('dblclick', function(event) {
        if (event) {
            
            span.innerHTML = '';

            let input2 = document.createElement('input');
            input2.setAttribute('class', 'app__tasks_input2');
            input2.classList.add('input2');
            task.append(input2);

            let inputElemNew = document.querySelector('.app__tasks_input2');

            inputElemNew.addEventListener('keyup', function(e) {
                if (e.keyCode === 13) {
                    span.innerHTML = inputElemNew.value;
                    input2.remove();
                }
            })
            
            label.append(span);
            
            span.classList.remove('span');
        }
    });


    const buttonDel = function() {
        
        let btn = document.createElement('button');
        btn.classList.add('buttonDel')
        btn.innerHTML = 'Delete';
        list.after(btn);

        btn.addEventListener('click', function() {
            list.innerHTML = '';
            btn.remove();
        })
    };

    length = list.children.length;
    if (length == 1) buttonDel();
};

inputEnterTask.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        NewTask();
    }
});