<a name="Button"></a>

## Button
**Kind**: global class  

* [Button](#Button)
    * [new Button(game, x, y, width, height, color, clickAction)](#new_Button_new)
    * [.hide()](#Button+hide)
    * [.setText(text, textColor, fontFamily)](#Button+setText)
    * [.setImage(image)](#Button+setImage)
    * [.show(reverse)](#Button+show)
    * [.on(event, handler)](#Button+on)
    * [.off(event, handler)](#Button+off)

<a name="new_Button_new"></a>

### new Button(game, x, y, width, height, color, clickAction)
An easy way to make a working button that shows both up and down clicks and is very easy to use.


| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Scene</code> |  |
| x | <code>Number</code> |  |
| y | <code>Number</code> |  |
| width | <code>Number</code> |  |
| height | <code>Number</code> |  |
| color | <code>string</code> | Must be of the format '0x123123' |
| clickAction | <code>function</code> |  |

**Example**  
```js
const pauseButton = new Button(scene, 0, 100, 500, 100, '0xff1234', () => { myGame.pause() } )
```
<a name="Button+hide"></a>

### button.hide()
Hides the button

**Kind**: instance method of [<code>Button</code>](#Button)  
<a name="Button+setText"></a>

### button.setText(text, textColor, fontFamily)
Sets text for the button

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> |  |
| textColor | <code>string</code> | must be of the format '#abcd12' |
| fontFamily | <code>string</code> | css font family value |

**Example**  
```js
pauseButton.setText("Pause", "#ff5666", "Roboto")
```
<a name="Button+setImage"></a>

### button.setImage(image)
Sets an image for the button

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type | Description |
| --- | --- | --- |
| image | <code>string</code> | An image loaded into phaser |

**Example**  
```js
settingsButton.setImage('Settings Image')
```
<a name="Button+show"></a>

### button.show(reverse)
Shows the button

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type | Description |
| --- | --- | --- |
| reverse | <code>Boolean</code> | If true then show clicked down button |

<a name="Button+on"></a>

### button.on(event, handler)
Adds an Event Listener

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| handler | <code>function</code> | 

<a name="Button+off"></a>

### button.off(event, handler)
Removes an Event Listener

**Kind**: instance method of [<code>Button</code>](#Button)  

| Param | Type |
| --- | --- |
| event | <code>string</code> | 
| handler | <code>function</code> | 

