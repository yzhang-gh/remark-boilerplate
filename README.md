Remark template with Beamer style.

## Additions on Remark

- CSS classes `titlepage`, `date`, `no-number`, `math`
- Support reference. `\cite{ref-item-id}`, `@{ref-item-id}{author}{title}{publisher}{year}`
- Support math via KaTeX

## Deal with Math

`.math[]`

Sometimes `_` (subscript in LaTeX) will be wrongly parsed as `_italic_` block, just wrap your equation with `<p>` or `<div>`