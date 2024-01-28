const [[n], ...inputs] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(e => isNaN(+e) ? e : +e));
const my_set = new Set();
const ops = {
    add(x) {
        my_set.add(x);
    },
    remove(x) {
        my_set.delete(x);
    },
    find(x) {
        console.log(my_set.has(x))
    }
}
for(const [op, x] of inputs) {
    ops[op](x);
}