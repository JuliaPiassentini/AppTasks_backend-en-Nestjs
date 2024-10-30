import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Body,
    Param,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDTO,UpdateTaskDto } from './dto/task.dto';

//Decorador de clase
@Controller('tasks')
export class TasksController {
    //Método con el que agregamos como propiedad de clase controller a la clase "inyectada" service
    constructor(private tasksService: TasksService) { }
    
    //Métodos con decoradores
    @Get()
    getAllTasks() {
        return this.tasksService.getAllTasks();
    }

    @Post()
    createTask(@Body() newTask: CreateTaskDTO) {
        //Acá indico los valores que tiene la nueva task con el DTO
        return this.tasksService.createTask(newTask.title, newTask.description); //Creamos y lo retornamos para que el cliente pueda verlo
    }

    @Patch(':id')
    updateTask(@Param('id') id: string, @Body() updateFields: UpdateTaskDto){
      return  this.tasksService.updateTask(id,updateFields);
    }


    @Delete(':id') //path tasks/:id
    deleteTask(@Param('id') id: string) {
        //Param extrae dato que me trae la request,indico cómo se llama y donde lo guarda
        this.tasksService.deleteTask(id);
    }
}
