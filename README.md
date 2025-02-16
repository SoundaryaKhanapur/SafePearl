# Safe Pearl

## Introduction
Safe Pearl is a web application designed to provide users with guidance and resources on harassment prevention, support, and reporting policies. It leverages AI-generated responses and Google Maps integration to help individuals find nearby support organizations and understand relevant policies.

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
