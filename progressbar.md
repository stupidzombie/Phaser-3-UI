<a name="ProgressBar"></a>

## ProgressBar
**Kind**: global class  

* [ProgressBar](#ProgressBar)
    * [new ProgressBar(game, x, y, width, height, maxValue, borderColor, barColor)](#new_ProgressBar_new)
    * [.setValue(value)](#ProgressBar+setValue)
    * [.setText(text, textColor, fontFamily)](#ProgressBar+setText)

<a name="new_ProgressBar_new"></a>

### new ProgressBar(game, x, y, width, height, maxValue, borderColor, barColor)
Create a Progress Bar


| Param | Type | Description |
| --- | --- | --- |
| game | <code>Phaser.Scene</code> |  |
| x | <code>Number</code> |  |
| y | <code>Number</code> |  |
| width | <code>Number</code> |  |
| height | <code>Number</code> |  |
| maxValue | <code>Number</code> |  |
| borderColor | <code>string</code> | Must be of the format '0x123123' |
| barColor | <code>string</code> | Must be of the format '0x123123' |

**Example**  
```js
const progressBar = new ProgressBar(scene, 100, 100, 400, 50, 2000, '0x000000', '0xeeeeee')
```
<a name="ProgressBar+setValue"></a>

### progressBar.setValue(value)
Set the value of the progress bar

**Kind**: instance method of [<code>ProgressBar</code>](#ProgressBar)  

| Param | Type |
| --- | --- |
| value | <code>Number</code> | 

**Example**  
```js
progressBar.setValue(500)
```
<a name="ProgressBar+setText"></a>

### progressBar.setText(text, textColor, fontFamily)
Set text for the progress bar

**Kind**: instance method of [<code>ProgressBar</code>](#ProgressBar)  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> |  |
| textColor | <code>string</code> | must be of the format '#abcd12' |
| fontFamily | <code>string</code> | css font family value |

**Example**  
```js
progressBar.setText("HP", "#ff5666", "Roboto")
```
