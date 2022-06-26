/*
Домашняя работа.
«Front End».Объекты»

Задание: Использую полученные знания, реализуйте экземпляр любого объекта. Объект
должен иметь, как внутренние, так и доступные для пользователя, свойства и методы.
Примеры объектов:
 Калькулятор. Возможные методы: вкл/выкл калькулятора, получение выражения для
расчета или, а и б числа с операцией, вычисление выражения, показ результата расчета.
 Лампочка. Возможные методы: ввод информации о лампочке (мощность, стоимость
электроэнергии), вкл./выкл. лампочки, получение расхода за горение лампочки,
счетчик горения лампочки.
 Чайник. Возможные методы: ввод инф. о чайнике (мощность, объем, кол-во воды),
вкл./выкл., расчет времени закипания воды.
 Автомобиль. Возможные методы: ввод информации об авто (марка, номер), вкл./выкл.
двигателя, вкл./выкл. передачи (вперед, назад, нейтральная), движение вперед и назад
(ввод информации о скорости движения), расчет пройденных километров.
 Контакты. Возм. методы: добавление нового контакта (ввод ФИО, возраст, телефон, эл.
почта), проверка введенной информации, например: проверить возраст – должен быть
целым неотрицательным числом больше 18, вывод информации о конкретном
контакте, вывод всех контактов.
Можно выдумать любой другой объект. Кол-во методов и свойств может быть любым, но не
менее трех.
*/

let Auto = function() {
    this.characteristics = function() {
        this.brand = prompt('brand');
        this.model = prompt('model');
        this.power = confirm(`Let's GO? Start / Not`);

        if (this.power == true) {
            this.direction = prompt('direction', 'forward, backward, neutral');
            this.speed = +prompt('Enter speed');
            this.time = +prompt('How minutes on the way?');
        } else {
            alert('Please, start the car!');
        };

        this.distance = 0;

        this.operation();
    };

    this.operation = function() {
        switch(this.direction) {
            case 'forward':
            case 'backward':
                this.distance = (this.speed / 60) * this.time;
            break;
            case 'neutral':
                alert('Turn on the transmission, please!');
            break;
        };
        
    
    this.show();
    }

    this.show = function() {
        console.log('If ' + this.brand + ' ' + this.model + ' will moves ' + this.direction + ' at a speed ' + this.speed + 'km/h, then in ' + this.time + ' minutes it will travel ' + this.distance + ' km');
    };
};

let auto = new Auto();
auto.characteristics();

console.log(auto);