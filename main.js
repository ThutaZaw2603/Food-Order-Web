/////////////// DATA OF THIS WEB /////////////

//for search bar and cashing item
let foodArr =
[
  {
    id: "milkCoffee",
    title: "Milk Coffee",
    value:2
  },
  {
    id:"cappuccino",
    title:"Cappuccino",
    value:7
  },
  {
    id:"latte",
    title:"Latte",
    value:6.9
  },
  {
    id:'mocha',
    title:"Mocha",
    value:7.5
  },
  {
    id:'mocchiato',
    title:"Mocchiato",
    value:2
  },
  {
    id:'americano',
    title:"Americano",
    value:4.9
  },
  {
    id:'chocolateCake',
    title:"Chocolate Cake",
    value:4
  },
  {
    id:'strawCake',
    title:"Strawburry Cake",
    value:3.9
  },
  {
    id:'kikiCookie',
    title:"Kiki Cookie",
    value:3.5
  },
  {
    id:'chocoDonut',
    title:"Choco Donut",
    value:1.9
  },
  {
    id:'donut',
    title:"Donut",
    value:2.9
  },
  {
    id:'cupCake',
    title:"Cup Cake",
    value:6.9
  },
  {
    id:'milkShake',
    title:"MilkShake",
    value:3
  },
  {
    id:'pineJuice',
    title:"Pineapple Juice",
    value:7.9
  },
  {
    id:'lemonJuice',
    title:"Lemon Juice",
    value:2.5
  },
  {
    id:'strawJuice',
    title:"Strawburry Juice",
    value:8.9
  },
  {
    id:'limeJuice',
    title:"Lime Juice",
    value:2.9
  },
  {
    id:'apple',
    title:"Apple Juice",
    value:6.9
  },
  {
    id:'cheeseBurger',
    title:"Cheese Burger",
    value:1.9
  },
  {
    id:'kuroBurger',
    title:"Kuro Burger",
    value:4.9
  },
  {
    id:'vegetableBurger',
    title:"Vegetable Burger",
    value:2.5
  },
  {
    id:'burgerS1',
    title:"Burger Set 1",
    value:6.9
  },
  {
    id:'burgerS2',
    title:"Burger Set 2",
    value:6.6
  },
  {
    id:'burgerS3',
    title:"Burger Set 3",
    value:7.5
  },
  {
    id:"caPizza",
    title:"CA pizza",
    value:8.9
  },
  {
    id:'greek',
    title:"Greek Pizza",
    value:10.9
  },
  {
    id:'chicago',
    title:"Chicago Pizza",
    value:12.5
  },
  {
    id:'ny',
    title:"NY pizza",
    value:8.9
  },
  {
    id:'detroit',
    title:"Detroit Pizza",
    value:9.6
  },
  {
    id:'silicon',
    title:"Silicon Pizza",
    value:13.5
  },
  {
    id:'spicy',
    title:'Spicy Noodle',
    value:6.9
  }
]


///////////////////////////////// SWIPER JS FOR MENU BTN ///////////////////////////

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    breakpoints: {
      760:{
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024:{
        slidesPerView:5,
        spaceBetween:10
      },
      1200:{
        slidesPerView:6,
        spaceBetween:3
      }
    },
  });

  
///////////////////////////////// SCROLL AFFECT ON NAVBAR ///////////////////////////

/**/$(document).ready(()=>{ $(window).scroll(
                                      function(){ let scroll = $(window).scrollTop();
                                            if(scroll >220){
                                              $("#menut-btn-icon").css({"color":"white"});
                                              
                                              $("#cart-icon").css({"color":"white"});
                                              if(scroll > 1400){
                                               $("#cartDivId").css({"display":"none"})
                                               $("#menu-btn-original").css({"display":"none"})
                                               $("#wrapper").css({"display":"none"})
                                              }
                                              else{
                                              $("#cartDivId").css({"display":"block"});
                                              $("#menu-btn-original").css({"display":"block"})
                                              $("#wrapper").css({"display":"block"})

                                              }

                                            }
                                            
                                            else{
                                              $("#menut-btn-icon").css("color","#525151");
                                              $("#cart-icon").css({"color":"#525151"});
                                              $("#cartDivId").css({"display":"block"})


                                            }
                                          }
                                    )
                          
                      })


///////////////////////////////// SEARCH INPUT FIELD ///////////////////////////

//DOM//
let searchInputTag = $('.searchItem')[0],
resultBox      = $('.resultBox')[0],
xButton        = $('input[type=search]');

searchInputTag.onfocus = function(){
  searchInputTag.style.borderRadius = "0";
}
searchInputTag.onblur = function(){
 this.style.borderRadius = "20px";
 resultBox.style.display = "none";
 $('.search')[0].style.top ="35%";

}

xButton.on('search', function () {
  resultBox.style.display = "none";
  $('.search')[0].style.top ="35%";
});

let filteredArr = [];

searchInputTag.addEventListener('keyup',(e)=>{

  let inputText = e.target.value.toLowerCase();
  
  resultBox.innerHTML = "";           // clear the text every keyup times
  resultBox.style.display = "none";
  $('.search')[0].style.top ="35%";


  if(inputText.length === 0)
    {
        return;
    }
  
  filteredArr =
    foodArr.filter(
        productName  =>
        {
            return productName.title.toLowerCase().includes(inputText);
        });

  if(filteredArr.length > 0)
    {
        
        for (let i = 0; i < filteredArr.length; i++) 
        {
            let itemDiv = document.createElement("div");
            itemDiv.id  = filteredArr[i].id;
            itemDiv.classList.add("itemDiv");
            
            let itemName = document.createElement("div"); 
            itemName.classList.add("itemName");
            itemName.append(filteredArr[i].title);

            itemDiv.append(itemName);
            resultBox.append(itemDiv);
            
        }
        $('.search')[0].style.top ="38%";
        resultBox.style.display = "block";
    }
})

