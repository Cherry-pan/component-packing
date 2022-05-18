<template>
    <div>
        <button class="a-button a-button-danger-border">默认按钮</button>
    </div>
</template>

<script>
export default {
    name: 'Button',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.a-button{
    padding: 0 20px 0 20px;
    border-width: 1px;
    border-color: #dcdfe6;
    border-style: solid;
    border-radius: 4px;
    background-color: white;
    font-size: 14px;
    color: #606266;
    height: 40px;
    line-height: 40px;
}
.a-button-primary{
    border-color: #409eff;
    background-color: #409eff;
    color: white;
}
.a-button-success{
    border-color: #00d100;
    background-color: #00d100;
    color: white;
}
.a-button-warning{
    border-color: #e6a23c;
    background-color: #e6a23c;
    color: white;
}
.a-button-danger{
    border-color: #f56c6c;
    background-color: #f56c6c;
    color: white;
}
.a-button-primary-border{
    border-color: #409eff;
    background-color: white;
    color: #409eff;
}
.a-button-success-border{
    border-color: #00d100;
    background-color: white;
    color: #00d100;
}
.a-button-warning-border{
    border-color: #e6a23c;
    background-color: white;
    color: #e6a23c;
}
.a-button-danger-border{
    border-color: #f56c6c;
    background-color: white;
    color: #f56c6c;
}
</style>