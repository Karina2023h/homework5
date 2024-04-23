let number = prompt("Введіть ціле число");
let prime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    prime = false;
    break;
  }
}
alert(`Число ${number} ${prime ? "є" : "не є"} простим`);
console.log(`Число ${number} ${prime ? "є" : "не є"} простим`);
