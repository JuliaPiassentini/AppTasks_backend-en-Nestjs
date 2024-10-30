 import {IsIn, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";
import { TasksStatus } from "../task.entity";
 
 
 //Descripcion de lo que se espera ingresen en cliente para enviar al servidor
 export class CreateTaskDTO{
    @IsString()//VER..hacer decorator personalizado para no repetir codiggo en cada propiedad
    @IsNotEmpty()
    @MinLength(3)
      title:string
      @IsString()
      @IsNotEmpty()
      @MinLength(3)
      description:string
 }

 export class UpdateTaskDto{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @IsOptional()
     tile?: string;
     @IsString()
     @IsNotEmpty()
     @MinLength(3)
     @IsOptional()
     description?:string;
     @IsString()
     @IsNotEmpty()
     @MinLength(3)
     @IsOptional()
     @IsIn([TasksStatus.DONE,TasksStatus.IN_PROGRESS,TasksStatus.PENDING])
     status?:TasksStatus;
 }