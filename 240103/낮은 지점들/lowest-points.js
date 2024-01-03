const [[n], ...dots] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

function Counter(arr) {
    arr.forEach(([x, y]) => this[x] = this[x] ? (Math.min(this[x], y)) : y)
}

console.log(
    Object.entries(new Counter(dots)).map(([_, y]) => y).reduce((a, c) => a + c, 0)
)