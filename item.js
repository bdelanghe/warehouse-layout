var items = [];
var skus = [];

var binTypes = [];
var bins [];

var shelves [];
var shelfType [];
var shelfRules [];

var racks [];
var locations [];


function Item(sku, binType) {
  this.sku = sku;
//  this.skuClass = regx sku;
  this.binType = binType;
  this.kanbanHeight = binType.height;
}

function BinType(id, height, width, depth) {
  this.id = id;
  this.height = height;
  this.width = width;
  this.depth = depth;
}

funtion ShelfType(length, width, depth, type, mfgNumber) {
  // this.id = id;
  // this.mfgNumber = mfgNumber;
  // this.shelfCapLbs = shelfCapLbs;
  this.height = height;
  this.width = width;
  this.depth = depth;
  this.deck = deck;
}

function Location()
