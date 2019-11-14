<template>
    <div>
        <label v-for="(car, index) in cars" :key="index">{{ car.name }}</label>
        <select name id>
            <option disabled value>Please select SOMETHING</option>
            <option>Something {{ 200000 | currency }}</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "dropdown",
        props: ["cars"]
    };
</script>

<style lang="scss" scoped>
    .card {
        .singular {
            margin: 0.2rem 0;
        }
        select {
            font-size: 1.3rem;
            background: #f1f1f1;
            display: block;
            width: 100%;
            border: none;
            margin: 0.2rem 0;
            height: 40px;
        }
        label {
            margin-top: 0.8rem;
        }
    }
</style>