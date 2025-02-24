import { ButtonProps } from "../components/buttons/Button";

export interface FormsInputs {
    name?: string,
    lastname?: string,
    email?: string,
    password?: string,
    password2?: string,
    dni?: string,
    phone?: string,
    address?: string,
    age?: string,
    gender_type?: string,
    two_factor_enabled?: boolean,
    cuil?: string;
    cuit?: string;
    name_bussines?: string;
    phone_bussines?: string;
    address_bussines?: string;
}

export interface ObjectErrorsMessages {
    name: string;
    lastname: string;
    email: string;
    password: string;
    password2: string;
    dni: string;
    phone: string;
    address: string;
    age: string;
    gender_type: string;
    two_factor_enabled: string;
    cuil: string;
    cuit: string;
    name_bussines: string;
    phone_bussines: string;
    address_bussines: string;
    hasErrors?: boolean;
}

export type FiledsForm =
    | 'name'
    | 'lastname'
    | 'email'
    | 'password'
    | 'password2'
    | 'dni'
    | 'phone'
    | 'address'
    | 'age'
    | 'gender_type'
    | 'two_factor_enabled'
    | 'cuil'
    | 'cuit'
    | 'name_bussines'
    | 'phone_bussines'
    | 'address_bussines'

export interface FormNewPassword {
    old_password: string;
    new_password: string;
    new_password_2: string;
}

export interface ObjectPasswordChecks {
    pass_length: boolean;
    pass_uppercase: boolean;
    pass_lowercase: boolean;
    pass_specialCaracter: boolean;
    pass_number: boolean;
    pass_2: boolean;
    pass_new_old: boolean;
}

export type ActionButton = ButtonProps