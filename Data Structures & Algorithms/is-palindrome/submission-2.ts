class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        s = s.toLocaleLowerCase().replaceAll(/[^a-z0-9]/g, '');

        let index1 = 0;
        let index2 = s.length - 1;

        while (index1 < index2) {
            if (s.charAt(index1).toLowerCase() !== s.charAt(index2).toLowerCase()) {
                return false;
            }

            index1++;
            index2--;
        }

        return true;
    }
}
