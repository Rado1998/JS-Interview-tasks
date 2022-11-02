import { BehaviorSubject, map, mergeMap, Observable, of, Subject, switchAll, switchMap } from 'rxjs';

// const subjectForEmit = new Subject();
// const subjectForListeners = new BehaviorSubject(subjectForEmit.asObservable());

// subjectForListeners
//   .pipe(
//     switchAll()
//   )
//   .subscribe((value) => {
//     console.log('value', value);
//   });

// subjectForEmit.next(20);

// const secondSubjectForEmit = new Subject();

// subjectForListeners.next(secondSubjectForEmit.asObservable());

// secondSubjectForEmit.next('barev');

// ==================================================================================//

let subjectForEmit: Subject<string> | Subject<number> = new Subject<number>();
const subjectForListeners = new BehaviorSubject<Observable<any> | null>(subjectForEmit.asObservable());

function getSujectForListeners() {
    return subjectForListeners
        .pipe(
            mergeMap((value: Observable<any> | null) => {
                if (!value) {
                    return of(null);
                }
                return value;
            })
        )
}

getSujectForListeners()
    .subscribe((value) => {
        console.log('value', value);
    })


subjectForEmit.next(20);
subjectForEmit.next(30);
subjectForEmit.next(40);
subjectForEmit.next(50);
subjectForEmit.next(60);
subjectForEmit.next(70);

subjectForEmit = new Subject<string>();
subjectForListeners.next(subjectForEmit.asObservable());

subjectForEmit.next('barev');
subjectForEmit.next('barev 1');

