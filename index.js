const theRecords = [];

function writeCards(people, event) {

    for (let i = 0; people.length > i; i++) {
        theRecords.push("Thank you, " + people[i] + ", for the wonderful " + event + " gift!");
    }
    return theRecords;

}

function countDown(number) {

    let x = 0;

    while (x <= number) {
        console.log(number--);

    }

}
countDown(4);
