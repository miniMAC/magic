magic
=====

CSS3 Animations with special effects. Many thanks to [daneden](http://daneden.me/animate/) for inspiration!
Take a look: [DEMO PAGE](http://minimamente.com/example/magic_animations/)

##Installation


Include the CSS style: magic.css
or
include the mynified version: magic.min.css

Example:
```html
<link rel="stylesheet" href="yourpath/magic.css">
```

##Usage

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

You can change the time of the animation by set the class "magictime" for example:
```css
.magictime {
-webkit-animation-duration: 3s;
-moz-animation-duration: 3s;
-o-animation-duration: 3s;
animation-duration: 3s;
}
```

Default CSS timing is:
```css
.magictime {
-webkit-animation-duration: 1s;
-moz-animation-duration: 1s;
-o-animation-duration: 1s;
animation-duration: 1s;
}
```

If you want to assign the timing to a specific animation, you can use that code (use 2 class):
```css
.magictime.magic {
-webkit-animation-duration: 10s;
-moz-animation-duration: 10s;
-o-animation-duration: 10s;
animation-duration: 10s;
}
```
##Bower Installation
```
bower install magic
```
