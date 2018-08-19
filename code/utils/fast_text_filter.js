const uppercaseAlpha = text => [...(text)].filter(c => {
  const d = c.charCodeAt(0);
  return (d > 64 && d < 91);
}).join('');

const uglyInputText = uppercaseAlpha(`OP
J()UY*T&*F^OYIVBUOINPd
                hs8OU{(D&SUIA {D*(Stdus[aoudut sa7d

asd as  d as d sada sy97t86fuyvibuoihpj908ysda d dasd sa d`
);

console.log( // ==> "OPJUYTFOYIVBUOINPOUDSUIADS"
    uglyInputText
);