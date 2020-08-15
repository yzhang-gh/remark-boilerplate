[Remark](https://github.com/gnab/remark) template with Beamer style.

## Additions to Remark

- CSS classes
- Support bibtex. `\cite{ref-item-id}`, `@{ref-item-id}{author}{title}{publisher}{year}`
- Support math via KaTeX

### CSS Classes

structure: `titlepage`, `date`, `no-number`, `math`, `appendix`, `caption`

color: `alert`, `accent`, `green`, `red`

### Layout

Bulma

`table.layout`

## Deal with Math

`.math[]`

```html
<div class="math block">
...
</div>
```

<https://khan.github.io/KaTeX/function-support.html>

### Underscore Conflicts

Sometimes `_` (subscript in LaTeX) will be wrongly parsed as `_italic_` block, just wrap your equation with `<p>` or `<div>`

## Tips

Extension 'vscode-remark'

Local CSS:

```
class: local-id

<style>.local-id {...}</style>
```
