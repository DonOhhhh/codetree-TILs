const [[n, k], nums] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(e => e.trim().split` `.map(Number))

function Counter(arr) {
    arr.forEach(e => this[e] = (this[e] || 0) + 1)
}

const counted = new Counter(nums)
let ans = 0;

for (let i = 0; i < n; i++) {
    const diff = Math.abs(k - nums[i])
    if (counted[diff]) ans += counted[diff] > 1 ? counted[diff] - 1 : counted[diff];
}


console.log(parseInt(ans / 2))