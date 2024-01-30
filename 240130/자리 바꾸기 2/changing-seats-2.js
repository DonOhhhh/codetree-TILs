const [[n, k], ...inputs] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

const seats_info = Array(n).fill().map((_, i) => i + 1);
const cnt = Object.fromEntries(Array(n).fill().map((_, i) => [i + 1, 0]))
const seats_cnt = Object.fromEntries(Array(n).fill().map((_, i) => [i + 1, JSON.parse(JSON.stringify(cnt))]))

for (let i = 1; i <= n; i++) {
    seats_cnt[i][i] = 1;
}

for (let _ = 0; _ < k - 1; _++) {
    for (const [a, b] of inputs) {
        [seats_info[a - 1], seats_info[b - 1]] = [seats_info[b - 1], seats_info[a - 1]]
        seats_cnt[seats_info[a - 1]][b]++;
        seats_cnt[seats_info[b - 1]][a]++;
    }
}

// console.log({ seats_cnt })

Object.entries(seats_cnt).forEach(([_, obj]) => console.log(Object.values(obj).filter(_ => _).length))