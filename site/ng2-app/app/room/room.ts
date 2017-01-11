import {RoomInfo} from "./room-info";
import {BehaviorSubject} from "rxjs";
import {Question} from "./question";

export class Room {

    private questions$ = new BehaviorSubject<Question[]>([
        new Question('Hello World')
    ]);
    public questions = this.questions$.asObservable();

    constructor(public info: RoomInfo) {

    }

    public addQuestion(question: Question) {
        let tmp = this.questions$.value;
        tmp.push(question);
        this.questions$.next(tmp);
    }

    public delQuestion(question: Question) {
        let tmp = this.questions$.value.filter(q => q != question);
        this.questions$.next(tmp);
    }

}