const [[n, k], nums] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(e => e.trim().split` `.map(Number))

const counted = {}
let ans = 0

for (const num of nums) {
    const diff = k - num
    ans += (counted[diff] || 0)
    counted[num] = (counted[num] || 0) + 1
}

console.log(ans)