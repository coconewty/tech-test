export const getPageNumber = (data) => {
  if (data.next && !data.previous) {
    return 1
  } else if (data.next && data.previous) {
    return parseInt(data.next.split('&page=')[1], 10) - 1
  } else if (!data.next && data.previous) {
    return parseInt(data.previous.split('&page=')[1], 10) + 1
  }
}

export const getPagesTotal = (data) => {
  return Math.floor(data.count / 10) + 1
}
