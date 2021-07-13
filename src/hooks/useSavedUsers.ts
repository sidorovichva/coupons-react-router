const useSavedUsers = (num: number) => {

    switch (num) {
        case(0): {return { title: "ADMINISTRATOR", email: "admin", pass: "a"};}
        case(1): {return { title: "COMPANY", email: "company", pass: "com"};}
        case(2): {return { title: "CUSTOMER", email: "customer", pass: "cus"};}
        default: {return { title: "ADMINISTRATOR", email: "admin", pass: "a"};}
    }
}

export default useSavedUsers;