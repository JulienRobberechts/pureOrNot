export function hello(name: string) {
  console.log(`Hello, ${name}!`);
}

// Is the function "hello" pure or impure?
// The function "hello" is impure. It has a side effect of printing a message to the console. This is not a pure function because it modifies external state and produces observable effects other than returning a value.
