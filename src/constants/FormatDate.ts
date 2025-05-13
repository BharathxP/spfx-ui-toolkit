export function FormatDate(Date) {
    return !Date
    ? ""
    : Date.getMonth() + 1 + "/" + Date.getDate() + "/" + Date.getFullYear();
}
