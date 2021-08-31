<template>
    <div class="wrapper">
        <h1>StaffId</h1> 
        <div @click="clickedTo(user.id)"><img src="../assets/edit.png"></div>
        <h1>{{ user.username }}</h1>
        <p> Mobil: {{ user.mobil }}</p>
        <p> Epost: {{ user.email }}</p>
    </div>
</template>


<script>
export default {
    name: "StaffId",
    methods: {
        clickedTo(id){
            return this.$router.push({ path: `/staff/${id}/edit` })
            //console.log("xoxo")
        }
    },
    computed: {
        user(){
            //return this.$route
            //return this.$root.users
            return this.$root.users.find(user => user.id == this.$route.params.id)
        }
    }
}
</script>


<style scoped>

img {
    min-width: 50px;
    max-width: 50px;
    min-height: 50px;
    max-height: 50px;
}

</style>