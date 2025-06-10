export function add(input: string):number {
  if(!input) return 0;
  let delimiter = /,|\n/;
  let numStr = input;
  if(input.startsWith("//")) {
      const splitString = input.split('\n');
      delimiter = new RegExp(splitString[0].slice(2));
      numStr = splitString[1];
  }
  const numbers = numStr.split(delimiter).map(Number);
  return numbers.reduce((acc, val) => acc + val, 0)
}
