const [[n, k], ...inputs] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

const seats_info = Array(n).fill().map((_, i) => i + 1);
const cnt = Object.fromEntries(Array(n).fill().map((_, i) => [i + 1, 0]))
const seats_cnt = Object.fromEntries(Array(n).fill().map((_, i) => [i + 1, JSON.parse(JSON.stringify(cnt))]))

for (let i = 1; i <= n; i++) {
    seats_cnt[i][i] = 1;
}

let minute = 0;

while (minute <= 3 * k) {
    const [a, b] = inputs[minute % k];
    seats_cnt[seats_info[a - 1]][b]++;
    seats_cnt[seats_info[b - 1]][a]++;
    [seats_info[a - 1], seats_info[b - 1]] = [seats_info[b - 1], seats_info[a - 1]];
    minute++;
    // console.log({ seats_info })
}

// console.log({ seats_cnt })

Object.entries(seats_cnt).forEach(([_, obj]) => console.log(Object.values(obj).filter(_ => _).length))