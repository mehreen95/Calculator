let calculations = localStorage.getItem('calculations') || '';

function updateCalculation(value){
    calculations += (value);
    displayCalculation();
    localStorage.setItem('calculations', calculations);
}
function displayCalculation() {
    document.querySelector('.input').innerHTML=(calculations);
}
