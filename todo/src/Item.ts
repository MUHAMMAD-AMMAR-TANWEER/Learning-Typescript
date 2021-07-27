export class Item {


    public constructor(public taskId: number, public task: string , public done: boolean = false){

    }

    public printTask():void {
        console.log(`id = ${this.taskId}, \tTask : ${this.task} , \tComplete: ${this.done}`)
    }

}