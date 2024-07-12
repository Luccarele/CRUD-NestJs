import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Profile, StudentDto } from 'src/student/dto/create-student.dto';
import { StudentService } from 'src/student/student.service';
import { compareSync as bcryptHashSync } from 'bcrypt';
import { authDto } from './dto/auth.dto';


@Injectable()
export class AuthService {

    private jwtExpirationTimeInSeconds: number;

    constructor(
        private readonly studentsService: StudentService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService

    ) {
        this.jwtExpirationTimeInSeconds = +this.configService.get<number>('JWT_EXPIRES');
    }

    
    signIn(username: string, password: string): authDto {
        const result = this.studentsService.findStudentLogin(username);
        if (!result || !bcryptHashSync(password, result.profile.password)) {
          throw new UnauthorizedException();
        }
      
        const { student, profile } = result;
      
        const payload = { sub: student.id, username: profile.username };
      
        const token = this.jwtService.sign(payload);
      
        return { token, expiresIn: this.jwtExpirationTimeInSeconds };
      }
      
}
