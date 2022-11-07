import { Operations } from './operations'

describe('Ensures operations are pure', () => {
	it('Adds values', () => {
		expect(Operations.add(5, 8)).toEqual(13)
	})

	it('Subtracts values', () => {
		expect(Operations.subtract(24, 8)).toEqual(16)
	})

	it('Divides values', () => {
		expect(Operations.divide(25, 5)).toEqual(5)
	})

	it('Multiplies values', () => {
		expect(Operations.multiply(4, 4)).toEqual(16)
	})
})
