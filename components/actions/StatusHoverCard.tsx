import { Button } from '../ui/button'
import { Eyebrow } from '@/app/blog/_components/Eyebrow'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { formatDate } from '@/lib/utils/formatDate'

let status = {
  text: 'Renovating my kitchen...',
  datetime: '2024-12-14',
}

export function StatusHoverCard() {
  return (
    <HoverCard openDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          className="text-xs items-start uppercase cursor-default"
          variant="text"
        >
          _Status
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="bg-transparent/[0.03] dark:bg-transparent/15 shadow-none border-none w-fit max-w-80 normal-case">
        <div className="flex flex-col">
          <p className="text-sm font-serif">{status.text}</p>
          <Eyebrow
            className="text-xs font-sans p-0"
            as="time"
            dateTime={status.datetime}
          >
            {formatDate(new Date(status.datetime))}
          </Eyebrow>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
