// import _ from "lodash";
// import printMe from "./print";
// import "./style.css";
import { cube } from "./math";

function component() {
  // let element = document.createElement('div');
  let element = document.createElement('pre');
  let btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  // element.innerHTML = _.join(['Hello', 'webpack', '!'], ' ');
  element.innerHTML = [
    'Hello webpack',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  // btn.innerHTML = 'Click me and check the console!';
  // btn.onclick = printMe;
  // element.appendChild(btn);

  return element;
}

let element = component();
document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', function () {
//     console.log('Accepting the updated printMe module!');

//     document.removeChild(element);
//     element = component();
//     document.appendChild(element);
//   })
// }