const [[n], arr1, [m], arr2] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))
const set1 = new Set(arr1);
for (const i of arr2) {
    console.log(set1.has(i) ? 1 : 0)
}