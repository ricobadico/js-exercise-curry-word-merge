# js-exercise-curry-word-merge

JS code done for this exercise from Medium: 
https://medium.com/@PiotrBerebecki/javascript-currying-exercise-merge-words-into-sentence-2bfa1fbe493f

The code creates a function, mergeWords, which takes any number of individual string arguments followed by a call without any argument,
and returns a single merged string of all the string arguments. Thus, mergeWords("foo")("bar")("baz")(); returns "foo bar baz".

This was early practice after learning concepts of closure and currying, and I'm happy to have come up with a solution on my own.
However, upon seeing the suggested solution after, I realize my code is bulkier than it needs to be. I made the assumption that
an initial variable assigned to an empty string was required, so each string argument could be added onto that initial string
(because of this, I thought a wrapper function was needed to initialize that variable and keep its value stored in the inner
function definition's closure). The provided solution avoids this by starting directly with the first string argument, and then using
a similar function that works with all subsequent arguments. I'm glad I was able to come up with a solution, and learned a good lessons
from seeing the more elegant solution afterward.
