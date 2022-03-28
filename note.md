# Remark

`git diff` with origin Remark repo

`src/remark/scaler.js` 中的 `referenceWidth/Height` 用来 scale 页面与字体的相对大小，相当于缩放字体

页面的大小、长宽比可以在 `style.css` 中 `.remark-slide-scaler` 和 `@page size` 直接覆盖

想要在浏览器中居中预览的话，还需在 `remark.create()` 时传入正确的长宽比，如

```js
remark.create({ratio: '16:9'})
```

```diff
index e5a08ad..5ab5241 100644
--- a/src/remark/scaler.js
+++ b/src/remark/scaler.js
@@ -1,7 +1,8 @@
-var referenceWidth = 908
-  , referenceHeight = 681
+var referenceWidth = 672
+  , referenceHeight = 504
   , referenceRatio = referenceWidth / referenceHeight
   ;
+var padding = 5;

 module.exports = Scaler;

@@ -50,8 +51,8 @@ Scaler.prototype.scaleToFit = function (element, container) {

   element.style['-webkit-transform'] = 'scale(' + scale + ')';
   element.style.MozTransform = 'scale(' + scale + ')';
-  element.style.left = Math.max(left, 0) + 'px';
-  element.style.top = Math.max(top, 0) + 'px';
+  element.style.left = Math.max(left, padding) + 'px';
+  element.style.top = Math.max(top, padding + 1) + 'px';
 };

 function getRatio (slideshow) {
@@ -71,7 +72,7 @@ function getRatio (slideshow) {

 function getDimensions (ratio) {
   return {
-    width: Math.floor(referenceWidth / referenceRatio * ratio.ratio)
-  , height: referenceHeight
+    width: Math.floor(referenceWidth / referenceRatio * ratio.ratio) + 2 * padding
+  , height: referenceHeight + 2 * padding
   };
 }
```

# Bulma

Only want `columns` layout

`bulma-columns.sass`

```sass
@import "utilities/_all"
@import "base/generic"
@import "grid/columns"
```

`sass bulma-columns.sass bulma-columns.min.css --style compressed`

# BibTeX

https://github.com/digitalheir/bibtex-js

`npx browserify src/main.js -o static/js/main.js`
