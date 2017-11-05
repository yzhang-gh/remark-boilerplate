Remark template with Beamer style.

## Additions on Remark

- CSS classes `titlepage`, `date`, `no-number`, `math`
- Support reference. `\cite{ref-item-id}`, `@{ref-item-id}{author}{title}{publisher}{year}`
- Support math via KaTeX

## Deal with Math

`.math[]`

### Underscore

Sometimes `_` (subscript in LaTeX) will be wrongly parsed as `_italic_` block, just wrap your equation with `<p>` or `<div>`

### Multi-line Equation

KaTeX supports `aligned` environment

## Tips

Use vscode decoration to highlight slide separator `---`