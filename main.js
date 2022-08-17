const encrypt = (text, key) => {
	let encrypted = ''

	for (let i = 0; i < text.length; i++) {
		const char = text.charCodeAt(i)
		let newChar = char + key

		if (i % 2 === 1) {
			newChar = char + key + i + text.length
		}
		if (i % 2 === 0) {
			newChar = newChar + text.length + i + key
		}

		encrypted += String.fromCharCode(newChar)
	}

	return encrypted
}

const encrypted = encrypt('Skill Factory', 1)

console.log(`El mensaje encriptado es ${encrypted}`)

const desencrypt = (encrypted, key) => {
	let desencrypted = ''

	for (let i = 0; i < encrypted.length; i++) {
		const char = encrypted.charCodeAt(i)

		let newChar = char - key

		if (i % 2 === 1) {
			newChar = char - key - i - encrypted.length
		}
		if (i % 2 === 0) {
			newChar = newChar - encrypted.length - i - key
		}

		desencrypted += String.fromCharCode(newChar)
	}

	return desencrypted
}

const desencrypted = desencrypt(encrypted, 1)

console.log(`El mensaje desencriptado es ${desencrypted}`)
