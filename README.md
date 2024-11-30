# React Chakra UI Counter App

This is a simple React application that uses Chakra UI for the user interface. The app displays a welcome message and a button to increment a count value. The count is stored in `localStorage` so that the value persists across page reloads.

## Features

- **Persistent Count**: The count value is stored in the browser's `localStorage`, so it will persist even after the page is refreshed.
- **Chakra UI Components**: Utilizes Chakra UI components such as `Heading`, `Text`, `Button`, and `Mark` to build the UI.
- **Highlight and Mark**: The app highlights a specific word in the heading and displays the count value in a styled mark.

## How It Works

### 1. LocalStorage Integration
The `localStorage` API is used to store the count value under the key `count`. When the app is loaded, the count is retrieved from `localStorage` and displayed. Every time the count changes, it is updated in `localStorage`.

### 2. Count Management
The state of the count is managed using the `useState` hook in React. The count starts with the value from `localStorage`, and is incremented by 1 whenever the "Count me!" button is clicked.

### 3. Chakra UI Styling
The app uses Chakra UI to provide a clean and responsive design. It includes:
- A **highlighted word** in the heading using the `Highlight` component.
- A **count display** inside a `Mark` component, which is styled with a bold, black background.
- A **button** to increment the count, styled with Chakra UI's `Button` component.

## Installation

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/react-chakra-ui-counter.git
