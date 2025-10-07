export default function QueryProcessor(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (q.includes("name")) {
    return "Rohan";
  }

  if (q.includes("andrew")) {
    return "hanyangz";
  }

  // Handle addition: "What is 57 plus 36?"
  const addMatch = q.match(/what\s+is\s+(-?\d+)\s+plus\s+(-?\d+)/i);
  if (addMatch) {
    const a = parseInt(addMatch[1], 10);
    const b = parseInt(addMatch[2], 10);
    return (a + b).toString();
  }

  // Handle largest number: "Which of the following numbers is the largest: 98, 43, 68?"
  if (q.startsWith("which of the following numbers is the largest")) {
    // Extract all integers
    const numbers = query.match(/-?\d+/g);
    if (numbers && numbers.length) {
      const max = numbers
        .map(n => parseInt(n, 10))
        .reduce((m, v) => (v > m ? v : m), Number.NEGATIVE_INFINITY);
      return max.toString();
    }
  }

  return "";
}
