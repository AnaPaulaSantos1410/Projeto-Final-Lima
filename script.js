function sendMessage() {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");
    const message = input.value;


    if (message) {
        const newMessage = document.createElement("p");
        newMessage.textContent = message;
        messages.appendChild(newMessage);
        input.value = "";
        messages.scrollTop = messages.scrollHeight; // Rola para baixo
    }
}
