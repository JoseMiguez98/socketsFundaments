const { io } = require('../server');

io.on('connection', client => {
  console.log('User connected');

  client.on('disconnect', () => {
    console.log('Client disconnected');
  });

  client.on('message', (message, callback) => {
    console.log(message);

    client.broadcast.emit('message', message);
    // if(message.user) {
    //   callback({
    //     ok: true,
    //     message: 'message received successfully',
    //   })
    // } else {
    //   callback({
    //     ok: false,
    //     message: 'user field required'
    //   });
    // }
  });

  client.emit('message', {
    user: 'Doc',
    message: 'Hi marty i\'m on the server side',
  });
});