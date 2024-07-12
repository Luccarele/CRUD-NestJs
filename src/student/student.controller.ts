import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentDto, findAllParameters } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  
  @Post()
  create(@Body() StudentDto: StudentDto) {
    return this.studentService.create(StudentDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Query() params: findAllParameters): StudentDto[] {
    return this.studentService.findAll(params);
  }
  @UseGuards(AuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string): Promise<StudentDto> {
    return this.studentService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto): Promise<void> {
    return await this.studentService.update(id, updateStudentDto);
    
  }
  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
}
