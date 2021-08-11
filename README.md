# Microscopy tree selector

This repository contains the codes for the interactive microscopy image type selector tree with available nucleus segmentation methods listed.

# Prerequisites

To use this tool you need to:

- Install [Node.js](https://nodejs.org/en/)

# Installation

1. Clone this repository with

```
	git clone https://github.com/biomag-lab/microscopy-tree.git
```

2. Run

```sh
npm install
npm run build
npm start
```

# Usage

## Structure

Initially, the full tree is displayed on the left with all nodes visible, and the info panel on the right shows details about the currently selected node (root initially):
- name of the selected node corresponding to image type
- a couple of sample images of the given type
- (a table showing information about the selected sample image when clicked, otherwise hidden)
- applicable methods in a table

## How to interact with the tree

- Clicking on a node will select it, hide the irrelevant parts of the tree and increase icon sizes for better visibilty. The info panel on the right will update its data accordingly.
- Clicking on a node higher in the tree than the currently selected one will open existing paths.
- Clicking on a sample image in the info panel will reveal a table under the images with data of the selected sample image whose border is turned to blue.
- Both tables will have clickable links to data and code sources (in progress).

# Data structure

The data is currently stored in [`json.js`](https://github.com/biomag-lab/microscopy-tree/blob/main/json.js), a simple text file in json format.
Methods are stored in a separate data file [`seg_methods.js`](https://github.com/biomag-lab/microscopy-tree/blob/main/seg_methods.js).

# Deployment

The tree is deployed on [Github pages](https://biomag-lab.github.io/microscopy-tree/).

# Contribution

Methods and datasets are welcome to be added to the tree. For more information, please contact us at <unbias.biomag@gmail.com>.

# Citation

Please cite our [bioRxiv paper]() if you use the tree (coming soon).