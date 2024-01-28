const [[n], nums] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number));
const my_map = {}
for (let i = 0; i < n; i++) {
    if (!my_map[nums[i]]) {
        my_map[nums[i]] = i + 1;
    }
}
Object.entries(my_map).sort((a, b) => a[0] - b[0]).forEach(e => console.log(...e));