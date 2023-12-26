const [[n, k], nums] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

let answer = 0

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
        if (nums[i] + nums[j] === k) answer++;
    }
}

console.log(answer)