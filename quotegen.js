const quoteList= [
{
    quote:"The purpose of our lives is to be happy.",
    name:" Dalai Lama"
  },

  {
    quote:"Life is what happens when you’re busy making other plans.",
    name:"John Lennon"
  },

  {
    quote:"Get busy living or get busy dying.",
    name:"Stephen King"
  },
  {
    quote:"You only live once, but if you do it right, once is enough.",
    name:"Mae West"
  },
  {
    quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    name:"Thomas A. Edison"
  },
  {
    quote:"If you want to live a happy life, tie it to a goal, not to people or things.",
    name:"Albert Einstein"
  },
  {
    quote:"Never let the fear of striking out keep you from playing the game.",
    name:"Babe Ruth"
  },
  {
    quote:"Money and success don’t change people; they merely amplify what is already there.",
    name:"Will Smith"
  },
  {
    quote:"Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
    name:"Steve Jobs"
  },
  {
    quote:"Not how long, but how well you have lived is the main thing.",
    name:"Seneca"
  }
]

const qdisplay=document.querySelector("h1");
const ndisplay=document.querySelector("h3");
const btn=document.querySelector("#btn");

btn.addEventListener("click",genquote);

function genquote(){
  const random= Math.floor(Math.random()*10);
  qdisplay.textContent=`"${quoteList[random].quote}"`
  ndisplay.textContent=`-${quoteList[random].name}`

  }
