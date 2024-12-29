
// Task Title: Employee Performance Tracker start


const employees = [
    { id: 1, name: 'Alice', tasksCompleted: 50, rating: 4.8 },
    { id: 2, name: 'Bob', tasksCompleted: 30, rating: 3.9 },
    { id: 3, name: 'Charlie', tasksCompleted: 70, rating: 4.5 },
    { id: 4, name: 'Diana', tasksCompleted: 20, rating: 3.2 },
  ];
  

  function calculateBonuses(){

   let isElegible =  employees.filter( value => value.tasksCompleted > 40 && value.rating > 4.0);

   let  eligibleEmployees = isElegible.map((value)=>{

            return {
                name : value.name,
                id : value.id,
                bonus : value.tasksCompleted * 10
            }
        })

    return eligibleEmployees  
  } 

//  console.log( calculateBonuses());

//  Task Title: Employee Performance Tracker end

// Bonus Challenge Task One start
  function BonusChallenge(){


     let total = employees.reduce((sum, employee)=> sum + employee.rating,0)
     let avarageRating = total / employees.length;

    if(avarageRating  >= 4.5) {

        console.log('The company’s overall performance is excellent');
        
    }
   else if(avarageRating  >= 4.0) {

        console.log('The company’s overall performance is Good');
        
    }
   else if(avarageRating < 4.0) {

        console.log('The company’s overall performance needs improvement');

    }
  }

// BonusChallenge();

// Bonus Challenge One end


// Task Title: Student Grades Tracker start

    const students = [
        { id: 1, name: 'John', scores: [85, 78, 92] },
        { id: 2, name: 'Sara', scores: [62, 70, 68] },
        { id: 3, name: 'Emma', scores: [90, 95, 94] },
        { id: 4, name: 'Tom', scores: [50, 48, 55] },
    ];

    function  calculateAverage(){

         return students.map((student)=>{

           let total =  student.scores.reduce((sum , value) => sum + value,0)

           let averageScore = ( total / student.scores.length).toFixed(2)
           return averageScore
        })
    }

    let averageScores = calculateAverage();
    

    function evaluateStudents(averageScores){

        return students.map((value,index)=>{

            return {
                id: value.id,
                name : value.name,
                averageScores : averageScores[index],
                status : averageScores[index] >= 60 ? "Pass" : "Fail"
            }
        })
    }
    
  let  result =  evaluateStudents(averageScores)  
  
//   console.log(result);
  
  

// Task Title: Student Grades Tracker end

// Bonus Challenge two start 

function getTopScorer() {
    
    return students.map((studnt)=>{
        
        let sumation = studnt.scores.reduce((sum,value) => sum + value,0)
        let avrge = (sumation / studnt.scores.length).toFixed(0)
        
        return avrge
        
    }) 
}
        let averag = getTopScorer() 
        let largestNum =   Math.max(...averag)
        
        // console.log(largestNum);

        
// Bonus Challenge two end


// Task Title: Shopping Cart Manager start 

const products = [
    { id: 1, name: 'Laptop', price: 800, quantity: 10 },
    { id: 2, name: 'Phone', price: 500, quantity: 15 },
    { id: 3, name: 'Headphones', price: 100, quantity: 20 },
    { id: 4, name: 'Charger', price: 25, quantity: 50 },
];

let cart = [] 
    
    
    // Function to add a product to the cart
    
    function addToCart(cart, productId, quantity) {
        
        let product =  products.find((value)=> value.id === productId )
        
        if (!product) {
            console.log("product not found");
       }
       else if(product.quantity < quantity) {
        console.log("Sufficient product not available"); 
       }

      else {

        let cartItem = cart.find((item)=> item.id === productId)   
        
        if (cartItem) {

          cartItem.quantity += quantity
          console.log(cartItem);
            

        }
        else{
            cart.push(
                { id: product.id,
                  name: product.name ,
                  price: product.price,
                  quantity 
                })
                console.log(cart);   
        }
    }       
  }
  
  // Function to remove a product from the cart
  
  function removeFromCart(cart , productId){
      
      let index =  cart.findIndex( item=> item.id === productId)
      
      if (index === -1) {
          console.log("Product not found in the cart.");
        }
        
        else{
            
            let cartItem = cart[index]
        
        
        let product = products.find((item)=> item.id === productId)
        
        if(product) {
            
          product.quantity += cartItem          
            
        }
        cart.splice(index, 1)    

        console.log(cart);
       }      
    }  
    
    // Function to calculate the total price of items in the cart
    
    function calculateTotal(cart) {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    }
      
    addToCart(cart,3,5)
    addToCart(cart,3,8)
 // removeFromCart(cart, 3)
 // console.log(calculateTotal(cart));
    
    // Task Title: Shopping Cart Manager end 
    
    
    
    
    
    
    

 