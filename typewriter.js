const sentence = `hello there from lighthouse labs\n`;
let timeout = 50;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timeout);
    // adds 50 extra MS to each character so they dont print at the same time
    timeout += 50;
  }
