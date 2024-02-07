export default function bs_list(haystack: number[], needle: number): boolean {
    let start = 0,
        end = haystack.length - 1;

    while (start <= end) {
        const mid = Math.floor(start + (end - start / 2));
        if (needle === haystack[mid]) return true;
        else if (needle < haystack[mid]) end = mid - 1;
        else start = mid + 1;
    }
    return false;
}
console.log(bs_list([1, 2, 3, 4, 5, 6, 7], 1));
