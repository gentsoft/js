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
        console.log('If ' + this.brand + ' ' + this.model + ' will moves ' + this.direction + ' at a speed ' + this.speed + 'km/h, then in ' + this.time + ' minutes it will travel ' + parseInt(this.distance) + ' km');
    };
};


let autoMercedes = function(brand, model, speed, time) {
    Auto.apply(this, arguments);

    this.characteristics = function() {
        this.brand = brand;
        this.model = model;
        this.power = confirm(`Let's GO? Start / Not`);

        if (this.power == true) {
            this.direction = 'forward';
            this.speed = speed;
            this.time = time;
        } else {
            alert('Please, start the car!');
        };

        this.distance = 0;

        this.operation();
    };
};

let mercedes = new autoMercedes('Mercedes', 'S500', 300, 25);
mercedes.characteristics();

console.log(mercedes);

// ------ По простому.., но с большего понял!!! --------------------------