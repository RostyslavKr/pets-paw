export default function writeUserActionLogsToLS(id, key) {
  const getObjectFromLs = localStorage.getItem("user_logs");
  const parseObjectFromLs = JSON.parse(getObjectFromLs);
  const actionLogs = parseObjectFromLs || [];
  const data = new Date();
  const formatedData = data.getHours() + ":" + data.getMinutes();
  const actionLogsObj = {
    data: formatedData,
    id,
    key,
  };
  actionLogs.splice(0, 0, actionLogsObj);
  localStorage.setItem("user_logs", JSON.stringify(actionLogs));
}
