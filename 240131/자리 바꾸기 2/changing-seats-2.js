const [[n, k], ...inputs] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

const seats_info = Array(n).fill().map((_, i) => i + 1);
const cnt = Array(n + 1).fill().map((_, i) => new Set([i]))

for (let _ = 0; _ < 3; _++) {
    for (const [a, b] of inputs) {
        [seats_info[a - 1], seats_info[b - 1]] = [seats_info[b - 1], seats_info[a - 1]];
        cnt[seats_info[a - 1]].add(b);
        cnt[seats_info[b - 1]].add(a);
    }
}

// console.log({ cnt })

for (let i = 1; i <= n; i++) {
    console.log(cnt[i].size)
}