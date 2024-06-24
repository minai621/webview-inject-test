import { useEffect } from "react";
import Button1 from "./generate/buttons/Button-1";
import Button10 from "./generate/buttons/Button-10";
import Button100 from "./generate/buttons/Button-100";
import Button11 from "./generate/buttons/Button-11";
import Button12 from "./generate/buttons/Button-12";
import Button13 from "./generate/buttons/Button-13";
import Button14 from "./generate/buttons/Button-14";
import Button15 from "./generate/buttons/Button-15";
import Button16 from "./generate/buttons/Button-16";
import Button17 from "./generate/buttons/Button-17";
import Button18 from "./generate/buttons/Button-18";
import Button19 from "./generate/buttons/Button-19";
import Button2 from "./generate/buttons/Button-2";
import Button20 from "./generate/buttons/Button-20";
import Button21 from "./generate/buttons/Button-21";
import Button22 from "./generate/buttons/Button-22";
import Button23 from "./generate/buttons/Button-23";
import Button24 from "./generate/buttons/Button-24";
import Button25 from "./generate/buttons/Button-25";
import Button26 from "./generate/buttons/Button-26";
import Button27 from "./generate/buttons/Button-27";
import Button28 from "./generate/buttons/Button-28";
import Button29 from "./generate/buttons/Button-29";
import Button3 from "./generate/buttons/Button-3";
import Button30 from "./generate/buttons/Button-30";
import Button31 from "./generate/buttons/Button-31";
import Button32 from "./generate/buttons/Button-32";
import Button33 from "./generate/buttons/Button-33";
import Button34 from "./generate/buttons/Button-34";
import Button35 from "./generate/buttons/Button-35";
import Button36 from "./generate/buttons/Button-36";
import Button37 from "./generate/buttons/Button-37";
import Button38 from "./generate/buttons/Button-38";
import Button39 from "./generate/buttons/Button-39";
import Button4 from "./generate/buttons/Button-4";
import Button40 from "./generate/buttons/Button-40";
import Button41 from "./generate/buttons/Button-41";
import Button42 from "./generate/buttons/Button-42";
import Button43 from "./generate/buttons/Button-43";
import Button44 from "./generate/buttons/Button-44";
import Button45 from "./generate/buttons/Button-45";
import Button46 from "./generate/buttons/Button-46";
import Button47 from "./generate/buttons/Button-47";
import Button48 from "./generate/buttons/Button-48";
import Button49 from "./generate/buttons/Button-49";
import Button5 from "./generate/buttons/Button-5";
import Button50 from "./generate/buttons/Button-50";
import Button51 from "./generate/buttons/Button-51";
import Button52 from "./generate/buttons/Button-52";
import Button53 from "./generate/buttons/Button-53";
import Button54 from "./generate/buttons/Button-54";
import Button55 from "./generate/buttons/Button-55";
import Button56 from "./generate/buttons/Button-56";
import Button57 from "./generate/buttons/Button-57";
import Button58 from "./generate/buttons/Button-58";
import Button59 from "./generate/buttons/Button-59";
import Button6 from "./generate/buttons/Button-6";
import Button60 from "./generate/buttons/Button-60";
import Button61 from "./generate/buttons/Button-61";
import Button62 from "./generate/buttons/Button-62";
import Button63 from "./generate/buttons/Button-63";
import Button64 from "./generate/buttons/Button-64";
import Button65 from "./generate/buttons/Button-65";
import Button66 from "./generate/buttons/Button-66";
import Button67 from "./generate/buttons/Button-67";
import Button68 from "./generate/buttons/Button-68";
import Button69 from "./generate/buttons/Button-69";
import Button7 from "./generate/buttons/Button-7";
import Button70 from "./generate/buttons/Button-70";
import Button71 from "./generate/buttons/Button-71";
import Button72 from "./generate/buttons/Button-72";
import Button73 from "./generate/buttons/Button-73";
import Button74 from "./generate/buttons/Button-74";
import Button75 from "./generate/buttons/Button-75";
import Button76 from "./generate/buttons/Button-76";
import Button77 from "./generate/buttons/Button-77";
import Button78 from "./generate/buttons/Button-78";
import Button79 from "./generate/buttons/Button-79";
import Button8 from "./generate/buttons/Button-8";
import Button80 from "./generate/buttons/Button-80";
import Button81 from "./generate/buttons/Button-81";
import Button82 from "./generate/buttons/Button-82";
import Button83 from "./generate/buttons/Button-83";
import Button84 from "./generate/buttons/Button-84";
import Button85 from "./generate/buttons/Button-85";
import Button86 from "./generate/buttons/Button-86";
import Button87 from "./generate/buttons/Button-87";
import Button88 from "./generate/buttons/Button-88";
import Button89 from "./generate/buttons/Button-89";
import Button9 from "./generate/buttons/Button-9";
import Button90 from "./generate/buttons/Button-90";
import Button91 from "./generate/buttons/Button-91";
import Button92 from "./generate/buttons/Button-92";
import Button93 from "./generate/buttons/Button-93";
import Button94 from "./generate/buttons/Button-94";
import Button95 from "./generate/buttons/Button-95";
import Button96 from "./generate/buttons/Button-96";
import Button97 from "./generate/buttons/Button-97";
import Button98 from "./generate/buttons/Button-98";
import Button99 from "./generate/buttons/Button-99";

declare global {
  interface Window {
    ReactNativeWebView: {
      postMessage: (message: string) => void;
    };
  }
}

export default function App() {
  useEffect(() => {
    // 렌더링 완료 후 React Native에 메시지 전달
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage("LOADED");
    }
  }, []);
  return (
    <div>
      <Button1 label="hello world" />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
      <Button32 />
      <Button33 />
      <Button34 />
      <Button35 />
      <Button36 />
      <Button37 />
      <Button38 />
      <Button39 />
      <Button40 />
      <Button41 />
      <Button42 />
      <Button43 />
      <Button44 />
      <Button45 />
      <Button46 />
      <Button47 />
      <Button48 />
      <Button49 />
      <Button50 />
      <Button51 />
      <Button52 />
      <Button53 />
      <Button54 />
      <Button55 />
      <Button56 />
      <Button57 />
      <Button58 />
      <Button59 />
      <Button60 />
      <Button61 />
      <Button62 />
      <Button63 />
      <Button64 />
      <Button65 />
      <Button66 />
      <Button67 />
      <Button68 />
      <Button69 />
      <Button70 />
      <Button71 />
      <Button72 />
      <Button73 />
      <Button74 />
      <Button75 />
      <Button76 />
      <Button77 />
      <Button78 />
      <Button79 />
      <Button80 />
      <Button81 />
      <Button82 />
      <Button83 />
      <Button84 />
      <Button85 />
      <Button86 />
      <Button87 />
      <Button88 />
      <Button89 />
      <Button90 />
      <Button91 />
      <Button92 />
      <Button93 />
      <Button94 />
      <Button95 />
      <Button96 />
      <Button97 />
      <Button98 />
      <Button99 />
      <Button100 />
    </div>
  );
}
