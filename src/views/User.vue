<template>
    <div class="wrapper">
        <h1>User view</h1>
        {{user}}
    </div>
</template>


<script>
export default {
    computed: {
        user(){
            //return this.$route
            //return this.$root.users
            return this.$root.users.find(user => user.id == this.$route.params.id)
        }
    }
}
</script>


<style>

</style>