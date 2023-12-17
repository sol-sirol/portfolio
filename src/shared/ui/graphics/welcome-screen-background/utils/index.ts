export const throttle = (callbackFn: () => void, limit: number) => {
    let wait = false;
    return function () {
      if (!wait) {
        callbackFn();
        wait = true;
        setTimeout(function () {
          wait = false;
        }, limit);
      }
    };
  };