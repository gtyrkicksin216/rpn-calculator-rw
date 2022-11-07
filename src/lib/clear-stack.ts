import { MessageType } from "../models/message.type"
import { stderr, stdout } from 'node:process'
import { clear } from "node:console"

export const clearStack = (stackRef: string[], message?: string, messageType: MessageType = 'info') => {
	stackRef.length = 0
	clear()
	message && (messageType === 'info' ? stdout.write(message) : stderr.write(message))
	stackRef.length = 0
}