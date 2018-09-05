class Disposable {
    constructor() {
        this._disposables = [];
        this._isDisposed = false;
    }

    dispose() {
        this._isDisposed = true;
        this._disposables.forEach(d => d.dispose());
        this._disposables.length = 0;
    }

    register(d) {
        this._disposables.push(d);
    }

    unregister(d) {
        const index = this._disposables.indexOf(d);
        if (index !== -1) {
            this._disposables.splice(index, 1);
        }
    }
}