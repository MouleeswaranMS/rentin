document.getElementById('loginForm').addEventListener('submit', function(e) {
   e.preventDefault();
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   const file = "assets/credentials.xlsx"; // Path to your Excel file

   fetch(file)
       .then(response => response.arrayBuffer())
       .then(data => {
           const workbook = XLSX.read(data, { type: 'array' });
           const sheet = workbook.Sheets[workbook.SheetNames[0]];
           const users = XLSX.utils.sheet_to_json(sheet);

           const user = users.find(u => u.Username === username && u.Password === password);

           if (user) {
               window.location.href = "index.html"; // Redirect to homepage after successful login
           } else {
               document.getElementById('errorMessage').style.display = "block";
           }
       });
});
