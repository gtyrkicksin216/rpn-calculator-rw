export const isOperator = (input: string): boolean => {
	const operators = ['+', '-', '*', '/']
	return operators.includes(input)
}