const  kraTaxRates = {
  paye: [
    { lower: 0, upper: 24000, rate: 10 },
    { lower: 24001, upper: 32333, rate: 15 },
    { lower: 32334, upper: 40389, rate: 20 },
    { lower: 40390, upper: 48344, rate: 25 },
    { lower: 48345, upper: 60000, rate: 30 },
    { lower: 60001, upper: Infinity, rate: 35 },
  ],
  nhif: [
    { lower: 0, upper: 5999, amount: 150 },
    { lower: 6000, upper: 7999, amount: 300 },
    { lower: 8000, upper: 11999, amount: 400 },
    { lower: 12000, upper: 14999, amount: 500 },
    { lower: 15000, upper: 19999, amount: 600 },
    { lower: 20000, upper: 24999, amount: 750 },
    { lower: 25000, upper: 29999, amount: 850 },
    { lower: 30000, upper: 34999, amount: 900 },
    { lower: 35000, upper: 39999, amount: 950 },
    { lower: 40000, upper: 44999, amount: 1000 },
    { lower: 45000, upper: 49999, amount: 1100 },
    { lower: 50000, upper: 59999, amount: 1200 },
    { lower: 60000, upper: 69999, amount: 1300 },
    { lower: 70000, upper: 79999, amount: 1400 },
    { lower: 80000, upper: 89999, amount: 1500 },
    { lower: 90000, upper: 99999, amount: 1600 },
    { lower: 100000, upper: Infinity, amount: 1700 },
  ],
  nssf: { employee: 6, employer: 6 },
};

function calculateNetSalary(basicSalary, benefits) {
  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate PAYE
  let taxableIncome = grossSalary;
  let paye = 0;

  kraTaxRates.paye.forEach((tier) => {
    const taxableAmount = Math.min(taxableIncome, tier.upper - tier.lower);
    paye += (taxableAmount * tier.rate) / 100;
    taxableIncome -= taxableAmount;
  });

  // Calculate NHIF
  let nhif = 0;
  kraTaxRates.nhif.forEach((tier) => {
    if (grossSalary >= tier.lower && grossSalary <= tier.upper) {
      nhif = tier.amount;
    }
  });

  // Calculate NSSF
  const nssfEmployee = (kraTaxRates.nssf.employee / 100) * grossSalary;
  const nssfEmployer = (kraTaxRates.nssf.employer / 100) * grossSalary;

  // Calculate Net Salary
  const netSalary = grossSalary - paye - nhif - nssfEmployee;

  return {
    grossSalary,
    paye,
    nhif,
    nssfEmployee,
    nssfEmployer,
    netSalary,
  };
}

// Example usage
const basicSalary = 50000;
const benefits = 10000;

const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Output the results
console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE:", salaryDetails.paye);
console.log("NHIF Deductions:", salaryDetails.nhif);
console.log("NSSF Employee Deductions:", salaryDetails.nssfEmployee);
console.log("NSSF Employer Contributions:", salaryDetails.nssfEmployer);
console.log("Net Salary:", salaryDetails.netSalary);
