// nested object 

const Dcompany = {
    name: 'Romekh',
    id: 344,
    address: '25 north dhaka',
    ceo: {
        name: 'shafiq',
        age: 32,
        address: 'Dhaka Mohakhali'
    },
    team: {
        webDeveloper: {
            headOfDepertment: {
                name: 'ariful huq',
                age: 24,
                address: 'out of dhaka'
            },
            stuff: ['milon', 'asik', 'bikas', 'john', 'nur hosein']
        },
        designer: {
            head: 'jolani begum',
            workOur: [12,7,8,8,9,11,13,12]
        }
    }
}

const {name} = Dcompany?.team?.webDeveloper?.headOfDepertment;
console.log(name);