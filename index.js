/**
 * @param {string} name
 * @return {boolean}
 */
function isValidName(name) {
  if (typeof name === "string") {
    return name.trim().length > 3
  }
  return false;
}

/**
 * @param {number,string} attended
 * @param {number,string} length
 * @return {boolean}
 */
function hoursAttended(attended, length) {
  if (attended && length) {
    if (typeof attended === "string" && attended.length > 0) {
      attended = Number(attended);
    }

    if (typeof length === "string" && length.length > 0) {
      length = Number(length);
    }
  
    if (
      attended >= 0 &&
      length >= 0 &&
      Number.isInteger(attended) &&
      Number.isInteger(length)
    ) {
      return attended <= length;
    }
  }

  return false;
}

// Tests
console.log("1: ", isValidName("Frank") === true);
console.log("2: ", hoursAttended(6, 10) === true);
console.log("3: ", hoursAttended(6, "10") === true);
console.log("4: ", hoursAttended("6", 10) === true);
console.log("5: ", hoursAttended("6", "10") === true);

console.log("6: ", isValidName(false) === false);
console.log("7: ", isValidName(null) === false);
console.log("8: ", isValidName(undefined) === false);
console.log("9: ", isValidName("") === false);
console.log("10: ", isValidName("  \t\n") === false);
console.log("11: ", isValidName("X") === false);
console.log("12: ", hoursAttended("", 6) === false);
console.log("13: ", hoursAttended(6, "") === false);
console.log("14: ", hoursAttended("", "") === false);
console.log("15: ", hoursAttended("foo", 6) === false);
console.log("16: ", hoursAttended(6, "foo") === false);
console.log("17: ", hoursAttended("foo", "bar") === false);
console.log("18: ", hoursAttended(null, null) === false);
console.log("19: ", hoursAttended(null, undefined) === false);
console.log("20: ", hoursAttended(undefined, null) === false);
console.log("21: ", hoursAttended(undefined, undefined) === false);
console.log("22: ", hoursAttended(false, false) === false);
console.log("23: ", hoursAttended(false, true) === false);
console.log("24: ", hoursAttended(true, false) === false);
console.log("25: ", hoursAttended(true, true) === false);
console.log("26: ", hoursAttended(10, 6) === false);
console.log("27: ", hoursAttended(10, "6") === false);
console.log("28: ", hoursAttended("10", 6) === false);
console.log("29: ", hoursAttended("10", "6") === false);
console.log("30: ", hoursAttended(6, 10.1) === false);
console.log("31: ", hoursAttended(6.1, 10) === false);
console.log("32: ", hoursAttended(6, "10.1") === false);
console.log("33: ", hoursAttended("6.1", 10) === false);
console.log("34: ", hoursAttended("6.1", "10.1") === false);
