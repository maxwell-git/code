class Transformer {
  constructor(mapping) {
    const length = mapping.length;
    if (length < 4) throw new Error('argument mapping must be at least 4 characters!');
    if ([...new Set(mapping)].length < length) throw new Error('mapping should not have same letters!');
    if(/\p{Emoji}/u.test(mapping)) throw new  Error('emoji is not  supported!');
    this.mapping = mapping;
    this.mapKey = this.mapping.reduce((p, c, i) => { return p[c] = i + '', p }, {});
    this.radix = this.mapping.length;
  }
  #toUnicodeArray(str) {
    return str.split('').map(item => item.charCodeAt(0));
  }

  encode(str) {
    const encodeURL = encodeURIComponent(str);
    const unicodeArray = this.#toUnicodeArray(encodeURL);
    const padString = unicodeArray.map(item => {
      return item.toString(this.radix).padStart(this.radix, '0')
    });
    const mapped = padString.join('').split('').map(p => this.mapping[p]);
    return mapped.join('');
  }

  decode(str) {
    const mapped = str.split('').map(item => this.mapKey[item]).join('');
    const unicodeArray = [];
    for (let i = 0; i < mapped.length; i += this.radix) {
      unicodeArray.push(parseInt(mapped.substring(i, i + this.radix), this.radix));
    }
    return decodeURIComponent(String.fromCharCode.apply(String, unicodeArray));
  }
}


function test(mapping) {
  const str = '中国🇨🇳'
  const transformer = new Transformer(mapping);

  const encoded = transformer.encode(str);
  console.log(encoded);

  const decoded = transformer.decode(encoded);
  console.log(decoded)
}


// test(['1', 'l', '-', '_', '0', 'o', 'O']);

// test('+-x/'.split(''))
