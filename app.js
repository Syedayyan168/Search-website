class Car {
    constructor(model, company, image, price) {
        this.model = model;
        this.company = company;
        this.image = image;
        this.price = price;
    }

    createCard() {
        return `<div class="car-card">
                    <img src="${this.image}" alt="${this.model}" width="100%">
                    <h3>${this.model}</h3>
                    <p>${this.company}</p>
                    <p class="price">Price: ${this.price}</p>
                </div>`;
    }
}

class CarSearch {
    constructor() {
        this.cars = [
            new Car('Model S', 'Tesla', 'img 1.webp', '$80,000'),
            new Car('Model S', 'Tesla', 'img 2.jfif', '$82,000'),
            new Car('Model S', 'Tesla', 'img 3.jpg', '$85,000'),
            new Car('Model S', 'Tesla', 'img 4.jpg', '$83,000'),
            new Car('Civic', 'Honda', 'img 5.jpg', '$25,000'),
            new Car('Civic', 'Honda', 'img 6.jfif', '$26,500'),
            new Car('Civic', 'Honda', 'img 7.jpg', '$27,000'),
            new Car('Civic', 'Honda', 'img 8.jfif', '$28,000'),
            new Car('Corolla', 'Toyota', 'img 9.jfif', '$22,000'),
            new Car('Corolla', 'Toyota', 'img 10.jfif', '$23,500'),
            new Car('Corolla', 'Toyota', 'img 11.jpg', '$24,000'),
            new Car('Civic', 'Honda', 'img 12.avif', '$26,000'),
            new Car('Corolla', 'Toyota', 'img 13.webp', '$24,500'),
            new Car('Mustang', 'Ford', 'img 14.webp', '$55,000'),
            new Car('Mustang', 'Ford', 'img 15.png', '$58,000'),
            new Car('Mustang', 'Ford', 'img 16.avif', '$60,000'),
            new Car('A4', 'Audi', 'img 17.jpg', '$40,000'),
            new Car('A4', 'Audi', 'img 18.webp', '$42,500')
        ];
        this.displayCars(this.cars);
        document.getElementById('search-btn').addEventListener('click', () => this.filterCars());
    }

    displayCars(cars) {
        const container = document.getElementById('car-container');
        container.innerHTML = cars.map(car => car.createCard()).join('');
        container.classList.add("car-grid");
    }

    filterCars() {
        const nameFilter = document.getElementById('car-name').value.toLowerCase();
        const modelFilter = document.getElementById('car-model').value.toLowerCase();
        
        const filtered = this.cars.filter(car => 
            (nameFilter ? car.company.toLowerCase() === nameFilter : true) &&
            (modelFilter ? car.model.toLowerCase() === modelFilter : true)
        );
        
        this.displayCars(filtered);
    }
}

document.addEventListener('DOMContentLoaded', () => new CarSearch());
