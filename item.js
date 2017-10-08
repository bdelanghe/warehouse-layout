
const stuff = [];

function Item(sku, binType) {
  this.sku = sku;
  this.binType = binType;
  this.kanbanHeight = binType.height;
}

function BinType(id, height, width, depth) {
  this.id = id;
  this.height = height;
  this.width = width;
  this.depth = depth;
}

function ShelfType(length, width, depth) {
  // this.id = id
  // this.mfgNumber = mfgNumber
  // this.shelfCapLbs = shelfCapLbs
  this.width = width;
  this.depth = depth;
}

stuff.push(Item, BinType, ShelfType);
