const useSavedUsers = (num: number) => {

    switch (num) {
        case(0): {return { title: "ADMINISTRATOR", email: "admin@adm.com", pass: "adm" };}
        case(1): {return { title: "COMPANY", email: "company@com.com", pass: "com" };}
        case(2): {return { title: "CUSTOMER", email: "customer@cus.com", pass: "cus" };}
        default: {return { title: "ADMINISTRATOR", email: "admin@adm.com", pass: "adm" };}
    }
}

export default useSavedUsers;