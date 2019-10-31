<template>
    <section class="container" v-if="cars && cars.length && !loading">
        <article class="card" v-for="car of cars" v-bind:key="car.id">
            <h1>{{car.name}}</h1>
            <p>
                This
                <span role="span" v-if="car.convertible">
                    <em>convertible</em>
                </span>
                car
                has
                <strong>{{car.seats}}</strong> seats
            </p>
            <!-- TODO: these could be one <Options /> component with props and conditionals but for speed I am just doing it this way - if I have time I will refactor -->
            <select name="trim" id="trim">
                <option disabled value>Please select Trim</option>
                <option
                    v-for="(trim, index) in car.trim_levels"
                    v-bind:key="index"
                >{{trim.name}} - {{trim.price | currency }}</option>
            </select>

            <select name="wheels" id="wheels" v-if="car.wheels.length > 1">
                <option disabled value>Please select Wheels</option>
                <option
                    v-for="(wheel, index) in car.wheels"
                    v-bind:key="index"
                >{{wheel.name}} - {{wheel.price | currency}}</option>
            </select>
            <span
                class="singular"
                v-else
                v-for="(wheel, index) in car.wheels"
                v-bind:key="index"
            >{{wheel.name}} - {{wheel.price | currency }}</span>

            <select name="extras" id="extras">
                <option disabled value>Please select Extras</option>
                <option
                    v-for="(extra, index) in car.extras"
                    v-bind:key="index"
                >{{extra.name}} - {{extra.price | currency }}</option>
            </select>
        </article>
    </section>
    <div role="note" class="loading" aria-placeholder="Loading" v-else>
        <div role="status" class="loading__ripple">
            <div role="presentation"></div>
            <div role="presentation"></div>
        </div>
        <div
            aria-errormessage="We're sorry, we're not able to retrieve this information at the moment, please try again later!"
            class="error"
            v-if="errored"
        >
            <p>😞 We're sorry, we're not able to retrieve this information at the moment, please try again later!</p>
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
.container {
    margin: 2rem 0 0 0;
}

.error {
    grid-column-start: 1;
    grid-column-end: -1;
    background: #d04228;
    padding: 1rem;
    color: white;
    font-size: 1.5rem;
}

.card {
    display: flex;
    flex-flow: column;
    border: 1px solid #e1e1e18c;
    box-shadow: 2px 2px 8px 0 lightgrey;
    border-radius: 2px;
    padding: 2rem;
    font-size: 1.3rem;
    &:hover {
        transition: all 0.4s ease;
        transform: translate(0, -10px);
        box-shadow: 4px 8px 12px 0 lightgrey;
    }
    img {
        max-width: 100%;
        display: block;
    }
    h1 {
        font-size: 1.5rem;
        margin: 1rem 0 1rem 0;
    }
    select {
        font-size: 1.3rem;
        padding: 10px;
        display: block;
        width: 100%;
        margin: 1rem 0;
    }
    img {
        order: -1;
        align-self: center;
    }
    .singular {
        margin: 1rem 0;
    }
}
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