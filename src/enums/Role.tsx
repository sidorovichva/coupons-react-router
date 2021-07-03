enum Role {
    ADMINISTRATOR,
    CUSTOMER,
    COMPANY,
    GUEST
}

export const getRole = () => {
    const role = localStorage.getItem("Role");

    switch (role) {
        case 'ADMINISTRATOR': {
            return Role.ADMINISTRATOR;
            break;
        }
        case 'CUSTOMER': {
            return Role.CUSTOMER;
            break;
        }
        case 'COMPANY': {
            return Role.COMPANY;
            break;
        }
        default: {
            return Role.GUEST;
            break;
        }
    }
}


export default Role;