function returnPromise() {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => { resolve(true) }, 2000)
  })
}

function asyncProcess() {
  returnPromise()
    .then(res => {
      console.log(`asyncProcess result #${res}`)
    })
  console.log('asyncProcess done.')
}

async function syncProcess() {
  const res = await returnPromise()
  console.log(`syncProcess result #${res}`)
  console.log('syncProcess done.')
}

asyncProcess()
syncProcess()
