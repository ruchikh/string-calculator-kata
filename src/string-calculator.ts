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

  const negativeNumber = numbers.filter((n => n < 0))
  if(negativeNumber.length > 0) {
    throw new Error(`negative numbers not allowed: ${negativeNumber.join(',')}`)
  }
  return numbers.reduce((acc, val) => acc + val, 0)
}
