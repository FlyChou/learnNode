const crypto = require('crypto')
function aesEncrypt(data, key){
	//Creates a Cipher object using the specific algorithm and password
	const cipher = crypto.createCipher('aes192', key)
	var crypted = cipher.update(data, 'utf8', 'hex')
	console.log('crypted:' + crypted)
	console.log('------')
	/*
	outputEncoding <string> 返回值的字符编码。
返回: <Buffer> | <string> 任何剩余的加密内容。如果指定了 outputEncoding，则返回一个字符串。如果未提供 outputEncoding，则返回 Buffer。
一旦调用了 cipher.final() 方法，则 Cipher 对象就不能再用于加密数据。 如果试图多次调用 cipher.final()，则将会导致抛出错误。
	
	如果不添加cipher.final([outputEncoding])则加解密信息会丢失。

	*/
	var ciphered = cipher.final('hex')
	console.log('hex:' + ciphered)
	crypted += ciphered
	console.log('ready return crypto')
	return crypted
}

function aesDecrypt(encrypted, key){
	//Creates a Decipher object using the specific algorithm and password
	const decipher = crypto.createDecipher('aes192',key)
	var decrypted = decipher.update(encrypted, 'hex', 'utf8')
	console.log(decrypted)
	console.log('-------')
	var deciphered = decipher.final('utf8')
	console.log(deciphered)
	decrypted += deciphered
	console.log('ready return decrypto')
	return decrypted
}

var data = "hello, this is a secret message."
var key = 'bupt'
var encrypted = aesEncrypt(data, key)
var decrypted = aesDecrypt(encrypted, key)

console.log('plain txt:' + data)
console.log('encrypted:' + encrypted)
console.log('decrypted:' + decrypted)

