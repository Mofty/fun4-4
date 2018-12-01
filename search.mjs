import IOTA from '@iota/core'
import converter from '@iota/converter'

const seed = '9XDJRCJRIDRJKCSBMALHEYOMJDCNQUSDBEMVHGTDAOLJCZSNCBAGBHYJOLRTDXJZKUVKDOUJNYRQVAPDC'
const adress = 'XDXQFTOXBQCZ9GBMFFWKPPWTCEYQDCWXRJWFHBAUFVFHUYSXIYSOLEIBIILKJXLKOLEOECEGIM9CMYPEX'
const messagehash = 'YWNIBKGXINUCTFPVPTAOEIVJPPADHWYIRCLFFBSUNAS9RKYOLKFJVPOKGUEBSSICQCPQFLTHVZYVVX999'
const iota = IOTA.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
})
const iota2 = IOTA.composeAPI({
    provider: 'https://testnet140.tangle.works:443'
})
const dings = converter.asciiToTrytes('tag')
const bums = converter.asciiToTrytes('message')

// iota.getNodeInfo()
//     .then(info => console.log(info))
//     .catch(err => console.log(err))

iota2.findTransactionObjects

iota2.findTransactions({ bundles: [messagehash] })
    .then(bundles => {
        console.log(bundles)
    })
    .catch(err => {
        console.log(err)
    })

// Array of transfers which defines transfer recipients and value transferred in IOTAs.
const transfers = [{
    address: adress,
    value: 0, // 1Ki
    tag: dings, // optional tag of `0-27` trytes
    message: bums // optional message in trytes
}]

// Depth or how far to go for tip selection entry point
const depth = 3

// Difficulty of Proof-of-Work required to attach transaction to tangle.
// Minimum value on mainnet & spamnet is `14`, `9` on devnet and other testnets.
const minWeightMagnitude = 9

// Prepare a bundle and signs it
// iota2.prepareTransfers(seed, transfers)
//     .then(trytes => {
//         // Persist trytes locally before sending to network.
//         // This allows for reattachments and prevents key reuse if trytes can't
//         // be recovered by querying the network after broadcasting.
//
//         // Does tip selection, attaches to tangle by doing PoW and broadcasts.
//         return iota.sendTrytes(trytes, depth, minWeightMagnitude)
//     })
//     .then(bundle => {
//         console.log(`Published transaction with tail hash: ${bundle[0].hash}`)
//         console.log(`Bundle: ${bundle}`)
//     })
//     .catch(err => {
//         console.log(err)
//     })
//
iota2.findTransactions({ addresses: [adress] })
    .then(hashes => {
        console.log(hashes)
    })
    .catch(err => {
        console.log(err)
    })


// iota.getAccountData(seed, {
//     start: 0,
//     security: 2
// })
//     .then(accountData => {
//         const { addresses, inputs, transactions, balance } = accountData
//         console.log(accountData)
//     })
//     .catch(err => {
//         console.log(err)
//     })

// const index = 0
//
// iota.getNewAddress(seed, { index })
//     .then(address => {
//         console.log("adresse : " + address)
//     })
//     .catch(err => {
//         console.log(err)
//     })