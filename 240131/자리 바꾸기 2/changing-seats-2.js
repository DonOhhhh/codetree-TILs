const [[n, k], ...inputs] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

const seats_info = Array(n + 1).fill().map((_, i) => i);
const cnt = Array(n + 1).fill().map((_, i) => new Set([i]))

Array(3).fill().forEach(_ => inputs.forEach(([a, b]) => {
    [seats_info[a], seats_info[b]] = [seats_info[b], seats_info[a]]
    cnt[seats_info[a]].add(a);
    cnt[seats_info[b]].add(b);
}))

// console.log({ cnt })

for (let i = 1; i <= n; i++) {
    console.log(cnt[i].size)
}