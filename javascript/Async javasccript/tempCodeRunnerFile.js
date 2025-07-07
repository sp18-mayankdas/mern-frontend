const counter = {
    count: 0,
    start: () => {
        setTimeout(() => {
            // this.count++
            console.log(this);
        }, 1000);
    }
}

counter.start();