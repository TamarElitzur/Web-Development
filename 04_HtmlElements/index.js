document.addEventListener("DOMContentLoaded",()=>{
    pageLoaded();
});

let txt1;
let txt2;
let btn;
let lblRes;
let op;

function pageLoaded() {
    txt1 = document.getElementById('txt1')
    txt2 = document.getElementById('txt2')

    txt1.addEventListener("input", () => validateInput(txt1));
    txt2.addEventListener("input", () => validateInput(txt2));

    op = document.getElementById('op')
    btn = document.getElementById('btnCalc')

    btn.addEventListener('click', ()=>{ calculate(); });
    lblRes = document.getElementById('lblRes')
}

function calculate() {
    const num1 = parseFloat(txt1.value);
    const num2 = parseFloat(txt2.value);

    const isValid1 = validateInput(txt1);
    const isValid2 = validateInput(txt2);

    if (!isValid1 || !isValid2) {
        lblRes.innerText = "Invalid input";
        return;
    }

    const operation = op.value;

    let res;

    switch(operation) {
        case '+': res = num1 + num2; break;
        case '-': res = num1 - num2; break;
        case '*': res = num1 * num2; break;
        case '/': 
            res = num2 === 0 ? "Cannot divide by zero!" : (num1 / num2);
            break;
    }
    lblRes.innerText = res;

    let logLine = `${num1} ${operation} ${num2} = ${res}`;
    print(logLine, true);
}

const btn2 = document.getElementById("btn2")
btn2.addEventListener("click",()=>{
    print("btn2 clicked: "+ btn2.id + " | " + btn2.innerHTML)
})

function print(msg, append = false) {
    // Get text area element reference
    const ta = document.getElementById("output");
    // Write msg to textArea text
    if (!ta) {
        console.log(msg);
        return;
    }

    if(append) {
        // Add new line to log
        ta.value += msg + "\n";
    } else {
        // Overloading
        ta.value = msg + "\n";
    }

    ta.scrollTop = ta.scrollHeight;

}

function demoNative() {
    let out = "=== STEP 1: NATIVE TYPES ===\n";

    // String
    const s = "Hello World";
    out += "\n[String] s = " + s;
    out += "\nLength: " + s.length;
    out += "\nUpper: " + s.toUpperCase();

    // Number
    const n = 42;
    out += "\n\n[Number] n = " + n;

    // Boolean
    const b = true;
    out += "\n\n[Boolean] b = " + b;

    // Date
    const d = new Date();
    out += "\n\n[Date] now = " + d.toISOString().replace("T", " ").replace(/\.\d+Z$/, "");

    // Array
    const arr = [1, 2, 3, 4];
    out += "\n\n[Array] arr = [" + arr.join(", ") + "]";
    out += "\nPush 5 → " + (arr.push(5), arr.join(", "));
    out += "\nMap x2 → " + arr.map(x=>x*2).join(", ");

    // Functions as variables
    const add = function(a,b){ return a+b; };
    out += "\n\n[Function as variable] add(3,4) = " + add(3,4);

    // Callback
    function calc(a,b,fn) {
        return fn(a,b); 
    }
    const result = calc(10,20,(x,y)=>x+y);
    out += "\n[Callback] calc(10,20,x+y) = " + result;

    print(out);
}

function validateInput(inputElement) {
    const value = inputElement.value;

    if (value.trim() === "" || isNaN(value)) {
        // Invalid
        inputElement.classList.remove("is-valid");
        inputElement.classList.add("is-invalid");
        return false;
    } else {
        // Valid
        inputElement.classList.remove("is-invalid");
        inputElement.classList.add("is-valid");
        return true;
    }
}
