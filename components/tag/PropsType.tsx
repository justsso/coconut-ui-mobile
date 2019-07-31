export interface TagPropsType {
    disable?: boolean,
    selected?: boolean,
    closable?: boolean,
    small?: boolean,
    onChange?: (selected: boolean) => void,
    onClose?: () => void,
    afterClose?: () => void
}
