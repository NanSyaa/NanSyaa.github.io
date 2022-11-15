const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")


let init = 0

const botSay = (data) => {
    return [
        "Perkenalkan nama saya NanBot. Siapa nama kamu?",
        `halo ${data?.nama} Gimana kabar kamu?`,
        `${data?.kabar}, btw usia kamu berapa?`,
        `${data?.usia}? ternyata kamu udah dewasa yah. Owh iya hobi kamu apa?`,
        `${data?.hobi}?, Wow semangat yah hobi kamu keren. yaudah kalo gitu udahan yah?`,

    ]

}

pertanyaan.innerHTML = botSay()[0]

function botStart() {
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value})
    } else if (init === 2) {
        botDelay({ kabar: jawaban.value})
    } else if (init === 3) {
        botDelay({ usia: jawaban.value})
    } else if (init === 4) {
        botDelay({ hobi: jawaban.value})
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }

}

function botDelay(jawabanUser) {
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser) [init]
    }, [1000])
    jawaban.value = ""
}


function finishing() {
    pertanyaan.innerHTML = `Thank you ya udah main ke NanBOt`
    jawaban.value = ""
}

function botEnd() {
    window.location.reload()

}