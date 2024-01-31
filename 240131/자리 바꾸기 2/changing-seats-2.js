const [[n, k], ...inputs] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))

let [seats_info, cnt] = [[], []];

for (let i = 0; i < n + 1; i++) {
    seats_info.push(i);
    cnt.push(new Set([i]));
}

for (let i = 0; i < 3 * k; i++) {
    const [a, b] = inputs[i % k];
    [seats_info[a], seats_info[b]] = [seats_info[b], seats_info[a]]
    cnt[seats_info[a]].add(a);
    cnt[seats_info[b]].add(b);
}

for (let i = 1; i <= n; i++) {
    console.log(cnt[i].size)
}