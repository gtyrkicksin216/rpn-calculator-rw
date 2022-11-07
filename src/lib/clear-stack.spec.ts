import { clearStack } from './clear-stack'

const stack: string[] = ['5', '4', '3', '2', '1']

describe('Clear Stack', () => {
	it('Empties stack', () => {
		clearStack(stack)
		expect(stack.length).toBe(0)
		expect(stack).toStrictEqual([])
	})
})
