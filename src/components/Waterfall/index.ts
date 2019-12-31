export default function waterFall(items: any, option: any, root: HTMLElement) {
    let {col} = option;
    let length = items.length;
    let i = 0;
    while(i < length) {
        root.append(items[i]);
        if(i < col) {
            const lastChild = root.lastChild;

        } else {
            
        }
        i++;
    }
}
