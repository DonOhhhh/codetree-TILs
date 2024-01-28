const [n, ...words] = `${require('fs').readFileSync(0)}`.trim().split`
`.map(e => isNaN(+e) ? e : +e);
function Counter(arr) {
    arr.forEach(e => this[e] = (this[e] || 0) + 1);
}
const cnt = new Counter(words);
Object.keys(cnt).sort().forEach(k => console.log(`${k} ${(cnt[k] / n * 100).toFixed(4)}`))