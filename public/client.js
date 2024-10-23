const socket = new WebSocket('wss://signaltest.onrender.com'); // Replace with your signaling server URL

socket.onopen = function () {
    console.log('Connected to the signaling server');
};

socket.onmessage = function (event) {
    const message = JSON.parse(event.data);
    console.log('Message from server: ', message);
};

socket.onclose = function () {
    console.log('Disconnected from the signaling server');
};

function startCall() {
    const message = {
        type: 'join',
        id: 'user-id-' + Math.random().toString(36).substr(2, 9), // Generate a unique ID
    };
    socket.send(JSON.stringify(message));
}

// Add event listener for the start call button
document.getElementById('start-call-button').addEventListener('click', startCall);
