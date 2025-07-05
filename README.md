# FlockShop.ai - Collaborative Product Wishlist App (Frontend)

## Project Overview

This repository contains the frontend application for the FlockShop.ai Collaborative Product Wishlist App. The goal of this application is to provide a shared wishlist experience where multiple users can collaboratively create, manage, and interact with wishlists in real-time, simulating a group shopping spree scenario.

## Key Features (Frontend)

- **User Authentication:**
  - Sign up and Log in functionality (mock authentication or Firebase Auth integration).
- **Wishlist Management:**
  - Create new wishlists.
- **Product Interaction:**
  - Add new products to a wishlist (including product name, image URL, and price).
  - Edit existing product details.
  - Remove products from a wishlist.
- **Collaboration Features:**
  - Invite others to join a wishlist (mocked functionality for this assignment).
  - Display who added which item (username or email).

## Tech Stack

This frontend application is built using:

- **Framework:** [Choose one: React / Vue.js / Angular]
  - [If React: React Router for navigation, Redux/Context API for state management (optional, but good to mention if used)]
  - [If Vue: Vue Router for navigation, Vuex for state management (optional)]
  - [If Angular: Angular Router for navigation, RxJS for reactive programming]
- **Styling:** [e.g., CSS Modules, Styled Components, Tailwind CSS, Material-UI, Bootstrap, plain CSS]
- **API Communication:** [e.g., Fetch API, Axios]
- **Authentication (Optional choice):** [e.g., Firebase Authentication, Mock Authentication]

## Setup Instructions

Follow these steps to get the frontend application up and running on your local machine.

### Prerequisites

- Node.js (LTS version recommended)
- npm (Node Package Manager) or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/flockshop-wishlist-frontend.git](https://github.com/your-username/flockshop-wishlist-frontend.git)
    cd flockshop-wishlist-frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # OR
    yarn install
    ```

### Configuration

1.  **Environment Variables:**
    Create a `.env` file in the root of the project.
    If you are connecting to a backend, you'll need to specify its URL.

    ```env
    # Example for React:
    REACT_APP_BACKEND_API_URL=http://localhost:5000/api
    # Or for Vue:
    VUE_APP_BACKEND_API_URL=http://localhost:5000/api
    # Or for Angular (in environment.ts/prod.ts):
    # const environment = {
    #   production: false,
    #   backendApiUrl: 'http://localhost:5000/api'
    # };
    ```

    If using Firebase, add your Firebase configuration details here.

    ```env
    # Example for Firebase Auth:
    REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
    REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
    REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
    REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
    REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
    ```

2.  **Backend Server:**
    Ensure your backend server is running and accessible at the `REACT_APP_BACKEND_API_URL` (or equivalent) specified above. Refer to the [Backend Repository](https://github.com/your-username/flockshop-wishlist-backend) for setup instructions.

### Running the Application

To start the development server:

```bash
npm start
# OR
yarn start
```
