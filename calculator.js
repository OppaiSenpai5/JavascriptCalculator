let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.btn');

for (item of btn)
{
    item.addEventListener('click', e => {
       btnText = e.target.innerText;
       screen.value += btnText;
    });
}

function sin()
{
    screen.value = Math.sin(screen.value);
}

function cos()
{
    screen.value = Math.cos(screen.value);
}

function tan()
{
    screen.value = Math.tan(screen.value);
}

function pow()
{
    screen.value = Math.pow(screen.value, 2);
}

function sqrt()
{
    screen.value = Math.sqrt(screen.value, 2);
}

function log()
{
    screen.value = Math.log(screen.value);
}

function pi()
{
    screen.value = Math.PI;
}

function e()
{
    screen.value = Math.E;
}

function fact()
{
    let result = 1;
    let num = screen.value;

    for (let i = 1; i <= num; i++)
    {
        result *= i;
    }

    screen.value = result;
}

function backspc()
{
    screen.value = screen.value.substr(0, screen.value.length - 1);
}