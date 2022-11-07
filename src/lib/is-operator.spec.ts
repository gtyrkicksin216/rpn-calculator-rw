import { isOperator } from './is-operator'

describe('Detect operators in expressions', () => {
	it('Detect operators', () => {
		expect(isOperator('+')).toBe(true)
		expect(isOperator('-')).toBe(true)
		expect(isOperator('/')).toBe(true)
		expect(isOperator('/')).toBe(true)
	})

	it('Is falsey for non operators', () => {
		expect(isOperator('2')).toBe(false)
		expect(isOperator('a')).toBe(false)
		expect(isOperator('x')).toBe(false)
		expect(isOperator('\\')).toBe(false)
	})
})
