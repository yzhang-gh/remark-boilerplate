`git diff` with origin remark repo

```
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