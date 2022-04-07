const cardArray = [
  {
    name: "food1",
    img: "img/food1.jpg",
  },
  {
    name: "food2",
    img: "img/food2.jpg",
  },
  {
    name: "food3",
    img: "img/food3.jpg",
  },
  {
    name: "food4",
    img: "img/food4.jpg",
  },
  {
    name: "food6",
    img: "img/food6.jpg",
  },
  {
    name: "food7",
    img: "img/food7.jpg",
  },
  {
    name: "food1",
    img: "img/food1.jpg",
  },
  {
    name: "food2",
    img: "img/food2.jpg",
  },
  {
    name: "food3",
    img: "img/food3.jpg",
  },
  {
    name: "food4",
    img: "img/food4.jpg",
  },
  {
    name: "food6",
    img: "img/food6.jpg",
  },
  {
    name: "food7",
    img: "img/food7.jpg",
  },
]

cardArray.sort(() => 0.5 - Math.random());  // this line of code display the cardArray randomly
 
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds =[]
const cardsWon = []
 function createBoard(){
   
    for (let i = 0; i < cardArray.length; i++) {
     
        const card = document.createElement('img')
        card.setAttribute('src',' img/blank1.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
     }

 }

 createBoard()
 function checkMatch(){
  const cards = document.querySelectorAll('#grid img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]

   console.log('check for match');
   if (optionOneId == optionTwoId){
     cards[optionOneId].setAttribute("src", "img/blank1.jpg");
     cards[optionTwoId].setAttribute("src", "img/blank1.jpg");
     alert('You have clicked the same image');
   }
     if (cardsChosen[0] == cardsChosen[1]) {
       alert("you found a match!");
       cards[optionOneId].setAttribute("src", "img/blank4.png");
       cards[optionTwoId].setAttribute("src", "img/blank4.png");
       cards[optionOneId].removeEventListener("click", flipCard);
       cards[optionTwoId].removeEventListener("click", flipCard);
       cardsWon.push(cardsChosen);
     } else{
       cards[optionOneId].setAttribute("src", "img/blank1.jpg");
       cards[optionTwoId].setAttribute("src", "img/blank1.jpg");
       alert('Sorry try again!')
     }
     resultDisplay.textContent = cardsWon.length
   cardsChosen=[]
   cardsChosenIds=[]

   if(cardsWon.length == cardArray.length/2){
      resultDisplay.textContent = "Congratulations, you have found them all!";
   }
 }

 function flipCard(){
   const cardId = this.getAttribute('data-id')
   cardsChosen.push(cardArray[cardId].name);
   cardsChosenIds.push(cardId)
   console.log(cardsChosen);
   console.log(cardsChosenIds);
   this.setAttribute('src', cardArray[cardId].img)

   if (cardsChosen.length === 2) {
     setTimeout(checkMatch, 500)
   }
 }