const [[n, m], a, b] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))
const [A, B] = [new Set(a), new Set(b)]

let ans = 0;

for (let i = 0; i < m; i++) {
    if (!A.has(b[i])) ans++;
}

for (let i = 0; i < n; i++) {
    if (!B.has(a[i])) ans++;
}

console.log(ans)