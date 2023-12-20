interface Mountain {
    name: string,
    height: number,

}

let mountains: Mountain[] = [
    {
        name: "Kilimonjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];

function findNameOfTallestMountain(mountains: Mountain[]) {
    let tallestMountain = mountains[0];
    for (const mountain of mountains) {
        if (mountain.height > tallestMountain.height) {
            tallestMountain = mountain;
        }
    }
    return tallestMountain.name;



}
export { Mountain, findNameOfTallestMountain }