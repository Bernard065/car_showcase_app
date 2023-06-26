

export async function fetchCars() {
    const headers ={
        'X-RapidAPI-Key': 'ac0e1db2eemsha208e4b3a2ffbc9p1167e2jsn1f807686ecc1',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}