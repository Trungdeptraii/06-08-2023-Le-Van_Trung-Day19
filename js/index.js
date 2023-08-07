//Bài 1
const arr1 = [19, 12, 3, 4, 5, 6, 7, 8, 10, 18];
let min = arr1[0];
let max = 0;
for (let i = 0; i < arr1.length; i++) {
  if (max < arr1[i]) {
    max = arr1[i];
  }
  if (min > arr1[i]) {
    min = arr1[i];
  }
}
console.log("[Bài 1] Mảng ban đầu: ", arr1);
console.log(
  `
    [Bài 1] Số lớn nhất trong mảng là: " ${max}
    [Bài 1] Số nhỏ nhất trong mảng là: " ${min}
    `
);

//Bài 2
let sum = 0;
let dem = 0;
let arrSoNguyenTo = [];
const arr2 = [1, 4, 6, 8, 3, 5, 5];
const soNguyenTo = function (number) {
  if (typeof number !== "number") {
    return false;
  } else {
    if (number < 2) {
      return false;
    } else if (number == 2) {
      return number;
    } else {
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          return false;
        }
        return number;
      }
    }
  }
};
for (let i = 0; i < arr2.length; i++) {
  if (soNguyenTo(arr2[i])) {
    sum += soNguyenTo(arr2[i]);
    arrSoNguyenTo.push(soNguyenTo(arr2[i]));
    dem++;
  }
}
console.log("[Bài 2] Mảng ban đầu: ", arr2);
if (sum) {
  console.log(
    "[Bài 2] có " +
      dem +
      " số nguyên tố trong mảng là: " +
      arrSoNguyenTo.join(", ")
  );
  console.log(
    "[Bài 2] Trung bình các số nguyên tố là: " +
      sum +
      "/" +
      dem +
      " = " +
      sum / dem
  );
} else {
  console.log("[Bài 2] Không có số nguyên tố trong mảng");
}

// Bài 3
const arr3 = ["a", "b", "c", 1, 2, 1, "b", "c", "1", "2"];
// console.log(new Set(arr));
let newArr = [];
for (const value of arr3) {
  if (newArr.length == 0) {
    newArr.push(value);
  } else {
    for (let i = 0; i < newArr.length; i++) {
      if (!newArr.includes(value)) {
        newArr.push(value);
      }
    }
  }
}
console.log("[Bài 3] mảng ban đầu: ", arr3);
console.log("[Bài 3] mảng sau khi xử lý lặp: ", newArr);

//Bài 4
let arr4 = [5, 3, 9, 8, 10];
let add = 6;
console.log("[Bài 4] mảng ban đầu", arr4);
const result = arr4.sort((a, b) => a - b);
let result2 = [];
if (add < result[0]) {
  result2.push(add, ...result);
} else if (add > result[result.length - 1]) {
  result2 = [...result, add];
} else {
  for (let i = 0; i < result.length; i++) {
    if (result[i] < add) {
      result2.push(result[i]);
    } else {
      if (add == result[i]) {
        result2.push(...result.slice(i));
        break;
      } else {
        result2.push(add);
        result2.push(...result.slice(i));
        break;
      }
    }
  }
}
console.log("[Bài 4] mảng sau khi sắp xếp", result);
console.log("[Bài 4] số thêm vào mảng: ", add);
console.log("[Bài 4] mảng sau khi thêm phần tử: ", result2);
