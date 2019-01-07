<template>
    <div class="drag-drop">
        <h1>拖拽</h1>
        <div class="color-item"
                v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'color' }"
                :key="color.text"
        >{{color.text}}</div>
    </div>
</template>

<script>
import VueDND from 'awe-dnd'
export default {
  name: 'app',
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
            }]
        }
    },
    mounted () {
        this.$dragging.$on('dragged', ({ value }) => {
            /*console.log(value.item)
            console.log(value.list)
            console.log(value.otherData)*/
        })
        this.$dragging.$on('dragend', () => {
            console.log(this.colors)
        })
    }
}
</script>

<style scoped>
.color-item {
    cursor: pointer;
}
</style>