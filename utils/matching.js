function levenshteinDistance(a, b){

  a = a || '';
  b = b || '';

  const m = a.length;
  const n = b.length;

  if(m === 0) return n;
  if(n === 0) return m;

  let prevRow = new Array(n + 1);
  let currRow = new Array(n + 1);

  for(let j = 0; j <= n; j++){
    prevRow[j] = j;
  }

  for(let i = 1; i <= m; i++){

    currRow[0] = i;

    for(let j = 1; j <= n; j++){

      const cost =
        a[i - 1] === b[j - 1] ? 0 : 1;

      currRow[j] = Math.min(
        prevRow[j] + 1,
        currRow[j - 1] + 1,
        prevRow[j - 1] + cost
      );

    }

    const swap = prevRow;
    prevRow = currRow;
    currRow = swap;

  }

  return prevRow[n];

}

// Tikfout-tolerantie: woorden < 3 letters altijd exact.
// Oefenen/mini-quiz: <=1 t/m 5 letters, <=2 daarboven.
// Challenge: vast <=1 (behalve <3 letters, altijd exact).
function getTypoTolerance(word, context){

  const len = (word || '').length;

  if(len < 3) return 0;

  if(context === 'challenge') return 1;

  return len <= 5 ? 1 : 2;

}

function findLevenshteinMatch(input, candidates, context){

  for(const candidate of candidates){

    if(!candidate) continue;

    const tolerance =
      getTypoTolerance(candidate, context);

    if(tolerance === 0) continue;

    if(levenshteinDistance(input, candidate) <= tolerance){
      return candidate;
    }

  }

  return null;

}

// Eén centrale matchfunctie voor Oefenen, mini-quiz en Challenge-typ-modus.
// input en candidates moeten al genormaliseerd zijn door de aanroeper
// (zelfde normalisatie voor beide, anders is de Levenshtein-afstand zinloos).
// context: 'practice' | 'miniquiz' | 'challenge' — bepaalt de typo-tolerantie.
function evaluateAnswer({
  input,
  primaryCandidates = [],
  secondaryCandidates = [],
  context = 'practice'
}){

  const hasInput = !!input && input.length > 0;

  if(!hasInput){
    return { ok:false, matchType:'incorrect', matchedAnswer:null };
  }

  if(primaryCandidates.includes(input)){
    return { ok:true, matchType:'correct', matchedAnswer:input };
  }

  const primaryTypo =
    findLevenshteinMatch(input, primaryCandidates, context);

  if(primaryTypo){
    return { ok:true, matchType:'typo', matchedAnswer:primaryTypo };
  }

  if(secondaryCandidates.includes(input)){
    return { ok:true, matchType:'cross_dialect', matchedAnswer:input };
  }

  const secondaryTypo =
    findLevenshteinMatch(input, secondaryCandidates, context);

  if(secondaryTypo){
    return { ok:true, matchType:'cross_dialect', matchedAnswer:secondaryTypo };
  }

  return { ok:false, matchType:'incorrect', matchedAnswer:null };

}
