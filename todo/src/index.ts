import { Item } from "./Item";

import { ItemCollection } from "./ItemCollection";


// let item : Item = new Item(11, 'first_task', false);//let's build two more objects
// let item1 : Item =  new Item(12 ,  "second_task", false);
// let item2  : Item =  new Item(13, "Task 3");


let icollection : ItemCollection = new ItemCollection();

icollection.addTodo("first tasdk");
icollection.addTodo("second task");
icollection.taskDone(1);


icollection.printAll();






// item.printTask();
// item1.printTask();
// item2.printTask();