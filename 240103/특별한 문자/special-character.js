const str = `${require('fs').readFileSync(0)}`.trim().split``
function Counter(arr) {
    arr.forEach(e => this[e] = (this[e] || 0) + 1)
}

const counted = Object.entries(new Counter(str)).filter(([_, v]) => v === 1)
console.log(counted[0][0])