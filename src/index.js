import $ from 'jquery';
import Rx from 'rxjs/Rx';

const users = [
    { name: 'Will', age: 34 },
    { name: 'Mike', age: 33 },
    { name: 'Paul', age: 35 }
];

const first$ = Rx.Observable.from(users)
    .subscribe(x => {
        console.log(x);
        $('#table').append('<tr><td>' + x.name + '</td><td>' + x.age + '</td><tr />');
    });