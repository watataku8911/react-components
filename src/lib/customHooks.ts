import React, { useCallback, SetStateAction, Dispatch } from "react";

export const stringChangeEventCallback = (
  update: Dispatch<SetStateAction<string>>
) => {
  return useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      update(event.target.value);
    },
    [update]
  );
};
