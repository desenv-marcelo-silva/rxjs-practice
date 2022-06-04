import { ReplaySubject } from 'rxjs';

var subject = new ReplaySubject(30, 500);

subject.subscribe({
  next: (data: any) => addItem('Observer 1: ' + data),
  error: (err) => addItem(err),
  complete: () => addItem('Observer 1 completed'),
});

var i = 1;
var int = setInterval(() => subject.next(i++), 200);

setTimeout(() => {
  var observer2 = subject.subscribe({
    next: (data: any) => addItem('Observer 2: ' + data),
  });
}, 500);

function addItem(val: any) {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
