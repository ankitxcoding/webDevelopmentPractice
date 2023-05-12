function z() {
    var b=20;
    function x() {
        var a=10;
        function y() {
            console.log(a, b);
        }
        y();
    }
    x();
}
z();