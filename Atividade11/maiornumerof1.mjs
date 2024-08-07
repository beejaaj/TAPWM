type="module"
export function maiornumerof1(){
    a = ParseInt(prompt("1 numero"))
    b = ParseInt(prompt("2 numero"))
    c = ParseInt(prompt("3 numero"))
    d = ParseInt(prompt("4 numero"))

    if (a > b && a > c && a > d && a) {
        return confirm("O maior numero é " + a);
      }
      if (b > a && b > c && b > d && b) {
        return confirm("O maior numero é " + b);
      }
      if (c > a && c > b && c > d && a) {
        return confirm("O maior numero é " + c);
      }
      if (d > a && d > b && d > c && d) {
        return confirm("O maior numero é " + d);
      }
}