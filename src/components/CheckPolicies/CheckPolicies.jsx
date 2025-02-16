import React, { useState } from "react";
import Nav from "../Nav/Nav"; // Import the Nav component
import "./CheckPolicies.css";

const policiesData = {
  "unc-chapel-hill": {
    text: `If you face harassment UNC Chapel Hill, follow these steps:

1. Ensure Your Immediate Safety
   - If you are in immediate danger, call 911 or UNC Police at 919-962-8100.  
   - Find a safe location and reach out to a trusted friend, faculty member, or counselor.  

2. Report the Incident  
   - University Equal Opportunity and Compliance Office (EOC)  
     - Phone: 919-966-3576  
     - Email: eoc@unc.edu  
     - [EOC Report Form](https://eoc.unc.edu/)  

   - Anonymous Reporting  
     - Submit an online report via [Safe at UNC](https://safe.unc.edu/)  

3. Seek Support and Counseling  
   - Confidential Resources:  
     - Counseling and Psychological Services (CAPS): 919-966-3658  
     - Gender Violence Services Coordinators (GVSCs): 919-962-1343  
     - Ombuds Office: Offers confidential guidance.  
   - Medical Help:  
     - Visit Campus Health Services for medical care and evidence collection (if applicable).  

4. Know Your Rights  
   - UNC’s Policy on Prohibited Harassment and Discrimination protects students, faculty, and staff from all forms of harassment.  
   - You have the right to academic accommodations, workplace modifications, and supportive measures (e.g., no-contact orders).  

5. Follow Up and Participate in Investigations  
   - If you file a report, you may be contacted by the EOC Office for further investigation.  
   - The university will offer supportive measures regardless of whether you proceed with formal charges.  

6. Access Additional Resources  
   - Visit [Safe at UNC](https://safe.unc.edu/) for more resources.  `,
    link: "https://policies.unc.edu/TDClient/2833/Portal/KB/ArticleDet?ID=132487"
  },
  "ncsu": {
    text: "NCSU's policy focuses on maintaining a discrimination-free environment and provides strong mechanisms for reporting misconduct.",
    link: "#" // Replace with actual policy link
  },
  "genysys": {
    text: "Genysys has a strict anti-harassment policy that protects all employees and ensures fair treatment.",
    link: "#" // Replace with actual policy link
  },
  "quorvo": {
    text: "Quorvo ensures a workplace free from harassment and promotes awareness programs for all employees.",
    link: "#" // Replace with actual policy link
  }
};

const CheckPolicies = () => {
  const [selectedPolicy, setSelectedPolicy] = useState("");

  return (
    <div>
      <Nav /> 
    <div className="check-policies-container">
      <br></br>
      <br></br>
      <h2>Select a Policy</h2>
      <select onChange={(e) => setSelectedPolicy(e.target.value)}>
        <option value="">-- Select an Institution --</option>
        <option value="unc-chapel-hill">UNC Chapel Hill</option>
        <option value="ncsu">NCSU</option>
        <option value="genysys">Genysys</option>
        <option value="quorvo">Quorvo</option>
      </select>
      {selectedPolicy && (
        <div className="policy-details">
          <p>{policiesData[selectedPolicy].text}</p>
          <a href={policiesData[selectedPolicy].link} target="_blank" rel="noopener noreferrer" className="policy-link">Read Full Policy</a>
        </div>
      )}
    </div>
    </div>
  );
};

export default CheckPolicies;
