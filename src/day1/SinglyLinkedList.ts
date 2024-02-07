class Node<T> {
    public next: Node<T> | null = null;
    public data: T;
    // public : Node<T> | null = null;
    constructor(data: T) {
        this.data = data;
    }
}

export default class SinglyLinkedList<T> {
    public length: number;

    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    constructor() {
        this.length = 0;
    }
    private delete(prev: Node<T> | null, temp: Node<T>): void {
        if (this.length === 1 || !this.head?.next) {
            this.head = null;
            this.tail = null;
        } else if (!prev && this.head?.next) {
            this.head = this.head?.next;
        } else {
            prev!.next = temp.next;
        }
        this.length -= 1;
    }
    prepend(item: T): void {
        const node = new Node(item);
        if (this.head) {
            node.next = this.head;
        } else {
            this.tail = node;
        }
        this.head = node;
        this.length += 1;
    }
    insertAt(item: T, idx: number): void {
        if (idx === 0) {
            return this.prepend(item);
        }
        if (idx === this.length - 1) {
            return this.append(item);
        }
        let temp = this.head;

        let i = 0;
        while (temp && i < this.length) {
            if (i === idx - 1) {
                const node = new Node(item);
                node.next = temp.next;
                temp.next = node;
                return;
            }

            i += 1;
            temp = temp.next;
        }
    }
    append(item: T): void {
        const node = new Node(item);
        if (this.tail) {
            this.tail.next = node;
        } else {
            this.head = node;
        }
        this.tail = node;
        this.length += 1;
    }
    remove(item: T): T | undefined {
        if (!this.length) return undefined;
        let temp = this.head;
        let prev: Node<T> | null = null;
        while (temp) {
            if (temp.data === item) {
                this.delete(prev!, temp);
                return item;
            }
            prev = temp;
            temp = temp.next;
        }
        return undefined;
    }
    print(): void {
        let node = this.head;
        while (node) {
            console.log(node.data, " ");
            node = node.next;
        }
    }
    get(idx: number): T | undefined {
        if (!this.length) return undefined;
        if (idx === 0) {
            return this.head?.data;
        }
        if (idx === this.length - 1) {
            this.tail?.data;
        }
        let temp = this.head;
        let i = 0;
        while (temp && i < this.length) {
            if (i === idx) {
                return temp.data;
            }
            temp = temp.next;
            i += 1;
        }
        return undefined;
    }
    removeAt(idx: number): T | undefined {
        if (!this.length || idx > this.length) return undefined;
        if (idx === 0) {
            const temp = this.head?.data;
            this.delete(null, this.head!);
            return temp;
        } else {
            let temp = this.head;
            let prev: Node<T> | null = null;
            let i = 0;
            while (temp && i < this.length) {
                if (i === idx) {
                    const d = temp.data;
                    this.delete(prev, temp);
                    return d;
                }
                prev = temp;
                temp = temp.next;
                i += 1;
            }
        }

        return undefined;
    }
}

// const s = new SinglyLinkedList<number>();
// s.append(1);
// s.append(2);
// s.append(3);
// s.append(4);
// s.append(5);
// s.print();
// s.removeAt(0);
// console.log("head removed");
// s.print();
// s.removeAt(3);
// console.log("tail removed");
// s.print();
// s.removeAt(1);
// console.log("1 removed");
// s.print();

// // s.remove(3);
// console.log("removed");
// // s.prepend(3);
// // s.print();
const list = new SinglyLinkedList<number>();
list.append(5);
list.append(7);
list.append(9);
console.log("ff --- ");
list.print();
console.log("ff --- ");
// console.log(list.get(2)); // 9
console.log(list.removeAt(1)); // 7
console.log("  ---");

list.print();
// console.log("  ---");
// console.log(list.remove(9)); // undefined
// console.log("  ---");

// list.print();
// console.log("  ---");
// console.log(list.removeAt(0)); // 5
// console.log(list.removeAt(0)); // 1
