const { createApp } = Vue;

createApp({
    data() {
        return {
            users: [],
        }
    },

    methods: {
        assignStringAttributeFromApi(pathToGet , userObject , userAttributeString) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/' + pathToGet)
            .then(callReturn => {
                userObject[`'${userAttributeString}'`] = callReturn.data.response;
            });
        },
    },

    computed: {
        getUsersArray() {
            return this.users;
        },
    },

    mounted() {
        for(let i = 0 ; i < 10 ; i++) {
            const user = {};
            this.assignStringAttributeFromApi('name' , user , 'fullName');
            this.assignStringAttributeFromApi('mail' , user , 'email');
            this.users.push(user);
        }
        console.log(this.users);
    }
}).mount('#app');