const EventEmitter = require('events');

const event = new EventEmitter();

event.on('studentJoined', (name) => {
    console.log("Student " + name + " joined the session.");
});

event.on('courseSelected', (course) => {
    console.log("Course selected: " + course);
});

event.on('sessionEnded', (code) => {
    console.log("Session ended. Code: " + code);
});

event.emit('studentJoined', 'Shruti');
event.emit('courseSelected', 'Full Stack Development');
event.emit('sessionEnded', 0);