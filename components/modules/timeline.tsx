export const Timeline = ({
  events,
}: {
  events: { id: number; date: "string"; event: "string" }[]
}) => {
  return (
    <div className="pt-6 rounded-md border overflow-hidden">
      <div className="uppercase text-sm rounded-full px-4 py-1 bg-black-2 dark:bg-white-2 h-fit w-fit font-mono mx-auto mb-6">
        Linha do tempo
      </div>
      <div className="flex overflow-x-auto pb-6">
        {events.map((event) => {
          return (
            <div className="group grid flex-1 min-w-[179px] grid-rows-[1fr,auto]">
              <div className="text-center flex gap-2 flex-col items-center justify-end group-first-of-type:pl-6 group-last-of-type:pr-6 px-3 text-black-12 dark:text-white-12 text-sm">
                <p>{event.event}</p>
                <div className="relative flex justify-center w-[4px] h-6 rounded-full bg-blue-9 -bottom-[2px]" />
              </div>
              <div className="group font-mono text-center text-sm font-semibold border-t pt-2 px-3 flex-1 group-first-of-type:pl-6 group-last-of-type:pr-6">
                <p>{event.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
