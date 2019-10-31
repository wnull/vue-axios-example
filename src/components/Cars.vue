<template>
  <!-- Show loading spinner if waiting for API response -->
  <section class="container">
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
</template>

<script>
export default {};
// Set state for Cars:array errored:boolean and loading:boolean
</script>

<style lang="scss" scoped>
//Write styles using CSS Grid and Flexbox for the card containers and inner
</style>