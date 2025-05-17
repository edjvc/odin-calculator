# odin-calculator

### pseudocode

#### UI
- [x] Build demo HTML (flex) & CSS by chatGPT with my layout idea
  - Layout: display screen section, numbers 0-9 (0 should be wider than other numbers), dot, 
  AC to clean, +/- button, operation buttons +-*/%, equal button.


#### function
- [x] Build functions of every operator, and the main function for operating.
- [x] Process of calculating: 
   - [x] set globle variables: current input number, first number, operator, second number. default of the numbers and current input are void string, except current input is 0;
  - [x] enter the first number
    - [x] UI: display number,
    - [x] if current display number is 0, not allow to enter 0, if enter dot will display "0."
    - [x] if current display number includes one dot, not allow to enter dot.
    - add number immediately to current input variable.
    - [x] add eventListener on every buttons (delegation event + custom event with detail value of the button, numbers and +/- is a group, operators and ac is a group), 
      after click, send value to display (string, don't run if string length over 10), 
      if click +/-, send negative symbol to the first position of the string.
  - [x] enter operator (min: 1, max: 1)
    - [x] UI: button background color change after click, reset after press any number button or AC.
    - after click operator button, store the number from current input into first number variable (switch the string to float number), set current input as void string, 
    - store operator number into its variable.
  - [x] enter the second number, display number (cover the first number)
    - [x] UI: display and cover the first number in display section.
    - [x] other parts are the same as the first number 
  - [x] enter "=" to operate, display result number (cover the first number)
    - [x] if current input is not undefined, store the number from current input into second number variable (switch the string to float number), and set current input as void string, 
    - run the function when the 2 sets of numbers and the operator are all valid (not undefined),
      the operation function returns the result, and put result to the first number variable.
    - [x] UI: display and cover the second number by result number.
- [x] Press AC to clean everything.
  - [x] UI: display 0.
  - set globle variables to default value.
- [x] Press +/- button after the number to add/remove "negative" symbol.
  - [x] click it to multiply current display number with -1 and put it back to display section.
