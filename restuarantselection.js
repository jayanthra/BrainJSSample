const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};

// input: { Monday, Tuesday, Wednesday, etc. }
// output: { Restaurant1, Restaurant2 }

const trainingData = [];

for (let restaurantName in restaurants) {
    const dayOfWeek = restaurants[restaurantName];
    trainingData.push({
        input: { [dayOfWeek]: 1 },
        output: { [restaurantName]: 1 }
    })
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);
console.log(stats);

function restaurantForDay(day){
    const result = net.run({ [day]: 1 });
    let score = 0;
    let restaurantName = '';

    for(let restaurant in result){
        if(result[restaurant]>score){
            score = result[restaurant];
            restaurantName = restaurant;
        }
    }

    return restaurantName;
}


console.log("On monday :",restaurantForDay('Monday'));
console.log("On tuesday :",restaurantForDay('Tuesday'));
console.log("On wednesday :",restaurantForDay('Wednesday'));
console.log("On thursday :",restaurantForDay('Thursday'));
console.log("On friday :",restaurantForDay('Friday'));
console.log("On saturday :",restaurantForDay('Saturday'));
console.log("On sunday :",restaurantForDay('Sunday'));

