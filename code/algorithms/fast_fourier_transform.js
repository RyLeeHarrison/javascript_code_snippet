class Complex {
  constructor(re, im) {
    this.re = re;
    this.im = im || 0.0;
  }

  add({re, im}, dst) {
    dst.re = this.re + re;
    dst.im = this.im + im;
    return dst;
  }

  sub({re, im}, dst) {
    dst.re = this.re - re;
    dst.im = this.im - im;
    return dst;
  }

  mul({re, im}, dst) {
    const r = this.re * re - this.im * im;
    dst.im = this.re * im + this.im * re;
    dst.re = r;
    return dst;
  }

  cexp(dst) {
    const er = Math.exp(this.re);
    dst.re = er * Math.cos(this.im);
    dst.im = er * Math.sin(this.im);
    return dst;
  }

  log() {
    if (!this.re)
      console.log(`${this.im.toString()}j`);
    else if (this.im < 0)
      console.log(`${this.re.toString() + this.im.toString()}j`);
    else
      console.log(`${this.re.toString()}+${this.im.toString()}j`);
  }
}

function icfft(amplitudes) {
  const N = amplitudes.length;
  const iN = 1 / N;

  for (var i = 0 ; i < N; ++i)
    {if(amplitudes[i] instanceof Complex)
			amplitudes[i].im = -amplitudes[i].im;}

  amplitudes = cfft(amplitudes);

  for (var i = 0 ; i < N; ++i) {
    amplitudes[i].im = -amplitudes[i].im;
    amplitudes[i].re *= iN;
    amplitudes[i].im *= iN;
  }
  return amplitudes;
}

function cfft(amplitudes) {
  const N = amplitudes.length;
  if (N <= 1)
    return amplitudes;

  const hN = N / 2;
  let even = [];
  let odd = [];
  even.length = hN;
  odd.length = hN;
  for (let i = 0; i < hN; ++i) {
    even[i] = amplitudes[i * 2];
    odd[i] = amplitudes[i * 2 + 1];
  }
  even = cfft(even);
  odd = cfft(odd);

  const a = -2 * Math.PI;
  for (let k = 0; k < hN; ++k) {
    if (!(even[k] instanceof Complex))
      even[k] = new Complex(even[k], 0);
    if (!(odd[k] instanceof Complex))
      odd[k] = new Complex(odd[k], 0);
    const p = k / N;

    const t = new Complex(0, a * p);
    t.cexp(t)
        .mul(odd[k], t);

    amplitudes[k] = even[k].add(t, odd[k]);
    amplitudes[k + hN] = even[k].sub(t, even[k]);
  }
  return amplitudes;
}

console.log( // ==> [ Complex { re: 4, im: 0 },
    //	  Complex { re: 1, im: -2.414213562373095 },
    //	  Complex { re: 0, im: 0 },
    //	  Complex { re: 1, im: -0.4142135623730949 },
    //	  Complex { re: 0, im: 0 },
    //	  Complex { re: 0.9999999999999999, im: 0.4142135623730949 },
    //	  Complex { re: 0, im: 0 },
    //	  Complex { re: 0.9999999999999997, im: 2.414213562373095 } ]
    cfft([1,1,1,1,0,0,0,0])
);


console.log( // ==>	[ Complex { re: 1, im: -0 },
    //	  Complex { re: 1, im: -5.551115123125783e-17 },
    //	  Complex { re: 1, im: 2.4894981252573997e-17 },
    //	  Complex { re: 1, im: -5.551115123125783e-17 },
    //	  Complex { re: 5.551115123125783e-17, im: -0 },
    //	  Complex { re: 5.551115123125783e-17, im: 5.551115123125783e-17 },
    //	  Complex { re: 0, im: -2.4894981252573997e-17 },
    //	  Complex { re: 5.551115123125783e-17, im: 5.551115123125783e-17 } ]

    icfft(cfft([1,1,1,1,0,0,0,0]))
);