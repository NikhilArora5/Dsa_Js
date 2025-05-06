/**Example 1
 * Precision issue
 * Here default case will run because 0.1 +0.2 is not exactly equals to 0.3
 */

const key = 0.1 + 0.2;

switch (key) {
  case 0.3:
    console.log("0.3 case");

    break;

  case 0.5:
    console.log("0.5 case");

    break;

  default:
    console.log("default case");
    break;
}

/**Example 2
 * Same execution for Multiple   cases
 * Don use break
 */

switch (key) {
  case 0.3:
  case 0.5:
  case 0.2:
  case 0.2:
    console.log("less tha 0");
    break;

  case 1.3:
  case 2.5:
  case 4.2:
  case 5.2:
    console.log("greater than 1");
    break;

  default:
    console.log("default case");
    break;
}

/**Example 3
 * Check with expressions as awlays true
 */

switch (true) {
  case 1 > 2:
    console.log("less tha 0");
    break;

  case 10 < 20:
    console.log("greater than 1");
    break;

  default:
    console.log("default case");
    break;
}
