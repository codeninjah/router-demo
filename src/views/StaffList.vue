<template>
    <div class="wrapper">
        <h1>Staff List</h1>

        <ul>
            <li v-for="user in users"
            :key="user.id"
            @click="clickedTo(user.id)"
            >
                 {{ user.username }}
            </li>
        </ul>
        <!--
        <div><StaffId /></div>
        -->
    </div>    
</template>



<script>
//import StaffId from '../components/StaffId.vue'

export default {
    //components: StaffId,

    data() { return {
        users: this.$root.users
    }
    },
    methods: {
        clickedTo(id){
            this.$router.push({ path: `/staff/${id}` })
        }
    }
}

</script>



<style scoped>

</style>