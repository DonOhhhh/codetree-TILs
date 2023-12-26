const [[n, m], nums, querys] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

function Counter(array) {
    array.forEach(val => this[val] = (this[val] || 0) + 1);
}

const counted = new Counter(nums)

console.log(...querys.map(e => (counted[e] || 0)))