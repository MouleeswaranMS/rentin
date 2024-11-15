// Sample items to display as search results and all items on page load
const sampleItems = [
   { name: "Drilling Machine", category: "Tools", location: "Karaikudi", price: "₹15/hour", image: "assets/drilling_machine.jpeg", rating: 4 },
   { name: "Mower", category: "Tools", location: "Madurai", price: "₹20/hour", image: "assets/mower.jpeg", rating: 5 },
   { name: "Hammer", category: "Tools", location: "Trichy", price: "₹25/hour", image: "assets/hammer.jpeg", rating: 3 },
   { name: "GoPro camera", category: "Electronics", location: "Thanjavur", price: "₹10/hour", image: "assets/gopro.jpeg", rating: 4 },
   { name: "Hockey Stick", category: "Tools", location: "Karaikudi", price: "₹15/hour", image: "assets/hockey.jpeg", rating: 4 },
   { name: "Cycle", category: "Vehicles", location: "Madurai", price: "₹20/hour", image: "assets/cycle.jpg", rating: 5 },
   { name: "Tool Set", category: "Tools", location: "Trichy", price: "₹25/hour", image: "assets/toolset.jpeg", rating: 3 },
   { name: "Speaker", category: "Electronics", location: "Thanjavur", price: "₹10/hour", image: "assets/speaker.jpeg", rating: 4 },
   { name: "Ladder", category: "Tools", location: "Trichy", price: "₹25/hour", image: "assets/ladder.jpeg", rating: 3 },
   { name: "Video Camera", category: "Electronics", location: "Thanjavur", price: "₹10/day", image: "assets/video_camera.jpeg", rating: 4 },
   { name: "Tripod", category: "Electronics", location: "Karaikudi", price: "₹15/hour", image: "assets/tripod.jpeg", rating: 4 },
   { name: "Game Set", category: "Electronics", location: "Madurai", price: "₹20/hour", image: "assets/gameset.jpeg", rating: 5 },
   { name: "Washing Machine", category: "Home Appliances", location: "Madurai", price: "₹20/hour", image: "assets/washer.webp", rating: 5 },
   { name: "TVS 50", category: "Vehicles", location: "Trichy", price: "₹25/hour", image: "assets/bike.jpg", rating: 3 },
   { name: "Scooty", category: "Vehicles", location: "Thanjavur", price: "₹10/hour", image: "assets/scooty.jpg", rating: 4 },
   { name: "Audi Car", category: "Vehicles", location: "Trichy", price: "₹25/hour", image: "assets/car.jpg", rating: 3 },
   
];
// Function to generate star ratings
function generateStars(rating) {
   let stars = '';
   for (let i = 1; i <= 5; i++) {
       stars += `<span class="${i <= rating ? '' : 'grey'}">★</span>`;
   }
   return stars;
}

// Toggle Sidebar
function toggleSidebar() {
   document.getElementById('sidebar').classList.toggle('active');
}

// Toggle Dark/Light Mode
function toggleMode() {
   document.body.classList.toggle('dark-mode');
}

// Display items in the item list
function displayItems(items) {
   const itemList = document.getElementById('itemList');
   itemList.innerHTML = items.map(item => `
       <div class="item">
           <img src="${item.image}" alt="${item.name}">
           <h3>${item.name}</h3>
           <div class="stars">${generateStars(item.rating)}</div>
           <h4>Category: ${item.category}</h4>
           <h4>Location: ${item.location}</h4>
           <h4>Price: ${item.price}</h4>
           <button onclick="window.location.href='cc.html'" class="rent-btn">Rent Now</button>
       </div>
   `).join('');
}
// Initialize with all items on page load
window.onload = () => displayItems(sampleItems);

// Search functionality
function performSearch() {
   const searchTerm = document.getElementById('searchInput').value.toLowerCase();
   const filteredItems = sampleItems.filter(item =>
       item.name.toLowerCase().includes(searchTerm)
   );
   displayItems(filteredItems);
}

// Apply dark mode on page load if saved in localStorage
document.addEventListener("DOMContentLoaded", () => {
   const isDarkMode = localStorage.getItem("darkMode") === "true";
   if (isDarkMode) {
       document.body.classList.add("dark-mode");
       document.getElementById("darkModeToggle").checked = true; // Sync slider state
   }
});

// Toggle dark mode and save the preference
function toggleMode() {
   const isDarkMode = document.body.classList.toggle("dark-mode");
   localStorage.setItem("darkMode", isDarkMode); // Save preference
}
