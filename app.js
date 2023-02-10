let screen = document.querySelector('#scr');
let btn = document.querySelectorAll('.btn');
let sc = "";
for (item of btn) {
    item.addEventListener('click', (e) => {
        var btntext = e.target.innerText;
        if (btntext === '×') {
            screen.value += btntext;
            sc += "*";
        }
        else if (btntext === '÷') {
            screen.value += btntext;
            sc += '/';
        }
        else if(btntext === '%')
        {
            screen.value += btntext;
            sc+="/100";
        }
        else if (btntext === 'sin') {
            screen.value = Math.sin(sc);
            sc = screen.value;
        }
        else if (btntext === 'cos') {
            screen.value = Math.cos(sc);
            sc = screen.value;
        }
        else if (btntext === 'tan') {
            screen.value = Math.tan(sc);
            sc = screen.value;
        }
        else if (btntext === 'x2') {
            screen.value = Math.pow(sc, 2);
            sc = screen.value;
        }
        else if (btntext === '√x') {
            screen.value = Math.sqrt(sc);
            sc = screen.value;
        }
        else if (btntext === 'log') {
            screen.value = Math.log(sc);
            sc = screen.value;
        }
        else if (btntext === 'π') {
            screen.value *= 3.141592653589793238;
            sc = screen.value;
        }
        else if (btntext === 'e') {
            screen.value *= 2.718281828459045;
            sc = screen.value;
        }
        else if (btntext === '=') {
            console.log(sc);
            screen.value = eval(sc);
            sc = screen.value;
        }
        else {
            if(screen.value[screen.value.length-1]==='%')
            {
                sc+=`*${btntext}`;
            }
            else
            sc += btntext;
            screen.value += btntext;
        }
    })
}
function fact() {
    let num, f = 1;
    num = sc;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    num<0?screen.value = "NA":screen.value=f;
    sc=screen.value;
}
function back() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
    sc = sc.substr(0, sc.length - 1);
    console.log(sc);
}