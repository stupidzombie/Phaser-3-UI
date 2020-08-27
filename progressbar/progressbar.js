class ProgressBar {
	/**
	 * Create a Progress Bar
	 * @param {Phaser.Scene} game 
	 * @param {Number} x 
	 * @param {Number} y 
	 * @param {Number} width 
	 * @param {Number} height 
	 * @param {Number} maxValue 
	 * @param {string} borderColor Must be of the format '0x123123'
	 * @param {string} barColor Must be of the format '0x123123'
	 * 
	 * @example 
	 * const progressBar = new ProgressBar(scene, 100, 100, 400, 50, 2000, '0x000000', '0xeeeeee')
	 */
	constructor(game, x, y, width, height, maxValue, borderColor, barColor) {
		this.game = game
		this.textX = x
		this.textY = y
		this.x = x - width / 2
		this.y = y - height / 2
		this.height = height
		this.width = width
		this.maxValue = maxValue
		this.borderColor = borderColor
		this.barColor = barColor

		this.borderBar = game.add.graphics()
		this.borderBar.fillStyle(borderColor, 1)
		this.borderBar.fillRoundedRect(this.x, this.y, width, height, height / 4)

		this.bar = game.add.graphics()

	}

	/**
	 * Set the value of the progress bar
	 * @param {Number} value 
	 * 
	 * @example
	 * progressBar.setValue(500)
	 */
	setValue(value) {
		this.value = value
		const adjustment = this.height * 0.05
		const maxWidth = this.width - 2 * adjustment
		const maxHeight = this.height - 2 * adjustment

		const displayWidth = maxWidth * value / this.maxValue

		const x = this.x + adjustment
		const y = this.y + adjustment
		this.bar.clear()
		this.bar.fillStyle(this.barColor, 1)
		this.bar.fillRoundedRect(x, y, displayWidth, maxHeight, maxHeight / 4)

	}

	/**
	 * Set text for the progress bar
	 * @param {string} text 
	 * @param {string} textColor must be of the format '#abcd12'
	 * @param {string} fontFamily css font family value 
	 * 
	 * @example
	 * 
	 * progressBar.setText("HP", "#ff5666", "Roboto")
	 */
	setText(text, textColor, fontFamily) {
		if (this.text === undefined) {
			this.text = this.game.add.text(this.x, this.y, text, {
				fontSize: (this.height * 0.7) + 'px',
				fill: textColor,
				fontFamily: fontFamily
			})
		} else {
			this.text.setText(text)
		}
		// const textHeight = this.text.displayHeight
		const textWidth = this.text.displayWidth
		this.text.x = this.x + this.width / 2 - textWidth / 2
		this.text.y = this.y + this.height * 0.05
		this.text.setFill(textColor)

	}
	/**
	 * moves progress bar
	 * @param {Number} x 
	 * @param {Number} y 
	 */
	move(x, y) {
		this.x = x - this.width / 2
		this.y = y - this.height / 2
		this.borderBar.clear()
		this.borderBar.fillStyle(this.borderColor, 1)
		this.borderBar.fillRoundedRect(this.x, this.y, this.width, this.height, this.height / 4)

		if (this.text) {
			this.text.x = this.x + this.width / 2 - this.text.displayWidth / 2
			this.text.y = this.y + this.height * 0.05
		}

		this.setValue(this.value)
	}

	/**
	 * destroys progress bar
	 */
	destroy() {
		this.borderBar.destroy()
		this.bar.destroy()
		if(this.text) {
			this.text.destroy()
		}
	}



}

export default ProgressBar