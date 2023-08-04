# Warehouse Optimization Project 📦🔧

Welcome to my warehouse optimization project! This project emerged out of a necessity to effectively organize a warehouse, determining the most efficient configuration of shelves based on varying product dimensions, kanban bin sizes, and the number of bins. The warehouse shelves were adjustable in height and could be stacked until they reached the ceiling. 

## Project Overview 📝

In this project, the aim is to compute the optimal height and depth of a shelf based on a linear box stacking algorithm. This algorithm doesn't involve complex layouts, but rather a straightforward stack of boxes. This solution is tailored to help decide which products should go on each shelf, considering their dimensions, the kanban bin size (the number of parts), and the number of bins (2 or 3).

The shelves' depths vary and they come in different lengths, making this a multi-faceted problem to solve.

## About the Code 💻

The JavaScript code for this project is rather straightforward. It employs a simple object-oriented design, featuring three main classes:

1. `Item`: This class represents an individual item or SKU in the warehouse. Each item is associated with a particular bin type and has properties for SKU and kanban height.

2. `BinType`: This class represents the types of bins available in the warehouse. Each bin type has an id and dimensions (height, width, depth).

3. `ShelfType`: This class represents the types of shelves in the warehouse. Each shelf has properties for width and depth. 

The `stuff` array holds instances of these classes.

## Using This Project 🚀

1. Clone the repository to your local machine.
2. Open the JavaScript file in your preferred text editor or IDE.
3. Instantiate the `Item`, `BinType`, and `ShelfType` classes as needed, providing the required parameters.
4. Push these instances to the `stuff` array.
5. Run the program to calculate the optimal shelf height and depth based on the provided data.

## Contributing 🤝

Though this repository is mainly for personal use, any suggestions for improvement are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have any ideas to make this project better.

## License 📝

This project is licensed under the MIT License - see the LICENSE file for details.
