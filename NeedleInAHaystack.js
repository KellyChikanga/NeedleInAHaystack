let letters = ""

function NeedleInAHaystack(haystack, needle, limit) {
    for (let i = 0; i < haystack.length; i++) {
        if (needle === haystack[i]) {
            for (let char = i + 1; char - i <= limit; char++) {
                letters += haystack[char]
            }
            return letters
        }
    }
}