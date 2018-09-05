 export default class MergeSort {
	constructor(arr) {
		this.arr = arr;
		this.left = [];
		this.right = [];
	}
  
	merge() {        
		let a = 0;
		while (this.left.length && this.right.length) {
			this.arr[a++] = (right[0] < left[0]) ? this.right.shift() : this.left.shift();
		}
		while (this.left.length) {
			this.arr[a++] = this.left.shift();
		}
		while (this.right.length) {
			this.arr[a++] = this.right.shift();
		}
	}
  
	sort() {
		const len = this.arr.length;
      
		if (len === 1) {
			return;
		}
      
		const mid = Math.floor(len / 2);
		const left = this.arr.slice(0, mid);
		const right = this.arr.slice(mid);
      
		this.sort(left);
        this.sort(right);
        
		this.merge(left, right);
	}
}