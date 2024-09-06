let INDICE = 12
let SOMA = 0
let K = 1

while (K < INDICE) {
    K = K + 1
    SOMA = SOMA + K
}
console.log(SOMA)

const dailyInvoicing = [0, 150, 200, 0, 300, 400, 0, 0, 500, 600];

function calculateInvoicing(invoicing) {
    const daysWithInvoicing = invoicing.filter(value => value > 0);

    const smallestInvoicing = Math.min(...daysWithInvoicing);

    const highestInvoicing = Math.max(...daysWithInvoicing);

    const totalInvoicing = daysWithInvoicing.reduce((acc, value) => acc + value, 0);
    const averageInvoicing = totalInvoicing / daysWithInvoicing.length;

    const daysAboveAverage = daysWithInvoicing.filter(value => value > averageInvoicing).length;

    return {
        smallestInvoicing,
        highestInvoicing,
        daysAboveAverage
    };

}
const result = calculateInvoicing(dailyInvoicing);

console.log("Smallest invoicing:", result.smallestInvoicing);
console.log("Highest invoicing:", result.highestInvoicing);
console.log("Days with invoicing above the annual average:", result.daysAboveAverage);

// SELECT 
//     c.cli_cd_id,
//     c.razao_social,
//     t.numero
// FROM 
//     Cliente c
// JOIN 
//     Telefone t ON c.cli_cd_id = t.cli_cd_id
// WHERE 
//     c.estado = 'SP';