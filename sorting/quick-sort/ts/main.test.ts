import quicksort from './main'

describe('quicksort unit test', () => {
  it('should sort 1 number', () => {
    const arr = [1]
    const sortedArr = quicksort(arr, 0, arr.length)
    expect(sortedArr).toEqual([1])
  })

  it('should sort 2 numbers', () => {
    const arr = [2, 1]
    const sortedArr = quicksort(arr, 0, arr.length)
    expect(sortedArr).toEqual([1, 2])
  })

  it('should sort more than 2 numbers', () => {
    const arr = [5, 2, 3, 4, 1, 6]
    const sortedArr = quicksort(arr, 0, arr.length)
    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6])
  })
})
