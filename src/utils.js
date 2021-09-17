export function uppercaseFirstLetter(word) {
    let words = [];
    words = word.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].substring(0,1).toUpperCase() + words[i].substring(1).toLowerCase();
    }
    words = words.join(" ");
    return words;
}