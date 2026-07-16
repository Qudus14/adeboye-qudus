import Typography from '@/components/general/typography';
import ImageWrapper from '@/components/data-display/image-wrapper';
 import Card from '@/components/layout/card';
 import { ExperienceDetails as ExperienceDetailsProps } from '@/lib/types';

 const dateFormatOptions: Intl.DateTimeFormatOptions = {
   year: 'numeric',
   month: 'short',
 };

 const ExperienceDetails = ({
   logoAlt,
   position,
  currentlyWorkHere,
  startDate,
  endDate,
  summary,
}: ExperienceDetailsProps) => {
  return (
    <Card className="mx-auto flex flex-col items-center gap-6 p-8 md:w-2/3 md:p-12 lg:w-1/3">
        <h4 className="font-semibold text-xl">
        {logoAlt}
       </h4>
        <div className="flex w-full flex-col gap-1">
        <Typography
          variant="subtitle"
          className="w-full text-center font-semibold text-gray-900"
        >
          {position}
        </Typography>
        <Typography variant="body3" className="w-full text-center">
        {new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
            startDate
          )}{' '}
          -{' '}
          {currentlyWorkHere
            ? 'Present'
            : endDate
            ? new Intl.DateTimeFormat('en-US', dateFormatOptions).format(
                endDate
              )
            : 'NA'}
        </Typography>
      </div>
        <ul className="flex list-disc flex-col gap-2 font-medium md:gap-1">
          {summary?.map((sentence, index) => (
            <Typography component="li" key={index}>
              {sentence}
            </Typography>
          ))}
        </ul>
    </Card>
  );
};

export default ExperienceDetails;
