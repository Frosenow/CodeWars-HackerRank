/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left -= 1;
            right += 1;
        }
        return right - left - 1;
    }

    let ans = [0, 0];

    for (let i = 0; i < s.length; i++) {
        let oddLength = expand(i, i);
        if (oddLength > ans[1] - ans[0] + 1) {
            let dist = Math.floor(oddLength / 2);
            ans = [i - dist, i + dist];
        }

        let evenLength = expand(i, i + 1);
        if (evenLength > ans[1] - ans[0] + 1) {
            let dist = Math.floor(evenLength / 2) - 1;
            ans = [i - dist, i + 1 + dist];
        }
    }

    let [i, j] = ans;
    return s.substring(i, j + 1);
}
