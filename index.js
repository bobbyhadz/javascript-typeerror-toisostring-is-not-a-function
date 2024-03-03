// TypeError: toISOString is not a function in JavaScript

// EXAMPLE 1 - Only call the `toISOString()` method on valid Date objects

// ✅ Works
const d1 = new Date().toISOString();
console.log(d1);

const d2 = new Date('Sept 24, 22 13:20:18').toISOString();
console.log(d2); // 👉️ 2022-09-24...

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if the value is a valid `Date` object

// const d1 = new Date();

// if (
//   typeof d1 === 'object' &&
//   d1 !== null &&
//   'toISOString' in d1
// ) {
//   const result = d1.toISOString();
//   console.log(result);
// }
