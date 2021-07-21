function returnPromise(isRejected: boolean) {
  return new Promise((resolve, reject) => {
    isRejected ? reject(new Error("rejected")) : resolve("resolved")
  })
}

export function asyncProcess() {
  returnPromise(false)
    .then(res => {
      console.log(`asyncProcess result #1 ${res}`)
    })

  returnPromise(true)
    .catch((err: Error) => {
      console.log(`asyncProcess result #2 ${err.message}`)
    })

  console.log('asyncProcess done.')
}

export async function syncProcess() {
  const res1 = await returnPromise(false)
  console.log(`syncProcess result #1 ${res1}`)

  const res2 = await returnPromise(true).catch((err: Error) => err.message)
  console.log(`syncProcess result #2 ${res2}`)

  console.log('syncProcess done.')
}
