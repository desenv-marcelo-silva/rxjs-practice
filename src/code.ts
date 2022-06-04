import { AsyncSubject } from 'rxjs';

var subject = new AsyncSubject();

subject.subscribe({
  next: (data: any) => addItem('Observer 1: ' + data),
  complete: () => addItem('Observer 1 completed'),
});

var i = 1;
var int = setInterval(() => subject.next(i++), 100);

setTimeout(() => {
  var observer2 = subject.subscribe({
    next: (data: any) => addItem('Observer 2: ' + data),
  });
  subject.complete();
}, 500);

function addItem(val: any) {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
