class Pagination {
	constructor(items, pageSize) {
		this.items = items || [];
		this.pageSize = Math.floor(pageSize) || 10;
		this.totalPages = this.items.length / this.pageSize <= 1 ? 1 : Math.floor(this.items.length / this.pageSize) + 1;
		this.currentPage = 1;
	}
	prevPage() {
		return this.currentPage > 2 ? this.currentPage -= 1 : 1;
	}
	nextPage() {
		return this.currentPage < this.totalPages ? this.currentPage += 1 : this.totalPages;
	}
	firstPage() {
		return this.currentPage = 1;
	}
	lastPage() {
		return this.currentPage = this.totalPages;
	}
	goToPage(page) {
		let curr = Math.floor(page);
		return curr < 1 ? this.currentPage = 1 : curr > this.totalPages ? this.currentPage = this.totalPages : this.currentPage = curr;
	}
	getVisibleItems() {
		return this.items.splice(this.pageSize * (this.currentPage - 1), this.pageSize * this.currentPage);
	}
}

debugger;
const defaultPagination = new Pagination();                   // Checking correct default values
console.log(defaultPagination.pageSize);                      // 10
console.log(defaultPagination.items.length);                  // 0
console.log(Array.isArray(defaultPagination.items));          // true

// Checking correct handling of float numbers as pageSize
console.log((new Pagination(new Array(0), 8.8).pageSize));    // 8

// Checking correct amount of pages
console.log(new Pagination(new Array( 0), 10).totalPages);    // 1
console.log(new Pagination(new Array( 1), 10).totalPages);    // 1
console.log(new Pagination(new Array(10), 10).totalPages);    // 1
console.log(new Pagination(new Array(11), 10).totalPages);    // 2

// Checking correct currentPage
console.log((new Pagination(new Array( 0), 10)).currentPage); // 1
console.log((new Pagination(new Array( 1), 10)).currentPage); // 1
console.log((new Pagination(new Array(11), 10)).currentPage); // 1

// Checking correct implementation of methods that change page
const p1 = new Pagination(new Array(69), 5);// 5
console.log(p1.nextPage().currentPage);     // 2
console.log(p1.lastPage().currentPage);     // 14
console.log(p1.nextPage().currentPage);     // 14
console.log(p1.prevPage().currentPage);     // 13
console.log(p1.firstPage().currentPage);    // 1
console.log(p1.prevPage().currentPage);     // 1
console.log(p1.goToPage( 99).currentPage);  // 14
console.log(p1.goToPage(  4).currentPage);  // 4
console.log(p1.goToPage(6.5).currentPage);  // 6
console.log(p1.goToPage(-99).currentPage);  // 1

// Checking correct visible items returned in various pages
const ids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const p2 = new Pagination(ids, 5);
console.log(p2.getVisibleItems());            // [0, 1, 2, 3, 4]
console.log(p2.nextPage().getVisibleItems()); // [5, 6, 7, 8, 9]
console.log(p2.nextPage().getVisibleItems()); // [10]
