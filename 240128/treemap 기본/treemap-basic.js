const [[n], ...inputs] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(e => isNaN(+e) ? e : +e))
const treemap = {};
const ops = {
    add(k, v) {
        treemap[k] = v;
    },
    remove(k) {
        delete treemap[k];
    },
    find(k) {
        console.log(treemap[k] ? treemap[k] : 'None');
    },
    print_list() {
        console.log(
            Object.keys(treemap).length ? 
            Object.keys(treemap).sort((a, b) => a - b).map(k => treemap[k]).join(' ') :
            'None'
        )
    }
}
for (const [op, k, v] of inputs) {
    ops[op](k, v);
}