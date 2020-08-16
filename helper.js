
const Helper = {
	/**
	 * Calculates the distance between two points
	 */
	distance: (point1, point2) => {
		let x = point2.x - point1.x
		let y = point2.y - point1.y
		let getDistance = Math.sqrt(x * x + y * y)
		return getDistance
	},

	/**
	* Generates a random number between number1 and number2
	* @param {Number} number1 an integer
	* @param {Number} number2 an integer
	*/
	randomBetween: (number1, number2) => {
		//calculate the range both numbers inclusive
		let range = number2 - number1 + 1
		// generate a random number in the range and shift it by number 1
		let randomNumber = Math.floor(Math.random() * range) + number1
		return randomNumber
	},

	/**
	 * @param {Number} secondsToWait Number of seconds to wait
	 */
	numberOfSeconds: (secondsToWait) => {
		/**
		 * @param {Function} keepPromise When this function is called, Javascript know that you finished doing what you promised
		 */
		let promiser = (keepPromise) => {
			/**
			 * This function is the one that is called after waiting the number of seconds required
			 */
			let functionToCallAfterSeconds = () => {
				// We are done waiting so we finished doing what we promised.
				keepPromise()
			}
			// Wait for secondsToWait and call functionToCallAfterSeconds
			setTimeout(functionToCallAfterSeconds, secondsToWait * 1000)
		}

		// Create a promise object and return it. This turns this function into an async function
		let promise = new Promise(promiser)
		return promise
	},

	eachColorChanger: (color, increaseOrDecrease) => {
		let decimalColor = parseInt(color, 16)
		decimalColor = Math.round(decimalColor * (1 - increaseOrDecrease))
		if (decimalColor > 255) {
			decimalColor = 255
		}

		if (decimalColor < 0) {
			decimalColor = 0
		}

		let hexColor = decimalColor.toString(16)
		hexColor = hexColor.padStart(2, '0')

		return hexColor
	},

	colorChanger: (color, increaseOrDecrease) => {
		color = color.substring(2, 8)
		let red = color.substring(0, 2)
		let green = color.substring(2, 4)
		let blue = color.substring(4, 6)

		red = Helper.eachColorChanger(red, increaseOrDecrease)
		green = Helper.eachColorChanger(green, increaseOrDecrease)
		blue = Helper.eachColorChanger(blue, increaseOrDecrease)

		const hexColor = red + green + blue

		return hexColor
	}

}

window.Helper = Helper

export default Helper