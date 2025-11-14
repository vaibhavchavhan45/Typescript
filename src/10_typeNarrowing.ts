//Type narrowing
class television{
    switchingOffTV(){
        console.log(`Switching off the Television`); 
    }
}

class car{
    switchingOffCar(){
        console.log(`Switching off the Car`); 
    }
}

function mainSwitchOff(device: television | car){
    if(device instanceof television){
        device.switchingOffTV()
    }
    else if(device instanceof car){
        device.switchingOffCar()
    }
}
mainSwitchOff(new television())
mainSwitchOff(new car())