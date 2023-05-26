function anagram(s, t) {
  let lengths = s.length;
  let lengtht = t.length;

  //find the length ofboth string to see if it has same number of characters

  if (lengths !== lengtht) {
    console.log("Not an anagram");
    return;
  }

  //1.split the string into array of characters['a','b','c']
  //2.sort the array
  //3.join the array into a string

  let string1 = s.split("").sort().join("");
  let string2 = t.split("").sort().join("");
  // compare the sorted string if they are equal
  if (string1 === string2) {
    console.log("Two strings are anagram");
  } else {
    console.log("Strings are not anagram");
  }
}

anagram("vedha", "edvah");
