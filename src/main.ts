import { clear } from 'node:console'
import { exit, stderr, stdin, stdout } from 'node:process'
import { handleOperation } from './lib/handle-calculation'
import { isOperator } from './lib/is-operator'
import { stripNewlineCharacters } from './lib/strip-newline-characters'
import { MessageType } from './models/message.type'

function main() {
	stdin.setEncoding('utf-8')

	let cleanedInput: string
	let userInput: string[] = []
	let stack: string[] = []
	
	stdin.on('data', (val) => {
		cleanedInput = stripNewlineCharacters(val.toString().trim())
		if (cleanedInput === 'q') return exit(1)
		if (cleanedInput === 'c') {
			clearStack('Input has been cleared. Enter a new expression:\n> ')

			return
		}
		handleExpression()
	})
	
	stdin.on('close', () => {
		clearStack('👋 Bye! Thank you for using my posfix calculator.')
	})

	/**
	 * Determines the operands and operators in the functions and handles them accordingly
	 */
	function handleExpression(): void {
		userInput = cleanedInput.split(' ')
		userInput.forEach((e, i) => {
			if (!isOperator(e)) {
				stack.push(e)
				userInput.length === 1 && stdout.write(`${e}\n> `)
			} else {
				const operandB = stack.pop()
				const operandA = stack.pop()
				if (!operandA || !operandB) {
					clearStack('Not enough operands. Input has been cleared, please try again\n> ', 'error')

					return
				}
				const operationResult = handleOperation(parseFloat(operandA), parseFloat(operandB), e)
				stack.push(operationResult.toString())
				if (i === userInput.length - 1) stdout.write(`${operationResult}\n> `)
			}
		})
	}

	function clearStack(message?: string, messageType: MessageType = 'info'): void {
		stack.length = 0
		clear()
		message && (messageType === 'info' ? stdout.write(message) : stderr.write(message))
	}
}

main()
