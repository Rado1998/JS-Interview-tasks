import { BehaviorSubject, Subject } from 'rxjs';

const subjectForEmit = new Subject();
const subjectForListeners = new BehaviorSubject(subjectForEmit.asObservable());

subjectForListeners.switch().subscribe((value) => {
  console.log('value', value);
});

subjectForEmit.next(20);

const secondSubjectForEmit = new Subject();

subjectForListeners.next(secondSubjectForEmit.asObservable());

secondSubjectForEmit.next('barev');