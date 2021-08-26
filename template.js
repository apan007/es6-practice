// template string 

const fName = 'Roman';
const lName = 'Sheikh';

const Phone = {name: 'w8 2021', ram: '6gb', price: 12000, color: 'black'}

const myText = `
    Hello!.....
    My name is ${fName+' '+lName}
    I want to buy a ${Phone.name} phone BCZ it has ${Phone.ram} ram and it's price ${Phone.price} taka is able to me
    Also my like this phone color ${Phone.color}  
`
console.log(myText);