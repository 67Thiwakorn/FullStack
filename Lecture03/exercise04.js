const message = "Hello, World!";
const vowels = ['a', 'e', 'i', 'o', 'u'];

for (let i = 0; i < message.length; i++) {
  const char = message[i].toLowerCase();
    if (vowels.includes(char)) {
        console.log(char);
    }
}