import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, Length, ValidateNested } from "class-validator";

//* Class for Profile.
export class Profile {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsPhoneNumber(null)
  phoneNumber: string;

  @IsDate()
  @Type(() => Date)
  readonly registrationDate: Date;

  constructor(username: string, email: string, password: string, phoneNumber: string) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.phoneNumber = phoneNumber;
      this.registrationDate = new Date();
  }
}


//* Class for Address 
export class Address {

    @IsString()
    @IsNotEmpty()
    street: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    state: string;

    @IsString()
    @IsNotEmpty()
    @Length(8, 8)
    zip: string;

    constructor(street: string, city: string, state: string, zip: string) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    }
}

export enum PlanType {
  Silver = 'Silver',
  Gold = 'Gold',
  Diamond = 'Diamond'
}

export enum GenderType {
  Male = 'Male',
  Female = 'Female',
  NotBinary = 'NotBinary',
  Fluid = 'Fluid',
  Agender = 'Agender',
  Bigender = 'Bigender'
}

//* Class for StudentDto
export class StudentDto {

  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEnum(GenderType)
  @IsNotEmpty()
  gender: GenderType;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @ValidateNested()
  @Type(() => Address)
  address: Address;

  @IsEnum(PlanType)
  @IsNotEmpty()
  plan: PlanType;

  @IsString()
  @IsNotEmpty()
  paymentStatus: string;

  @IsBoolean()
  authorizationAndTerms: boolean;

  profiles: Profile[];

  constructor(
    id: string,
    fullName: string,
    gender: GenderType,
    age: number,
    address: Address,
    plan: PlanType,
    paymentStatus: string,
    authorizationAndTerms: boolean,
    profiles: Profile[]
  ) {
    this.id = id;
    this.fullName = fullName;
    this.gender = gender;
    this.age = age;
    this.address = address;
    this.plan = plan;
    this.paymentStatus = paymentStatus;
    this.authorizationAndTerms = authorizationAndTerms;
    this.profiles = profiles;
  }
}

export class findAllParameters {
    fullName: string;
    plan: string;
    profiles: string;
}
