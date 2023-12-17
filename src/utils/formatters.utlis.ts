export const phoneNumberFormat = (phoneNumber: string) => {
    return phoneNumber.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2 $3')
}