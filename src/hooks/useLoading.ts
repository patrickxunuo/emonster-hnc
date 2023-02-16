import { useRef, useState } from "react";

type onSubmitType = (...params: any[]) => Promise<any>;

type ActionType = {
  isLoading: boolean;
  load: () => void;
  notLoad: () => void;
  handleActionLoad: onSubmitType;
  groupLoad: (fun: onSubmitType) => (...params: any) => Promise<any>;
};

export default (onSubmit: onSubmitType): ActionType => {
  const [isLoading, setIsLoading] = useState(false);
  const callRef = useRef(0);

  const load = () => setIsLoading(true);

  const notLoad = () => setIsLoading(false);

  const handleActionLoad: onSubmitType = async (...params: any[]) => {
    load();
    const result = await onSubmit(...params);
    notLoad();
    return result;
  };

  const groupLoad =
    (fun: onSubmitType) =>
    async (...params: any) => {
      callRef.current += 1;
      load();
      const result = await fun(...params);
      callRef.current -= 1;
      if (callRef.current === 0) {
        notLoad();
      }
      return result;
    };

  return {
    isLoading,
    load,
    notLoad,
    handleActionLoad,
    groupLoad,
  };
};
