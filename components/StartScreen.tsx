import { settingsType } from "../types"

type StartScreenProps = {
    setSettings: React.Dispatch<React.SetStateAction<settingsType>>;
    handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}


export default function StartScreen({setSettings, handleClick} : StartScreenProps) {

}