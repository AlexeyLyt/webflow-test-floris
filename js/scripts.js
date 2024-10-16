function calculatePrice() {
  const hours = document.getElementById("hours").value;
  const days = document.getElementById("days").value;
  const serviceType = document.getElementById("service-type").value;

  let hourlyRate = 0;

  if (serviceType === "basic") {
    hourlyRate = 10;
  } else if (serviceType === "advanced") {
    hourlyRate = 15;
  } else if (serviceType === "premium") {
    hourlyRate = 20;
  }

  const totalPrice = hours * days * hourlyRate;

  document.getElementById("total-price").textContent = totalPrice;
}
