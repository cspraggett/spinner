const chars = { 0: "|", 1: "/", 2: "-" };

for (let i = 0, time = 100; i < 7; i++, time += 200) {
  setTimeout(() => {
    process.stdout.write(`\r${chars[i % 3]}`);
  }, time);
}
setTimeout(() => process.stdout.write("\n"), 1600);
