import { Config } from "../../config/config";

export const getMenus = () => {
    console.log("Get menus");

    return fetch(`${Config.backendBaseUrl}/menus`)
        .then(response => response.json());
}