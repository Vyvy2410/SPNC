var total_number = document.querySelectorAll(".bton").length;

var array=[];

var j=1;

var  number_found = false;

// linear search algorithm implemented
function linear_search(key){
     var ide ="#button-"+j;
     if(array[j-1]===key){
       number_found = true;
           document.querySelector(ide).classList.add("change-color");
            document.querySelector(".ans").innerHTML="Số " + key +" Đã Được Tìm Thấy Ở Cột Số "+ j;

     }
     else{
       document.querySelector(ide).classList.add("change-color");
        setTimeout(function(){
        document.querySelector(ide).classList.remove("change-color");
        if(j===10)
         document.querySelector(".ans").innerHTML="Số " + key +" Không Thể Tìm Thấy !";
        if(j<=9){
        j=j+1;
        linear_search(key); }

        },1000);
    }
}


// generates the list of the random number
function  random_number_generate(){
for(var i=1;i<=total_number;i++){
   var num = Math.floor((Math.random()*100))+1;
   array.push(num);
   document.querySelector("#button-"+i).innerHTML = num;
  }
}




// when user click that search button this function trrigers
document.querySelector("#search").addEventListener("click",function(){

  var string_key = document.querySelector("#key").value;
  var key = parseInt(string_key);
    if(key>=0&&key<=99){
       linear_search(key);
   }
else{
   alert("vui lòng nhập số hợp lệ :)");
   document.querySelector("#key").value=null;
 }
});


//when user click on that reset button , this function trrigers
document.querySelector("#clear").addEventListener("click",function(){
  if(number_found===true)
   document.querySelector("#button-"+j).classList.remove("change-color");
   document.querySelector("#key").value=null;
   document.querySelector(".ans").innerHTML = null;

  number_found = false;
  j = 1;
  array =[];
  random_number_generate();

});


random_number_generate();