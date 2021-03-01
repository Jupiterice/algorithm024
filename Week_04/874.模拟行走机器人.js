/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 *
 * https://leetcode-cn.com/problems/walking-robot-simulation/description/
 *
 * algorithms
 * Easy (40.43%)
 * Likes:    123
 * Dislikes: 0
 * Total Accepted:    15.8K
 * Total Submissions: 38.8K
 * Testcase Example:  '[4,-1,3]\n[]'
 *
 * 机器人在一个无限大小的 XY 网格平面上行走，从点 (0, 0) 处开始出发，面向北方。该机器人可以接收以下三种类型的命令 commands
 * ：
 * 
 * 
 * -2 ：向左转 90 度
 * -1 ：向右转 90 度
 * 1  ：向前移动 x 个单位长度
 * 
 * 
 * 在网格上有一些格子被视为障碍物 obstacles 。第 i 个障碍物位于网格点  obstacles[i] = (xi, yi) 。
 * 
 * 机器人无法走到障碍物上，它将会停留在障碍物的前一个网格方块上，但仍然可以继续尝试进行该路线的其余部分。
 * 
 * 返回从原点到机器人所有经过的路径点（坐标为整数）的最大欧式距离的平方。（即，如果距离为 5 ，则返回 25 ）
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 注意：
 * 
 * 
 * 北表示 +Y 方向。
 * 东表示 +X 方向。
 * 南表示 -Y 方向。
 * 西表示 -X 方向。
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：commands = [4,-1,3], obstacles = []
 * 输出：25
 * 解释：
 * 机器人开始位于 (0, 0)：
 * 1. 向北移动 4 个单位，到达 (0, 4)
 * 2. 右转
 * 3. 向东移动 3 个单位，到达 (3, 4)
 * 距离原点最远的是 (3, 4) ，距离为 3^2 + 4^2 = 25
 * 
 * 示例 2：
 * 
 * 
 * 输入：commands = [4,-1,4,-2,4], obstacles = [[2,4]]
 * 输出：65
 * 解释：机器人开始位于 (0, 0)：
 * 1. 向北移动 4 个单位，到达 (0, 4)
 * 2. 右转
 * 3. 向东移动 1 个单位，然后被位于 (2, 4) 的障碍物阻挡，机器人停在 (1, 4)
 * 4. 左转
 * 5. 向北走 4 个单位，到达 (1, 8)
 * 距离原点最远的是 (1, 8) ，距离为 1^2 + 8^2 = 65
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * commands[i] is one of the values in the list [-2,-1,1,2,3,4,5,6,7,8,9].
 * 0 
 * -3 * 10^4 i, yi 
 * 答案保证小于 2^31
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    // [4, -1, 3], +Y北, move4，+X东， move3; Y:4,X:3, area = 4**2+3**2
    // [4,-1,4,-2,4],[[2,4]]: +Y, Y+=4(Y:4,X:0), +X, X+=4(X:1,Y:4), +Y, Y+=4(1, 8);

    let X = 0, Y = 0, area = 0;
    const dirMap = {
        '+Y': { '-1': '+X', '-2': '-X'},
        '+X': { '-1': '-Y', '-2': '+Y'},
        '-Y': { '-1': '-X', '-2': '+X'},
        '-X': { '-1': '+Y', '-2': '-Y'},
        // X: -1: *-1, -2: *1
        // Y: -1: *1, -2: *-1
    };
    // 解读障碍物
    const obsMap = {};
    obstacles.forEach((item) => {
        if (!obsMap[`${item[0]}X`]) {
            obsMap[`${item[0]}X`] = [];
        }
        obsMap[`${item[0]}X`].push(item[1]);

        if (!obsMap[`${item[1]}Y`]) {
            obsMap[`${item[1]}Y`] = [];
        }
        obsMap[`${item[1]}Y`].push(item[0]);
    });
    // console.log(obsMap);
    
    let dir = '+Y'; // X/Y
    let move = 1; // +/-

    for (let i = 0; i< commands.length; i++) {
        cmd = commands[i];
        // 判断指令类型
        if (cmd < 0) {
            // 修改方向：-2 ：向左转 90 度; -1 ：向右转 90 度;
            dir = dirMap[dir][cmd];
        } else {
            // 向前移动 x 个单位长度
            if (dir[0] === '-') move = -1;
            if (dir[0] === '+') move = 1;

            if (dir[1] === 'X') {
                const block = obsMap[`${Y}Y`] || [];
                let goal = X + move * cmd;
                while(!block.includes(X + move) && X !== goal) {
                    X += move;
                }
            }
            if (dir[1] === 'Y') {
                const block = obsMap[`${X}X`] || [];
                let goal = Y + move * cmd;
                while(!block.includes(Y + move) && Y !== goal) {
                    Y += move;
                }
            }
            // console.log(X, Y);
            // 计算当前路径点的欧氏距离平方
            let curArea = Math.abs(X)**2 + Math.abs(Y)**2;
            if (area < curArea) area = curArea;
        }
    }
    return area;
};
// @lc code=end

