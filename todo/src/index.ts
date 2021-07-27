import { Item } from "./Item";


let item : Item = new Item(11, 'first_task', false);//let's build two more objects
let item1 : Item =  new Item(12 ,  "second_task", false);
let item2  : Item =  new Item(13, "Task 3");




item.printTask();
item1.printTask();
item2.printTask();