<style scoped>
.green-before div:before {
    width: 7px;
    height: 20px;
    background: #9bd358;
    content: "";
    display: inline-flex;
    margin-right: 10px;
}
</style>

<script>
export default {
    name: 'BasicInfo',
    props: {
        title: {
            type: String,
            required: true
        }
    },
    data() {
        return {}
    }
}
</script>

<template>
    <div class="columns">
        <div class="column">
            <div class="form-content">
                <div class="columns">
                    <div class="column">
                        <h1 class="title is-6 form-header margin-zero">{{title}}</h1>
                        <span class="header-border"></span>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-three-quarters">
                        <h1 class="header-border"></h1>
                        <form id="basic-form" class="form padding-top-25">
                            <slot name="form-fields"></slot>
                        </form>
                    </div>
                    <div class="column">
                          <h6 class="title smaller uppercase"><slot name="textA"></slot></h6>
                          <h6 class="title small green-before"><slot name="textB"></slot></h6>
                          <h6 class="title smaller"><slot name="textC"></slot></h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
