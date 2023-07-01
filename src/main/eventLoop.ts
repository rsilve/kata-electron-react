import { interval, map, Observable } from 'rxjs'
import dayjs, { Dayjs } from 'dayjs'

export function createEventLoop(): Observable<Dayjs> {
  return interval(500).pipe(map(() => dayjs()))
}
