// Make sure rename this file.

// Q1
let myarr = [1,2,3,4,5];
myarr = myarr.map(function(ele) {
  return ele + 10;
});

// Q2
request

// Q3
>`hikes.js`

    var hikes = [
       {
        id: 0,
        name: "Tricky Trails",
        location: "Lakebed, Utah",
        distance: 10.4,
        rating: 4,
        comments: "This hike was nice .."
       },
       {
        id: 1,
        name: "Mondo Mountains",
        location: "Black Hills, South Dakota",
        distance: 20.86,
        rating: 3,
        comments: "Not the best..."
       },
       {
        id: 2,
        name: "Pesky Peaks",
        location: "Bergenhagen, Norway",
        distance: 8.2,
        rating: 5,
        comments: "Short but SO sweet!!"
       }
    ];

    moduel.exports = {
      hikes: myHikes
    }

> `MainView.js`

    var Observable = request("FuseJS/Observable");
    var myHikes = request("hikes");

    var hike = Observable();

    module.exports = {
      hikes: myHikes,
      name: name,
      location: location,
      distance: distance,
      rating: rating,
      comments: comments,
    };

// Q4
You use Observable to see if there's any change in the file.
If something's changed in the specified file, Observable will catch it.

// Q5
fuse create app_name

// Q6
fuse preview

// Q7
c

// Q8
- `<App>` : 0
- `<ClientPanel>` : 0
- `<JavaScript>` : 0
- `<StackPanel>` : 0
- `<Text>` : 1
- `<TextBox>` : 5
- `<Button>` : 1

- ** Q9** `<Text/>` - apple
- ** Q10** `<TextBox/>` - banana
- ** Q11** `<TextView/>` - orange

- **Q12** (a) hint
- **Q13** (b) decimal
- **Q14** (c) hint
- **Q15** (d) decimal
- **Q16** (e) hint
- **Q17** (f) text
        (g) Clicked


- **Q18** Describe what `<StackPanel/>` does.
<StackPanel/>은 이 태그 안에있는 것 들을 겹겹이 겹쳐서 쌓이지 않고 아래로 쭉 보이게 해줍니다.


## JS
**Q19**
var Observable = require("FuseJS/Observable");
var nameArr = require("hikes");

var hike = Observable();
