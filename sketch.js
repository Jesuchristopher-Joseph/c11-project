var weight = [35,38,42,45,43,34,36,41,48,32];
var sum = 0;
for (i = 0; i < weight.length; i++){
sum = sum + weight[i];
}
var ave = sum / weight.length;
console.log(ave)
function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

