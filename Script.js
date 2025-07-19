// Add hotel cards dynamically
const hotelList = document.getElementById("hotel-list");

const hotels = [
  {
    name: "The Ocean Pearl",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    location: "Goa, India",
    description: "A luxury seaside hotel with beach view suites."
  },
  {
    name: "Mountain View Resort",
    image: "https://images.unsplash.com/photo-1551887373-6f5a009e9f65",
    location: "Manali, India",
    description: "Peaceful resort surrounded by the Himalayas."
  },
  {
    name: "Urban Elite Hotel",
    image: "https://images.unsplash.com/photo-1501117716987-c8e1ecb21017",
    location: "Mumbai, India",
    description: "Modern amenities in the heart of the city."
  }
];

hotels.forEach((hotel) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${hotel.image}" alt="${hotel.name}" />
    <div class="card-content">
      <h3>${hotel.name}</h3>
      <p>${hotel.description}</p>
      <button>Book Now</button>
    </div>
  `;

  hotelList.appendChild(card);
});
