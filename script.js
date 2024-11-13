function calculateAge() {
    const dayInput = parseInt(document.getElementById("day").value);
    const monthInput = parseInt(document.getElementById("month").value);
    const yearInput = parseInt(document.getElementById("year").value);
    const dayError = document.getElementById("day-error");
    const monthError = document.getElementById("month-error");
    const yearError = document.getElementById("year-error");
  
    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";
    dayError.style.display = "none";
    monthError.style.display = "none";
    yearError.style.display = "none";
  
    let isValid = true;
  
    if (!dayInput) {
      dayError.textContent = "Please enter a valid day.";
      dayError.style.display = "block";
      isValid = false;
    } else if (dayInput < 1 || dayInput > 31) {
      dayError.textContent = "Day must be between 1 and 31.";
      dayError.style.display = "block";
      isValid = false;
    }
  
    if (!monthInput) {
      monthError.textContent = "Please enter a valid month.";
      monthError.style.display = "block";
      isValid = false;
    } else if (monthInput < 1 || monthInput > 12) {
      monthError.textContent = "Month must be between 1 and 12.";
      monthError.style.display = "block";
      isValid = false;
    }
  
    if (!yearInput) {
      yearError.textContent = "Please enter a valid year.";
      yearError.style.display = "block";
      isValid = false;
    } else {
      const today = new Date();
      const birthDate = new Date(yearInput, monthInput - 1, dayInput);
      if (birthDate > today) {
        yearError.textContent = "Birth date cannot be in the future.";
        yearError.style.display = "block";
        isValid = false;
      } else if (birthDate.getDate() !== dayInput) {
        dayError.textContent = "Invalid date.";
        dayError.style.display = "block";
        isValid = false;
      }
    }
  
    if (!isValid) return;
  
    const today = new Date();
    const birthDate = new Date(yearInput, monthInput - 1, dayInput);
  
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
  
    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }
  
    document.getElementById("years").textContent = years;
    document.getElementById("months").textContent = months;
    document.getElementById("days").textContent = days;
  }
  