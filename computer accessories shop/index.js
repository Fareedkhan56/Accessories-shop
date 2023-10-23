let userName = prompt("enter your name");

if(userName.charCodeAt(0) >= 65 && userName.charCodeAt(0) <= 90 || userName.charCodeAt(0) >= 97 && userName.charCodeAt(0) <= 122){

    alert("welcome "+userName);
}
else{
    alert("invalid name enter right name !");
}

let computerAccessories = [
    "keyboard",
    "mouse",
    "monitor",
    "headphones",
    "webcam",
    "external hard drive",
    "usb flash drive",
    "printer",
    "speakers",
    "microphone",
    "mousepad",
    "graphics card",
    "wi-fi adapter",
    "ethernet cable",
    "laptop bag",
    "external ssd",
    "wireless router",
    "docking station",
    "bluetooth adapter",
    "external dvd drive"
];

let foodItems = [
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
    "Salad",
    "Steak",
    "Taco",
    "Ice Cream",
    "Fried Chicken",
    "Burrito",
    "Cereal",
    "Pancakes",
    "Sandwich",
    "Soup",
    "Lasagna",
    "Mango",
    "Chocolate",
    "Sushi",
    "Pineapple",
    "Spinach"
];

let i = true;
let orders = 0;
let buyProducts = [];

while(i){
    alert("items in our store !"+"\n"+computerAccessories);

    let order = prompt("enter your order");
    order = order.trim().toLowerCase();

    let item = false;
    
    for(let products of computerAccessories){
        if(order == products){
            item = true;
            orders +=1 ;
            buyProducts.push(order);

            
            let orderAgain = prompt("do you want to order again press y for yes or n for no");
            if(orderAgain.toLowerCase().substring(0,1) == "y"){
                i = true;
            }
            else{
                if(orders >= 2){
                    let randomNumber = (Math.random()*21).toFixed();
                    let freeFoodItem = foodItems[randomNumber];
                    alert("you get free "+freeFoodItem)
                    i = false;

                    if(orders >= 1){
                        i = false;
                    }
                    else if(orders == 0){
                        // alert("order something press y for yes")
                        let orderAgain = prompt("do you want to order again press y for yes or n for no");
                        if(orderAgain.toLowerCase().substring(0,1) == "y"){
                            i = true;
                        }
                        else{
                            i = false;
                        }
                    }
                }
                i = false;
            }
        }
    }

    if(item == false){
        let orderConfirmation = prompt("this item is not available in our store do you want to order again press y for yes and n for no");
        if(orderConfirmation.toLowerCase().substring(0,1) == "y"){
            i = true;
        }
        else{
            i = false;
        }
    }
}
