const socket = new WebSocket('ws://localhost:3000');

socket.onopen = function () {
    console.log('WebSocket connection established.');
};

socket.onmessage = function (event) {
    const message = JSON.parse(event.data);
    displayMessage(message.text, 'bot');
};

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    displayMessage(userInput, 'user');
    socket.send(userInput);
    document.getElementById('user-input').value = '';
}

function displayMessage(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
