import { CountdownRenderProps, CountdownRendererFn } from "react-countdown";

const ConuntDownTimer: CountdownRendererFn = (props: CountdownRenderProps) => {
  const { days, hours, minutes, seconds, completed } = props;
  return (
    <div className="text-xl font-bold">
      {!completed && (
        <div className="flex gap-6">
          {days > 0 && (
            <div className="flex flex-col gap-2">
              <span>{days}</span>
              <span className="text-sm font-normal">Days</span>
            </div>
          )}
          <div className="flex flex-col gap-2">
            <span>{hours}</span>
            <span className="text-sm font-normal">Hours</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>{minutes}</span>
            <span className="text-sm font-normal">Minutes</span>
          </div>
          <div className="flex flex-col gap-2">
            <span>{seconds}</span>
            <span className="text-sm font-normal">Seconds</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConuntDownTimer;
