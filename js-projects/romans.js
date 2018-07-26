//Roman Numeral Converter

function convert(num) {
var caesar= "";
var romans = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"], 
    [400, "CD"], 
    [100, "C"],
    [90, "XC"],
    [50, "L"], 
    [40, "XL"], 
    [10, "X"], 
    [9, "IX"],
    [5, "V"], 
    [4, "IV"], 
    [1,"I"],

  ];

for (var i = 0; i < romans.length; i++) {
  if(romans.indexOf(num) !== -1) {
    caesar = romans[i][1];
  } else {
    while(num >= romans[i][0]) {
      num -= romans[i][0];
      caesar+= romans[i][1];
    } 
  }
    
  }
   

 return caesar;
}

convert(97);