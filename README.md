magic
=====

CSS3 Animations with special effects. Now on beta, more effects coming soon. Many thanks to [daneden](http://daneden.me/animate/) for inspiration!
My next step is to minifing the code.
Take a look at the demo [link to demo page](http://www.minimamente.com/magic-css3-animations)

Installation
=====

Include the CSS style: magic.css

Example:
```html
<link rel="stylesheet" href="yourpath/magic.css">
```

Usage
=====

This is a sample code on hover with jQuery, first you include the class "magictime" and after your desired animation.
```js
$('.meta-thumb').hover(function () {
  $(this).addClass('magictime puffIn');
});
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

Default is CSS timing is:
```css
.magictime {
-webkit-animation-duration: 1s;
-moz-animation-duration: 1s;
-o-animation-duration: 1s;
animation-duration: 1s;
}
```

