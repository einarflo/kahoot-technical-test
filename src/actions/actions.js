export const ITEM_CLICKED = 'ITEM_CLICKED';
export const RESET_GAME = 'RESET_GAME';


export function itemClicked(itemType) {
    return { type: ITEM_CLICKED, itemType };
}

export function resetGame() {
    return { type: RESET_GAME };
}