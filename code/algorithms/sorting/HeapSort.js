class HeapSort {
  constructor(arr) {
    this.arr = arr;
  }

  swap(i, j) {
    const tmp = this.arr[i];
    this.arr[i] = this.arr[j];
    this.arr[j] = tmp;
  }

  sort() {
    this.put_array_in_heap_order();
    let end = this.arr.length - 1;

    while (end > 0) {
      this.swap(0, end);
      this.sift_element_down_heap(0, end);
      end -= 1;
    }

    return this.arr;
  }

  put_array_in_heap_order() {
    let i;
    i = this.arr.length / 2 - 1;
    i = Math.floor(i);

    while (i >= 0) {
      this.sift_element_down_heap(i, this.arr.length);
      i -= 1;
    }
  }

  sift_element_down_heap(i, max) {
    let i_big;
    let c1;
    let c2;

    while (i < max) {
      i_big = i;
      c1 = 2 * i + 1;
      c2 = c1 + 1;

      if (c1 < max && this.arr[c1] > this.arr[i_big]) {
        i_big = c1;
      }
      
      if (c2 < max && this.arr[c2] > this.arr[i_big]) {
        i_big = c2;
      }
      
      if (i_big === i) {
        return;
      }
      
      this.swap(i, i_big);
      i = i_big;
    }
  }
}


const test = ({numberOfValues, min, max}) => {
  const randomArray = (
    [...new Array(numberOfValues)].map(() => 
      Math.floor(Math.random() * (max - min)) + min
    )
  );

  const Heep = new HeapSort(randomArray);

  console.log(`INPUT: [${Heep.arr}]`);
  Heep.sort();
  console.log(`OUTPUT: [${Heep.arr}]`);
}

test({
  numberOfValues: 1000,
  min: 1,
  max: 1000
});

// export default HeapSort;
// module.exports = HeapSort;