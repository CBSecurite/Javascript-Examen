// ############################################################################################################
// Exercice Palindrome
// ############################################################################################################

function palindrome(word) {
  let retour = false;
  typeof word !== "string"
    ? retour = "Merci de mettre une string valable"
    : word.match(/[0-9]/)
      ? retour = "Merci de mettre une string sans chiffre"
      : word.split('').reverse().join('') === word
          ? retour = true
          : ""
  return retour;
}
console.log(palindrome('kayak'));
console.log(palindrome('noname'));
console.log(palindrome(1));

// ############################################################################################################
// Exercice findLongestWord
// ############################################################################################################

function findLongestWord(sentence) {
  let wordMax = "";
  const words = sentence.split(' ');
  for(let word of words) {
    word.length > wordMax.length ? wordMax = word : "";
  }
  return wordMax;
}
console.log(findLongestWord("Le chemin le plus cours n'est pas toujours le meilleur"));

// ############################################################################################################
// Exercice merge
// ############################################################################################################

const wu = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const tang = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
const clan = {
  a: { t: 5 },
  c: 'foo',
};
const expectedResult1 = {
  "a": [{ x: 2 }, { y: 4}, { z: 3 }],
  "b": [1, 2, 3],
  "c": "foo"
}
const expectedResult2 = {
  "a": [{"z": 3}, { "t": 5 }],
  "b": [2, 3],
  "c": ["foo", "foo"],
}

const merge = (obj1, obj2) => {
  let obj = { "a": [], "b": [], "c": [] };
  obj1.a
    ? obj2.a
      ? obj.a = obj.a.concat(obj1.a, obj2.a)
      : obj.a = obj.a.concat(obj1.a)
    : obj2.a
      ? obj.a = obj.a.concat(obj2.a)
      : "";
  obj1.b
    ? obj2.b
      ? obj.b = obj.b.concat(obj1.b, obj2.b)
      : obj.b = obj.b.concat(obj1.b)
    : obj2.b
      ? obj.b = obj.b.concat(obj2.b)
      : "";
  obj1.c
    ? obj2.c
      ? obj.c = obj.c.concat(obj1.c, obj2.c)
      : obj.c = obj.c.concat(obj1.c)
    : obj2.c
      ? obj.c = obj2.c
      : "";
  return obj;
}

console.log(JSON.stringify(merge(wu, tang)) === JSON.stringify(expectedResult1));
console.log(JSON.stringify(merge(tang, clan)) === JSON.stringify(expectedResult2));

// ############################################################################################################
// Exercice L33t Sp34k
// ############################################################################################################

const leet = sentence => {
  let msg;
  sentence.length === 0
    ? msg = "w"
    : typeof sentence === "string"
      ? msg = sentence.replace(/^a/gi, "4")
                      .replace(/e/gi, "3")
                      .replace(/i/gi, "1")
                      .replace(/o/gi, "0")
                      .replace(/u/gi, "(_)")
                      .replace(/y/gi, "7")
      : msg = "Merci de mettre une string valable";

  return msg;
}

console.log(leet('BADBADNOTGOOD - "In Your Eyes" (Feat. Charlotte Day Wilson)'));
console.log(leet(""));
console.log(leet(1));

// ############################################################################################################
// Exercice Prop Access
// ############################################################################################################

const propAccess = (object, path) => {
  let newPath = object;
  const pathTab = path.split(".");
  for (let p of pathTab) {
    newPath[p]
      ? newPath = newPath[p]
      : newPath = path + " does not exist";
  }
  return newPath;
}

const farm = {
  animal: {
    type: { name: 'cow' },
    color: "verte",
    bonus: {
      sparkly: true,
      3: "No at least 7"
    }
  }
}
console.log(propAccess(farm, "animal.type.name"))
console.log(propAccess(farm, "animal.affiliation.name"))
console.log(propAccess(farm, "animal.bonus.3"))

// ############################################################################################################
// Exercice Automate
// ############################################################################################################

const myScripts = [
  {
    function: palindrome,
    toTest: ['kayak' , 'noname', 1],
    expectedResult: [true, false, true]
  }
];

function automate(scripts) {
  for (let script of scripts) {
    for(let i = 0; i < script.toTest.length; i++) {
      script.function(script.toTest[i]) === script.expectedResult[i]
        ? console.log(`${script.function.name}, ${script.toTest[i]}, ${script.expectedResult[i]}`)
        : console.log(`${script.function.name}, ${script.toTest[i]}, '${script.function(script.toTest[i])}', ${script.expectedResult[i]}`);
    }
  }
}

automate(myScripts)
