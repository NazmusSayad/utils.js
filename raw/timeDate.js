const timeDate = (ifSec = true, current = new Date()) => {
  const config = {
    hour: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    month: "2-digit",
    weekday: "long",
  }
  if (ifSec) config.second = "2-digit"
  const timeDate = current.toLocaleString("en-US", config).split(",")
  return {
    date: current.toLocaleDateString("en-US", {
      dateStyle: "medium",
    }),
    date2: timeDate[1].trim(),
    time: timeDate[2].trim(),
    day: timeDate[0],
  }
}
