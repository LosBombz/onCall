const delay = require('./delay');

const users = [
    {
        name: 'Carlos Escobar',
        id: 'carlosescobar11488388975927',
        phone: '555-555-5555',
        phoneFormated: '+15555555555'
    },
    {
        name: 'Joe the Developer',
        id: 'joethedeveloper1488389103156',
        phone: '555-555-5555',
        phoneFormated: '+15555555555'
    },
    {
        name: 'Sam the Developer',
        id: 'samthedeveloper1488389106923',
        phone: '555-555-5555',
        phoneFormated: '+15555555555'
    }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (user) => {
    return user.name.replace(' ', '').toLowercase() + Date.now();
};

class UserApi {
    static getAllUsers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }

    static saveUser(user) {
        user = Object.assign({}, user); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if(!user.name) {
                    reject('user must have a name');
                }

                if (user.id) {
                    const existingUserIndex = users.findIndex(w => w.id == user.id);
                    users.splice(existingUserIndex, 1, user);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids for new authors in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    user.id = generateId(user);
                    users.push(user);
                }

                resolve(user);
            }, delay);
        });
    }

    static deleteUser(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const indexOfWokroutToDelete = users.findIndex(user => {
                    user.id == userId;
                });
                try {
                    users.splice(indexOfWokroutToDelete, 1);
                } catch(e) {
                    reject(`user with id ${userId} not found`);
                }

                resolve();
            }, delay);
        });
    }
}

module.exports = UserApi;
