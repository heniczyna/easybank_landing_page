2:40:15

# [How to Make a Landing Page using HTML, SCSS, and JavaScript - Full Course](https://www.youtube.com/watch?v=aoQ6S1a32j8)

# [Sass partials](https://sass-lang.com/guide)
Files named with leading underscore such as `_globals.scss`, `_header.scss` are partials, i.e. they are not being compiled by Sass compiler independently (in other words, they should not be generated into a CSS file separately). They need to be added (imported) in main SCSS file (here `style.scss`, through `@import`). You can create partial Sass files that contain little snippets of CSS that you can include in other Sass files. This is a great way to modularize your CSS and help keep things easier to maintain.

> * **Additional info** <https://stackoverflow.com/questions/34889962/why-put-in-front-of-the-file-name-or-in-scss-css>

# [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
CSS selectors define the elements to which a set of CSS rules apply.<br>
For example: The `>` combinator selects nodes that are direct children of the first element. Example: `ul > li` will match all `<li>` elements that are nested directly inside a `<ul>` element.<br>
Demo of this use case is [here](https://css-tricks.com/almanac/selectors/c/child/). `ol > li` selects elements that are direct descendants only, in this case: selects list items that are direct descendants of an ordered list.

> * **Additional info** <https://www.w3schools.com/cssref/css_selectors.asp>

Selector usage in SCSS files:
```scss
.toggle{
    .active{
    }
}
```
Sass compiler compiles it to:
```css
.toggle .active {
} 
```
it refers to element with class `active` inside element with class `toggle`. Something like below:
```html
<div class="toggle">
    <div class="active"></div>
</div>
```

If you use selector `&`:
```scss
.toggle{
    &.active{
    }
}
```
Sass compiler compiles it to:
```css
.toggle.active {
} 
```
it refers to element with class `toggle active`.

# [`<button>` specification](https://dev.to/clairecodes/why-its-important-to-give-your-html-button-a-type-58k9)
> * **Additional info** in first instance there was used:<br>
`<button type="button">Request Invite</button>`<br>
however afterwards it has been changed to<br>
`<a href="#" class="button header__cta hide-for-mobile">Request Invite</a>`

`<button type="button">Request Invite</button>`<br>
This button (`type="button"`) has no default behaviour (so it's good, it does nothing). JavaScript must be used to define what happens when it's clicked.<br>
Other options for `type`:
* `submit`,
* `reset`,
* no type = `type` attribute is missing (when the `type` attribute is missing the button behaves as `submit` button).

`type` of button should be declared to avoid bugs, and unexpected behaviours.

# [CodePen](https://codepen.io/)
Environment for front-end designers and developers. You can test here your HTML, CSS, JS code. What is more, you can discover here example codes from other users, to check how things have been done. For example, you can search CodePen for *hamburger animation*, and one of the results is this [one](https://codepen.io/samikeijonen/pen/jqvxdL).  

# Size
* **rem** (relative to font-size of the root element) is unit relative to main font-size (here seems it is 16px)

# [CSS transitions](https://www.w3schools.com/css/css3_transitions.asp)
* `transition: opacity 300ms ease-in-out;`<br>
`ease-in-out` timing function, specifies a transition effect with slow start and end, further options:
* `ease-in` specifies a transition effect with a slow start
* `ease-out` specifies a transition effect with a slow end

# [CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations#using_animation_shorthand)
* `animation: fade-in 300ms ease-in-out forwards;`<br>
`forwards` value of `fill-mode`<br>
(the full syntax is `animation: name duration timing-function delay iteration-count direction fill-mode;`) makes sure element would hold the last keyframe state of animation after animation ends (here refers to `fade-in` and `fade-out`)

# `display` property
* property `display` (such as `display: block` or `display: none`) can not be animated [info](https://www.impressivewebs.com/animate-display-block-none/)
* `display` property specifies if/how an element is displayed [info](https://www.w3schools.com/cssref/pr_class_display.asp)
  * `display: block` element is displayed as a block element (like `<p>`, it starts on a new line, and takes up the whole width)
  * `display: none` element is completely removed
  * whenever you need the element to disappear completely and not take up any space, you should use `display: none;`, if you want the element to have a transition or fade-in effect when becoming visible, you should use `opacity: 0;` [info](https://magnusbenoni.com/difference-between-display-visibility-opacity/)

# `background` property
* `background` property, shorthand property [info](https://www.w3schools.com/css/css_background_shorthand.asp)
* when specifying background properties, you can use shorthand and specify all background properties in one line. Therefore, instead of:
  ```
  body {
    background-color: #ffffff;
    background-image: url("img_tree.png");
    background-repeat: no-repeat;
    background-position: right top;
  }
  ```
  you can use shorthand property `background`:
  ```
  body {
    background: #ffffff url("img_tree.png") no-repeat right top;
  }
  ```
  Keep correct order of values. In this project, there has been used for example `background: color` or `background-color: color`, both means the same, as first value refers to color.  

# `::before` / `::after`
* `::before` / `::after` CSS pseudoelements allows you to insert content onto a page without it needing to be in the HTML [info](https://css-tricks.com/almanac/selectors/a/after-and-before/)
* example in [_hero.scss](https://github.com/heniczyna/easybank_landing_page/blob/master/app/scss/_hero.scss) where `&__image` has `position: relative;` and `&::before` has `position: absolute;`
* `position` refers to hierarchy of the elements, which element is on the top another element
  * `absolute` moves item to the top
* related Stack Overflow [topic](https://stackoverflow.com/questions/19415641/how-to-position-before-after-pseudo-elements-on-top-of-each-other)
* `content: ""` is important to specify the content to insert
* combination of `::after` and `:hover`, [info](https://stackoverflow.com/questions/13233991/combine-after-with-hover)
  * important is order of `::after` and `:hover`, should be: `:hover::after` (not `:hover::after`), example SCSS of changing level of bluring when hovering:
    ```scss
    .showcase{
      &::after{
        //all required properties
        background-image: url("../images/showcase.jpg");
        filter: blur(10px);
      }
      &:hover{
          &::after{
              filter: blur(0px);
          }
      }
    }
    ```
    It compiles to `.showcase::after` and `.showcase:hover::after`

# `flex` property
* sort of ratio how much space things occupy
* example in [_hero.scss](https://github.com/heniczyna/easybank_landing_page/blob/master/app/scss/_hero.scss) where `hero__image` will occupy `3/5` of space, and `hero__text` will occupy `2/5` of space (because of `flex: 3;` and `flex: 2;`)

# [Google Fonts](https://fonts.google.com/)
Example of usage: go to the website, search for `poppins` for example, then choose required optins hitting `Select this style`. On the right hand side additional window pops up. Choose `@import` option and copy code within `<style></style>` and paste it to your css/scss file, example for `Light 300` and `Regular 400`:
```scss
/* Importing Poppins font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
``` 

# Code snippets
* `<a href="/" class="header__logo">`<br>
`"/"` loads default page again
* `<a href="#" class="button">Request Invite</a>`<br>
`"#"` stays on the same page

# HTML syntax support:
* `.header__menu` gives `<div class="header__menu"></div>`
* `a:link*5` gives 5 times of `<a href="http://"></a>`
* `&copy;` gives copyright icon, example of usage:
  ```html
  <p>Brand Page &copy; 2021</p>
  ```

# Recommended sources
* [Stack Overflow](https://stackoverflow.com)
* [CSS-Tricks](https://css-tricks.com/)
* [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS)

# Vocabulary
* **CTA** Call To Action

TBD

CSS animations keyframes
syntax: You start it FROM (put here initial styles) and ends with TO (final styles)

what is & for / 
what is $ for