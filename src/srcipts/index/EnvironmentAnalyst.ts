export class EnvironmentAnalyst {
  /**
   * This function is used to check if the environment is development or not
   * @module EnvironmentAnalyst
   * @file EnvironmentAnalyst.ts
   * @returns true if the environment is development, false otherwise
   */
  public static DevelopmentEnvironment = (): boolean => {
    return import.meta.env.DEV;
  };

  /**
   * This function is used to check if the user is accessing the website from the correct origin
   * @param localOrigin window.location.origin: the location form which the user is accessing the website
   * @returns true if the user is accessing the website online, false is the dev or self-hosted version is used
   */
  public static UserAccessStatus = (localOrigin?: string): boolean => {
    localOrigin = localOrigin || window.location.origin;
    return (
      localOrigin === "https://www.sunstrider.today" ||
      localOrigin === "https://www.meseotech.org/sunstrider"
    );
  };
}
