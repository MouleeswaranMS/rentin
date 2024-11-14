// Sample items to display as search results and all items on page load
const sampleItems = [
   { name: "Power Drill", category: "Tools", location: "Karaikudi", price: "$15/day", image: "assets/power_drill.jpg" },
   { name: "Mountain Bike", category: "Vehicles", location: "Madurai", price: "$20/day", image: "assets/mountain_bike.jpg" },
   { name: "Projector", category: "Electronics", location: "Trichy", price: "$25/day", image: "assets/projector.jpg" },
   { name: "Washing Machine", category: "Home Appliances", location: "Thanjavur", price: "$10/day", image: "assets/washing_machine.jpg" },
];

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
           <p>Category: ${item.category}</p>
           <p>Location: ${item.location}</p>
           <p>Price: ${item.price}</p>
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
// Display items in the item list
function displayItems(items) {
   const itemList = document.getElementById('itemList');
   itemList.innerHTML = items.map(item => `
       <div class="item">
           <img src="${item.image}" alt="${item.name}">
           <h3>${item.name}</h3>
           <p>Category: ${item.category}</p>
           <p>Location: ${item.location}</p>
           <p>Price: ${item.price}</p>
           <button class="rent-now-btn">Rent Now</button>
       </div>
   `).join('');
}
