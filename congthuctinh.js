function ketQua() {
    let a = document.getElementById("radius").value;
    let PI = 3.14159
    let area = a*a*PI
    document.getElementById("area").innerHTML = area.toFixed(2);
}