// Make sure rename this file.

// Q1
let myarr = [1,2,3,4,5];
function add10(ele){
  return(ele+10);
}
myarr = myarr.map(add10);

// Q2

var Observable = require("FuseJS/Observable");
var myHikes = require("hikes");

// Q3

module.exports = {
  hikes: hikes;
}

// Q4
Observable is what allows the variables to detect
any changes in the contents and update them.

// Q5
fuse create app newapp

// Q6
fuse preview

// Q7
answer: c

- **Q8** From the `closing.ux`, how many tags can be written like this example? **example**`<ExampleTag/>`
 - `<App>` : 0
 - `<ClientPanel>` : 0
 - `<JavaScript>` : 2
 - `<StackPanel>` : 0
 - `<Text>` : 6
 - `<TextBox>` : 5
 - `<Button>` : 1

// Q9
apple

// Q10
Banana

// Q11
Orange

- **Q12** (a) Name
- **Q13** (b) distance
- **Q14** (c) Name
- **Q15** (d) rating
- **Q16** (e) Name
- **Q17** (f) comments
          (g) Clicked
## All of these <TextBox> tag creates textbox which contains the value from
js object "hikes" and take the value of Distance, Rating and Comments


// Q18
<StackPanel> allows the contents to be stacked vertically

// Q19
var Observable = require("FuseJS/Observable");
var myHikes = require("hikes");

let nameArr = myHikes.map( function(ele){
  return(ele.name);
});
