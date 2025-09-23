# 🏆 Challenge: Multi-Step Form Wizard

## The Challenge

Build a complete user registration wizard with **3 steps**, full validation, and smooth UX using only `useReducer` (no `useState` allowed!).

## Requirements

### Step 1: Personal Info

- First Name, Last Name, Email, Phone
- Email must be valid format
- Phone must be 10 digits
- Names minimum 2 characters

### Step 2: Account Setup

- Username, Password, Confirm Password
- Password minimum 8 characters, must include number
- Passwords must match

### Step 3: Preferences

- Country (dropdown), Language (radio buttons), Newsletter (checkbox)
- Marketing emails (checkbox), Terms agreement (checkbox)
- Terms must be accepted to proceed

## Core Challenges to Solve

**State Management Puzzle:**
How do you manage form data, validation errors, touched fields, current step, loading states, AND submission status all in one reducer?

**Validation Brain Teaser:**

- Show errors only AFTER user touches a field
- Validate entire step before allowing "Next"
- How do you handle async validation (username check)?
- Real-time validation vs. step validation

**Navigation Logic:**

- Can't go forward with invalid current step
- Can always go backward
- Progress bar that updates correctly
- What happens if user tries to skip steps?

**UX Challenges:**

- Loading states during submission
- Success/error messages
- Form reset functionality
- Step indicators showing completion status

## Bonus Challenges 🌟

<!-- main focus was to learn useReducer -->

1. **Persistence**: Form survives page refresh (use localStorage simulation)
2. **Dynamic Steps**: Add a 4th step conditionally based on previous answers
3. **Field Dependencies**: Some fields appear based on others
4. **Auto-save**: Save draft as user types (debounced)
5. **Accessibility**: Full keyboard navigation and screen reader support

## Success Criteria

- ✅ Single `useReducer` manages ALL state
- ✅ Proper validation with good UX
- ✅ Smooth step transitions
- ✅ Loading and success states
- ✅ Clean, reusable code structure

## The Real Test

Can you build this without looking up solutions? The magic is in figuring out:

- How to structure your state object
- What actions you actually need
- How to handle complex state transitions
- When to validate and when to show errors

**Time Challenge:** Try to complete the basic version in 2-3 hours!

Ready to tackle it? The reducer pattern will click once you work through these real-world complexities! 🚀

## Getting Started

1. Create a new React project
2. Set up your initial reducer state structure
3. Define your action types
4. Build your reducer function
5. Create your form components
6. Implement validation logic
7. Add navigation between steps
8. Style and polish

Good luck! 💪
