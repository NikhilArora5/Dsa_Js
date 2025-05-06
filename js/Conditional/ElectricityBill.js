/**
 * Calculate the bill
 *  upto 100 unit |  4.2/unit
 *   101-200 unit |  6/unit
 *   201-400 unit |  8/unit
 *   more than 400 unit |  13/unit
 */
const totalUnits = 700;

/**
 * Solution 1 (Instructor soltuion)
 * Bottom to top approach
 * first check for the upper limit then go down and then to last
 */

const CalBillBottomToTop = (totalUnits) => {
  let amount = 0;
  let remUnits = totalUnits;

  if (remUnits > 400) {
    // (remUnits-400) with this we get the number of units more than 400
    let unitsToBill = remUnits - 400;
    amount += unitsToBill * 13;

    console.log("amount",amount,unitsToBill)

    // as we have used only those units to bill which are more than 400  so rem always 400 
    remUnits = 400;
  }

  if (remUnits > 200 &&  remUnits<=400) {
    // (remUnits-200) with this we get the number of units lie b/w 200-400 (excluding 200)
    let unitsToBill = remUnits - 200;
    amount += unitsToBill * 8;
    console.log("amount",amount,unitsToBill)
    // as we have used only those units to bill which lie b/w 200-400 (excluding 200) so rem always 200 
    remUnits = 200;
  }

  if (remUnits > 100 &&  remUnits<=200) {
    // (remUnits-100) with this we get the number of units lie b/w 100-200 (excluding 100)
    let unitsToBill = remUnits - 100;
    amount += unitsToBill * 6;
    console.log("amount",amount,unitsToBill)
    // as we have used only those units to bill which lie b/w 100-200 (excluding 100) so rem always 200 
    remUnits = 100;
  }

  //now at last only remUnits will always be wither 100 or less than 100 so

  amount += remUnits * 4.2;
  console.log("amount",amount,remUnits)
};



/**
 * Solution 2 (chatgpt approach)
 * 
 */

const CalculateBill = (totalUnits) => {
    let bill = 0;
    let remUnits = totalUnits;
  
    const slabs = [
      { limit: 100, rate: 4.2 },
      { limit: 100, rate: 6 },
      { limit: 200, rate: 8 },
      { limit: Infinity, rate: 13 },
    ];
  
    for (let slab of slabs) {
      if (remUnits <= 0) break;
  
      const unitsToBill = Math.min(remUnits, slab.limit);
      bill += unitsToBill * slab.rate;
      remUnits -= unitsToBill;
    }
  
    return bill;
  };
  
 
  


CalBillBottomToTop(totalUnits)

/**
 * Solution 2 (My solution=>Naive)
 */

const CalculateBillMySoltion = (totalUnits) => {
  let bill = 0;
  let unitsBySection = 0;

  let remUnits = totalUnits;
  if (remUnits) {
    unitsBySection = remUnits < 100 ? remUnits : 100;
    bill += 4.2 * unitsBySection;

    remUnits = remUnits <= 100 ? 0 : remUnits - 100;
    console.log("unitsBySection", { unitsBySection, remUnits, bill });
    unitsBySection = 0;
  }
  if (remUnits) {
    let maxUnitsToBill = 200 - 101 + 1;
    unitsBySection = remUnits < maxUnitsToBill ? remUnits : maxUnitsToBill;

    bill += 6 * unitsBySection;
    console.log("unitsBySection", {
      unitsBySection,
      maxUnitsToBill,
      remUnits,
      bill,
    });
    unitsBySection = 0;

    remUnits = remUnits <= maxUnitsToBill ? 0 : remUnits - maxUnitsToBill;
    console.log("remUnits", remUnits);
  }
  if (remUnits) {
    let maxUnitsToBill = 400 - 200 + 1;
    unitsBySection = remUnits < maxUnitsToBill ? remUnits : maxUnitsToBill;
    console.log("unitsBySection here", {
      unitsBySection,
      maxUnitsToBill,
      remUnits,
      bill,
    });
    bill += 8 * unitsBySection;
    unitsBySection = 0;

    remUnits = remUnits <= maxUnitsToBill ? 0 : remUnits - maxUnitsToBill;
    console.log("remUnits", remUnits);
  }
  if (remUnits) {
    unitsBySection = remUnits;
    console.log("unitsBySection", { unitsBySection, remUnits, bill });
    bill += 13 * unitsBySection;
    unitsBySection = 0;
    console.log("remUnits", remUnits);
  }
};
