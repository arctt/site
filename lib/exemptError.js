console.exempt = [];
console.e = console.error;

console.error = (err) => {
  for (let i = 0; i < console.exempt; i++) {
    if (err.toString().includes(console.exempt[i]))
      return;
  }
  
  console.e(err);
}