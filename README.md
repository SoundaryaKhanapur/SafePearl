# SafePearl

## Introduction
SafePearl is a web application designed to provide users with guidance and resources on harassment prevention, support, and reporting policies. It leverages AI-generated responses and Google Maps integration to help individuals find nearby support organizations and understand relevant policies.

## Features
- **Chat-Based Guidance**: Users can enter scenarios to receive structured advice on harassment prevention.
- **Policy Lookup**: Users can select institutions to view harassment policies and reporting procedures.
- **Voice Input**: Allows users to input scenarios via speech recognition.
- **Nearby Support Organizations**: Utilizes Google Maps API to display local support organizations.
- **User Location Awareness**: Detects the user's location to provide relevant resources.
- **AI-Powered Responses**: Uses OpenAI and Google Gemini APIs to generate structured responses.
- **Interactive Landing Page**: Provides an intuitive user experience to guide users.
- **Google Maps Integration**: Displays relevant organizations and support centers.

---

## Tech Stack
- **Frontend**: React.js, CSS
- **APIs Used**:
  - OpenAI API (GPT-4o)
  - Google Maps JavaScript API
  - Google Places API
  - Google Generative AI (Gemini Pro)
- **State Management**: React Hooks
- **Routing**: React Router DOM
- **Deployment**: TBD

---

## Installation

### Prerequisites
- Node.js (>=16.0.0)
- npm or yarn
- Google Maps API Key
- OpenAI API Key
- Google Generative AI API Key

### Clone the Repository
```sh
git clone https://github.com/your-repo/safe-pearl.git
cd safe-pearl
```

### Install Dependencies
```sh
npm install  # or yarn install
```

### Environment Variables
Create a `.env` file in the root directory and add the following keys:
```sh
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
REACT_APP_GOOGLE_GENERATIVE_AI_API_KEY=your_generative_ai_key
```

### Run the Application
```sh
npm start  # or yarn start
```
Access the app at `http://localhost:3000`.

---

## Directory Structure
```
root
│── public/               # Static files (e.g., favicon, manifest.json)
│── src/
│   ├── components/       # React components
│   │   ├── ChatPage/     # AI-powered chat system
│   │   ├── CheckPolicies # Policy lookup feature
│   │   ├── Home/         # Main page with user input
│   │   ├── Landing/      # Landing page
│   │   ├── Map/          # Google Maps component
│   │   ├── Nav/          # Navigation bar
│   ├── service/          # AI integrations
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point
│── .env                  # API keys (not committed)
│── package.json          # Dependencies and scripts
```

---

## Usage Guide

### 1. Chat-Based Guidance
- Users enter a scenario related to harassment.
- AI provides structured responses with understanding, prevention tips, and resources.
- Users can use voice input for hands-free interaction.

### 2. Policy Lookup
- Users select an institution (e.g., UNC, NCSU) to view harassment policies.
- Policies are displayed along with links to official sources.

### 3. Finding Support Organizations
- App requests user location (if permitted).
- Displays nearby support organizations using Google Maps API.
- Provides organization details, including name, address, and ratings.

### 4. Interactive Landing Page
- Guides users with an intuitive interface.
- Offers options for reporting, seeking help, or checking policies.

---

## Deployment

### Build for Production
```sh
npm run build  # or yarn build
```

### Deploy to Hosting Service
- Deploy on platforms like **Vercel, Netlify, or AWS Amplify**.
- Ensure environment variables are correctly set up in the hosting service.

---

## Known Issues & Future Enhancements

### Issues
- OpenAI API errors can occur due to rate limits.
- Google Maps API sometimes does not return relevant results.
- Speech recognition may not work on all browsers.

### Future Enhancements
- **Authentication**: Allow user login for personalized recommendations.
- **Multilingual Support**: Expand AI responses to support multiple languages.
- **Incident Reporting**: Enable users to report incidents directly.
- **AI Model Fine-Tuning**: Improve AI-generated responses based on user feedback.

---

## Contributors
- **Your Name** (Maintainer)
- Open to contributions! Feel free to fork and submit PRs.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact
For support or feedback, reach out via:
- GitHub Issues: [Safe Pearl Repo](https://github.com/your-repo/safe-pearl/issues)
