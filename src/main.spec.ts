import { userInputCallback } from './lib/user-input-callback'

let expression: string = ''
let stack: string[] = []
let userInput: string[] = []

beforeEach(() => {
	expression = ''
	stack.length = 0
	userInput.length = 0
})

describe('Handle user input', () => {
	it('Single arguments, Test Expression 1', () => {
		const singleValues: string[] = ['5', '8', '+']
		singleValues.forEach(v => {
			userInputCallback(
				stack,
				v,
				expression,
				userInput,
			)
		})
		const [result] = stack
		expect(result).toBeDefined()
		expect(result).toEqual('13')
	})

	it('Full expression', () => {
		const value = '5 5 5 8 + + -'
		userInputCallback(stack, value, expression, userInput)
		const [result] = stack
		expect(result).toBeDefined()
		expect(result).toBe('-13')
	})

	it('Single arguments, Test Expression 2', () => {
		const singleValues: string[] = ['-3', '-2', '*', '5', '+']
		singleValues.forEach(v => {
			userInputCallback(
				stack,
				v,
				expression,
				userInput,
			)
		})
		const [result] = stack
		expect(result).toBeDefined()
		expect(result).toEqual('11')
	})

	it('Single arguments, Test Expression 3', () => {
		const singleValues: string[] = ['5', '9', '1', '-', '/']
		singleValues.forEach(v => {
			userInputCallback(
				stack,
				v,
				expression,
				userInput,
			)
		})
		const [result] = stack
		expect(result).toBeDefined()
		expect(result).toEqual('0.625')
	})
})
