export function fullName(firstname: string, lastName: string, middleName: string = "",): string {
    if (!middleName) {
        return `${firstname} ${lastName}`;
    }
    return `${firstname} ${middleName} ${lastName}`;
}