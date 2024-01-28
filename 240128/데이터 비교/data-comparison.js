const [n, arr1, m, arr2] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(Number))
const set1 = new Set(arr1);
let ans = [];
for (const i of arr2) {
    if (!set1.has(i)) ans.push(0);
    else ans.push(1);
}
console.log(...ans)