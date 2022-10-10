const path=require("path")

module.exports={
    resolve:{
        fallback: { "http": false },
        fallback: { "stream": require.resolve("stream-browserify") },
        fallback: { "crypto": require.resolve("crypto-browserify") },
        fallback: { "zlib": require.resolve("browserify-zlib") },
    }
}