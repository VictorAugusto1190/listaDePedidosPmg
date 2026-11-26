import { AppLauncher } from "@capacitor/app-launcher";
import { Capacitor } from "@capacitor/core";

window.openOrderUrl = async (url) => {
  if (Capacitor.isNativePlatform()) {
    await AppLauncher.openUrl({ url });
    return;
  }

  window.open(url, "_blank", "noopener,noreferrer");
};
