document.addEventListener('DOMContentLoaded', function() {
  // This connects to your server using Socket.io
    var socket = io();
    var form = document.getElementById('form');
    var input = document.getElementById('input');
    var roomInput = document.getElementById('roomInput');
    var messages = document.getElementById('messages');
    var chatContainer = document.getElementById('chatContainer');
    var chatIcon = document.getElementById('chatIcon');
    var chatMinimize = document.getElementById('chatMinimize');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value && roomInput.value) {
            socket.emit('join room', roomInput.value);
            socket.emit('chat message', { roomId: roomInput.value, msg: input.value });
            input.value = '';
        }
    });

    socket.on('chat message', function(msg) {
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    });

    chatMinimize.addEventListener('click', function() {
        chatContainer.style.display = 'none';
        chatIcon.style.display = 'block';
    });

    chatIcon.addEventListener('click', function() {
        chatContainer.style.display = 'block';
        chatIcon.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    var chatIcon = document.getElementById('chatIcon');

    // Variables to track drag state
    var dragged = false;
    var posX = 0, posY = 0, mouseX = 0, mouseY = 0;

    // Listen for the mouse down event
    chatIcon.addEventListener('mousedown', function(e) {
        dragged = true;
        mouseX = e.clientX;
        mouseY = e.clientY;
        e.preventDefault(); // Prevent default drag behavior
    });

    // Listen for mouse move event on the document
    document.addEventListener('mousemove', function(e) {
        if (dragged) {
            posX += e.clientX - mouseX;
            posY += e.clientY - mouseY;
            mouseX = e.clientX;
            mouseY = e.clientY;
            chatIcon.style.left = posX + 'px';
            chatIcon.style.top = posY + 'px';
        }
    });

    // Listen for mouse up event on the document
    document.addEventListener('mouseup', function() {
        dragged = false;
    });
});
