const [n, ...strs] = `${require("fs").readFileSync(0)}`.trim().split`
`
function Counter(array) {
    array.forEach(e => this[e] = (this[e] || 0) + 1)
}

const maxAmongCounted = Object.entries(new Counter(strs)).reduce((a, c) => a[1] > c[1] ? a : c, [0, 0])[1]

console.log(maxAmongCounted)