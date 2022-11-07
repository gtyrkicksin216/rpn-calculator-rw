import { Operations } from './operations'

export const handleOperation = (valueA: number, valueB: number, operator: string): number => {
	switch(operator) {
		case '+':
			return Operations.add(valueA, valueB)
		case '-':
			return Operations.subtract(valueA, valueB)
		case '*':
			return Operations.multiply(valueA, valueB)
		case '/':
			return Operations.divide(valueA, valueB)
		default:
			return 0
	}
}