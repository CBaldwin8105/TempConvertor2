var name = prompt("What's your name?")

alert(`Hello ${name}`)

var temp = prompt('Do you want to convert from fahrenheit to celsius (type "F") or celsius to fahrenheit (type "C")?')
if ((temp == "F") || (temp == "f") || (temp == "fahrenheit") || (temp == "Fahrenheit")) {
    var fahrenheit = Number(prompt("How many degrees do you want to convert from fahrenheit into celsius?"))
    if (isNaN(fahrenheit)) {
        alert(`You can only enter a number. Ending program.`)
    } else {
        var celsius = ((fahrenheit - 32) * 5 / 9)
        alert(`${fahrenheit}F° is ${celsius}C°`)
    }
} else if ((temp == "C") || (temp == "c") || (temp == "celsius") || (temp == "Celsius")) {
    var celsius = Number(prompt("How many degrees do you want to convert from celsius into fahrenheit?"))
    if (isNaN(celsius)) {
        alert(`You can only enter a number. Ending program.`)
    } else {
        var fahrenheit = (celsius * 9 / 5 + 32)
        alert(`${celsius}C° is ${fahrenheit}F°`)
    }
} else {
    alert(`That is not one of the allowable characters. Ending Program.`)
}
