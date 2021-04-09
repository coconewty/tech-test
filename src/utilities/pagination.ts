interface data {
  next: string | null
  previous: string | null
  count: number
}

export const getPageNumber = (data: data) => {
  if (data.next && !data.previous) {
    return 1
  } else if (data.next && data.previous) {
    return parseInt(data.next.split('&page=')[1], 10) - 1
  } else if (!data.next && data.previous) {
    return parseInt(data.previous.split('&page=')[1], 10) + 1
  }
}

export const getPagesTotal = (data: data) => {
  return Math.floor(data.count / 10) + 1
}
