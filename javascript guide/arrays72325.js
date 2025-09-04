const apprentices = ['Nia', 'Marlette', 'Madison B.', 'Kevin N.', 'Jordan', 'Tori'];
console.log(`${apprentices[0]} has ${apprentices.length} in their group`);
    console.log(apprentices[0] + " has " + apprentices.length + " in their group");

if (apprentices.includes('Tori')){
        apprentices.pop('Tori');
        console.log(apprentices);
    }else{
        console.log('R2H Rocks!');
}

