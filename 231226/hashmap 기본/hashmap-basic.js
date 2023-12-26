const [n, ...ops] = `${require("fs").readFileSync(0)}`.trim().split`
`.map(row => row.trim().split` `.map(e => isNaN(+e) ? e : +e))
const OPERATIONS = {
    add(k, v) {
        this[k] = v
    },
    find(k) {
        console.log(this[k] ? this[k] : 'None')
    },
    remove(k) {
        delete this[k]
    }
}

const HashMap = {}

OPERATIONS.add.bind(HashMap)
OPERATIONS.find.bind(HashMap)
OPERATIONS.remove.bind(HashMap)

ops.forEach(([op, k, v]) => OPERATIONS[op](k, v))