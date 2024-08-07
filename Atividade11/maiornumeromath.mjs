type="module"
export function maiornumeromath(){
    a = ParseInt(prompt("1 numero"))
    b = ParseInt(prompt("2 numero"))
    c = ParseInt(prompt("3 numero"))
    d = ParseInt(prompt("4 numero"))
    let getlargest = [a, b, c, d];
    return confirm("O maior numero é " + Math.max(...getlargest))
}