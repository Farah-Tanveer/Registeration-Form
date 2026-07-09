# Registration Form with DataTable

A responsive registration form built with vanilla JavaScript and jQuery, featuring real time field validation and a searchable, sortable data table to manage submitted entries.

## Features

- **Full form validation** for first name, last name, email, phone number, password, confirm password, gender, country, and terms acceptance, with inline error messages that clear automatically once corrected
- **Password confirmation check** to ensure both password fields match before submission
- **DataTables integration** to display all submitted registrations in a searchable, paginated table
- **Select2** enhanced country dropdown for a better selection experience
- **Row level actions** on every entry:
  - **View** — opens a Bootstrap modal showing the full submitted details
  - **Edit** — repopulates the form with the row's data for updating, then removes the old row
  - **Delete** — removes the entry from the table
- **Masked sensitive fields** so passwords are never shown in plain text within the table

## Tech Stack

- HTML5 / CSS3
- JavaScript (ES6+)
- jQuery
- [DataTables](https://datatables.net/) plugin
- [Select2](https://select2.org/) plugin
- [Bootstrap](https://getbootstrap.com/) (modal and UI components)

## How It Works

1. User fills out the registration form
2. On submit, each field is validated individually; if any check fails, an inline error message appears next to that field and the form is not submitted
3. Once all fields pass validation, the entry is added as a new row in the DataTable
4. Each row includes View, Edit, and Delete buttons that are wired up individually to that row's data
5. Editing a row removes it from the table and loads its data back into the form for resubmission

## Planned Improvements

- Stronger validation (email format check, phone number digit/length check, password minimum length, whitespace trimming)
- Refactor repeated validation logic into a single reusable helper function
- Persist entries with localStorage so data survives a page refresh

## Getting Started

1. Clone the repo
2. Open `index.html` in your browser
3. No build steps or dependencies to install, all plugins are loaded via CDN
