function Solve(val) {
    var v = document.getElementById('calc');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementById('calc').value;
    var num2 = eval(num1);
    document.getElementById('calc').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('calc');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('calc');
    ev.value = ev.value.slice(0,-1);
 }