let socket = io();

// listen socket events
socket.on('connect', () => {
  console.log('Connection established')
});

socket.on('disconnect', () => console.log('Connection lost'));

// emit an event
socket.emit('message', {
  user: 'Marty Mcfly',
  message: 'Doc, i need to get back to the future',
}, res => console.log(res));

// TO DO: Check why isn't working
socket.on('message', message => {
  console.log('Server:', message);
});