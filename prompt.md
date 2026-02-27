
### Overview

This is a modern **Multi-Step Registration Form** built with React 18 and Vite. It heavily focuses on a "Premium Aesthetics" design system, using glassmorphism effects, light & dark theme toggling, and clean micro-animations.

### Key Components

1. **MultiStepForm.jsx**: The main parent container managing validation and global form states explicitly via `useState`. Contains the routing logic to switch between steps.
2. **ProgressBar.jsx**: Visual progress tracking component.
3. **PersonalInfo.jsx**: Collects basic details (First Name, Last Name, DoB, Phone). Form elements are controlled components.
4. **AccountDetails.jsx**: Collects Email, Username, and Password (with built-in visibility toggle and real-time password strength).
5. **ReviewSubmit.jsx**: Displays all answers back to the user to confirm before submission.
6. **SuccessScreen.jsx**: The end completion screen shown upon 100% success progress.
7. **App.jsx**: Global wrapper managing theme context (Light VS Dark) state.

### Tech Stack & Choices

- **UI Architecture**: Glassmorphism cards over dynamic gradient backgrounds.
- **Styling Method**: Absolute vanilla CSS via CSS Custom Variables (`var(--primary)`, `var(--bg-color)`) specifically utilizing data attributes `data-theme="light"` and `data-theme="dark"` for instant toggling.
- **Form Handling**: Manual React State without external libraries like Formik or React Hook Form.
- **Icons**: Lucide React.

---

### Example Prompts You Can Use Next:

**1. Form Expansion:**

> "Add a new 'Address Details' step to my MultiStepForm between Personal Information and Account Details. Ensure it includes controlled inputs for Address Line 1, City, State, and Zip Code."

**2. Integrating a Backend API:**

> "I want to submit the final form data to my backend REST API when the user clicks submit in the `ReviewSubmit.jsx` page. Write an async fetch function and manage the loading state so the submit button gets disabled and shows a spinner."

**3. Advanced Validation:**

> "Expand the validation logic in the Account Details component. Add regex-powered strict password complexity rules (at least 8 chars, one uppercase, one number, one special character) and show dynamic warnings beneath the input box."

**4. Expanding CSS:**

> "My application uses vanilla CSS and specific custom CSS theme variables like `--input-bg` and `--text-main` in a `[data-theme='dark']` toggle system. Add a new 'Cyberpunk' theme via `[data-theme='cyberpunk']` taking care of all form and button colors."
