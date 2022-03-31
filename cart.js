var cartdata = JSON.parse(localStorage.getItem("cart"));

var total = cartdata.reduce(function(sum,ele,index,arr){
    return sum + ele.price;
},0)

document.querySelector("#heading1").innerText=total;
cartdata.map(function (ele){
    var div = document.createElement("div");


    var image = document.createElement("img");
    image.src = ele.image_url;

    var naam = document.createElement("h2");~
    naam.innerText=ele.name;

    var para = document.createElement("h3");
    para.innerText = ele.price;

    var strkprice = document.createElement("h3");
    strkprice.innerText=ele.strikedoffprice;

   

    div.append(image,naam,para,strkprice);

    var diva = document.querySelector("#container");
    diva.append(div);
})
