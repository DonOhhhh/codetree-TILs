const [[n, k], nums] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(e => e.trim().split` `.map(Number))

const HashMap = {}

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        HashMap[nums[i] + nums[j]] = (HashMap[nums[i] + nums[j]] || 0) + 1
    }
}

console.log(HashMap[k])