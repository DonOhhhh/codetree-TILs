const [[n, kk], nums] = `${require('fs').readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

function Counter(arr) {
    arr.forEach(e => this[e] = (this[e] || 0) + 1)
}

const counted = Object.entries(new Counter(nums))
    .sort((a, b) => a[1] < b[1] ? 1 : +a[0] < +b[0] ? 1 : -1)
    .map(([k, _]) => k)
console.log(...counted.slice(0, kk))