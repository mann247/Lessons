`use strict` /* prevents user from decalring global variables, helps with debugging*/
const count = [];
for(let i = 0; i <= 10; i++{
    count.push(i);

    console.log(count);
}

let i=1; n=5;
while (i<=n){
    console.log(i);
    i+=1;
}

const fullNames = ['Nia Manning', 'Ana Noyola', 'Jhoana Peralta'];
const firstNames = [];
const lastNames = [];

for (let i =0; i <fullNames.length; i++){
    splitName = fullNames[i].split(" ");
    firstNames.push(splitName[0]);
    lastNames.push(splitName[1]);
}

const list = document.createElement("ul")
for (let i=0; i < firstNames.length; i++){
    const listElement = document.createElement("li");
    listElement.innerHTML = `${firstNames[i]}` + lastNames[i];
    list.appendChild(listElement);
}
document.body.appendChild(list);
/* for(fullNames = 0; i < fullNames.length){
    console.log(firstNames = fullNames.split(" ", 1));
} */