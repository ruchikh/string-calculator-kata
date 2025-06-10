export function add(input: string):number {
  if(!input) return 0;
  const splitString = input.split(',');
  const numbers = splitString.map(Number)
  return numbers.reduce((acc, val) => acc + val, 0)
}
