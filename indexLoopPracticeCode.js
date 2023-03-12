for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
};

const theGifts = ["teddy bear", "drone", "doll", "monopoly"];

function wrapTheGifts(myArray) {
    for (let i = 0; myArray.length > i; i++) {
        console.log(`Wrapped ${myArray[i]} and added a bow!`);
    }

    //return myArray; // seems to work even without return
}

wrapTheGifts(theGifts);

//Using while loop to do the same

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0; // the initialization moves OUTSIDE the body of the loop!
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++; // the iteration moves INSIDE the body of the loop!
    }

    return gifts;
}

wrapGifts(gifts);
