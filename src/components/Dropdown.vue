<template>
    <div>
        <label :for="label">{{ label }}:</label>
        <select :name="label" :id="label" v-if="selection.length > 1">
            <option disabled value="null">{{ selectionText }}</option>
            <option
                v-for="(current, index) in selection"
                v-bind:key="index"
            >{{ current.name }} {{ current.price | currency }}</option>
        </select>
        <span
            class="singular"
            v-for="(current, index) in selection"
            v-bind:key="index"
            v-else
        >{{ current.name }} {{ current.price | currency }}</span>
    </div>
</template>

<script>
    export default {
        name: "dropdown",
        props: ["selection", "label"],
        data() {
            return {
                selectionText: "Please select"
            };
        }
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
            display: block;
            margin-top: 0.8rem;
        }
    }
</style>