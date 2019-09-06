<template>
    <div class="drag-drop">
        <h1>dsffd</h1>
        <ly-tab v-model="selected" fixBottom>
            <!--  selected是你自己定义的一个在data中用于存放当前tab-item的索引值的变量 -->
            <ly-tab-item v-for="(item, index) in colors" :key="index">
                {{item.text}}
            </ly-tab-item>
        </ly-tab>
    </div>
</template>

<script>
import LyTab from 'ly-tab'
export default {
    name: 'DragAnDrop',
    components: {
        LyTab
    },
    data () {
        return {
            colors: [{
                id:1,
                text: "Aquamarine"
            }, {
                id:2,
                text: "Hotpink"
            }, {
                id:3,
                text: "Gold"
            }, {
                id:4,
                text: "Crimson"
            }, {
                id:5,
                text: "Blueviolet"
            }, {
                id:6,
                text: "Lightblue"
            }, {
                id:7,
                text: "Cornflowerblue"
            }, {
                id:8,
                text: "Skyblue"
            }, {
                id:9,
                text: "Burlywood"
            }],
            selected: 0
        }
    },
}
</script>

<style scoped>

</style>
