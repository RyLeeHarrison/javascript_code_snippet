class FourBitAdder {
  static not(a) {
    return a === 1 ? 0 : 1;
  }

  static and(a, b) {
    return a + b < 2 ? 0 : 1;
  }

  static nand(a, b) {
    return this.not(this.and(a, b));
  }

  static or(a, b) {
    return this.nand(this.nand(a, a), this.nand(b, b));
  }

  static xor(a, b) {
    return this.nand(this.nand(this.nand(a, b), a), this.nand(this.nand(a, b), b));
  }

  static halfAdder(a, b) {
    return {
      carry: this.and(a, b),
      sum: this.xor(a, b)
    };
  }

  static fullAdder(a, b, c) {
    const h0 = this.halfAdder(a, b);
    const h1 = this.halfAdder(h0.sum, c);
    return {
      carry: this.or(h0.carry, h1.carry),
      sum: h1.sum
    };
  }

  static fourBitAdder(a, b) {
    const inA = Array(4);
    const inB = Array(4);
    const out = Array(4);

    let i = 4;
    let pass;

    while (i--) {
      inA[i] = a[i] != 1 ? 0 : 1;
      inB[i] = b[i] != 1 ? 0 : 1;
    }

    pass = this.halfAdder(inA[3], inB[3]);
    out[3] = pass.sum;
    pass = this.fullAdder(inA[2], inB[2], pass.carry);
    out[2] = pass.sum;
    pass = this.fullAdder(inA[1], inB[1], pass.carry);
    out[1] = pass.sum;
    pass = this.fullAdder(inA[0], inB[0], pass.carry);
    out[0] = pass.sum;

    return out.join('');
  }
}

console.log(FourBitAdder.fourBitAdder('0010', '0101'));