import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private storage: Storage
  ) { }

  getLocalDB() {
  return this.storage.create();
  }

  setTasks(tasks: Task[]) {
    return this.storage.set('tasks', tasks);
  }
}
