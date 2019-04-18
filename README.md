:tophat: magic
---------------

CSS3 Animations with special effects. [DEMO](https://www.minimamente.com/project/magic/)

## Installation

**NPM** - [Package url](https://www.npmjs.com/package/magic.css)
```bash
npm i magic.css
```

**YARN** - [Package url](https://yarnpkg.com/en/package/magic.css)
```bash
yarn add magic.css
```

## Inclusion

Include the file **magic.css** or include the minified version **magic.min.css**

```html
<link rel="stylesheet" href="yourpath/magic.css">
```

or

```html
<link rel="stylesheet" href="yourpath/magic.min.css">
```

## Usage with JavaScript

This is a sample code on hover with **JavaScript**, first you include the class "magictime" and after your desired animation.
```js
const selector = document.querySelector('.yourdiv')
selector.classList.add('magictime', 'puffIn')
```

If you want to load the animation after certain time, you can use this example:
```js
//set timer to 5 seconds, after that, load the magic animation
function myFunction() {
    const selector = document.querySelector('.yourdiv')
    selector.classList.add('magictime', 'puffIn')
}
setTimeout(myFunction, 5000);
```

If you want to load the animation after certain time but with infinite loop, you can use this example:
```js
//set timer to 3 seconds, after that, load the magic animation and repeat forever
function myFunction() {
    const selector = document.querySelector('.yourdiv')
    selector.classList.add('magictime', 'puffIn')
}
setInterval(myFunction, 3000);
```

## Usage with jQuery

This is a sample code on hover with jQuery, first you include the class "magictime" and after your desired animation.
```js
$('.yourdiv').hover(function () {
    $(this).addClass('magictime puffIn');
});
```

If you want to load the animation after certain time, you can use this example:
```js
//set timer to 5 seconds, after that, load the magic animation
setTimeout(function(){
    $('.yourdiv').addClass('magictime puffIn');
}, 5000);
```

If you want to load the animation after certain time but with infinite loop, you can use this example:
```js
//set timer to 3 seconds, after that, load the magic animation and repeat forever
setInterval(function(){
    $('.yourdiv').toggleClass('magictime puffIn');
}, 3000 );
```
## HTML & CSS tips

You can **change the time** of the animation by setting the class "magictime" for example:
```css
.magictime {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
}
```

**Default** CSS timing is:
```css
.magictime {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
}
```

If you want to assign the **timing to a specific animation**, you can use the following code *(use 2 class)*:
```css
.magictime.magic {
    -webkit-animation-duration: 10s;
    animation-duration: 10s;
}
```

:tada: Gulp and SCSS (SASS) compiling
---------------

If you want to customize the CSS files, now you will have the chance. For example, if you want to include only certain animations, you will have to go to this file:

```html
assets/scss/magic.scss
```

Comment or uncomment your desired file and run from terminal the following commands:

```bash
npm install
```

and last command:

```bash
gulp
```

**Automatically** this generate the new files!


:white_check_mark: Browser Support
---------------

**Browser** | Chrome | Firefox | Safari | iOS Safari | Opera | Android | Android Chrome | IE | Opera Mini
--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---:
**Version** | 31+ | 31+ | 7+ | 7.1+ | 27+ | 4.1+ | 42+ | 10+ | :x: