import { emailRegex } from '../utils/regex';

export class LoginDTO {
    email: string;
    password: string;

    constructor(body: any) {
        this.email = body.email;
        this.password = body.password;
    }

    validate() {
        if (!this.email.match(emailRegex)) {
            console.log('error');
            throw new Error('Invalid email');
        }
        if (this.password.length < 6) {
            throw new Error('Password must be at least 6 characters');
        }
    }
}

export class SignupDTO {
    firstname: string;
    lastname: string;
    email: string;
    password: string;

    validate() {
        if (this.firstname.length < 3) {
            throw new Error('Firstname must be at least 3 characters');
        }
        if (this.lastname.length < 3) {
            throw new Error('Lastname must be at least 3 characters');
        }
        if (!this.email.match(emailRegex)) {
            throw new Error('Invalid email');
        }
        if (this.password.length < 6) {
            throw new Error('Password must be at least 6 characters');
        }
    }
}
