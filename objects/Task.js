export default class Task{

    title: string;
    description: string;
    dueDate: Date;
    amount: number;
    submittedDate: Date; 

    constructor(title, description, dueDate, amount){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.amount = amount;
        
    }

}