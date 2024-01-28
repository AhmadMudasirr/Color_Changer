var count = 1;


document.querySelector(".btn").addEventListener("click", colorChanger);


function colorChanger() {

    document.querySelector(".body").classList.add("color" + count);
    if(count == 11){
        alert("Completed ! Click Rest to Play Again.");
    }
    count++;
}




document.querySelector(".reset").addEventListener("click", reset);

function reset() {

    for (var col = 1; col <= 10; col++) {
        document.querySelector(".body").classList.remove("color" + col);
        document.querySelector(".body").classList.add("color0");
        count = 1;

    }



}