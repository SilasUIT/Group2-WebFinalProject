document.addEventListener('DOMContentLoaded', function() {
    var socket = io();
    socket.emit('admin join');

    socket.on('new client', function(clientInfo) {
        var userList = document.getElementById('userList');
        var userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.id = clientInfo.id;
        userDiv.textContent = `Chat with ${clientInfo.username}`;
        userDiv.onclick = function() {
            joinChatRoom(clientInfo.id);
        };
        userList.appendChild(userDiv);
    });

    socket.on('client disconnected', function(clientId) {
        var userDiv = document.getElementById(clientId);
        if (userDiv) {
            userDiv.remove();
        }
    });

    function joinChatRoom(clientId) {
        document.getElementById('roomInput').value = clientId;
        document.getElementById('messages').innerHTML = '';
        socket.emit('join room', clientId);
    }

    var form = document.getElementById('form');
    var input = document.getElementById('input');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (input.value && roomInput.value) {
            socket.emit('chat message', { roomId: roomInput.value, msg: input.value });
            input.value = '';
            var item = document.createElement('li');
            item.textContent = input.value;
            document.getElementById('messages').appendChild(item);
        }
    });

    socket.on('chat message', function(msg) {
        var messages = document.getElementById('messages');
        var item = document.createElement('li');
        item.textContent = msg;
        messages.appendChild(item);
    });
});
