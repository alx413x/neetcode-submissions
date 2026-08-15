class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map() 
        //  key => anag ,val => str 
        for (let str of strs ) { 
            const anag = str.split("").sort().join("") 
            if (map.get(anag)){
                 map.get(anag).push(str)
                 }else {
                    map.set(anag,[str])
                 }

        }
        return [...map.values()]
    }
}
