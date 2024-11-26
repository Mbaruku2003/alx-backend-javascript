process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('input', (input) => {
  const thedata = input.toString().trim();
  process.stdout.write(`Your name is: ${thedata}\n`);
  process.exit();
});
process.on('exit', () => {
  console.log('This important software is now closing');
});
