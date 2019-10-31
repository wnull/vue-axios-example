<template>
    <!-- Show loading spinner if waiting for API response -->
    <section class="container" v-if="cars && cars.length && !loading">
        <!-- Create some cards on a Grid -->
        <!-- Loop through data response and display in text/select boxes -->
        <!-- Display name from response -->
        <h1></h1>
        <!-- Display description using Seats:number and convertible:boolean (true) -->
        <p></p>
        <!-- IF data is wheels, trim, or extras, loop through nested object and display name:string & price:number -->
        <select name="trim" id="trim"></select>
        <select name="wheels" id="wheels"></select>
        <select name="extras" id="extras"></select>

        <!-- IF errored, display some error message for the user -->
    </section>
    <div role="note" class="loading" aria-placeholder="Loading" v-else>
        <div role="status" class="loading__ripple">
            <div role="presentation"></div>
            <div role="presentation"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cars: [],
            errored: false,
            loading: true
        };
    },
    mounted() {
        const url = `https://demo-api.getmygrades.co.uk/cars`;
        axios
            .get(url)
            .then(response => {
                this.cars = response.data;
            })
            .catch(err => {
                console.log(err);
                this.errored = true;
            })
            .finally(() => (this.loading = false));
    }
};
</script>

<style lang="scss" scoped>
.loading {
    display: grid;
    align-items: center;
    justify-content: center;
    height: 400px;
    overflow: none;
}
.loading__ripple {
    display: block;
    position: relative;
    width: 144px;
    height: 144px;
}
.loading__ripple div {
    position: absolute;
    border: 4px solid red;
    opacity: 1;
    border-radius: 50%;
    animation: ripple 1.3s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loading__ripple div:nth-child(2) {
    animation-delay: -0.5s;
}
@keyframes ripple {
    0% {
        top: 74px;
        left: 74px;
        width: 0;
        height: 0;
        opacity: 1;
    }
    100% {
        top: -1px;
        left: -1px;
        width: 144px;
        height: 144px;
        opacity: 0;
    }
}
</style>