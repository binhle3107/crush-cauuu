const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const catImg = document.getElementById("cat-img");
const thankYouMsg = document.getElementById("thankYouMsg");

const noTexts = [
  "Tớ biết lỗi rồi ạ huhuhu ",
  "Mong cậu tha lỗi choo tớ :((",
  "Thảo ơi tớ xin lỗi vì đã trêu cậu",
  "Tớ saii rồi , tớ đáng trách ạ",
  "Thảo đừng giận nữa nhooo 🥺",
  "Cậu giận là xấu gái lắm đó ...",
  "Đừng giận tớ nữa nhaaaaaaaaaaa",
  "Tớ hứa sẽ không làm như vậy nữa!!!",
];

const catImgs = [
  "https://media.giphy.com/media/SVkhYVCi8fKPKvypi6/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDE2ZG81b3cycjJhNnpmcGt3ZHhuMnhoOWRyNzV2MGtqYnVwajB3biZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/98MaHVwJOmWMz4cz1K/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTF6cnE1c3JyOXRjN3VzbWljMmR4MHd4OXNpZzNkbzhod2x1YzIwaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/td3fwl4I8261W/giphy.gif",
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjluOTJzNGgxcHVpbGl0bHhobDYwa3pudW5lcXdzYnN3c2wwNzAwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VJ5fjfkHj3hydAeWdb/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXNkaWptZmplanpqMnEwbmltdDF0cjduNWR5N3ZoMjF6d3d0b211aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cBncDNrdxga2I/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3dTg0MXNnc3poNnJ3OW41MWQ3cXlwZHBsNXo2Zm1wdWQ3enI0b2ZhYyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/9uwnYUDw342pq/giphy.gif",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExampwZzdzbmU3d2JyOGhieGZlN2Z6N2Jja3ZhNnlvYnNtMnAya3IydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YZOsKxJfmvzG0/giphy.gif",
];

let clickCount = 0;
let yesSize = 1;

noBtn.addEventListener("click", () => {
  clickCount++;

  // Đổi ảnh mèo
  if (clickCount < catImgs.length) {
    catImg.src = catImgs[clickCount];
  }

  // Đổi nội dung nút không đồng ý
  if (clickCount < noTexts.length) {
    noBtn.textContent = noTexts[clickCount];
  }

  // Thu nhỏ nút "không đồng ý"
  const scale = Math.max(1 - clickCount * 0.1, 0.5);
  noBtn.style.transform = `scale(${scale})`;

  // Phóng to nút "đồng ý"
  yesSize += 0.2;
  yesBtn.style.transform = `scale(${yesSize})`;
});

// Khi bấm nút "đồng ý"
yesBtn.addEventListener("click", () => {
  thankYouMsg.style.display = "block";
});