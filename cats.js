const catdata =[
    {name: 'Link',
     DOB: '5-14-2019',
     breed: 'siberian cat',
     favouriteFood: 'dry food',
     color: 'white'
    },
    {name: 'JOJO',
    DOB: '12/28/2019',
    breed: 'domestic cat',
    favouriteFood: 'wet food',
    color: 'tebby'
    },
    {name: 'Meatball',
    DOB: '2-20-2020',
    breed: 'siberian cat',
    favouriteFood: 'everything',
    color: 'tebby'
    },
    {name: 'Cheessball',
    DOB: '7-28-2020',
    breed: 'siberian cat',
    favouriteFood: '...under investigation ',
    color: 'white'
    }
]

function listCat(){
    return [...catdata];
};

function findCatByName(name){
    const cat = catdata.find((cat)=>{
        return cat.name === name;
    })
    return {...cat};
}

module.exports = {listCat, findCatByName};
    


