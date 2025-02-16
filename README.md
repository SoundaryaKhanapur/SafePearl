# SafePearl 💗✨

## 🚀 Inspiration
Harassment is a deeply pervasive issue that leaves victims feeling helpless, unheard, and afraid to seek support. Many people hesitate to speak up due to fear, stigma, or not knowing where to turn for help. In a world where survivors often feel isolated, **SafePearl** provides a **private, anonymous, and judgment-free space** where they can share their experiences, receive empathetic AI-generated guidance, and find real-world support, all while ensuring complete privacy.  

## 💡 What It Does
- **🕵️ Anonymous Experience Sharing:** Users can either type or record their experience without fear of judgment. The **recording option** is included because many victims find it easier to **speak rather than type** when recalling traumatic events.  
- **🤖 AI-Powered Support:** OpenAI provides **empathetic, structured, and actionable guidance** in four key areas: acknowledgment, encouragement, coping strategies, and next steps. Unlike generic AI tools, SafePearl is specifically tuned to **help victims understand what happened to them, assure them they are not to blame, and encourage them to speak up rather than remain silent.**  
- **📍 Real-Time Resource Finder:** SafePearl detects the user's location (with permission) and displays **nearby harassment support centers** using Google Maps API, ensuring users can take real-world action beyond digital advice.  
- **🗺️ Interactive Map:** Users can view support organizations pinned on a map for easy access, eliminating the hassle of searching for help themselves.  
- **🔒 Privacy-First Approach:** No data is stored, ensuring a completely **safe and secure** experience for users who may fear retaliation or exposure.  

---

## 🏗️ How We Built It
- **React.js** for a smooth and interactive user experience.  
- **OpenAI API** to generate compassionate, structured responses tailored to survivors of harassment.  
- **Google Maps Places API** to find nearby harassment support centers.  
- **Google Maps API** to display an interactive map with pinned organizations.  
- **React Hooks, HTML, CSS, JavaScript** to bring all components together into a functional prototype.  

---

## ⚠️ Challenges We Ran Into
Building a platform for such a **sensitive and urgent issue** came with challenges:  
- **Fine-Tuning AI for Empathy:** Ensuring OpenAI responses were structured, trauma-informed, and genuinely helpful rather than generic or clinical.  
- **Google Maps API Limitations:** Filtering relevant support organizations dynamically based on location was complex.  
- **Client-Side Performance Issues:** Handling map rendering and API calls while maintaining a smooth user experience.  
- **Time Constraints:** Creating a meaningful, fully functional prototype **in just 24 hours** required intense focus, teamwork, and quick decision-making.  

---

## 🎉 Accomplishments That We're Proud Of
- **✅ Built an end-to-end working prototype in just 24 hours!**  
- **✅ Successfully integrated OpenAI to generate empathetic, structured responses.**  
- **✅ Implemented real-time location tracking to provide actionable, localized support.**  
- **✅ Designed a privacy-focused platform that ensures complete anonymity for users.**  
- **✅ Collaborated effectively as a team, overcoming challenges and delivering a meaningful solution.**  

---

## 📚 What We Learned
- **⚖️ The importance of AI ethics in handling sensitive topics.** We learned how to refine AI-generated responses to ensure they were **helpful, not harmful** to survivors.  
- **📍 How to optimize Google Maps API for real-world use cases.** We tackled filtering issues and refined how location-based resources were displayed.  
- **🔄 Balancing technical complexity with user experience.** A project like this demands both **functionality and accessibility** to truly help those in need.  
- **🤝 The power of working as a team under pressure.** Building something impactful in 24 hours required **clear communication, quick problem-solving, and adaptability.**  

---

## 🌟 What's Next for SafePearl
- **Multilingual Support:** Expanding the platform to help survivors worldwide.  
- **Enhanced Location Filtering:** Improving the accuracy and credibility of support center recommendations.  
- **AI Chat-Based Support:** Implementing real-time chatbot assistance for users seeking immediate guidance.  
- **Partnerships with NGOs and Crisis Centers:** Collaborating with organizations to provide verified, trusted resources.  

---

## 🛠️ Installation

### Prerequisites
- Node.js (>=16.0.0)  
- npm or yarn  
- Google Maps API Key  
- OpenAI API Key  
- Google Generative AI API Key  

### Clone the Repository
```sh
git clone https://github.com/your-repo/safepearl.git
cd safepearl
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

## 🎨 UI/UX Design
The design prioritizes **simplicity, clarity, and safety** to ensure that survivors feel comfortable using the platform. 
- **Dark Mode:** To create a calm and comfortable user experience. 
- **Minimalistic UI:** To avoid overwhelming users with unnecessary elements. 
- **Large, Easy-to-Read Fonts:** For accessibility and ease of use. 

---

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact Us
For support or feedback, reach out via:  
🐙 GitHub Issues: [SafePearl Repo](https://github.com/your-repo/safepearl/issues)  

---

**Harassment is real. The impact is deep. But no one has to go through it alone.**  
**💗 SafePearl is here to listen, support, and guide. 💗**  
