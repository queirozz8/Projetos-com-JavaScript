function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C');
    const fahrenheitExists = degree.toUpperCase().includes('F');

    // Verificação combinada de erros
    if (!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado. Insira °C ou °F.');
    }
    
    if (celsiusExists && fahrenheitExists) {
        throw new Error('Formato inválido. Não pode conter °C e °F ao mesmo tempo.');
    }

    // Fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace('°F', '').replace('F', ''));
    let formula = fahrenheit => ((fahrenheit - 32) * 5/9).toFixed(0);
    let degreeSign = '°C';
    
    // Fluxo alternativo, C -> F
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace('°C', '').replace('C', ''));
        formula = celsius => (celsius * 9/5 + 32).toFixed(0);
        degreeSign = '°F';
    }

    return `Antes era ${degree}. Convertendo, o resultado é ${formula(updatedDegree) + degreeSign}.`;
}

// Lista de entradas para testar
const degrees = ['95°F', '31°C', '45C', '85 F', '85', '85CF'];

// Loop que percorre as entradas, tentando transformar cada uma
degrees.forEach(degree => {
    try {
        console.log(transformDegree(degree));
    } catch (error) {
        console.log(error.message);
    }
});
