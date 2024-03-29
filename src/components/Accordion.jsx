import * as RadixAccordion from '@radix-ui/react-accordion'
import { clsx } from 'clsx'

export function Accordion({ children, defaultValue }) {
  return <RadixAccordion.Root defaultValue={defaultValue}>{children}</RadixAccordion.Root>
}

export function AccordionItem({ children, className, ...props }) {
  return (
    <RadixAccordion.Item
      className={clsx(
        'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b',
        className
      )}
      {...props}
    >
      {children}
    </RadixAccordion.Item>
  )
}

export function AccordionTrigger({ children, title, ...props }) {
  return (
    <RadixAccordion.Header className="flex">
      <RadixAccordion.Trigger
        onClick={(e)=> setTimeout(() => e.target.scrollIntoView({ behavior: 'smooth', block: 'center' }), 240)}
        className={clsx(
          'group relative my-1 flex w-full cursor-pointer flex-col rounded-lg border pl-9 text-left',
          'border-slate-300 transition duration-150',
          'data-[state=closed]:hover:border-zinc-600 data-[state=closed]:dark:border-zinc-800 data-[state=closed]:dark:hover:border-zinc-600',
          'data-[state=open]:border-sky-400'
        )}
        {...props}
      >
        <div className="flex flex-col px-4 py-6">
          <span className="block text-sm font-medium text-gray-900 dark:text-slate-300">
            {title}
          </span>
          <span className="flex items-center mt-1 text-sm">{children}</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute top-[25px] left-[14px] h-5 w-5 transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </RadixAccordion.Trigger>
    </RadixAccordion.Header>
  )
}

export function AccordionContent({ children, className, ...props }) {
  return (
    <RadixAccordion.Content
      className={clsx(
        'group data-[state=open]:animate-accordionDown data-[state=closed]:animate-accordionUp',
        className
      )}
      {...props}
    >
      <div className="py-[15px] px-5 group-data-[state=open]:animate-enterFromTop group-data-[state=closed]:animate-exitToTop">{children}</div>
    </RadixAccordion.Content>
  )
}
