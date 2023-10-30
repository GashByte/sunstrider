export enum DatabaseValueEnum {
  userSunstriderLaunchStatus = "user_sunstrider_launch_status",
  userSunstriderLaunchTimes = "user_sunstrider_launch_times",
  useSunstriderBeforeUsePrepareInit = "user_sunstrider_before_use_prepare_init",

  persSunstriderNavigationBarStyle = "pers_sunstrider_navigation_bar_style",
  persSunstriderColorMode = "pers_sunstrider_color_mode",
}

export enum DatabaseDefaultValueEnum {
  userSunstriderLaunchStatus = "on-line",
  userSunstriderLaunchTimes = 0,
  useSunstriderBeforeUsePrepareInit = "false",

  persSunstriderNavigationBarStyle = "Top",
  persSunstriderColorMode = "Dark",
}

export enum DatabaseUserEnum {
  userSunstriderLaunchStatus = "user_sunstrider_launch_status",
  userSunstriderLaunchTimes = "user_sunstrider_launch_times",
  useSunstriderBeforeUsePrepareInit = "user_sunstrider_before_use_prepare_init",
}

export enum DatabasePersEnum {
  persSunstriderNavigationBarStyle = "pers_sunstrider_navigation_bar_style",
  persSunstriderColorMode = "pers_sunstrider_color_mode",
}

export enum DatabaseCloudEnum {}

export function getAllValue(): Array<{ id: string; value: any }> {
  return Object.entries(DatabaseValueEnum).map(
    ([k, v], i: number): { id: string; value: any } => {
      let defaultValue: any =
        DatabaseDefaultValueEnum[k as keyof typeof DatabaseDefaultValueEnum];
      defaultValue =
        defaultValue === "true" || defaultValue === "false"
          ? defaultValue !== "false"
          : defaultValue;
      return { id: v, value: defaultValue };
    },
  );
}
