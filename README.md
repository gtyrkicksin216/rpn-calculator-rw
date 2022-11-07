# RPN/Postfix Calculator Solution

A simple postfix calculator that allows for basic expressions. These can be entered 1 value at a time or entered as a full posfix expression.

## Technical Choices

~~The `main` function contains the declarations for the stack and user input. Methods that have been abstracted but still require access to these variables are members of the `main` function still.~~

I left the above description so it can still be viewed, but I ended up refactoring to break out the majority of the logic into separate modules. This helps readability slightly by keeping things more digestable, but was ultimately done to allow for things to be tested in a more complete way.

Utility functions (`isOperator`, `stripNewlineCharacters`, etc.) have been moved to their own modules to promote readability and reuse.

Operation methods have been abstracted to pure functions which are static members of the `Operations` class. This ensures predictable output from these methods.

The Operations above are invoked by the `handleOperation` function which implements a switch/case. As the application grows the combination of this function in conjunction with the `Operations` class, will allow for lower cyclomatic complexity in the `main` function.

Models have been added under the `models` directory. While now there is only 1, which probably could have been defined in context, as projects grow keeping models separate allows for appropriate reuse.

## Tradeoffs and/or future refactoring

Given more time to take a look at this with fresh eyes I'm sure there are things that I'd change. There is still something that feels slightly off to me but I can't put my finger on it at the moment. If I were to spend more time on this I would love to approach it give it a crack with an async option as well. I would also likely move tests out of the `lib` directory and add it to a directory specifically allocated for test files.

## Run notes

There's nothing really special about running the program. You can use `yarn start` to run the CLI. I also added a `yarn watch` for development, as well as `yarn test` to run the unit tests.
