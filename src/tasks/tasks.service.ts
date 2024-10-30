import { Injectable } from '@nestjs/common';
import { Task, TasksStatus } from './task.entity';
import { v4 } from 'uuid';//modulo v4 es para colocar el id formato string
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {

    //Popiedad creada para ser utilizada por la clase o sus métodos,array de tareas que se muestra y actualiza,lo completo con los datos descriptos de la identidad tarea 
    //Propiedad tasks será un array de objetos del tipo Task
    private tasks: Task[] = [
        {
            id: '1',//Simulo datos traídos de DB
            title: 'first task',
            description: 'some task',
            status: TasksStatus.PENDING,
        }
    ]

    //Métodos disponibles para utilizar en controllers
    getAllTasks() {
        return this.tasks;//No olvidar utilizar this para acceder a la propiedad

    }
    createTask(title: string, description: string) {
        const task = {
            id: v4(),//Modulo que asigna id,formato string
            title,
            description,
            status: TasksStatus.PENDING,
        }

        this.tasks.push(task); //Insertamos nva. task al array previo

        return task;//Una vez creada retorno la nva. tarea para ser utilizada por quien llame al método
    }

    //TS:Indico que este método retorna un objeto del tipo Task definido en edintity//Task es un tipo de retorno
    getTaskById(id:string): Task{
      return  this.tasks.find((task)=> task.id == id)
    }

    updateTask(id:string, updateFields:UpdateTaskDto) : Task{
        const task= this.getTaskById(id);//Obtengo tarea particular
        const newTask = Object.assign(task, updateFields);//utilizo propiedad de objeto que combina arrays y si se repiten propiedades entre ellos las reemplaza formando uno nuevo
        this.tasks.map((task)=> task.id === id ? newTask : task);//Recorro el array de tarea y si se actualizan reemplazo por la de nvo.valor
        return newTask;
    }

    deleteTask(id:string) {
       this.tasks= this.tasks.filter((task) => task.id !== id)//Nuevo array tasks con ids distinto al indicado
    }
}
