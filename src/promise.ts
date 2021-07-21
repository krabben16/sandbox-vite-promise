function returnPromise(isRejected: boolean) {
  return new Promise((resolve, reject) => {
    isRejected ? reject("rejected") : resolve("resolved")
  })
}

export function asyncProcess() {
  try {
    returnPromise(false)
      .then(res => {
        console.log(`asyncProcess result #1 ${res}`)
      })
  } catch(err) {
    console.error(err)
  }

  try {
    returnPromise(true)
      .then(res => {
        console.log(`asyncProcess result #2 ${res}`)
      })
  } catch(err) {
    console.error(err)
  }

  console.log('asyncProcess done.')
}

export async function syncProcess() {
  try {
    const res = await returnPromise(false)
    console.log(`syncProcess result #1 ${res}`)
  } catch(err) {
    console.error(err)
  }

  try {
    const res = await returnPromise(true)
    console.log(`syncProcess result #2 ${res}`)
  } catch(err) {
    console.error(err)
  }

  console.log('syncProcess done.')
}
