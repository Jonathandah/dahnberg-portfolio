import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export interface ProjectItemProps extends React.HTMLAttributes<HTMLElement> {
  href: string;
  label: string;
}

export const ProjectItem = ({ href, label }: ProjectItemProps) => {
  return (
    <div className="flex justify-between gap-x-6 py-5 group hover:cursor-pointer ">
      <div className="flex min-w-0 gap-x-4">
        <div className="min-w-0 flex-auto flex items-center gap-2">
          <Link href={href} className="text-lg leading-6 text-foreground group-hover:underline font-semibold">
            {label}
          </Link>
          <ArrowRightIcon className="h-4 w-4 text-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:ml-2" />
        </div>
      </div>
    </div>
  );
};
