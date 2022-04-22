const { BinarySearchTree } = require('../scripts/bst');

// unit test 1: rotate left test
test('test to see if inputs rotate left', () => {
    const newBst = new BinarySearchTree();
    newBst.insert(1);
    newBst.insert(2);
    newBst.insert(3);
    expect(newBst.root.value).toBe(2);
    expect(newBst.root.left.value).toBe(1);
    expect(newBst.root.right.value).toBe(3);
    console.log(newBst, null, 2);
});


// unit test 2: rotate left and right test
test('test to see if inputs rotate left and right', () => {
    const newBst = new BinarySearchTree();
    newBst.insert(1);
    newBst.insert(2);
    newBst.insert(3);
    newBst.insert(4);
    newBst.insert(5);
    expect(newBst.root.value).toBe(2);
    expect(newBst.root.left.value).toBe(1);
    expect(newBst.root.right.value).toBe(4);
    expect(newBst.root.right.left.value).toBe(3);
    expect(newBst.root.right.right.value).toBe(5);
    console.log(newBst, null, 2);
});

//unit test 3: insert and balance test
test('test the inputs of the bst', () => {
    const newBst = new BinarySearchTree();
    newBst.insert(1);
    newBst.insert(2);
    newBst.insert(3);
    newBst.insert(4);
    newBst.insert(5);
    expect(newBst.root).not.toBe(null);
    expect(newBst.root.value).toBe(2);
    expect(newBst.root.left.value).toBe(1);
    expect(newBst.root.right.value).toBe(4);
    expect(newBst.root.right.left.value).toBe(3);
    expect(newBst.root.right.right.value).toBe(5);
    console.log(newBst, null, 2)
});






