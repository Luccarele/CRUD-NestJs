import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { authDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('Login')
    signIn(
        @Body('username') username: string, 
        @Body('password') password: string): authDto {
        return this.authService.signIn(username, password);
    }
}
