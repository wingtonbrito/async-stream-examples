const Promise = require('bluebird')
const { Transform } = require('stream')

class Util {
	static streamToPromise(stream){
		return new Promise((resolve, reject) => {
			let buffers = []
			stream.on('error', reject)
			stream.on('data', (data) => {
				buffers.push(data)
			})
			stream.on('end', () => {
				resolve(Buffer.concat(buffers))
			})
		})
	}	
}

module.exports =  Util