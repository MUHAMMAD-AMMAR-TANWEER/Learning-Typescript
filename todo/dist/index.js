"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Item_1 = require("./Item");
let item = new Item_1.Item(11, 'first_task', false); //let's build two more objects
let item1 = new Item_1.Item(12, "second_task", false);
let item2 = new Item_1.Item(13, "Task 3");
item.printTask();
item1.printTask();
item2.printTask();
