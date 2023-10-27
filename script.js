let person_details=[{name:"abhi",age:23,city:"Bangalore"},
{name:"Hari",age:28,city:"Chennai"},
{name:"Eval",age:32,city:"Bangalore"},
{name:"Mani",age:24,city:"Coimbatore"},
{name:"Prabha",age:38,city:"Bangalore"}]
//let input_elements=document.querySelector("#element")
//input_elements.textContent=person_details.toString(" ,");
let detailsString = person_details.map(person => {
    return `Name: ${person.name}, Age: ${person.age}, City: ${person.city}`;
}).join();
let input_elements=document.querySelector("#element")
input_elements.textContent=detailsString;
 
 
 
function map(){
    let mappedElement= person_details.map( value => value.name).join(', ')
    //console.log(mappedElement);
    let upperCase=document.querySelector("#uppercase")
    upperCase.textContent=mappedElement;
}
function filter(){
    let valuemap= person_details.filter(q =>q.age > 30);
    let name_value=valuemap.map(q=>q.name +"  " + q.age).join(', ')// If we need name details we can get the name using this code.
    //let age_value=valuemap.map(q=>q.age).join(', ')
    //let name=valuemap.map(q=>q.name).join(', ')
    let upperCase=document.querySelector("#uppercase")
    upperCase.textContent= "Elder people: " + name_value;
}
function reduce(){
    let age_value=person_details.map(q=>q.age);
    let avg_val= age_value.reduce((total,age) => total+age, 0);
    let averageAge = avg_val/age_value.length;
    let upperCase=document.querySelector("#uppercase")
    upperCase.textContent= "Average Value of ages:  " + averageAge;
}
function modify(){
    person_details.forEach(element => {
        let upperCase=document.querySelector("#uppercase")
    upperCase.textContent="One of the member from " +" " + element.city + " " + "is" + " " +element.name + " "+ "and age is " + " " +element.age;
    console.log (element)
    });
}