function lieDetector(data, num) {
    // console.log(data.baseline)
    let sums = {
        eyeDilation: 0,
        bloodPressure: 0,
        skinPerspiration: 0,
        heartRate: 0
    }
    data.baseline.forEach(object => {
        sums.eyeDilation += object.eyeDilation
        sums.bloodPressure += object.bloodPressure
        sums.skinPerspiration += object.skinPerspiration
        sums.heartRate += object.heartRate
    })
    let averages = {
        eyeDilation: sums.eyeDilation / data.baseline.length,
        bloodPressure: sums.bloodPressure / data.baseline.length,
        skinPerspiration: sums.skinPerspiration / data.baseline.length,
        heartRate: sums.heartRate / data.baseline.length
    }
    console.log(data.test)
    let results = []
    data.test.forEach(test => {
        let counter = 0
        if (test.eyeDilation < averages.eyeDilation - averages.eyeDilation * num / 100 || test.eyeDilation > averages.eyeDilation + averages.eyeDilation * num / 100) { counter++ }
        if (test.bloodPressure < averages.bloodPressure - averages.bloodPressure * num / 100 || test.bloodPressure > averages.bloodPressure + averages.bloodPressure * num / 100) { counter++ }
        if (test.skinPerspiration < averages.skinPerspiration - averages.skinPerspiration * num / 100 || test.skinPerspiration > averages.skinPerspiration + averages.skinPerspiration * num / 100) { counter++ }
        if (test.heartRate < averages.heartRate - averages.heartRate * num / 100 || test.heartRate > averages.heartRate + averages.heartRate * num / 100) { counter++ }
        if (counter > 2) { results.push("lie") } else { results.push("true") }
    })
    return results
}


console.log(lieDetector({ baseline: [{ eyeDilation: 1.2, bloodPressure: 140, skinPerspiration: 0.585, heartRate: 104 }, { eyeDilation: 1.19, bloodPressure: 135, skinPerspiration: 0.605, heartRate: 106 }], test: [{ eyeDilation: 1.6, bloodPressure: 160, skinPerspiration: 0.8, heartRate: 124 }, { eyeDilation: 1.16, bloodPressure: 129, skinPerspiration: 0.58, heartRate: 101 }] }, 3), `['lie', 'true']`);
        // testing(lieDetector({ baseline: [{ eyeDilation: 1.4, bloodPressure: 80, skinPerspiration: 0.31, heartRate: 64 }], test: [{ eyeDilation: 1.41, bloodPressure: 83, skinPerspiration: 0.8, heartRate: 64 }, { eyeDilation: 1.16, bloodPressure: 129, skinPerspiration: 0.58, heartRate: 101 }] }, 5), ['true', 'lie']);
        // testing(lieDetector({ baseline: [{ eyeDilation: 1.9, bloodPressure: 86, skinPerspiration: 0.31, heartRate: 64 }], test: [{ eyeDilation: 1.41, bloodPressure: 83, skinPerspiration: 0.8, heartRate: 64 }, { eyeDilation: 1.16, bloodPressure: 129, skinPerspiration: 0.58, heartRate: 101 }] }, 10), ['true', 'lie']);
