let timeout = 100;
const sentence = `|/-\|/-\|`;
let count = 0;
for (let y = 0; y < sentence.length; y++) {
    setTimeout(() => {
      process.stdout.write(`\r${sentence[y]}`);
    }, timeout);
    timeout += 200;
    count ++;
  }

setTimeout(() => {
  process.stdout.write('hello from spinner2.js... \rheyyy\n');
}, timeout + 200);
