var arabic = document.getElementById("arabic")
var english = document.getElementById("english")

var about = document.getElementById("about")
var contact = document.getElementById("contact")
var home = document.getElementById("home")
var pizza1 = document.getElementById("pizza1")
var pizza2 = document.getElementById("pizza2")
var pizza3 = document.getElementById("pizza3")
var recipe = document.getElementById("recipe")
var recipe1 = document.getElementById("recipe1")
var recipe2 = document.getElementById("recipe2")
var order = document.getElementById("order")
var order1 = document.getElementById("order1")
var order2 = document.getElementById("order2")
var copyright = document.getElementById("copyright")
var pizzaproject = document.getElementById("pizzaproject")
var changeflag = document.getElementById("changeflag")

arabic.onclick = ()=>{
    setlanguage("arabic")
    localStorage.setItem("lang", "arabic")
}

english.onclick = ()=>{
    setlanguage("english")
    localStorage.setItem("lang", "english")
}
onload = ()=>{
    setlanguage(localStorage.getItem("lang"))
}
function setlanguage(getlanguage){
if (getlanguage === "arabic"){
    about.innerHTML = "حول"
    contact.innerHTML = "اتصل بنا"
    home.innerHTML = "الصفحة الرئيسية"
    pizza1.innerHTML = "حسناً, البيتزا تحتوي على الطماطم ألا  يجعلها ذلك من الخضروات؟"
    pizza2.innerHTML = "بيتزا مصنوعة من `الحب`"
    pizza3.innerHTML = "وهذا ما نسميه دائرة الحياة."
    recipe.innerHTML = "بيتزا مع سلامي ، لحم بقري ، لحم مقدد ، ثوم وأعشاب طازجة."
    recipe1.innerHTML = "بيتزا باللحم و الزيتون و الطماطم و الريحان الاخضر"
    recipe2.innerHTML = "بيتزا مع سجق بيبروني ولحم مقدد"
    order.innerHTML = "اطلب الان..."
    order1.innerHTML = "اطلب الان..."
    order2.innerHTML = "اطلب الان..."
    copyright.innerHTML = "© حقوق الطبع والنشر محفوظة 2022"
    pizzaproject.innerHTML = "مشروع بيتزا"
    changeflag.className = "syria flag m-0"
} else if(getlanguage === "english"){
    about.innerHTML = "About Us"
    contact.innerHTML = "Contact Us"
    home.innerHTML = "Home"
    pizza1.innerHTML = "Well, pizza has tomatoes, doesn’t that count as veggies?"
    pizza2.innerHTML = "Pizza Made With `Love`."
    pizza3.innerHTML = "And, that's what we call the circle of life."
    recipe.innerHTML = "Pizza with salami, ham, bacon, garlic and fresh herbs."
    recipe1.innerHTML = "Pizza with ham, olives, tomatoes and green basil."
    recipe2.innerHTML = "Pizza with Pepperoni Sausage and Bacon."
    order.innerHTML = "Order Now..."
    order1.innerHTML = "Order Now..."
    order2.innerHTML = "Order Now..."
    copyright.innerHTML = "© 2022 Copyright"
    pizzaproject.innerHTML = "Pizza Project"
    changeflag.className = "america flag m-0"
}

}