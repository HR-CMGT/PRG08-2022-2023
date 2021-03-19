# Toon lokale afbeelding in DOM

Maak een file input field

```html
<div>
  <label for="file">Upload Image</label>
  <input type="file" accept="image/*" name="image" id="file">
</div>

<div><img id="output" width="400"/></div>
```

Gebruik de file als `src` voor een `img`.

```javascript
const fileButton = document.querySelector("#file")
fileButton.addEventListener("change", (event)=>loadFile(event))

function loadFile(event) {
	const image = document.getElementById('output')
	image.src = URL.createObjectURL(event.target.files[0])
}
```

## Mobile

Op mobiel kan je de camera als input gebruiken!
```html
<input type="file" accept="image/*;capture=camera" id="file">
```
> ⚠️ Tip! Je kan meteen testen op je mobiel door je lokale IP adres te typen in plaats van localhost. Bv: `http://192.168.2.4/prg8/test/`. Je hoeft je project dan niet telkens te uploaden naar een live server.
