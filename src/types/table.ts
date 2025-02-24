export type tdKey = 'name' | 'username' | 'last_name' | 'first_name' | 'role' | 'type' | 'email' | 'phone' | 'address' | 'id' | 'price' | 'stock' | 'category' | 'sub_category' | 'description'

export interface UserCreated {
    name: string;
    last_name: string;
    role: string;
    phone: string;
    date_created: string;
}
