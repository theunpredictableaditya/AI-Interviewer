// Utility function to attach a standard 44-byte WAV header
const createWavHeader = (pcmBuffer, sampleRate = 24000) => {
    const numChannels = 1;      // Mono audio
    const bitsPerSample = 16;   // 16-bit audio
    
    const header = Buffer.alloc(44);
    const byteRate = sampleRate * numChannels * (bitsPerSample / 8);
    const blockAlign = numChannels * (bitsPerSample / 8);

    // RIFF chunk descriptor
    header.write('RIFF', 0);
    header.writeUInt32LE(36 + pcmBuffer.length, 4); // File size minus 8 bytes
    header.write('WAVE', 8);

    // "fmt " sub-chunk
    header.write('fmt ', 12);
    header.writeUInt32LE(16, 16);             // Subchunk1Size (16 for PCM)
    header.writeUInt16LE(1, 20);              // AudioFormat (1 for PCM)
    header.writeUInt16LE(numChannels, 22);    // NumChannels
    header.writeUInt32LE(sampleRate, 24);     // SampleRate
    header.writeUInt32LE(byteRate, 28);       // ByteRate
    header.writeUInt16LE(blockAlign, 32);     // BlockAlign
    header.writeUInt16LE(bitsPerSample, 34);  // BitsPerSample

    // "data" sub-chunk
    header.write('data', 36);
    header.writeUInt32LE(pcmBuffer.length, 40); // Size of the raw PCM data

    // Glue the header and the raw audio together
    return Buffer.concat([header, pcmBuffer]);
};

export {
    createWavHeader
}