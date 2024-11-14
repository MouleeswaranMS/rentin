document.getElementById('signupForm').addEventListener('submit', function(e) {
   e.preventDefault();
   const username = document.getElementById('newUsername').value;
   const password = document.getElementById('newPassword').value;

   const file = "assets/credentials.xlsx"; // Path to your Excel file

   fetch(file)
       .then(response => response.arrayBuffer())
       .then(data => {
           const workbook = XLSX.read(data, { type: 'array' });
           const sheet = workbook.Sheets[workbook.SheetNames[0]];
           const users = XLSX.utils.sheet_to_json(sheet);

           // Check if username already exists
           const existingUser = users.find(u => u.Username === username);
           if (existingUser) {
               alert('Username already exists!');
           } else {
               // Add new user to the Excel sheet
               users.push({ Username: username, Password: password });
               const newSheet = XLSX.utils.json_to_sheet(users);
               workbook.Sheets[workbook.SheetNames[0]] = newSheet;
               const updatedFile = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

               // Save updated file (this requires server-side handling or client-side file system access, which isn't directly possible in pure JS)
               alert('Account created successfully!');
               window.location.href = "login.html"; // Redirect to login page after successful signup
           }
       });
});
