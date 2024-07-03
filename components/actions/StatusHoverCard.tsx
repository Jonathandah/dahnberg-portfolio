import { Button } from '../ui/button'
import { Eyebrow } from '@/app/blog/_components/Eyebrow'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { formatDate } from '@/lib/utils/formatDate'

let status = {
  text: 'On vacation, will be back July 15th :)',
  updated: '2024-06-16T10:00:00.000Z',
}

export function StatusHoverCard() {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>
        <Button className="text-xs items-start uppercase" variant="text">
          @status
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className=" bg-transparent/[0.03] dark:bg-transparent/15 shadow-none border-none dark:border dark:border-border w-fit normal-case">
        <div className="flex flex-col">
          <p className="text-sm">{status.text}</p>
          <Eyebrow
            className="text-xs font-sans p-0"
            as="time"
            dateTime={'2024-07-02T10:00:00.000Z'}
          >
            Updated {formatDate(new Date(status.updated))}
          </Eyebrow>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
