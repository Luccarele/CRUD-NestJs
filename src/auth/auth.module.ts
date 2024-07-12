import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { StudentModule } from 'src/student/student.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

//* Importando módulo Jwt
@Module({
    imports: [
        JwtModule.registerAsync({
            global: true, // Setando como global
            imports: [],
            useFactory: async (configService: ConfigService) => ({
                // Montando as variáveis de ambientes que serão manipuladas por ele
                secret: configService.get<string>('JWT_TOKEN'),
                signOptions: { expiresIn: +configService.get<number>('JWT_EXPIRES') }
            }),
            inject: [ConfigService],
        }),
        StudentModule],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {}
