export const validateTask = (task: string) => {
  const trimmedTask = task.trim();
  if (trimmedTask.length < 5) {
    return "Minimum allowed task length is 5";
  } else if (trimmedTask.length > 50) {
    return "Maximum allowed task length is 50";
  } else {
    return "";
  }
};
