import { map, Observable, timer } from 'rxjs'
import dayjs, { Dayjs } from 'dayjs'

export function createEventLoop(): Observable<Dayjs> {
  const now = dayjs()
  const next = now.add(1, 'second').millisecond(0)
  return timer(next.toDate(), 1000).pipe(map(() => dayjs().millisecond(0)))
}
