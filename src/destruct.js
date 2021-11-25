// const book = {
//     title : 'ego is the enemy',
//     author : 'Ryan Holiday',
//     publisher : {
//         name : 'penguin'
//     }
// }

// const { name : publisherName ='Self Published' } = book.publisher;

// console.log(publisherName);

const item = ['coffee (hot)','$2.00','$2.50','$2.75'];

const [productName, ,medium] = item;

console.log(`A medium ${productName} costs ${medium}`);