import SingleCard from "./SingleCard";
import $ from 'jquery';

let titles = [];
let addresses = [];
let prices = [];
let types = [];

//func for filling arrays with data from json
function Fulfill(resultArr) {
    for (let i = 0; i < resultArr.length; i++) {
        titles.push(resultArr[i].title)
        addresses.push(resultArr[i].address)
        prices.push(resultArr[i].price)
        types.push(resultArr[i].type)
    }
}
////add space before capitals
//     types[0] = types[0].replace(/([a-z])([A-Z])/g, '$1 $2');

//getting data from json and pushing it in arrays
fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
    .then(response => response.json())
    .then(result => Fulfill(result))

console.log(titles, addresses, prices, types);
console.log(titles[0]) //undefined
function Cards() {
    console.log(titles[0]) //undefined
    return (
        <div className='cards'>
            <SingleCard title={titles[0]} address={addresses[0]} price={prices[0]} type={types[0]}/>
        </div>
    )
}

export default Cards;