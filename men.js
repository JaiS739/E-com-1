var mendata = [
{
    image_url:
      "https://content.shop4reebok.com/static/Product-EX4296/reebok_EX4296_1.jpg.plp",
    name: "MEN'S REEBOK RUNNING ROADMAP SHOES",
    price: "$1170",
    strikedoffprice: "$2599",
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX3921/reebok_EX3921_1.jpg.plp",
    name: "MEN'S REEBOK SWIM ARUBA FLIP SLIPPERS ",
    price: 699,
    strikedoffprice: 999,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EX4160/reebok_EX4160_1.jpg.plp",
    name: " MEN'S REEBOK RUNNING AUSTIN SHOES",
    price: 945,
    strikedoffprice: 2099,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-FV8798/MEN_SWIM_SLIPPERS_FV8798_1.jpg.plp",
    name: "MEN'S REEBOK SWIM AVENGER FLIP LP SLIPPERS",
    price: 399,
    strikedoffprice: 799,
  },
  {
    image_url:
      "https://content.shop4reebok.com/static/Product-EW5173/reebok_EW5173_1.jpg.plp",
    name: "MEN'S REEBOK RUNNING TEMPO SHOES ",
    price: 1620,
    strikedoffprice: 3599,
  }
]


mendata.map(function (ele){
    var image = document.createElement("img");
    image.src = ele.image_url;

    var naam = document.createElement("h2");
    naam.innerText=ele.name;

    var para = document.createElement("h3");
    para.innerText = ele.price;

    var strkprice = document.createElement("h3");
    strkprice.innerText=ele.strikedoffprice;

    var btn = document.createElement("button");
    btn.innerText="add to cart";
  
    var div = document.querySelector("#container");

    div.append(image,naam,para,strkprice,btn);
})