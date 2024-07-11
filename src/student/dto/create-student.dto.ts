//* Class for Profile.
export class Profile {
    username: string;
    email: string;
    phoneNumber: string;
    registrationDate: Date;

    constructor(username: string, email: string, phoneNumber: string, registrationDate: Date) {
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.registrationDate = registrationDate;
    }
}

//* Class for Address 
export class Address {
    street: string;
    city: string;
    state: string;
    zip: string;

    constructor(street: string, city: string, state: string, zip: string) {
    this.street = street;
    this.city = city;
    this.state = state;
    this.zip = zip;
    }
}

//* Class for StudentDto
export class StudentDto {
  id: string;
  fullName: string;
  gender: string;
  age: number;
  address: Address;
  plan: string;
  paymentStatus: string;
  authorizationAndTerms: boolean;
  profiles: Profile[];

  constructor(
    id: string,
    fullName: string,
    gender: string,
    age: number,
    address: Address,
    plan: string,
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
