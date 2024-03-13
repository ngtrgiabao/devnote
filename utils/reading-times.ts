export function readingTime(): void {
  const text: string = document.getElementById("article")!.innerText;
  const wpm: number = 225;
  const words: number = text.trim().split(/\s+/).length;
  const time: number = Math.ceil(words / wpm);
  const timeElement = document.getElementById("time");

  if (timeElement) {
    timeElement.innerText = time.toString();
  } else {
    console.error("Element with ID 'time' not found.");
  }
}