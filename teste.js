var btn = document.querySelector("button"); //document 
var price = document.querySelector("span");
var updTime = document.querySelector("#updTime");
var disclaimer = document.querySelector("#disclaimer");
var currency = document.querySelector("#currency");
var symbol = currency.value;
var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
var int = resultado ;

function getPrice (){
  var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  var currency = document.querySelector("#currency");
  var symbol = currency.value;
  fetch(url)
    .then(function(response){
    return response.json();
  })
    .then(function(data){
    price.innerHTML = data.bpi[symbol].symbol + data.bpi[symbol].rate;
    updTime.innerHTML = new Date().toLocaleString();
    disclaimer.innerText = data.disclaimer;
  });
}

getPrice();

btn.addEventListener("click", function(){
  getPrice()
  resulado = 1039 - getPrice;
  print
  <script>
document.write(5 + 6);
</script>
});
