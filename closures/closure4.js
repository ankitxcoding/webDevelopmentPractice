// printing 1-5 one after another with the time interval gap of 1 second

function x() {
    for(let i=1; i<=5; i++) {
        setTimeout(function y() {
            console.log(i);
        }, i*1000);
    }
}
x();