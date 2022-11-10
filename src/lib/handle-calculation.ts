import { Operations } from './operations'

const formatOutput = (result: number) => Math.round(result) === result ? result.toFixed(1) : result

export const handleOperation = (valueA: number, valueB: number, operator: string): string | number => {
	let answer: number
	switch(operator) {
		case '+':
			answer = Operations.add(valueA, valueB)
			break
		case '-':
			answer = Operations.subtract(valueA, valueB)
			break
		case '*':
			answer = Operations.multiply(valueA, valueB)
			break
		case '/':
			answer = Operations.divide(valueA, valueB)
			break
		default:
			answer = 0
			break
	}

	return formatOutput(answer)
}