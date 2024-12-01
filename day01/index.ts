import * as fs from "fs";

const left: number[] = [];
const right: number[] = [];

const contents = fs.readFileSync("day01.input", "utf-8");
contents.split("\n").forEach((line) => {
  const cols = line.split("   ");
  left.push(parseInt(cols[0]));
  right.push(parseInt(cols[1]));
});

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let totalDistance = 0;
left.forEach((leftEl, idx) => {
  const rightEl = right[idx];
  totalDistance += Math.abs(leftEl - (rightEl || 0));
});

console.log("Result: ", totalDistance);

// --- Part 2 ---

const apparitionsInRight: Record<number, number> = {};
for (const el of right) {
  if (apparitionsInRight[el]) {
    apparitionsInRight[el]++;
  } else {
    apparitionsInRight[el] = 1;
  }
}

let similarityScore = 0;
for (const el of left) {
  if (apparitionsInRight[el]) {
    similarityScore += el * apparitionsInRight[el];
  }
}

console.log("Similarity score: ", similarityScore);
