// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.

var sum = 0;

function sigma() {
    for (var i=1; i<=100; i++) {
        sum+=i;
    }
    console.log(sum);
}

sigma();