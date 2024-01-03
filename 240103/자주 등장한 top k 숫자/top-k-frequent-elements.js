const [[n, kk], nums] = `${require('fs').readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

function Counter(arr) {
    arr.forEach(e => this[e] = (this[e] || 0) + 1)
}

const counted = new Counter(nums)
const ans = Object.entries(counted)
    .sort((a, b) => {
        [a, b] = [a.map(Number), b.map(Number)]
        if (a[1] < b[1]) {
            return 1;
        } else if (a[1] > b[1]) {
            return -1;
        } else {
            return b[0] - a[0]
        }
    })
    .filter((_, i) => i < kk)
    .map(([k, _]) => k)
console.log(...ans)