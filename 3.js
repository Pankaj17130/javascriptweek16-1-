const item=[
    {
     vname: "Iphone 15",
     category: "Mobile",
     priceUSD: 999,
 },   
    {
        name: "macbook air",
        category: "laptops",
        priceUSD: 1499,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 499,
    },
];
const exchangeRate=80;

function convertToINR(priceInUSD) {
    return priceInUSD*exchangeRate;

}
const itemsInINR =item. map((item) =>({
    ...item,
priceInINR:convertToINR(item.priceUSD),
}));
console.log(itemsInINR);