let bibtexjs = require('bibtex');

function loadFromUrl(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                source = xhr.responseText.replace(/\r\n/g, '\n');
                if (typeof callback === 'function') {
                    callback(source);
                }
            }
        }
    };
    xhr.send(null);
    return xhr;
}

function abbrAuthor(author) {
    splits = author.trim().split(' ');
    for (var i = 0; i < splits.length; i++) {
        if (i !== splits.length - 1) {
            splits[i] = splits[i][0];
        } else {
            splits[i] = ' ' + splits[i];
        }
    }
    return splits.join('').trim();
}

function renderAuthor(entry) {
    let authors = entry.getField('author').authors$.map(author =>
        author.firstNames
            .concat(author.vons)
            .concat(author.lastNames)
            .concat(author.jrs).join(" ")
    );

    if (authors.length === 1) {
        return abbrAuthor(authors[0]);
    } else if (authors.length === 2) {
        return abbrAuthor(authors[0]) + ' & ' + abbrAuthor(authors[1]);
    } else {
        return abbrAuthor(authors[0]) + ' et al.';
    }
}

function allAuthors(entry) {
    return entry.getField('author').authors$.map(author =>
        author.firstNames
            .concat(author.vons)
            .concat(author.lastNames)
            .concat(author.jrs).join(" ")
    ).join(', ');
}

function renderVenue(entry) {
    return bibtexjs.normalizeFieldValue(entry.getField('journal'));
}

function renderReference(source, entries) {
    /* Render `\cite{}` */
    source = source.replace(/\\cite{(.*?)}/g, (_, p1) => {
        for (const key in entries) {
            if (entries.hasOwnProperty(key)) {
                if (key === p1) {
                    const entry = entries[key];
                    entry.cited = true;
                    return `<span class="cite-item"><a href="#${key}">${renderAuthor(entry)}, ${bibtexjs.normalizeFieldValue(entry.getField('year'))}</a></span>`;
                }
            }
        }
        return '<span class="cite-item" style="color: red;">(\\citation not found)</span>';
    });

    let count = 0;
    // In case there are unused bibliographies
    let offset = 0;
    /* Render bibliography */
    Object.keys(entries).forEach((key, i) => {
        const entry = entries[key];
        if (entry.cited) {
            count++;
            if (count === 1) {
                source += '\n\n---\n\nlayout: false\nclass: no-number\ncount: false\n\n# References\n\n';
            } else if (count === 8) {
                count = 0;
            }

            const num = i + 1 - offset;
            source += [
                `<p id="${key}" class="ref-item">`,
                `<span${num > 9 ? '' : ' class="ref-num-padding"'}>[${num}]</span>`,
                `${allAuthors(entry)}.`,
                `<span style="border-bottom: 1px solid var(--color-default);">${bibtexjs.normalizeFieldValue(entry.getField('title'))}</span>.`,
                `<em>${renderVenue(entry)}</em>.`,
                `${bibtexjs.normalizeFieldValue(entry.getField('year'))}.`,
                '</p>'
            ].join(' ');
        } else {
            offset++;
            console.warn('unused bibliography.', key);
        }
    });

    return source;
}

loadFromUrl('content.md', source => {
    loadFromUrl('ref.bib', bib => {
        let bibEntries = bibtexjs.parseBibFile(bib).entries$;
        source = renderReference(source, bibEntries);
        document.getElementById('source').innerHTML = source;
        remark.create({ highlightStyle: 'solarized-light' });
    });
});

/* Render math */
setTimeout(function () {
    mathDoms = document.getElementsByClassName('math');
    for (let i = 0; i < mathDoms.length; i++) {
        let element = mathDoms[i];
        let math = element.innerHTML;
        // Ideally, this is not necessary as we wrap math equation with `<p>` when `_` is obscure.
        // In fact, it depends on the renderer engine
        math = math.replace(/<\/?em>/g, '_');
        // `&` in `<p>` will be escaped
        math = math.replace(/&amp;/g, '&');
        if ((element.className + element.parentNode.className).indexOf('block') !== -1) {
            katex.render(math, element, { displayMode: true, colorIsTextColor: true });
        } else {
            katex.render(math, element, { colorIsTextColor: true });
        }
    }
}, 500);