export function add(input: string):number {
  if(!input) return 0;
  const delimiter = /,|\n/
  const splitString = input.split(delimiter);
  const numbers = splitString.map(Number)
  return numbers.reduce((acc, val) => acc + val, 0)
}
