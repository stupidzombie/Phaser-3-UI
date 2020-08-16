import Helper from "./helper.js";

class Button {
	/**
	 * An easy way to make a working button that shows both up and down clicks and is very easy to use.
	 * @param {Phaser.Scene} game 
	 * @param {Function} clicker 
	 * @param {string} color Must be of the format '0x123123' 
	 * @param {Number} height 
	 * @param {Number} width 
	 * @param {Number} x 
	 * @param {Number} y 
	 */
	constructor(game, clicker, color, height, width, x, y) {
		this.graphics = []
		this.polygons = []
		this.polygonGraphicsList = []
		this.height = height
		this.width = width
		this.x = x
		this.y = y

		this.game = game
		this.color = color

		this.gameObject = game.add.rectangle(x, y, width, height, this.color)

		const bezel = height / 6
		this.bezel = bezel

		// points for polygons for bezels:
		const point1 = {
			x: x - 1 / 2 * width,
			y: y - 1 / 2 * height
		}

		const point2 = {
			x: x + 1 / 2 * width,
			y: y - 1 / 2 * height
		}

		const point3 = {
			x: point2.x - bezel,
			y: point2.y + bezel
		}

		const point4 = {
			x: point1.x + bezel,
			y: point1.y + bezel
		}

		const point5 = {
			x: point2.x,
			y: point2.y + height
		}

		const point6 = {
			x: point1.x,
			y: point1.y + height
		}

		const point7 = {
			x: point4.x,
			y: point6.y - bezel
		}

		const point8 = {
			x: point3.x,
			y: point7.y
		}

		// save this for text positioning
		this.point4 = point4
		this.polygonGraphicsList.push({
			polygon: new Phaser.Geom.Polygon([point1, point2, point3, point4]),
			graphics: this.game.add.graphics({ x: 0, y: 0 }),
			increaseOrDecrease: -0.2
		})

		this.polygonGraphicsList.push({
			polygon: new Phaser.Geom.Polygon([point2, point3, point8, point5]),
			graphics: this.game.add.graphics({ x: 0, y: 0 }),
			increaseOrDecrease: 0.4
		})

		this.polygonGraphicsList.push({
			polygon: new Phaser.Geom.Polygon([point8, point5, point6, point7]),
			graphics: this.game.add.graphics({ x: 0, y: 0 }),
			increaseOrDecrease: 0.2
		})

		this.polygonGraphicsList.push({
			polygon: new Phaser.Geom.Polygon([point7, point6, point1, point4]),
			graphics: this.game.add.graphics({ x: 0, y: 0 }),
			increaseOrDecrease: -0.4
		})

		this.show()

		this.gameObject.setInteractive()

		this.pointerDownHandler = () => {
			this.userClicked = true
			this.hide()
			this.show(true)
		}
		this.gameObject.on('pointerdown', this.pointerDownHandler)

		this.pointerUpHandler = () => {
			this.userClicked = false
			this.hide()
			this.show(false)
			clicker()
		}
		this.gameObject.on('pointerup', this.pointerUpHandler)

		this.pointerUpHandler = () => {
			if (this.userClicked) {
				this.hide()
				this.show(false)
			}
		}
		this.gameObject.on('pointerout', this.pointerUpHandler)
	}

	/**
	 * Hides the button
	 */
	hide() {
		this.gameObject.visible = false
		if (this.text) {
			this.text.visible = false
		}
		let start = 0
		while (start < this.polygonGraphicsList.length) {
			this.polygonGraphicsList[start].graphics.clear();
			start = start + 1
		}
	}

	/**
	 * Sets text for the button
	 * @param {string} text 
	 * @param {string} textColor must be of the format '#abcd12'
	 * @param {string} fontFamily css font family value 
	 */
	setText(text, textColor, fontFamily) {
		this.text = this.game.add.text(this.point4.x, this.point4.y, text, {
			fontSize: (this.height - this.bezel * 2) + 'px',
			fill: textColor,
			fontFamily: fontFamily
		})
		const textHeight = this.text.displayHeight
		const textWidth = this.text.displayWidth
		this.text.x = this.x - textWidth / 2
		this.text.y = this.y - textHeight / 2
		this.text.setFill(textColor)

	}

	/**
	 * Sets an image for the button
	 * @param {string} image An image loaded into phaser
	 */
	setImage(image) {
		const maxWidth = this.gameObject.displayWidth - this.bezel * 2
		const maxHeight = this.gameObject.displayHeight - this.bezel * 2

		this.image = this.game.add.image(this.x, this.y, image)

		if (this.image.width > maxWidth) {
			this.image.displayWidth = maxWidth
			this.image.displayHeight = this.image.displayWidth * this.image.height / this.image.width
		}

		if (this.image.displayHeight > maxHeight) {
			this.image.displayHeight = maxHeight
			this.image.displayWidth = this.image.displayHeight * this.image.width / this.image.height
		}
	}

	/**
	 * Shows the button
	 * @param {Boolean} reverse If true then show clicked down button
	 */
	show(reverse) {
		if (this.text) {
			this.text.visible = true
		}
		let start = 0
		while (start < this.polygonGraphicsList.length) {
			const graphics = this.polygonGraphicsList[start].graphics
			const polygon = this.polygonGraphicsList[start].polygon

			const lineColor = '0x' + Helper.colorChanger(this.color, 0.5)
			graphics.lineStyle(1, lineColor)
			let newColor
			if (reverse) {
				newColor = '0x' + Helper.colorChanger(this.color, -this.polygonGraphicsList[start].increaseOrDecrease)

			} else {
				newColor = '0x' + Helper.colorChanger(this.color, this.polygonGraphicsList[start].increaseOrDecrease)
			}

			graphics.fillStyle(newColor)
			graphics.fillPoints(polygon.points, true)

			graphics.beginPath()

			graphics.moveTo(polygon.points[0].x, polygon.points[0].y)

			for (let i = 1; i < polygon.points.length; i++) {
				graphics.lineTo(polygon.points[i].x, polygon.points[i].y)
			}

			graphics.closePath()
			graphics.strokePath()


			start = start + 1
		}
		this.gameObject.visible = true

	}

	/**
	 * Adds an Event Listener
	 * @param {string} event 
	 * @param {Function} handler 
	 */
	on(event, handler) {
		this.gameObject.on(event, handler)
	}

	/**
	 * Removes an Event Listener
	 * @param {string} event 
	 * @param {Function} handler 
	 */
	off(event, handler) {
		this.gameObject.off(event, handler)
	}


}

export default Button
