const [[n, k], nums] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

let answer = 0
const HashMap = {}

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        const [ij, ji] = [`${nums[i]}${nums[j]}`, `${nums[j]}${nums[i]}`]
        if (!(HashMap[ij] || HashMap[ji])) {
            HashMap[ij] = nums[i] + nums[j]
            HashMap[ji] = nums[i] + nums[j]
        }
        if (HashMap[ij] === k) answer++
    }
}

console.log(answer)