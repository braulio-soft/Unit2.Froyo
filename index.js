function countFroyoFlavors(input) {
    const flavorsArray = input.split(',');
    const flavorCount = {};

    flavorsArray.forEach(flavor => {
        flavor = flavor.trim().toLowerCase();
        if (flavorCount[flavor]) {
            flavorCount[flavor]++;
        } else {
            flavorCount[flavor] = 1;
        }
    });

    return flavorCount;
}

const userInput = prompt("Enter your froyo flavors separated by commas (e.g., vanilla,strawberry,coffee):");
const flavorSummary = countFroyoFlavors(userInput);

console.table(flavorSummary);