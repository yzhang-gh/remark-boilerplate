class: center, middle, no-number, titlepage
count: false

# A Long Long Long Title

## Subtitle (optional)

.author[Author]

.date[Date]

---

# Remark Basics

...

---

# Titlepage

```markdown
class: center, middle, no-number, titlepage
count: false

# A Long Long Long Title

## Subtitle (optional)

.author[Author]

.date[Date]
```

---

class: subtitle

# Page with Subtitle

.subtitle[This is a Subtitle]

```markdown
class: subtitle

# Page with Subtitle

.subtitle[This is a Subtitle]
```

---

# Classes

## Text

```
normal .accent[accent] .alert[alert] .green[green] .red[red]
```

normal .accent[accent] .alert[alert] .green[green] .red[red]

---

# Using HTML

Sometimes, Markdown syntax is limited. Then we have to write raw HTML to achieve more complex layout.

---

# Multi-columns (Bulma CSS Framework)

```html
<div class="columns">
    <div class="column">auto</div>
    <div class="column">auto</div>
    <div class="column">auto</div>
    <div class="column">auto</div>
</div>
```

<div class="columns" style="color: white">
    <div class="column" style="background: #209CEE">auto</div>
    <div class="column" style="background: #23D160">auto</div>
    <div class="column" style="background: #FFD23F">auto</div>
    <div class="column" style="background: #FF3860">auto</div>
</div>

```html
<div class="columns">
    <div class="column is-two-thirds">is-two-thirds</div>
    <div class="column">auto</div>
</div>
```

<div class="columns" style="color: white">
    <div class="column is-two-thirds" style="background: #209CEE">is-two-thirds</div>
    <div class="column" style="background: #23D160">auto</div>
</div>

---

# Math

## Simple Case

```
.math[c = \\pm\\sqrt{a^2 + b^2}]
```

.center.math[c = \\pm\\sqrt{a^2 + b^2}]

## Complex Environment

```html
<div class="math">
    \begin{aligned}
        a & = b + c \\
        d + e & = f
    \end{aligned}
</div>
```

<div class="math center">
    \begin{aligned}
        a & = b + c \\
        d + e & = f
    \end{aligned}
</div>

---

## Upper Right Corner

<span class="alert" style="position: absolute; top: 22px; right: 36px; font-weight: bold;">Wow</span>

---

# References

Support `bibtex`

<pre><code>&#92;cite{id}</code></pre>

\cite{id}

Generated links only work in the printed PDF
