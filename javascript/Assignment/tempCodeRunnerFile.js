const upperObject = {
    abc: function () {
        const object = {
            arrow: () => {
                console.log(this);
            }
        }
        object.arrow()
    }
}

upperObject.abc()