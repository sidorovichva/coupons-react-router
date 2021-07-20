export enum ClientURL {
    home = '/',
    login = '/login',
    about = '/about',

    allCoupons = '/coupons',
    addCoupon = '/coupons/add',
    updateCoupon = '/coupons/update',
    customerCoupons = '/coupons/customer',
    notCustomerCoupons = '/coupons/customer_not',
    companyCoupons = '/coupons/company',
    buyCoupon = '/coupons/buy',
    deleteCoupon = '/coupons/delete',

    allCompanies = '/companies',
    addCompany = '/companies/add',
    updateCompany = '/companies/update',
    deleteCompany = '/companies/delete',

    allCustomers = '/customers',
    addCustomer = '/customers/add',
    updateCustomer = '/customers/update',
    deleteCustomer = '/customers/delete',

    profileCustomer = '/profile/customer',
    profileCompany = '/profile/company'
}