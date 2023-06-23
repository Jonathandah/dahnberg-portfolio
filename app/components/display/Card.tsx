import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type CardProps = {
  imgSrc?: string;
  imgAlt?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card = ({ children, className, imgSrc, imgAlt = 'Card image', ...rest }: CardProps) => {
  return (
    <div className={twMerge('w-58 shadow-xl card bg-base-100', className)} {...rest}>
      {imgSrc && (
        <figure>
          <Image src={imgSrc} alt={imgAlt} width={undefined} height={undefined} />
        </figure>
      )}
      {children}
    </div>
  );
};

type CardTitleProps = {} & React.HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = ({ children, className, ...rest }: CardTitleProps) => {
  return (
    <h2 className={twMerge('card-title', className)} {...rest}>
      {children}
    </h2>
  );
};

type CardBodyProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const CardBody = ({ children, className, ...rest }: CardBodyProps) => {
  return (
    <div className={twMerge('card-body', className)} {...rest}>
      {children}
    </div>
  );
};

type CardActionsProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const CardActions = ({ children, className, ...rest }: CardActionsProps) => {
  return (
    <div className={twMerge(' justify-end card-actions', className)} {...rest}>
      {children}
    </div>
  );
};
