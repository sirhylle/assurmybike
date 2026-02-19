const fs = require('fs');
let pdf = require('pdf-parse');

// Debug: check what is exported
console.log('Type of pdf export:', typeof pdf);
// Handle potential ES module default export common in some environments
if (typeof pdf !== 'function' && pdf.default) {
    pdf = pdf.default;
}

const bikePdfPath = '../bike_terms_and_conditions.pdf';

const extractText = async (path, name) => {
    if (!fs.existsSync(path)) {
        console.log(`File not found: ${path}`);
        return;
    }
    const dataBuffer = fs.readFileSync(path);
    try {
        const data = await pdf(dataBuffer);
        console.log(`\n--- EXTRACTED TEXT FROM ${name} (First 2000 chars) ---`);
        console.log(data.text.substring(0, 2000));

        console.log(`\n--- KEYWORDS SEARCH IN ${name} ---`);
        const keywords = ['Tarif', 'Formule', 'Calcul', 'Montant', 'Franchise', 'Age', 'Valeur', 'Documents', 'Pièces', 'Justificatifs', 'Sinistre', 'Déclaration'];
        keywords.forEach(kw => {
            const index = data.text.indexOf(kw);
            if (index !== -1) {
                console.log(`Found '${kw}' at index ${index}: ...${data.text.substring(index - 50, index + 150).replace(/\n/g, ' ')}...`);
            }
        });

    } catch (e) {
        console.error(`Error parsing ${name}:`, e);
    }
};

(async () => {
    await extractText(bikePdfPath, 'BIKE_TERMS');
})();
