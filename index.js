const { analyze } = require('@owasp/threat-dragon-cli');
const fs = require('fs');

const inputPath = './threat_model.json';
const outputPath = './report.json';

async function runThreatDragon() {
  try {
    const report = await analyze({ input: inputPath });
    fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
    console.log('Threat model analysis completed successfully.');
  } catch (error) {
    console.error('Error running Threat Dragon analysis:', error);
  }
}

runThreatDragon();
