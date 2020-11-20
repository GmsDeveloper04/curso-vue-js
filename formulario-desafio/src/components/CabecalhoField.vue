<template>
    <div>
        <p><strong>{{ campo }}: </strong>{{ valor }}</p>
    </div>
</template>


<script>
export default {
    props : {
        campo : {
            type : String,
            required : true
        },
        valor : {
            type: String,
            required : true
        }
    }
}
</script>