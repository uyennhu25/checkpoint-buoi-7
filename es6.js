//Bài 1
let student = (name, age, address) => {
    var studentInfo = {}
    studentInfo.name = name
    studentInfo.age = age
    studentInfo.address = address
    console.log(studentInfo)
}
//student("hello", "there", "friend")

//Bài 2
var smartPhones = [ 
    { name: 'iphone', price: 649 }, 
    { name: 'Galaxy S6', price: 576 }, 
    { name: 'Galaxy Note 5', price: 489 } 
]


smartPhones.forEach((item) => console.log(item["price"]))

//Bài 3
let foo = (x, y, z) => {console.log(x, y, z)}
//foo(3, 5, 6)

let foo1 = () => {alert("Hello")}
//foo1()

let foo2 = (a,b) => {return (a + b * 100)}
//console.log(foo2(3, 4))

//Bài 4
    //Câu 1
    let evenNumber = document.getElementById('evenNumber');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        for (let i = 4; i <= evenNumber.value; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    })

    //Câu 2
    let colorCard = document.getElementById('colorCard');

    colorCard.addEventListener('mouseover', function() {
        colorCard.style.backgroundColor = "purple"   
    })

    colorCard.addEventListener('mouseout', function() {
        colorCard.style.backgroundColor = "azure"
    })

    //Câu 3
    let triangle = "1"

    function numberOneTriangle(){
        for (let i = 0; i < 5; i++) {
            console.log(triangle)
            triangle += "1"
        }
    }

    //Câu 4
    setInterval(changeTime, 1000);

    function changeTime(){
        let time = new Date().toLocaleTimeString('en-US', {hour12: false, hour: "numeric", minute: "numeric", second: "numeric"});
        document.getElementById("pTime").innerHTML = time;
    }
