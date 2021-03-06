import { fetchAll } from "./../ducks/news";
import { changeTitle } from "./../ducks/sources";

export const storeManager = {
    commands: {
        FETCH_ALL_COMMAND: fetchAll,
        CHANGE_TITLE_COMMAND: changeTitle,
    },
    execute(command, argument) {
        return this.commands[command] && this.commands[command](argument);
    }
};
