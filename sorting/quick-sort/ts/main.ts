const swapArrElement = (arr: number[], a: number, b: number) => {
  const tmp = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

const getPartition = (arr: number[], start: number, end: number): number => {
  const lastIndex: number = end - 1
  let startIndex: number = start
  let endIndex: number = lastIndex - 1

  let pendingLeft: number | null = null
  let pendingRight: number | null = null

  while (startIndex < endIndex) {
    if (arr[startIndex] > arr[lastIndex]) {
      pendingLeft = startIndex
    }
    if (arr[endIndex] < arr[lastIndex]) {
      pendingRight = endIndex
    }
    if (pendingLeft && pendingRight) {
      swapArrElement(arr, pendingLeft, pendingRight)
      pendingLeft = null
      pendingRight = null
    }
    if (pendingLeft === null) startIndex += 1
    if (pendingRight === null) endIndex -= 1
  }
  if (arr[endIndex] > arr[lastIndex]) swapArrElement(arr, endIndex, lastIndex)

  return endIndex
}

const quicksort = (arr: number[], start: number, end: number): number[] => {
  if (end - start <= 1) return arr

  const partition = getPartition(arr, start, end)
  quicksort(arr, start, partition + 1)
  quicksort(arr, partition + 1, end)

  return arr
}

export default quicksort
