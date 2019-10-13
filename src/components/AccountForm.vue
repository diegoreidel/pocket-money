<template>
    <b-card-body>
        <b-card>
            <b-form>
                <b-form-group id="type-group" label="Type" label-for="type">
                    <b-form-select id="type" v-model="account.type">
                        <option v-for="type in accountTypes" :key="type.id">
                            {{ type.name }}
                        </option>
                    </b-form-select>
                </b-form-group>
                <b-form-group id="name-group" label="Name" label-for="name">
                    <b-form-input id="name" type="text" required placeholder="Account Name" v-model="account.name"></b-form-input>
                </b-form-group>
                <b-form-group id="balance-group" label="Balance" label-for="balance">
                    <b-form-input id="balance" type="number" required placeholder="Account Balance" v-model="account.balance"></b-form-input>
                </b-form-group>
            </b-form>
        </b-card>
        <b-card-body>
            <b-button @click="save(account)" variant="success">Save</b-button>
            <b-button @click="cancel" variant="danger">Cancel</b-button>
        </b-card-body>
    </b-card-body>

</template>

<script>
import { postAccount, fetchAccountTypes } from '@/services/account.service.js'
import { mapActions, mapState } from 'vuex';

export default {
    name: 'AccountForm',
    data() {
        return {
            accountTypes: []
        }
    },
    props: {
        id: {
            type: String,
            default: () => ""
        }
    },
    methods: {
        ...mapActions(['getAccountAction']),
        async getAccountTypes() {
            this.accountTypes = await fetchAccountTypes();
        },
        async save(account) {
            console.log(`Creating account with type = ${account.type}, name = ${account.name} and amount = ${account.amount}`)
            this.account = await postAccount(account);
        },
        cancel() {
            this.$router.push('/accounts');
        },
        async tryGettingAccountForEdition() {
            if(this.id !== "") {
                await this.getAccountAction(this.id);
            }
        }
    },

    async created() {
        await this.tryGettingAccountForEdition();
        this.getAccountTypes();
    },
    computed: {
        ...mapState(['account'])
    }
}
</script>
