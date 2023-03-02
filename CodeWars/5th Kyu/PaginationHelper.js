class PaginationHelper {
	constructor(collection, itemsPerPage) {
	// The constructor takes in an array of items and a integer indicating how many
	// items fit within a single page
    this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
	// returns the number of items within the entire collection
    return this.collection.length 
	}
	pageCount() {
	// returns the number of pages
  return (Math.floor(this.collection.length / this.itemsPerPage) + (this.collection.length % this.itemsPerPage === 0 ? 0 : 1))
	}
	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
  if(pageIndex + 1 > this.pageCount() || pageIndex + 1 <= 0) return -1 
  if(this.collection.length / this.itemsPerPage === this.pageCount() || pageIndex + 1 < this.pageCount()) return this.itemsPerPage
  if(pageIndex + 1 === this.pageCount()) return this.collection.length % this.itemsPerPage
	}
	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
  if(itemIndex + 1 > this.collection.length || itemIndex + 1 < 0) return -1; 
  let page = itemIndex / this.itemsPerPage
  if(page < 1 && page >= 0) return 0;
  return Math.floor(page)
	}
}
