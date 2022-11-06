import { exit, stdin, stdout } from 'node:process'

function main() {
	stdin.setEncoding('utf-8')

	stdin.on('data', (d) => {
		messageUser(`Input recieved: ${d}`)
			.then(() => exit(1))
	})
}

function messageUser (message: string): Promise<unknown> {
	return new Promise((res) => stdout.write(message, res))
}

main()
