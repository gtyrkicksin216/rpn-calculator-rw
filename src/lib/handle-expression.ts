import { stdout } from "node:process"
import { clearStack } from "./clear-stack"
import { handleOperation } from "./handle-calculation"
import { isOperator } from "./is-operator"

export const handleExpression = (
	stack: string[],
	expression: string,
	userInput: string[]
): void => {
	userInput = expression.split(' ')
	userInput.forEach((e, i) => {
		if (!isOperator(e)) {
			stack.push(e)
			userInput.length === 1 && stdout.write(`${e}\n> `)
		} else {
			const operandB = stack.pop()
			const operandA = stack.pop()
			if (!operandA || !operandB) {
				clearStack(stack, 'Not enough operands. Input has been cleared, please try again\n> ', 'error')

				return
			}
			const operationResult = handleOperation(parseFloat(operandA), parseFloat(operandB), e)
			stack.push(operationResult.toString())
			if (i === userInput.length - 1) stdout.write(`${operationResult}\n> `)
		}
	})
}