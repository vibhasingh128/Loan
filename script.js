document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const employeeId = document.getElementById('employeeId').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const designation = document.getElementById('designation').value;
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanDate = new Date(document.getElementById('loanDate').value);
    const interest = parseFloat(document.getElementById('interest').value);
    const maturityDate = new Date(document.getElementById('maturityDate').value);
  
    if (employeeId.startsWith('E') && employeeId.length >= 4) {
      let totalInterest = 0;
      switch (designation) {
        case 'manager':
          totalInterest = loanAmount * (interest / 100) * 1.5;
          break;
        case 'developer':
          totalInterest = loanAmount * (interest / 100) * 1.2;
          break;
        case 'analyst':
          totalInterest = loanAmount * (interest / 100) * 1.1;
          break;
        default:
          totalInterest = loanAmount * (interest / 100);
      }
  
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `
        <p>Employee ID: ${employeeId}</p>
        <p>Name: ${name}</p>
        <p>Address: ${address}</p>
        <p>Designation: ${designation}</p>
        <p>Loan Amount: ${loanAmount}</p>
        <p>Interest Payable: ${totalInterest}</p>
        <p>Maturity Date: ${maturityDate.toDateString()}</p>
      `;
    } else {
      alert('Employee ID must start with "E" and be at least 4 characters long.');
    }
  });
  