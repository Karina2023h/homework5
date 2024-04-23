const N = prompt("Введіть ціле число");

for (let i = 1; i <= 100; i++) {
  const send = i * i;
  if (send > N) {
    break;
  }
  console.log(i);
}
