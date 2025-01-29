function selectCategory(category) {
    const subCategoryDiv = document.getElementById('subCategory');
    const resultDiv = document.getElementById('result');
    subCategoryDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    subCategoryDiv.classList.remove('hidden');
    resultDiv.classList.add('hidden'); // Hide results when selecting new category

    switch (category) {
        case 1:
            subCategoryDiv.innerHTML = `
                <h2>Choose an injury:</h2>
                <button onclick="showResult('Cuts and Scrapes')">Cuts and Scrapes</button>
                <button onclick="showResult('Burns')">Burns</button>
                <button onclick="showResult('Sprains and Strains')">Sprains and Strains</button>
                <button onclick="showResult('Electric Burns')">Electric Burns</button>
                <button onclick="exit()">Exit</button>
            `;
            break;
        case 2:
            subCategoryDiv.innerHTML = `
                <h2>Choose an allergy:</h2>
                <button onclick="showResult('Bee Stings')">Bee Stings</button>
                <button onclick="showResult('Food Allergies')">Food Allergies</button>
                <button onclick="showResult('Drug Allergies')">Drug Allergies</button>
                <button onclick="showResult('Pet Allergies')">Pet Allergies</button>
                <button onclick="exit()">Exit</button>
            `;
            break;
        case 3:
            subCategoryDiv.innerHTML = `
                <h2>Choose a viral disease:</h2>
                <button onclick="showResult('Influenza')">Influenza</button>
                <button onclick="showResult('Common Cold')">Common Cold</button>
                <button onclick="showResult('Chickenpox')">Chickenpox</button>
                <button onclick="showResult('Fever')">Fever</button>
                <button onclick="exit()">Exit</button>
            `;
            break;
        case 4:
            subCategoryDiv.innerHTML = `
                <h2>Choose an equipment:</h2>
                <button onclick="showResult('First Aid Kit')">First Aid Kit</button>
                <button onclick="showResult('Ice Pack')">Ice Pack</button>
                <button onclick="showResult('Bandages')">Bandages</button>
                <button onclick="exit()">Exit</button>
            `;
            break;
        default:
            alert("Invalid category choice.");
            break;
    }
}

function showResult(choice) {
    const resultDiv = document.getElementById('result');
    resultDiv.classList.remove('hidden');

    const firstAidInfo = {
        "Cuts and Scrapes": [
            "1. Clean the wound with water.",
            "2. Apply an antiseptic.",
            "3. Cover with a sterile bandage."
        ],
        "Burns": [
            "1. Cool the burn under running cold water.",
            "2. Cover with a clean, non-stick bandage.",
            "3. Seek medical attention if severe."
        ],
        "Sprains and Strains": [
            "1. Rest the injured area.",
            "2. Apply ice to reduce swelling.",
            "3. Elevate the injured limb.",
            "4. Use muscle pain relief spray if needed."
        ],
        "Electric Burns": [
            "1. Turn off the source of electricity if possible.",
            "2. Cover the burn with a dry, sterile dressing.",
            "3. Seek medical attention as soon as possible."
        ],
        "Bee Stings": [
            "1. Remove the stinger gently.",
            "2. Wash the area with soap and water.",
            "3. Apply a cold pack to reduce swelling."
        ],
        "Food Allergies": [
            "1. Identify and remove the allergen.",
            "2. Administer antihistamines if needed.",
            "3. Seek medical help if symptoms are severe."
        ],
        "Drug Allergies": [
            "1. Stop taking the drug immediately.",
            "2. Contact a healthcare professional.",
            "3. Use antihistamines if recommended by a doctor."
        ],
        "Pet Allergies": [
            "1. Move away from allergen.",
            "2. Remove allergen.",
            "3. Wash hands and clothes.",
            "4. Clean affected area."
        ],
        "Influenza": [
            "1. Rest and drink plenty of fluids.",
            "2. Use over-the-counter medications to relieve symptoms.",
            "3. Seek medical attention if symptoms worsen."
        ],
        "Common Cold": [
            "1. Rest and stay hydrated.",
            "2. Use decongestants and cough syrups.",
            "3. Consult a healthcare provider if symptoms persist."
        ],
        "Chickenpox": [
            "1. Keep the skin clean and dry.",
            "2. Use calamine lotion to relieve itching.",
            "3. Avoid scratching and seek medical advice if needed."
        ],
        "Fever": [
            "1. Take as much rest as possible.",
            "2. Drink plenty of fluids.",
            "3. Take a lukewarm bath."
        ],
        "First Aid Kit": [
            "1. Sterile bandages and dressings.",
            "2. Antiseptic wipes and ointments.",
            "3. Tweezers and scissors."
        ],
        "Ice Pack": [
            "1. Apply to injuries to reduce swelling.",
            "2. Use for 15-20 minutes at a time.",
            "3. Wrap in a cloth to protect the skin."
        ],
        "Bandages": [
            "1. Covering cuts and wounds.",
            "2. Providing support for sprains.",
            "3. Securing dressings in place."
        ]
    };

    resultDiv.innerHTML = `<h2>First Aid for ${choice}:</h2><ul>${firstAidInfo[choice].map(item => `<li>${item}</li>`).join('')}</ul>`;
}

