class: center, middle, no-number, titlepage
count: false

# A Long Long Long Title

## Subtitle (optional)

.author[Author]

.date[Date]

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

# Default Syntax

## Text

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

## List

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit

---

# Text alignment

.left[Left-aligned text]

.center[Centered text]

.right[Right-aligned text]

---

# Incremental Slides

- bullet 1

--

- bullet 2

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

# Reference

See `content.md` (links only work after printed to PDF)

\cite{id}

---

class: no-number
count: false

# References

@{id}{author}{title}{publisher}{year}
