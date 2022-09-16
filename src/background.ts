export {}

console.log('background')

// chrome.runtime.onInstalled.addListener(async () => {
//     for (const url of [
//       'https://github.com/crxjs/chrome-extension-tools',
//     ]) {
//       await chrome.tabs.create({ url })
//     }
  
//     // make sure search tab is on top
//     const google = await chrome.tabs.create({ url: 'https://www.google.com' })
//     await chrome.tabs.update(google.id, { active: true })
//   })