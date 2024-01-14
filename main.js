var line = document.getElementById("line");
var line1 = document.getElementById("line1");
var line2 = document.getElementById("line2");
var line3 = document.getElementById("line3");
var text = document.getElementById("text");
function CalcDelta(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    line.innerHTML = `&Delta; = (b)<sup>2</sup> - 4ac`;
    if(a < 0){
        line1.innerHTML =`  = (${b})<sup>2</sup> - 4 x ( ${a} ) x ${c}`;
        line2.innerText =`  = ${b**2} - ${4*a*c}`;
        line3.innerText =`  = ${b**2 - 4*a*c}`;
    }if(b < 0){
        line1.innerHTML =`  = (${b})<sup>2</sup> - 4 x  ${a}  x ${c}`;
        line2.innerText =`  = ${b**2} - ${4*a*c}`;
        line3.innerText =`  = ${b**2 - 4*a*c}`;
    }
    if(c < 0){
        line1.innerHTML =`  = (${b})<sup>2</sup> - 4 x ${a} x ( ${c} )`;
        line2.innerText =`  = ${b**2} + ${Math.abs(4*a*c)}`;
        line3.innerText =`  = ${b**2 + Math.abs(4*a*c)}`;
    }if(a < 0 && c < 0){
        line1.innerHTML =`  = (${b})<sup>2</sup> - 4 x ( ${a} ) x ( ${c} )`;
        line2.innerText =`  = ${b**2} + ${Math.abs(4*a*c)}`;
        line3.innerText =`  = ${b**2 + Math.abs(4*a*c)}`;
        var delta = `${b**2 + Math.abs(4*a*c)}`;
    }
    // Text
    if(`${b**2 - 4*a*c}` > 0){
        text.innerHTML = `si &Delta; > 0  Donc le Equation admet deux Solution`;
        document.getElementById("x1").style.display = 'block';
        document.getElementById("x2").style.display = 'block';
        document.getElementById("center").style.display = 'block';
        document.getElementById("bic1").innerHTML = `x<sub>1</sub> = (-${b} + &Sqrt;${delta})`
        document.getElementById("bin1").innerHTML = `2 x ${a}`;
        document.getElementById("bic2").innerHTML = `x<sub>1</sub> = (-${b} + ${Math.sqrt(delta).toFixed(2)})`;
        document.getElementById("bin2").innerHTML = `${ 2*a}`;
        document.getElementById("x1result").innerHTML = `x<sub>1</sub> = ${((- b + Math.sqrt(delta)) / (2*a)).toFixed(2)}`;
        document.getElementById("bic3").innerHTML = `x<sub>2</sub> = (-${b} - &Sqrt;${delta})`
        document.getElementById("bin3").innerHTML = `2 x ${a}`;
        document.getElementById("bic4").innerHTML = `x<sub>2</sub> = (-${b} - ${Math.sqrt(delta).toFixed(2)})`;
        document.getElementById("bin4").innerHTML = `${ 2*a}`;
        document.getElementById("x2result").innerHTML = `x<sub>2</sub> = ${((- b - Math.sqrt(delta)) / (2*a)).toFixed(2)}`;
    }else{
        text.innerHTML = `si &Delta; < 0  Donc le Equation ne admet pas un Solution`;
        document.getElementById("x1").style.display = 'none';
        document.getElementById("x2").style.display = 'none';
        document.getElementById("center").style.display = 'none';
    }
}
setInterval(CalcDelta,100);