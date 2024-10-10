const { createApp } = Vue;

createApp({
    data() {
        return {
            users: [],
        }
    },

    methods: {
        assignStringAttributeFromApi(pathToGet, userObject, userAttributeString) {
            return axios.get('https://flynn.boolean.careers/exercises/api/random/' + pathToGet)
                .then(callReturn => {
                    userObject[userAttributeString] = callReturn.data.response;
                });
        },

        async getFullRandomUser() {
            const user = {};

            await Promise.all([
                this.assignStringAttributeFromApi('name', user, 'name'),
                this.assignStringAttributeFromApi('mail', user, 'email')
            ]);

            this.users.push(user);
        }
    },

    mounted() {
        for (let i = 0; i < 10; i++) {
            this.getFullRandomUser();
        }
    }
}).mount('#app');