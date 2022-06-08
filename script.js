let hasKey = false;
let doorLock = "locked";
let keyLock = "locked";

const clickDoor = ()=>{
    console.log('You clicked the door')
}


// Function to pickup the Key
const pickKey = ()=>{
    console.log('You picked up the Key')
        hasKey == true;
        alert("You picked up the key put it in your pocket!... Could it be THAT easy?🤣 ");
        document.getElementById("key").style.display = "none"
}


// Function for unlock the KeyLock
const clickKeyLock = ()=>{
    console.log('You clicked the Lock')
    if (hasKey = true){
        keyLock = "unlocked";
        alert("You slide the key into the lock, to unlock the door")   
        console.log('Has key')

        checkRoom();
    }
    else {
        alert("You're still locked")     
    } 
    
}


// Function for unlock the Doorlock
const clickDoorLock = ()=>{

    var lock = prompt("Enter the CODE..");
    
    if (lock== "escape"){
        doorLock  = "unlocked";
        alert("You pull on the lock it opens! You toss the lock on the floor")
        checkRoom();
    }

    else{
        alert("You entered wrong Code!!!!!")
    }
   
}

// Function  to check all locks are unlocked

const checkRoom = ()=>{
    if (keyLock == "unlocked"){
        if (doorLock == "unlocked"){
        document.getElementById("escape").style.visibility = "visible";

    }
        else{
        alert("Try to unlock the door");
    }
}
    else{
        alert("The door is still locked.. You must Unlock to Open");
    }
}