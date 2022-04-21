// Import stylesheets
import './style.css';

// Promise
console.log('before timeout');

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('inside timeout 1');
  }, 0);

  setTimeout(() => {
    console.log('inside timeout 2');
    resolve();
  }, 1);
});

p.then(
  () => {
    console.log('resolved 1');
  },
  () => {
    console.log('rejected 1');
  }
);

p.then(
  () => {
    console.log('resolved 2');
  },
  () => {
    console.log('rejected 2');
  }
);

console.log('after timeout');
