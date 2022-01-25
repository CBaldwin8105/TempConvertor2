var name = prompt("What's your name?")

alert(`Hello ${name}`)

do {
    var temp = prompt('Do you want to convert from fahrenheit to celsius (type "F") or celsius to fahrenheit (type "C")?')
} while ((temp != "F") && (temp != "f") && (temp != "fahrenheit") && (temp != "Fahrenheit") && (temp != "C") && (temp != "c") && (temp != "celsius") && (temp != "Celsius"))

if ((temp == "F") || (temp == "f") || (temp == "fahrenheit") || (temp == "Fahrenheit")) {
    do {
        var fahrenheit = Number(prompt("How many degrees do you want to convert from fahrenheit into celsius?"))
    } while (isNaN(fahrenheit))
    var celsius = ((fahrenheit - 32) * 5 / 9)
    alert(`${fahrenheit}F° is ${celsius}C°`)
} else if ((temp == "C") || (temp == "c") || (temp == "celsius") || (temp == "Celsius")) {
    do {
        var celsius = Number(prompt("How many degrees do you want to convert from celsius into fahrenheit?"))
    } while (isNaN(celsius))
    var fahrenheit = (celsius * 9 / 5 + 32)
    alert(`${celsius}C° is ${fahrenheit}F°`)
} else {
    alert(`That is not one of the allowable characters. Ending Program.`)
}
