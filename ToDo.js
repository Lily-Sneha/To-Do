

function add() {
    let output = document.getElementById("inputscreen").value;
    document.getElementById("adtask").innerHTML = output;
    // document.getElementById("complete").innerHTML = output;
    back()

}

function input() {
    let output = document.getElementById("inputscreen").value;
    console.log(output)
}

function back() {
    let output = document.getElementById("inputscreen").value = " ";

}

