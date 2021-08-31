<template>
    <div class="wrapper">
        <h1> Staff details</h1>
        <p>{{ user }}</p>

        <div class="details">
            <input type="text" :placeholder="user.username" />
            <input type="text" placeholder="Sekreterare">
            <input type="text" :placeholder="user.mobil">
            <input type="text" :placeholder="user.email">
        </div>

        <button>Test!</button>

    </div>
</template>


<script>
export default {
    name: 'Details',

    data() { return {
        user: this.$root.users.find(user => user.id == this.$route.params.id),

        /*
        name: this.user.username,
        mobile: this.user.mobil,
        email: this.user.email
        */
        }
    },

    computed : {
        editData(){
            const id = user.id
        }
    }



}
</script>


<style scoped>

</style>