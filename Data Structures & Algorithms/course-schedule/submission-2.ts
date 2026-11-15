class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    public canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const courseGraph = new Array(numCourses).fill(0).map(_ => []);
        const courseGraphTraversal = new Array(numCourses).fill(0).map(_ => ({start: 0, finish: 0}));
        const visited = new Set<number>();
        let time = 0;

        for (let pre of prerequisites) {
            if (pre[0] === pre[1]) {
                return false;
            }

            courseGraph[pre[1]].push(pre[0]);
        }

        const dfsVisit = (course: number): void => {
                if (visited.has(course)) {
                    return;
                }

                time++;
                courseGraphTraversal[course].start = time;
                visited.add(course);

                for (let neighbor of courseGraph[course]) {
                    dfsVisit(neighbor);
                }

                time++;

                courseGraphTraversal[course].finish = time;
        }

        for (let course = 0; course < numCourses; course++) {
            if (visited.has(course)) {
                continue;
            }

            dfsVisit(course);
        }

        for (let pre of prerequisites) {
            if (courseGraphTraversal[pre[0]].start < courseGraphTraversal[pre[1]].start && courseGraphTraversal[pre[0]].finish > courseGraphTraversal[pre[1]].finish) {
                return false;
            }
        }

        return true;
    }
}
