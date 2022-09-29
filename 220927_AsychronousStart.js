// let first = setTimeout(() => {
//   console.log("첫번째 setTimeout입니다. 3초뒤에 실행됩니다.");
// }, 3000);

// let second = setTimeout(() => {
//   console.log("두번째 setTimeout입니다. 2초뒤에 실행됩니다. ");
// }, 2000);

// let third = setTimeout(() => {
//   console.log("세번째 setTimeout입니다. 1초뒤에 실행됩니다. ");
// }, 1000);

let Afirst = setTimeout(() => {
  console.log(" 첫번째 setTimeout입니다. 3초뒤에 실행됩니다. ");
  let Asecond = setTimeout(() => {
    console.log(" 두번째 setTimeout입니다. 2초뒤에 실행됩니다. ");
    let Athird = setTimeout(() => {
      console.log(" 세번째 setTimeout입니다. 1초뒤에 실행됩니다. ");      
    }, 1000);
  }, 2000);
}, 3000);

let test = new Promise(function (resolve, reject) {
  // console.log(resolve);
  // console.log(reject);

  console.log( typeof resolve);
  console.log( typeof reject);
  console.dir(resolve);
});


// console.dir(test);

// pending - 데스크에 올려 놓았다.

/*
  생성자 함수 ==>> 인스턴스(Instance)
  약속이라는 개념 ==>> Promise
  Promise를 사용하면 실행방식을 개발자가 컨트롤 할 수 있다. ==> 이것을 pending이라 한다. 
  
  promise 인스턴스는 매개변수로 함수를 받는다.
  그 매개변수 인스턴스는 두개의 매개변수를 또 받는다. (이름은 관습적으로 resolve, reject라고 불린다.)
  콜백 함수의 매개변수도 모두 함수이다. 
  데이터를 인자로 전달 받았다. 

  프로미스 매개변수 2개는 모두 함수이다. 모두 자동적으로 함수이다. 
*/ 

// 순서대로 하려면 자식으로 넣으면 된다. (시간 바꾸는는 방법은 좋은 방법이 아님) => 콜백함수로 만들면 된다.

/*
  let first = setTimeout(() => { 
  console.log('첫번째 setTimeout입니다. 3초뒤에 실행됩니다.');
  let second = setTimeout(() => {
  console.log('두번째 setTimeout입니다. 2초뒤에 실행됩니다. ');
  let third = setTimeout(() => {
  console.log('세번째 setTimeout입니다. 1초뒤에 실행됩니다. ');
}, 1000);
}, 2000);
}, 3000);
 ==> 하지만 이런 망법은 순서가 많아 질 수 록 코드가 길어지고 분석하기 까다로워 진다.
*/

/* *
* 비동기 처리 함수는 기다리지 않게 해주는 강력한 기능이 있다 >> 선입선출 - 먼저 끝나면 먼저 나간다. 
* 사용자가 기다리는 것이 좋은 영향을 주지 않기 때문에
* 하지만 필요에 따라서는 기다려야 할 - 반드시 순서를 지켜야 할 때가 있다. (본인인증, api 데이터 처리 과정 시 순서를 지켜야 처리가 되는 케이스 등)
* 이러한 방법을 병렬처리 과정이라 한다.
* 반대로 직렬처리는 순서를 지키며 처리하는 일반적인 동기 처리 방식이라 한다. 
* 
*
*
*
* 
*
*

*/

/*
 * 순서기반인 동기방식과 실행기반인 비동기 방식은, 런타임이 알아서 순식간에 실행을 끝내버리기 때문에 직관의 한계가 있는 개발자에게는 상당히 헷갈리고 어렵기로 정평이 난 개념입니다. 

 *  코드작성은 모두 '동기'처리가 되지만, 일부 특정 내장함수는 '비동기'처리가 조건이기 때문에, 엉뚱한 실행을 종종 목격하곤 합니다. 디버거(debugger)의 활용도 필요하면서, 본직적인 특성도 살펴볼 필요가 있습니다. 

 * 일반적인(프론트) javascript는 비동기 처리가 setTimeout, setInterval 정도로 국한되지만, node.js에서는 같은 성격의 함수도 동기와 비동기 두개를 나누어 지원하는 것이 상당히 많은 특징 때문에 해당 개념은 자바스크립트 엔진의 본질적인 처리 방식과 매우 밀접하면, node.js는 거의 대부분이 실행 기반인 '비동기'처리를 기본으로 하고있어, 정성 들여서 익힐 필요성이 상당히 높습니다. 

 * 왜 '비동기'가 어려운지 부터 감각을 잡아보는 것을 취지로 확인 하시기 바랍니다. 
 
 * 본 예제는 동기적으로 first, second, third 세 개의 작성순서, 평소에 사용했던 방식을 정확히 모두 어깁니다. (※ 꼭 따라 직접 작성하시어 눈으로 확인해 보시길 권합니다.) 어기는 이유가 바로 '비동기'의 특징 때문인데, 해당코드를 변형하여 첫번째, 두번째, 세번째가 순차적으로 처리되려면 어떤 형태로 변형되어야 할까요?
 
 * 본 예제의 코드에 대한 순서를 자유자재로 핸들링 할 수 있다면, API 통신 등 여러방면에서 상당한 이해도를 챙길 수 있으므로, 핵심 '개념'으로 생각하시길 바랍니다.


*/
