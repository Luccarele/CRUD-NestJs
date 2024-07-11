import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Profile, StudentDto, findAllParameters } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {

    private students: StudentDto[] = [];

  create(student: StudentDto) {
    this.students.push(student);
    console.log(JSON.stringify(this.students, null, 2));
  }

  findAll(params: findAllParameters ): StudentDto[] {
    return this.students.filter(s => {

      if(params.fullName !== undefined && !s.fullName.includes(params.fullName)) {
        return false;
      }
      if(params.plan !== undefined && !s.fullName.includes(params.plan)) {
        return false;
      }
      if(params.profiles !== undefined && !s.fullName.includes(params.profiles)) {
        return false;
      }
      return true
    });
  };

  async findOne(id: string): Promise<StudentDto> {
    const foundStudent = this.students.find(s => s.id === id);

    if(foundStudent) {
      return foundStudent;
    }

    throw new HttpException(
      `Student with the id ${id} not found`,
      HttpStatus.NOT_FOUND,
    );
  }

  //* não entendi pq Promise e por que studentDto em chave

  async update(id: string, dto: UpdateStudentDto) {
    const student = await this.findOne(id);

    const studentIndex = this.students.findIndex(s => s.id === id);
    this.students[studentIndex] = {...student, ...dto};
  }


  remove(id: string) {
    const studentIndex = this.students.findIndex(s => s.id === id);

    if(studentIndex >= 0 ) {
      this.students.splice(studentIndex[1]);
      return
      //* Por que 1 e não 0? 
    }
  }

  findStudentLogin(username: string): Profile | null {
   for (const student of this.students) {
    const profile = student.profiles.find(profile => profile.username === username);
    if(profile) {
      return profile;
    };
   };
   return null;
  }
}
