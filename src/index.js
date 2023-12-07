import "./sass/main.scss";
import "bootstrap/dist/js/bootstrap.bundle";

function arrondir(val)
{
    return val - val % 0;
}

console.log(arrondir(2.36));