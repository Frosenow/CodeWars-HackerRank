// No recursion solution
function countIslands(image) {
  let islands = 0;
  const stack = [];

  for (let y = 0; y < image.length; y++) {
    for (let x = 0; x < image[y].length; x++) {
      if (image[y][x] === 1) {
        stack.push([y, x]);
        islands++;

        while (stack.length > 0) {
          const [col, row] = stack.pop();
          if (image[col][row] === 1) {
            image[col][row] = 0;
            // Upper
            if (col > 0) stack.push([col - 1, row]);
            // Left
            if (row > 0) stack.push([col, row - 1]);
            // Bottom
            if (col < image.length - 1) stack.push([col + 1, row]);
            // Right 
            if (row < image[col].length - 1) stack.push([col, row + 1]);
            // Diagonal Bottom Left 
            if(row > 0 && col < image.length - 1) stack.push([col + 1, row - 1])
            // Diagonal Bottom Right
            if(row < image.length - 1 && col < image.length - 1) stack.push([col + 1, row + 1])
            // Diagonal Top Right
            if(row < image.length - 1 && col > 0) stack.push([col - 1, row + 1])
            // Diagonal Top Left
            if(row > 0 && col > 0) stack.push([col - 1, row - 1])
          }
        }
      }
    }
  }

  return islands;
}
