 
 setInterval(displaytime,200);
function displaytime()
{
  var time=new Date;
  var date=time.getDate;
  var hrs= time.getHours();
  var min= time.getMinutes();
  var sec = time.getSeconds();
  
  if (hrs>12)
  {
   hrs=hrs-12;
  }
  if(hrs==0)
  {
   hrs=12;
  }
  document.getElementById('Date').innerHTML=hrs+':' +min+':' +sec ;
   
 }
setInterval(displaydate,200)
function displaydate()
{  var date=new Date;
  
  var date=new Date;
  var ddate=date.getDate;
  var month=date.getMonth();
  var day= date.getDate();
  var year=date.getFullYear();
  document.getElementById('Time').innerHTML= day+'/'+month+'/'+year;
  
}





//QUOTES
 setInterval(quotes,10000);
 var myquotes=[];
  myquotes[-1]="Do not go where the path may lead, go instead where there is no path and leave a trail. -Ralph Waldo Emerson";
  myquotes[0]="The greatest glory in living lies not in never falling, but in rising every time we fall.' -Nelson Mandela";
  myquotes[1]="The way to get started is to quit talking and begin doing. -Walt Disney";
  myquotes[2]  ="Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking. -Steve Jobs";
  myquotes[3]="If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt";
  myquotes[4]="If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey";
  myquotes[5]="If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron";
  myquotes[6]="Life is what happens when you're busy making other plans. -John Lennon";
  myquotes[7]="Always remember that you are absolutely unique. Just like everyone else. -Margaret Mead";
  myquotes[8]="Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson";
  myquotes[9]="The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt"
  myquotes[10]="Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin";
  myquotes[11]="The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. -Helen Keller"
  ;
  myquotes[12]="It is during our darkest moments that we must focus to see the light. -Aristotle";
  myquotes[13]="Whoever is happy will make others happy too. -Anne Frank";


 function quotes()
{ 
 var ran=Math.floor(Math.random()*(myquotes.length)-1);  document.getElementById('quotes').innerHTML=myquotes[ran];
console.log(myquotes[ran]);
console.log(ran);
}