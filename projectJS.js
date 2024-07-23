function generateMealPlan() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const goal = document.getElementById('goal').value.trim();
  
    const meals = {
      Monday: {
        Breakfast: document.getElementById('mondayBreakfast').value.trim(),
        Snack: document.getElementById('mondaySnack').value.trim(),
        Lunch: document.getElementById('mondayLunch').value.trim(),
        Dinner: document.getElementById('mondayDinner').value.trim()
      },
      Tuesday: {
        Breakfast: document.getElementById('tuesdayBreakfast').value.trim(),
        Snack: document.getElementById('tuesdaySnack').value.trim(),
        Lunch: document.getElementById('tuesdayLunch').value.trim(),
        Dinner: document.getElementById('tuesdayDinner').value.trim()
      },
      Wednesday: {
        Breakfast: document.getElementById('wednesdayBreakfast').value.trim(),
        Snack: document.getElementById('wednesdaySnack').value.trim(),
        Lunch: document.getElementById('wednesdayLunch').value.trim(),
        Dinner: document.getElementById('wednesdayDinner').value.trim()
      },
      Thursday: {
        Breakfast: document.getElementById('thursdayBreakfast').value.trim(),
        Snack: document.getElementById('thursdaySnack').value.trim(),
        Lunch: document.getElementById('thursdayLunch').value.trim(),
        Dinner: document.getElementById('thursdayDinner').value.trim()
      },
      Friday: {
        Breakfast: document.getElementById('fridayBreakfast').value.trim(),
        Snack: document.getElementById('fridaySnack').value.trim(),
        Lunch: document.getElementById('fridayLunch').value.trim(),
        Dinner: document.getElementById('fridayDinner').value.trim()
      },
      Saturday: {
        Breakfast: document.getElementById('saturdayBreakfast').value.trim(),
        Snack: document.getElementById('saturdaySnack').value.trim(),
        Lunch: document.getElementById('saturdayLunch').value.trim(),
        Dinner: document.getElementById('saturdayDinner').value.trim()
      },
      Sunday: {
        Breakfast: document.getElementById('sundayBreakfast').value.trim(),
        Snack: document.getElementById('sundaySnack').value.trim(),
        Lunch: document.getElementById('sundayLunch').value.trim(),
        Dinner: document.getElementById('sundayDinner').value.trim()
      }
    };
    
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>${name}'s Weekly Meal Plan</title>
        <link rel="stylesheet" href="styles.css">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap"
      rel="stylesheet"
    />
        <style>
          body {
            font-family: Comfortaa, sans-serif;
            background-color: #f0f0f0;
            padding: 20px;
          }
          .container {
            width: 80%;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1, h2, h3 {
            text-align: center;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${name}'s Weekly Meal Plan</h1>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Goal for the week:</strong> ${goal}</p>
          <h2>Meal Plan:</h2>
          <ul>
            <li><strong>Monday:</strong>
              <ul>
                <li><strong>Breakfast:</strong> ${meals.Monday.Breakfast}</li>
                <li><strong>Snack:</strong> ${meals.Monday.Snack}</li>
                <li><strong>Lunch:</strong> ${meals.Monday.Lunch}</li>
                <li><strong>Dinner:</strong> ${meals.Monday.Dinner}</li>
              </ul>
            </li>
            <li><strong>Tuesday:</strong>
              <ul>
                <li><strong>Breakfast:</strong> ${meals.Tuesday.Breakfast}</li>
                <li><strong>Snack:</strong> ${meals.Tuesday.Snack}</li>
                <li><strong>Lunch:</strong> ${meals.Tuesday.Lunch}</li>
                <li><strong>Dinner:</strong> ${meals.Tuesday.Dinner}</li>
              </ul>
            </li>
            <li><strong>Wednesday:</strong>
              <ul>
                <li><strong>Breakfast:</strong> ${meals.Wednesday.Breakfast}</li>
                <li><strong>Snack:</strong> ${meals.Wednesday.Snack}</li>
                <li><strong>Lunch:</strong> ${meals.Wednesday.Lunch}</li>
                <li><strong>Dinner:</strong> ${meals.Wednesday.Dinner}</li>
              </ul>
            </li>
            <li><strong>Thursday:</strong>
              <ul>
                <li><strong>Breakfast:</strong> ${meals.Thursday.Breakfast}</li>
                <li><strong>Snack:</strong> ${meals.Thursday.Snack}</li>
                <li><strong>Lunch:</strong> ${meals.Thursday.Lunch}</li>
                <li><strong>Dinner:</strong> ${meals.Thursday.Dinner}</li>
              </ul>
            </li>
            <li><strong>Friday:</strong>
              <ul>
                <li><strong>Breakfast:</strong> ${meals.Friday.Breakfast}</li>
                <li><strong>Snack:</strong> ${meals.Friday.Snack}</li>
                <li><strong>Lunch:</strong> ${meals.Friday.Lunch}</li>
                <li><strong>Dinner:</strong> ${meals.Friday.Dinner}</li>
              </ul>
            </li>
            <li><strong>Saturday:</strong>
              <ul>
                <li><strong>Breakfast:</strong> ${meals.Saturday.Breakfast}</li>
                <li><strong>Snack:</strong> ${meals.Saturday.Snack}</li>
                <li><strong>Lunch:</strong> ${meals.Saturday.Lunch}</li>
                <li><strong>Dinner:</strong> ${meals.Saturday.Dinner}</li>
              </ul>
            </li>
            <li><strong>Sunday:</strong>
              <ul>
                <li><strong>Breakfast:</strong> ${meals.Sunday.Breakfast}</li>
                <li><strong>Snack:</strong> ${meals.Sunday.Snack}</li>
                <li><strong>Lunch:</strong> ${meals.Sunday.Lunch}</li>
                <li><strong>Dinner:</strong> ${meals.Sunday.Dinner}</li>
              </ul>
            </li>
            <!-- Repeat for other days -->
          </ul>
          <br>
          <button onclick="window.print()">Print!</button>
          <form method="get" action="">
   <button type="submit">Download!</button>
</form>
        </div>
      </body>
      </html>
    `;
    

    const newWindow = window.open();
    newWindow.document.write(htmlContent);
  }
  
  function clearForm() {
    
    document.getElementById('mealForm').reset();
  }
  
  function isValidEmail(email) {
    
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  