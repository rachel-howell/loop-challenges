// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.

function multOfThree() {
    for (var i=100; i>=0; i-=1) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

multOfThree();