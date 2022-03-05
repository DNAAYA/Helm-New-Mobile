//todo service file

import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

export interface Todo{ 

    venueName: "",
    category: "",
    address: "",
    contactName: "",
    contactNumber: null,
    surfaceArea: "",
    numberOfFloors: null,
    numberOfBathrooms: null,
    infrastructureType: "",
    auditDate: null,
    timeSlot: null,
    taskStatus: ""
  // task: string;
  // priority: number;
  // createdAt: number;
  
}


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todosCollection: AngularFirestoreCollection<Todo>;

  private todos: Observable<Todo[]>;

  constructor(db: AngularFirestore) {
    this.todosCollection = db.collection<Todo>('tasks');

    this.todos = this.todosCollection.snapshotChanges().pipe(
      map(actions => { 
        return actions.map(a=>{
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        })
      })
    )
   }

   getTodos(){

    return this.todos;
   }
   getTodo(id){
     return this.todosCollection.doc<Todo>(id).valueChanges();
    
   }
   
   //el ben3ml be update lel data 3al firebase
   updateTodo(todo: any, id: string){

    return this.todosCollection.doc(id).update(todo);

   }

      //el ben3ml be add lel data 3al firebase

   addTodo(todo: Todo) { 
     return this.todosCollection.add(todo);
    //  return this.todosCollection.doc(id).set(todo)
   }

      //el ben3ml be update lel data 3al firebase

   setTodo(todo: Todo, id: string){
    return this.todosCollection.doc(id).set(todo)

   }
   //el ben3ml be remove lel data 3al firebase

   removeTodo(id){
     return this.todosCollection.doc(id).delete();
   }


   updateTodo2(data: any, id: string){

    return this.todosCollection.doc(id).update(data);

   }
}
