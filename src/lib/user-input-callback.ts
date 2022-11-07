import { exit } from "process"
import { clearStack } from "./clear-stack"
import { handleExpression } from "./handle-expression"
import { stripNewlineCharacters } from "./strip-newline-characters"

export const userInputCallback = (
	stack: string[],
	value: Buffer,
	expression: string,
	userInput: string[]
): void => {
	expression = stripNewlineCharacters(value.toString().trim())
	if (expression === 'q') return exit(1)
	if (expression === 'c') {
		clearStack(stack, 'Input has been cleared. Enter a new expression:\n> ')

		return
	}
	handleExpression(stack, expression, userInput)
}
