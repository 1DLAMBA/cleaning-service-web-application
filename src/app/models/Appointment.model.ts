
export interface AppointmentResource {
    id: number,
    name: string,
    email: string,
    phone_number: number,
    address: string,
    date_and_time: string ,
    status: string ,
    type_of_cleaning: string,
    number_of_rooms: number,
    special_requests: string,
    additional_comments: string,
}

export interface AppointmentRequest{
    name: string,
    email: string,
    phone_number: number,
    address: string,
    date_and_time: Date,
    type_of_cleaning: string,
    number_of_rooms: number,
    special_requests: string,
    additional_comments: string,
}