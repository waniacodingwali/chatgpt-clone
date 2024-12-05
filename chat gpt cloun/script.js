// Select DOM elements
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

// Add click event listener to the Send button
sendButton.addEventListener('click', () => {
  const userMessage = chatInput.value.trim();
  
  if (userMessage) {
    // Add user message to the chat window
    addMessage(userMessage, 'user-message');
    
    // Add bot's response (static)
    setTimeout(() => {
      addMessage('This is a static bot response!', 'bot-message');
    }, 1000);
    
    // Clear input
    chatInput.value = '';
  }
});

// Function to add messages to the chat window
function addMessage(message, className) {
  const messageBubble = document.createElement('div');
  messageBubble.className = `chat-bubble ${className}`;
  messageBubble.textContent = message;
  
  chatWindow.appendChild(messageBubble);
  
  // Auto-scroll to the bottom of the chat window
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
