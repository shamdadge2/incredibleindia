document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("tripForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Collect form data
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const destination = document.getElementById("destination").value.trim();
      const travelers = document.getElementById("travelers").value.trim();
      const budget = document.getElementById("budget").value;
      const startDate = document.getElementById("startDate").value;
      const endDate = document.getElementById("endDate").value;
      const message = document.getElementById("message").value.trim() || "No special notes";

      // Construct WhatsApp message
      const text = `*New Trip Request - Incredible India*\n\n` +
        `*Name:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Phone:* ${phone}\n` +
        `*Destination:* ${destination}\n` +
        `*Travelers:* ${travelers}\n` +
        `*Budget:* ${budget}\n` +
        `*Dates:* ${startDate} to ${endDate}\n` +
        `*Message:* ${message}`;

      // Encode for URL
      const encodedText = encodeURIComponent(text);
      const phoneNumber = "919529232912";

      // Redirect to WhatsApp
      window.location.href = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    });
  }

  // SEARCH LOGIC
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keyup", function () {
      const filter = searchInput.value.toLowerCase();
      // Select the anchor tags directly inside places-container
      const placeLinks = document.querySelectorAll(".places-container > a");

      placeLinks.forEach((link) => {
        // Find the card inside the link
        const card = link.querySelector(".place-card");
        if (card) {
          const title = card.querySelector("h3").innerText.toLowerCase();
          const tag = card.querySelector(".tag").innerText.toLowerCase();

          // Check if title or tag matches search
          if (title.includes(filter) || tag.includes(filter)) {
            link.style.display = ""; // Show
          } else {
            link.style.display = "none"; // Hide
          }
        }
      });
    });
  }
});
