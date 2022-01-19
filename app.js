var name = prompt("What's your name?")

alert(`Hello ${name}`)

var temp = prompt ('Do you want to convert from fahrenheit to celsius (type "F") or celsius to fahrenheit (type "C")?')
if (temp == "F") {
    var fahrenheit = prompt ("How many degrees do you want to convert from fahrenheit into celsius?")
    var celsius = ((farenheit - 32) * 5 / 9)
    alert(`${fahrenheit}F° is ${celsius}C°`)
} else if (temp == "C") {
    var celsius = prompt ("How many degrees do you want to convert from celsius into fahrenheit?")
    var fahrenheit = (celsius * 9 / 5 + 32)
    alert(`${celsius}C° is ${fahrenheit}F°`)
} else {
    alert("Please type in F or C. (capitalized)")
}