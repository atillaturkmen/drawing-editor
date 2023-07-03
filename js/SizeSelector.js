export class SizeSelector {
    constructor(context) {
        this.context = context;
        this.sizes = {
            'small': 5,
            'medium': 10,
            'big': 15,
        }
    }

    setSize(e, size) {
        size = this.sizes[size];
        this.context.lineWidth = size;
        this._selectSize(e);
    }

    _selectSize(e) {
        const sizes = document.getElementsByClassName("size");
        for (const size of sizes) {
            size.classList.remove('selected');
        }

        if (e === undefined)
            return;

        e.target.parentElement.classList.add('selected');
    }
}
