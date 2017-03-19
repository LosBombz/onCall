const generateId = require('../utils/generateId');

module.exports = [
    {
        name: 'Carlos Escobar',
        id: generateId(),
        phone: '555-555-5555',
        phoneFormated: '+15555555555',
        primary: true,
        backup: false,
        order: 1
    },
    {
        name: 'Joe the Developer',
        id: generateId(),
        phone: '555-555-5555',
        phoneFormated: '+15555555555',
        primary: false,
        backup: true,
        order: 2
    },
    {
        name: 'Sam the Developer',
        id: generateId(),
        phone: '555-555-5555',
        phoneFormated: '+15555555555',
        primary: false,
        backup: false,
        order: 3
    }
];
