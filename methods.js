// Here are a list of my methods and what they do
/**
 * @param cost is the charge per month which is determined by the selected subscription
 * it latere gets passed into the subscriptionType function
 */
function confirmSubscription(cost){
    var type;
    switch(cost){
        case 10:
            type = "Basic";
            break;
        case 15:
            type = "Premimium";
            break;
        case 20:
            type = "Deluxe";
            break; 
    }
    if(confirm(`Would you like to continue?\nYour current subscrition is ${type}: $${cost}`)){
        subscriptionType(cost);
    } 
}
/**
 * @param cost is taken in from the previous function
 * This function prompts the user for thier first name
 * Then their last
 * It has some fake name detection, but isn't the greatest
 * It capitalizes the first letter of each the first and last names
 */

function subscriptionType(cost){
    event.preventDefault();
    var fName, lName;
    while(fName == null || /\d/.test(fName) || fName.length < 2){
        fName = prompt("Enter your first name");
        if(fName == null || /\d/.test(fName) || fName.length < 2){
            alert("Please enter a real name");
        }
    }
    var temp = fName.substring(0, 1).toUpperCase();
    var fName = temp.concat(fName.substring(1, fName.length));
    console.log(fName);
    while(lName == null || /\d/.test(lName) || lName.length < 2){
        lName = prompt("Enter your last name");
        if(lName == null || /\d/.test(lName) || lName.length < 2){
            alert("Please enter a real name");
        }
    }
    var temp = lName.substring(0, 1).toUpperCase();
    var lName = temp.concat(lName.substring(1, lName.length));
    
    console.log(`Your name: ${fName} ${lName}`);            
}