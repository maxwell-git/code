# usage
```javascript

function test(mapping) {
  const str = '中国🇨🇳'
  const transformer = new Transformer(mapping);

  const encoded = transformer.encode(str);
  console.log(encoded);

  const decoded = transformer.decode(encoded);
  console.log(decoded)
}


test(['1', 'l', '-', '_', '0', 'o', 'O']);
// 11111o-1111l-O1111l1_11111o-1111l-_1111ll111111o-1111l--1111l-o11111o-1111l-O1111l1011111o-1111lll1111l-_11111o-1111l-_1111l-o11111o-1111l_111111OO11111o-1111lll1111l_111111o-1111ll11111l1O11111o-1111l--1111ll111111o-1111l_111111OO11111o-1111lll1111l_111111o-1111ll11111l1O11111o-1111l-_1111l1-
// 中国🇨🇳
test('+-x/'.split(''))
// +x---+--+/-++x---++x+/x++x---++--+-++x---+--+/--+x--+/x--++x+x---++x-+-++x---+-x+/+++x--+/x--+-x+x--+/x++/-/+x---++-+/x++x---+-x+/+++x--+/x--+-x+x--+/x++/-/+x---++x+/+/
// 中国🇨🇳
```
