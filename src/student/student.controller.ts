import { Controller, Get, Post, Body, Patch, Param, Delete, Query, NotFoundException } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto, findAllParameters } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  create(@Body() StudentDto: StudentDto) {
    return this.studentService.create(StudentDto);
  }

  @Get()
  findAll(@Query() params: findAllParameters): StudentDto[] {
    return this.studentService.findAll(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<StudentDto> {
    return this.studentService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto): Promise<void> {
    return await this.studentService.update(id, updateStudentDto);
    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
}
