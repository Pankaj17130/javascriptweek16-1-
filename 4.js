const books =[
    {
        title:"the Namesake",
        auther:"jhumpa lahiri",
        year:2010
    }, 
    {
        title:"the god of small Things ",
        auther:"Arundhati Roy",
        year:1997
    },
    {
        title:"A suit of boy ",
        auther:"Vikram seth",
        year:1993
    },{
        title:"the white tiger",
        auther:"Aravind adiga",
        year:2018
    },{
        title:"midnight's children",
        auther:"salman rushdie",
        year:1981
    },
];

const filteredBooks = books.filter((book) => {
    return book.year >=2010;

})
const result =filteredBooks.map((book)=>{
return {
        ... book,
         title:book.title.toUpperCase(),
         auther:book.auther.toUpperCase(),
        };
});
console.log(result)