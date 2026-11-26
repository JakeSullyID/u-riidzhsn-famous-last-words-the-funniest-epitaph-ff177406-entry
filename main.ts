import * as fs from 'fs';
import * as path from 'path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const filePath = path.join(outputDir, 'entry.txt');

fs.mkdirSync(outputDir, { recursive: true });

// The humor arises from bureaucratic absurdity, where Death relentlessly itemizes time even during a trivial five-minute delay.
const epitaph = 'I told Death to wait five minutes. He billed me for the overtime.';
// The file must contain exactly the single epitaph line and nothing else, without any trailing newline.
fs.writeFileSync(filePath, epitaph, 'utf8');
