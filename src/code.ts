import { Observable } from 'rxjs';

var observable = new Observable((observer: any) => {
  try {
    observer.next('hello rxjs');
    observer.next('how do you work?');
    setInterval(() => {
      observer.next('I work on assyncrhonus and syncronus mode.');
    }, 2000);
  } catch (err) {
    observer.error(err);
  }
});

var observer = observable.subscribe({
  next: (x: any) => addItem(x),
  error: (error: any) => addItem(error),
  complete: () => addItem('the complete has been done.'),
});

setTimeout(() => {
  var observer2 = observable.subscribe({
    next: (x: any) => addItem('Subscriber #2: ' + x),
  });
}, 1000);

function addItem(val: any) {
  var node = document.createElement('li');
  var textNode = document.createTextNode(val);
  node.appendChild(textNode);
  document.getElementById('output').appendChild(node);
}
