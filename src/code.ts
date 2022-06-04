import { BehaviorSubject } from 'rxjs';

var subject = new BehaviorSubject('First thing');

subject.subscribe({
  next: (data: any) => addItem('Observer 1: ' + data),
  error: (err) => addItem(err),
  complete: () => addItem('Observer 1 completed'),
});

subject.next('The first thing has been sent');
subject.next('Hey, the behavior is different. Observer2 is about to subscribe');

var observer2 = subject.subscribe({
  next: (data: any) => addItem('Observer 2: ' + data),
});
subject.next('The second thing has been sent');
subject.next('A third thing has been sent');

observer2.unsubscribe();

subject.next('A final thing has been sent');

function addItem(val: any) {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
