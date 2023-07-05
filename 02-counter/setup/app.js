let count = 0;
const value = document.querySelector('#value')

const btns = document.querySelectorAll('.btn')
console.log(btns)



btns.forEach(function(btn) {
    btn.addEventListener("click", function (e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        
        }else if(styles.contains('increase')){
            count++;
        } else {
            count = 0;
        }

        if (count > 0){
            value.style.color = 'green'
        }

        
        if (count < 0){
            value.style.color = 'red'
        }

        
        if (count === 0){
            value.style.color = 'black'
        }
        value.textContent = count;
    });


}) 





// Get the necessary elements from the DOM
var counterValueElement = document.getElementById("counterValue");
var incrementBtn = document.getElementById("incrementBtn");
var decrementBtn = document.getElementById("decrementBtn");

// Initialize the counter value
var count2 = 0;

// Display the initial counter value
counterValueElement.textContent = count;

// Add click event listeners to the buttons
incrementBtn.addEventListener("click", function() {
  count++;
  counterValueElement.textContent = count;
});

decrementBtn.addEventListener("click", function() {
  count--;
  counterValueElement.textContent = count;
});
