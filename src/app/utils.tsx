export function formatDate(date: string) {
    return new Date(date).toLocaleString('en-GB', { timeZone: "UTC" });
}