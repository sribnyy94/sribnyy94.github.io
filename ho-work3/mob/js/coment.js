  





    
           
 $( "botton" ).click(function() {
    
 $('#Reviews').append(' <div class="Reviews-comment"> <p    class="Reviews-comment-name">Костя</p>   <time id="timedisplay" class="Reviews-comment-time" >14.11.2011</time> <div class="icon"></div> <p id="contenInput" class="Reviews-comment-Reviews">иаиаиаи</p> </div> ');
      
     
       var d=new Date();
var day=d.getDate();
var month=d.getMonth() + 1;
var year=d.getFullYear();

    document.getElementById('timedisplay').innerHTML = day + "." + month + "." + year;
     
         $('#contenInput').text($(".mytext").val());
     
    
     
  

         });
      
 




