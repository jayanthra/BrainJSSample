// Count to 5
// 1-5, 5-1

const trainingData = [
    [2,4,6,8,10,12,14,16],
    [5,4,3,2,1]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

//console.log(net.run([2,4,6,8,10,12,14]));
//console.log(net.run([5,4,3,2]));
console.log(net.run([2,4,6]));