<template>
    <header>
        <h1>{{ name }}</h1>
        <p>
            This
            <span role="span" v-if="isConvertible">
                <em>convertible</em>
            </span>
            car has
            <strong>{{ seats }}</strong> seats
        </p>
    </header>
</template>

<script>
export default {
    name: 'CarDescription',
    props: {
        name: { type: String },
        isConvertible: { type: Boolean },
        seats: { type: Number }
    }
}
</script>

<style></style>
