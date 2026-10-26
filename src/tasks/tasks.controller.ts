import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service.js';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(@Body() searchAndFilter?: { search?: string; filter?: { isCompleted: boolean } }) {
    try {
      if (searchAndFilter?.search) {
        return this.tasksService.searchTasks(searchAndFilter.search);
      }
      if (searchAndFilter?.filter) {
        return this.tasksService.filterTasks(searchAndFilter.filter.isCompleted);
      }
    } catch (error) {
      
    }

    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number) {
    return await this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(@Body() createTaskDto: { title: string; description: string }) {
    return createTaskDto.title + " has been created successfully";
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return `This action deletes a task by id: ${id}`;
  }

  @Put(':id')
  updateTask(@Param('id') id: number, @Body() updateTaskDto: { title: string; description: string }) {
    return `This action updates a task by id: ${id} with the following data: ${JSON.stringify(updateTaskDto)}`;
  }

}
