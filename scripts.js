 //document.getElementById("logo").innerHTML = "JavaScript";

      //document.getElementById("logo").style.color = "red";

      //this os JS comment//
    
      //document.getElementById("logo").style.display = "none";


      


      //document.getElementByClassName("card").style.color = "red";



      var example = 'example value'

      console.log(example);

      document.addEventListener('DOMContentLoaded', () => {

      const logo = document.getElementById("logo");
      logo.classList.add('new_class');
     let new_logo = "this is my stuff"

     console.log(new_logo, 'first time')

     new_logo = "different value"

     console.log(new_logo, 'seconf time')

     //string

     var example = 'example value';
     var integer_example_string = "5";

     //inegar;number

     var integer_example  = 5;

     //Boolean

     var boolran_example = true;
     var boolean_example2 = false;

     console.log(example + integer_example + boolean_example_2);

     let x = 6;
     let y = 25;

     console.log("this is the area of square: ", x * y,)
     
     if (x==5) {
        console.log('x = 5');

     }else if (x==6){
        console.log ("X = 6");
     }
    
     else {
        console.log("nothing found");


       // for ( initilize; condition; incremnet ( decerment)){
      //Actiion to execute
        }

        for (let loop_init = 1; loop_init < 5; loop_init++ ){
            console.log('for loop', loop_init)
        }


        // Declared the function 
        function greet(name)  {
            console.log( 'Hello' , name)
        
            //Called the function
            greet('Natalia');




        }

     });