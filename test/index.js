const babel = require('@babel/core')
const jsx = require('..')


// const src = `
// <div a="1" {...ok} c="d">a{...list}b</div>

// fn(a, ...b, c)
// `

const src = `
<div>
  <a href="other.html">Link</a>
  <ul>
    {...[<li>Item A</li>, <li>Item B</li>]}
    <li>Item Last</li>
  </ul>
</div>
`

const out = babel.transform(src, {
  // presets: [presetEnv],
  plugins: [jsx],
})

console.log(out.code)
