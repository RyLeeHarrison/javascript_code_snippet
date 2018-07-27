const delay = (time) => (new Promise(res=> setTimeout(() => res(), time)))

async function* getSomething(packId, page) {
    console.log(page)
    for (let i in [...Array(100)]) { i++;
        await delay(1000)
        yield { nextPage: i+1, lastPage: i, total: i }
    }    
}


async function* multiLevelGen(packId, page) {
    for await (let { nextPage, lastPage, total } of getSomething(packId, page)) {
        
        yield {
            list: nextPage,
            a: nextPage*4,
            b: nextPage*2
        }
    }
}

async function begin() {
    let maxx = [];
    
    for await (let { list, a, b } of multiLevelGen(149629, 0)) {
        
        maxx.push([a, b])
        console.log(maxx);
        
        if (list > 20) {
            break;
        }
    }
}

begin()