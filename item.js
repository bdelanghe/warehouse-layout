/**
 * List of all items in the warehouse.
 * @type {Item[]}
 */
const items = [];

/**
 * List of all bin types available in the warehouse.
 * @type {BinType[]}
 */
const binTypes = [];

/**
 * List of all shelf types in the warehouse.
 * @type {ShelfType[]}
 */
const shelfTypes = [];

/**
 * Represents an item in the warehouse.
 */
function Item(sku, binTypeId) {
  this.sku = sku;
  this.binTypeId = binTypeId;
}

/**
 * Represents a type of bin in the warehouse.
 */
function BinType(id, height, width, depth) {
  this.id = id;
  this.height = height;
  this.width = width;
  this.depth = depth;
}

/**
 * Represents a type of shelf in the warehouse.
 */
function ShelfType(length, width, depth) {
  this.length = length;
  this.width = width;
  this.depth = depth;
}

/**
 * Finds a bin type by its ID.
 * @param {string} id - The ID of the bin type.
 * @returns {BinType} The matching bin type, or undefined if not found.
 */
function findBinTypeById(id) {
  return binTypes.find(binType => binType.id === id);
}

/**
 * Calculates the optimal shelf configuration based on the provided maximum shelf height.
 * @param {number} maxHeight - The maximum height available for the shelf.
 * @returns {Item[]} The optimal configuration of items.
 */
function calculateOptimalShelfConfiguration(maxHeight) {
  // Sort items based on the height of their bin type in descending order
  items.sort((a, b) => {
    const aBinType = findBinTypeById(a.binTypeId);
    const bBinType = findBinTypeById(b.binTypeId);
    return bBinType.height - aBinType.height;
  });

  // Calculate optimal configuration
  let remainingHeight = maxHeight;
  const configuration = [];
  for (const item of items) {
    const binType = findBinTypeById(item.binTypeId);
    if (remainingHeight >= binType.height) {
      configuration.push(item);
      remainingHeight -= binType.height;
    } else {
      break;
    }
  }
  
  return configuration;
}

// Instantiate your binTypes, Items, and ShelfTypes here
binTypes.push(new BinType('1', 10, 20, 30));
binTypes.push(new BinType('2', 20, 30, 40));
items.push(new Item('SKU1', '1'));
items.push(new Item('SKU2', '2'));
shelfTypes.push(new ShelfType(200, 300, 400));

// Calculate optimal shelf configuration with maxHeight of 50
const optimalConfiguration = calculateOptimalShelfConfiguration(50);
console.log(optimalConfiguration);
