export default function getUserLogsFromLS() {
  const getObjectFromLs = localStorage.getItem("user_logs");
  const parseObjectFromLs = JSON.parse(getObjectFromLs) || [];
  return parseObjectFromLs;
}
