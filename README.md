E4M.CustomSelect (v1.0)
=========

Provide a custom form select 
- E4M is a custom library, soon will be posted other plugins for it.

### Contains
Customized select, using ul / li structure, so will be easy to make a customized css. Any change on ul select, will reflect on its correspondent input hidden value.

### Instructions
```
git clone git://github.com/leonardopaiva/E4M.CustomSelect.git
git remote rm origin
```
### Installing

SCRIPTS
```html
  <script src="scripts/e4m/E4M.js" type="text/javascript"></script>
  <script src="scripts/e4m/E4M.Functions.js" type="text/javascript"></script>
  <script src="scripts/e4m/E4M.CustomSelect.js" type="text/javascript"></script>
```
CSS
```html
  <link rel="stylesheet" type="text/css" href="styles/E4M.CustomSelect.css">
```
HTML
```html
  <!-- HTML-E4M-CUSTOM-SELECT -->
	<nav>
		<div class="wrap-input">
			<label class="label-fake-select" for="ingredient">Ingredient</label>
			<ul class="fake-select" data-input="recipe">
				<li class="active" data-value="Cream Cracker Tradicional">Cream Cracker Tradicional Tradicional</li>
				<li data-value="Cream Cracker Tradicional">Cream Cracker Tradicional</li>
				<li data-value="2Lorem ipsum dolor sit amet.  sit amet.  sit amet.">2Lorem ipsum dolor sit amet.  sit amet.  sit amet.</li>
				<li data-value="3Lorem ipsum dolor sit amet.">3Lorem ipsum dolor sit amet.</li>
				<li data-value="4Lorem ipsum dolor sit amet.">4Lorem ipsum dolor sit amet.</li>
			</ul>
		</div>
		<div class="wrap-input">
			<label class="label-fake-select" for="ingredient">Type Recipe</label>
			<ul class="fake-select" data-input="type-recipe">
				<li class="active" data-value="B Cream Cracker Tradicional">B Cream Cracker Tradicional Tradicional</li>
				<li data-value="B Cream Cracker Tradicional">B Cream Cracker Tradicional</li>
				<li data-value="2Lorem ipsum dolor sit amet.  sit amet.  sit amet.">2Lorem ipsum dolor sit amet.  sit amet.  sit amet.</li>
				<li data-value="3Lorem ipsum dolor sit amet.">3Lorem ipsum dolor sit amet.</li>
				<li data-value="4Lorem ipsum dolor sit amet.">4Lorem ipsum dolor sit amet.</li>
			</ul>
		</div>
		<div class="wrap-input">
			<label class="label-fake-select" for="ingredient">Time</label>
			<ul class="fake-select" data-input="time">
				<li class="active" data-value="C Cream Cracker Tradicional">C Cream Cracker Tradicional Tradicional</li>
				<li data-value="C Cream Cracker Tradicional">C Cream Cracker Tradicional</li>
				<li data-value="2Lorem ipsum dolor sit amet.  sit amet.  sit amet.">2Lorem ipsum dolor sit amet.  sit amet.  sit amet.</li>
				<li data-value="3Lorem ipsum dolor sit amet.">3Lorem ipsum dolor sit amet.</li>
				<li data-value="4Lorem ipsum dolor sit amet.">4Lorem ipsum dolor sit amet.</li>
			</ul>
		</div>
	</nav>
	<form action="#">
		<input type="hidden" name="recipe" value="0">
		<input type="hidden" name="type-recipe" value="0">
		<input type="hidden" name="time" value="0">
		<!-- <input type="submit" value="buscar"> -->
	</form>
```
### OBS
- This html will generate 3 selects
- The value of "data-name" on ul, must be equal to the name from its correspondent input hidden
- The input hidden value will be update everytime that the "ul.fake-select li.active" changes

###Copyright

E4M.CustomSelect contato@leonardopaiva.com.
