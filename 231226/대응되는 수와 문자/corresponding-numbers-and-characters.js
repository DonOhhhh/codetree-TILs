let [...inputs] = `${require("fs").readFileSync(0)}`.trim().split`
`
const [n, m] = inputs.shift().split` `.map(Number)
inputs = inputs.map(e => isNaN(+e) ? e : +e)
const strs = inputs.splice(0, n)
const querys = inputs

const HashMap = Object.fromEntries(strs.map((e, i) => [e, i + 1]))

querys.forEach(k => console.log(isNaN(+k) ? HashMap[k] : strs[k - 1]))