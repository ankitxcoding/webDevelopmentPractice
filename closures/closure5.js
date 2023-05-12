// printing 1-5 one after another with the time interval gap of 1 second using var keyword

function x() {
    for(var i=1; i<=5; i++) {
        function z(i) {
            setTimeout(function y() {
                console.log(i);
            }, i*1000);
        }
        z(i);
    }
}
x();