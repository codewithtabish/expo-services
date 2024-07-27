export const dateFormattter = (timestamp: any) => {
  // Timestamp in milliseconds

  // Create a new Date object with the timestamp
  const date = new Date(timestamp);

  // Get the readable date and time
  const readableDate = date.getFullYear();
  const month = date.getMonth();
  const dater = date.getDate();
  return `${dater}/${month}/${readableDate}`;
};
