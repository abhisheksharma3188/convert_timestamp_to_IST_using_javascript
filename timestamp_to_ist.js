// Function to convert a timestamp to Indian Standard Time (IST)
function convertTimestampToIST(timestamp) {
  const date = new Date(timestamp);
  date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
  return date;
}

// Function to format a date object as "hr:min dd-mm-yyyy"
function formatIndianTime(date) {
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  const year = date.getFullYear();

  return `${hours}:${minutes} ${day}-${month}-${year}`;
}

// Example usage
const timestamp = 1632825000000; // Replace this with your timestamp in milliseconds
const istDate = convertTimestampToIST(timestamp);
const indianTime = formatIndianTime(istDate);
console.log(indianTime);