///////////////////////////////// CASH ITEM ///////////////////////////

//DOM//
let orderBtn    = document.querySelectorAll('[data-orderBtn]'),
chartInbox      = document.getElementsByClassName('chartInbox')[0],
valueDisplay    = document.getElementById('totalCashValue'),
taxDisplay      = document.getElementById('taxValue'),
finalValueDisplay = document.getElementById('finalValue'),
outputBox       = document.getElementsByClassName('output')[0],
orderListDiv    = document.getElementsByClassName('orderListDiv')[0],
cartIcon        = document.getElementById('cart-icon'),
notiDot         = document.getElementsByClassName('notiBadge')[0],
noOrderDiv      = document.getElementsByClassName('noOrderDiv')[0];

//GLOBAL VAR
let amount = 0,   //amount of order
tempArr = [],
amountOfOrderBtnClick = 0;

//display function for cash summary value
let displayCash = function(editedValue){
  
  let total = editedValue.reduce(function(a,b){return a+b},0).toFixed(1);
  valueDisplay.innerHTML = total;
  let tax = (total * 0.04).toFixed(1);
  taxDisplay.innerText = tax;   

  let finalTotalValue = (parseFloat(tax,10) + parseFloat(total,10)).toFixed(1);
  finalValueDisplay.innerText = finalTotalValue;
}
//main function of cashing when u click orderBtn

let recipit = function(y){
  let mini = 1;
  let increase;

  //create orderlistDiv that will grap li
 

  // create li 
  let li = document.createElement('li');
  li.classList.add('itemLi');
  
  //create h3 tag for order title
  let p1 = document.createElement('h3');
  p1.innerHTML =`<span> ${y[0].title}</span>` ;

  //create h4 tag for order value
  let p3 = document.createElement('h4');
  p3.classList.add('value');
  p3.innerHTML = `<span>${y[0].value}</span>$`;


  //create - button
  let minus = document.createElement('span');
  
  minus.innerHTML = "<button class='minus'>-</button>";
  minus.addEventListener('click',() => { if(mini < 2)
                                              {return}
                                          else{
                                              mini--;                                               
                                              increase -= y[0].value;
                                              tempArr.shift(y[0].value);
                                              
                                              displayCash(tempArr);

                                              p3.innerHTML = `${increase.toFixed(1)}$`;           
                                              span.innerHTML = mini;

                                                                                           
                                          }
                                      }
                          )

  //create amout number 
  let span = document.createElement('span');
  span.classList.add('amountDisplay');
  span.innerHTML = mini;

  //create + button 
  let plus = document.createElement('span');
 
  plus.innerHTML = "<button class='plus'>+</button>";
  plus.addEventListener('click',() => { mini++;
                                        increase = mini * y[0].value;
                                        tempArr.push(y[0].value);

                                        displayCash(tempArr);
                                        
                                        p3.innerHTML = `<span>${increase.toFixed(1)}</span>$`; 
                                        span.innerHTML = mini;
                                       
                                      }
                      )

  let cancel = document.createElement('span');
  cancel.classList.add('cancelBtn')
  cancel.innerHTML = "<i class='fas fa-times'></i>";
  cancel.addEventListener('click',(e)=>{
                          //let removeThis = parseInt/**/
                          let numberofOrder = e.target.parentElement.previousSibling.previousSibling.innerText;
                          
                          let numberOfOrderToCancel = parseInt(numberofOrder);
                          console.log(numberOfOrderToCancel);
                          for(let i = 0;i < numberOfOrderToCancel; i++)
                          {
                              let positionOf = tempArr.indexOf(y[0].value);
                              tempArr.splice(positionOf,1);
                             
                          }
                           tempArr.reduce(function(a,b){return a+b},0).toFixed(1);
                     
                           displayCash(tempArr);

                          //valueDisplay.innerHTML = arr1.reduce(function(a,b){return a+b},0) - removeThis;
                          e.target.parentElement.parentElement.remove();   
                          
                          amountOfOrderBtnClick--;
                         

                          if(amountOfOrderBtnClick == 0){
                              noOrderDiv.style.display = 'none';
                             
                          }
                      
                            notiDot.innerHTML = amountOfOrderBtnClick;
                         
                      })
 

  li.append(p1,p3,plus,span,minus,cancel);
     
  orderListDiv.append(li);
  chartInbox.appendChild(orderListDiv);
  
}

//function for noti dot of cart icon
let notiDotFun = function(){

  cartIcon.addEventListener('click',()=>{notiDot.style.display="none"})

  amountOfOrderBtnClick++;

  notiDot.style.display = "flex"; 
  notiDot.innerHTML = `.notiAnimate{
    transition:2s ease;
  }`

  
  if(amountOfOrderBtnClick == 0){
      notiDot.style.display="none";
    }
    
  else if(amountOfOrderBtnClick < 9){
    notiDot.innerHTML = amountOfOrderBtnClick;
    
  }
  else{
    notiDot.innerHTML  = "9+";
  }
}

//click the order btn
orderBtn.forEach((s) => { s.addEventListener('click',(e) => {
    
  let btnId    = e.target.parentElement.id;
  console.log(btnId);
  let thisFood = foodArr.filter((e)=>{return e.id.includes(btnId)});
  tempArr.push(thisFood[0].value);
  
  valueDisplay.innerHTML = tempArr.reduce(function(a,b){return a+b},0); 

  noOrderDiv.style.display = 'none';
  outputBox.style.display  = 'block';

console.log(tempArr);
displayCash(tempArr);
  recipit(thisFood);

  notiDotFun();  /* */
 
},{once : true})})