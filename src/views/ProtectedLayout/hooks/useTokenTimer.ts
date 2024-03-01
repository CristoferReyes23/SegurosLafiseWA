import { AuthApi } from "@/shared/apis/auth.api";
import { AuthSessionService } from "@/shared/services/authSession.service";
import { CustomException } from "@/shared/utils/customException.model";
import { useEffect, useState } from "react";

function useTokenTimer() {
  const [minutesDelay, setMinutesDelay] = useState<null | number>(null);

  //initialize token seconds
  useEffect(() => {
    const data = getMinutesDelay();

    if (data.isCurrentDateGreater || data.minutesDiff <= 3) refreshToken();
    else setMinutesDelay(data.minutesDiff);
  }, []);

  //define interval clock
  useEffect(() => {
    if (minutesDelay) {
      const timer = setInterval(refreshToken, minutesDelay * 60000);
      return () => {
        clearInterval(timer);
      };
    }
  }, [minutesDelay]);

  const refreshToken = async () => {
    console.log("refreshing token");
    try {
      const token = await AuthApi.queryLafiseToken();
      AuthSessionService.saveSessionLaFise(token);

      const addMinutes = Number(import.meta.env.VITE_LAFISE_EXPIRED);
      setMinutesDelay(addMinutes);
    } catch (err) {
      console.log("err", err);
    }
  };
}

export default useTokenTimer;

function getMinutesDelay() {
  const expiration = AuthSessionService.getLifeTimeLafise();
  if (!expiration) throw new CustomException("", "UNAUTHORIZED");

  const expDate = new Date(Number(expiration));
  const currentDate = new Date();

  const diffMilliseconds = Math.abs(expDate.getTime() - currentDate.getTime());
  return {
    minutesDiff: Math.floor(diffMilliseconds / 60000),
    isCurrentDateGreater: currentDate > expDate,
  };
}
