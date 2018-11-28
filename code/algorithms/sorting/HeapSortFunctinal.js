const swap = (data, i, j) => {
  const tmp = data[i];
  data[i] = data[j];
  data[j] = tmp;
};

const heap_sort = arr => {
  put_array_in_heap_order(arr);
  let end = arr.length - 1;

  while (end > 0) {
    swap(arr, 0, end);
    sift_element_down_heap(arr, 0, end);
    end -= 1;
  }
};

const put_array_in_heap_order = arr => {
  let i;
  i = arr.length / 2 - 1;
  i = Math.floor(i);

  while (i >= 0) {
    sift_element_down_heap(arr, i, arr.length);
    i -= 1;
  }
};

const sift_element_down_heap = (heap, i, max) => {
  let i_big, c1, c2;

  while (i < max) {
    i_big = i;
    c1 = 2 * i + 1;
    c2 = c1 + 1;

    if (c1 < max && heap[c1] > heap[i_big]) {
      i_big = c1;
    }

    if (c2 < max && heap[c2] > heap[i_big]) {
      i_big = c2;
    }

    if (i_big == i) {
      return;
    }

    swap(heap, i, i_big);
    i = i_big;
  }
};

module.exports = heap_sort;