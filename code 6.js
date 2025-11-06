function processData(input) 
{
   const arr = input.trim().split(/\s+/).map(Number);
    const n = arr[0];
     const values = arr.slice(1);
     class Node {
        constructor(data) {
            this.data = data;
            this.left = null;
            this.right = null;
        }
    }
     function insert(root, data) {
        if (!root) return new Node(data);
        if (data <= root.data) root.left = insert(root.left, data);
        else root.right = insert(root.right, data);
        return root;
    }
    let root = null;
    for (let val of values) {
        root = insert(root, val);
    }
     topView(root);
} 
function topView(root) {
    if (!root) return;

    let queue = [];
    let topNodes = new Map(); 
     queue.push({ node: root, hd: 0 });

    while (queue.length > 0) {
        const { node, hd } = queue.shift();
        if (!topNodes.has(hd)) {
            topNodes.set(hd, node.data);
        }

        if (node.left) queue.push({ node: node.left, hd: hd - 1 });
        if (node.right) queue.push({ node: node.right, hd: hd + 1 });
    }
    const sortedKeys = [...topNodes.keys()].sort((a, b) => a - b);
    const result = sortedKeys.map(k => topNodes.get(k)).join(" ");
    console.log(result);
}


process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
