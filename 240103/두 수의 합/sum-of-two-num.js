const [[n, k], nums] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

function Counter(arr) {
    arr.forEach(e => this[e] = (this[e] || 0) + 1)
}

const counted = {}
let ans = 0;

for (const num of nums) {
    const diff = k - num;
    ans += (counted[diff] || 0)
    counted[num] = (counted[num] || 0) + 1
}

console.log(ans)