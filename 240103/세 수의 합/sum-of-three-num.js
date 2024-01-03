const [[n, k], nums] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

function Counter(arr) {
    arr.forEach(e => this[e] = (this[e] || 0) + 1)
}

const counted = new Counter(nums)
let ans = 0;

for (let i = 0; i < n; i++) {
    counted[nums[i]] -= 1;
    for (let j = 0; j < i; j++) {
        const target = k - nums[i] - nums[j];
        if (counted[target])
            ans += counted[target]
    }
}

console.log(ans)