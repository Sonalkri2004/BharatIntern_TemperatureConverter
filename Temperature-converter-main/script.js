function convertTemperature() {

    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");


    var celsiusValue = celsiusInput.value;
    var fahrenheitValue = (celsiusValue * 9 / 5) + 32;


    fahrenheitInput.value = fahrenheitValue.toFixed(2);
}

function resetForm() {

    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
}
