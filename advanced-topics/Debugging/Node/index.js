function main() {
    const car = 'Mercedes';
    const cars = ['Mercedes', 'BMW', 'Volkswagen', 'Audi'];
    
    if (cars.includes(car)) {
        cars.push('Mercedes AMG')
    }
    
    for(let i = 0; i <= cars.length; i++) {
        const currentCar = cars[i];
        if (currentCar === 'Volkswagen') {
            break;
        }
    }
}

main();