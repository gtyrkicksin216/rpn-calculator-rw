import { stdin, stdout } from 'node:process'
import { clearStack } from './lib/clear-stack'
import { userInputCallback } from './lib/user-input-callback'

stdin.setEncoding('utf-8')
stdout.write('> ')

let expression: string
let userInput: string[] = []
let stack: string[] = []

stdin.on('data', (val) => {
	userInputCallback(stack, val.toString(), expression, userInput)
})

stdin.on('close', () => {
	clearStack(stack, '👋 Bye! Thank you for using my posfix calculator.')
})
