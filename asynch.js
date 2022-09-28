

const minho = (you) => {
  return new Promise((resolve, reject) => {

   console.log("minho babo");
    
    
    resolve(you);
  })
}

//minho();

// console.log(typeof minho());
console.dir(
  minho("yoominho")
    .then((value) => { console.log(value) }
    ));




// let a = setTimeout(function () {
//   console.log("a");
// }, 3000);

// let b = setTimeout(function () {
//   console.log("b");
// }, 2000);

// let c = setTimeout(function () {
//   console.log("c");
// }, 1000);