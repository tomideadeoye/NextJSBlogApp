import { Blog } from '@/types'

export function dateSortDesc(a: string, b: string) {
  if (a > b) {
    return -1
  }
  if (a < b) {
    return 1
  }
  return 0
}

export function sortedBlogPost(allBlogs: Blog[]) {
  return allBlogs.sort((a, b) => dateSortDesc(a.date!, b.date!))
}

type ConvertUndefined<T> = OrNull<{
  [K in keyof T as undefined extends T[K] ? K : never]-?: T[K]
}>
type OrNull<T> = { [K in keyof T]: Exclude<T[K], undefined> | null }
type PickRequired<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K]
}
type ConvertPick<T> = ConvertUndefined<T> & PickRequired<T>

export const pick = <Obj, Keys extends keyof Obj>(
  obj: Obj,
  keys: Keys[],
): ConvertPick<{ [K in Keys]: Obj[K] }> => {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key] ?? null
    return acc
  }, {} as any)
}
