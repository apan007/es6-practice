// nested object 

const Dcompany = {
    name: 'Apan',
    id: 344,
    address: '25 north dhaka',
    ceo: {
        name: 'Anan',
        age: 32,
        address: 'Ctg Bd'
    },
    team: {
        webDeveloper: {
            headOfDepertment: {
                name: 'Jhankar Mahbub',
                age: 24,
                address: 'out of dhaka'
            },
            stuff: ['milon', 'asik', 'bikas', 'john', 'nur ahmed']
        },
        designer: {
            head: 'karina begum',
            workOur: [12,7,8,8,9,11,13,12]
        }
    }
}

const {name} = Dcompany?.team?.webDeveloper?.headOfDepertment;
console.log(name);