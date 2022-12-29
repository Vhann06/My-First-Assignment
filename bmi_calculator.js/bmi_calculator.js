/*
BMI	Weight Status
18.5—24.9	Healthy Weight
25.0—29.9	Overweight
30.0 and Above	Obesity
*/

let calcBMI = [
    ["Healthy Weight",18.5 < 24.9 ],
    ["Overweight",25.0 < 29.9],
    ["Above Obesity", 30.0]
];
let totalBMI = 0;

for(let i=0; i<calcBMI.lenght; i++){
    totalBMI += calcBMI[i][1];
}
let computeBMI =0;
computeBMI =totalBMI/calcBMI.length;

console.log(`BMI computation: ${computeBMI}`)
    


    OUTPUT


[Running] node "c:\Users\ADMIN\Documents\Home Assignment Operators & Functions\New folder\tempCodeRunnerFile.javascript"
BMI computation: 0

[Done] exited with code=0 in 0.107 seconds

