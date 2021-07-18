export enum ServerURL {
    baseAddress = 'http://localhost:8080',
    //baseAddress = 'https://coupons-back-mysql-jwt.herokuapp.com',

    allCoupons = '/',
    allCustomers = '/customers',
    allCompanies = '/companies',

    companyCoupons = '/coupons',
    customerCoupons = '/purchases',
    notCustomerCoupons = '/purchases/not',

    login = '/login',

    allCategories = '/categories',

    addCoupon = '/coupons',
    updateCoupon = '/coupons',
    buyCoupon = '/purchases',
    deleteCoupon = '/coupons',

    deleteCompany = '/companies',
    addCompany = '/companies',
    updateCompany = '/companies',

    addCustomer = '/customers',
    updateCustomer = '/customers',
    deleteCustomer = '/customers',

    profileCustomer = '/user/customer',
    profileCompany = '/user/company'
}