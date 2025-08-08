function generateCertifications(certifications) {
    return jsyaml.dump({ certifications: certifications }, {
        lineWidth: 80,
        noRefs: true,
        skipInvalid: true
    }).split('\n');
}