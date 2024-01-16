let Kunder = 0
// Når bokstav A trykkes, endres tallet kunder med + 1. 
input.onButtonPressed(Button.A, function () {
    Kunder += 1
})
// Når knapp b trykkes tas en kunde bort fra listen. 
input.onButtonPressed(Button.B, function () {
    Kunder += -1
})
// Denne gjør at tallet på kundene vises. 
basic.forever(function () {
    basic.showNumber(Kunder)
})
