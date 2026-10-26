import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [
    { id: 1, title: 'Ahmed 1', description: 'This is Ahmed Description for Task 1', isCompleted: false, createdAt: new Date(), updatedAt: new Date() },
    { id: 2, title: 'Abdu 2', description: 'This is Abdu Description for Task 2', isCompleted: true, createdAt: new Date(), updatedAt: new Date() },
    { id: 3, title: 'Ali 3', description: 'This is Ali Description for Task 3', isCompleted: false, createdAt: new Date(), updatedAt: new Date() },
  ];

  getAllTasks() {
    return this.tasks;
  }


  async getTaskById(id: number) {
    return await this.tasks.find(task => task.id == id);
  }

  async searchTasks(search: string) {
    return await this.tasks.filter(task => task.title.includes(search) || task.description.includes(search));
  }

  filterTasks(isComplete: boolean) {
    if (isComplete === true) {
      return this.tasks.filter(task => task.isCompleted);
    } else if (isComplete === false ) {
      return this.tasks.filter(task => !task.isCompleted);
    } else {
      return this.tasks;
    }
  }


}