function exit() {
    const subCategoryDiv = document.getElementById('subCategory');
    const resultDiv = document.getElementById('result');
    
    subCategoryDiv.classList.add('hidden');
    resultDiv.classList.add('hidden');
    alert("Thank you for using the First Aid Guide. Stay safe!");
}

// Chatbot Functionality
document.getElementById('chat-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return; // Do not send empty messages
    
    displayChatMessage(userInput, 'user-message'); // Show user message
    
    // Simulate a bot response after 1 second
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        displayChatMessage(botResponse, 'bot-message');
    }, 1000);
    
    document.getElementById('user-input').value = ''; // Clear the input field
});

function displayChatMessage(message, className) {
    const chatbox = document.getElementById('chatbox');
    const messageElement = document.createElement('p');
    messageElement.classList.add(className);
    messageElement.textContent = message;
    chatbox.appendChild(messageElement);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // Define first-aid information for diseases and conditions
    const firstAidBotInfo = {
        "cuts": "For cuts, clean the wound with water and apply an antiseptic, then cover with a sterile bandage.",
        "burns": "For burns, cool the affected area under running cold water and cover with a non-stick bandage.",
        "sprains": "For sprains, rest the injured area, apply ice, and elevate the limb to reduce swelling.",
        "fever": "For fever, stay hydrated and rest. You can also take over-the-counter medications like acetaminophen or ibuprofen.",
        "common cold": "For common cold, rest, stay hydrated, and take decongestants or cough syrups to relieve symptoms.",
        "influenza": "For influenza (flu), get plenty of rest, stay hydrated, and consult a doctor if symptoms worsen.",
        "chickenpox": "For chickenpox, keep the skin clean and dry, apply calamine lotion for itching, and avoid scratching.",
        "bee stings": "For bee stings, remove the stinger, clean the area, and apply a cold pack to reduce swelling.",
        "food allergies": "For food allergies, avoid the allergen, take antihistamines, and seek medical attention if symptoms are severe.",
        "electric burns": "For electric burns, turn off the source of electricity, cover the burn with a dry dressing, and seek medical help.",
        "drug allergies": "For drug allergies, stop the medication, contact a healthcare provider, and take antihistamines if recommended.",
        
    };

    // Look for a match and return the response
    for (const condition in firstAidBotInfo) {
        if (lowerInput.includes(condition)) {
            return firstAidBotInfo[condition];
        }
    }

    // Default response if no match is found
    return "I'm not sure about that. Can you ask about another condition or first aid situation?";
}
function confirmCall() {
    if (confirm("Are you sure you want to call an ambulance?")) {
        window.location.href = "tel:112";
    }
}
