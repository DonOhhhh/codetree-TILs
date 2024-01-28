const [[n], nums] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))
function Counter(arr) {
    arr.forEach(e => this[e] = (this[e] || 0) + 1)
}
const cnt = new Counter(nums)
console.log(Object.keys(cnt).length)