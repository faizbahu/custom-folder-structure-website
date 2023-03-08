<script setup>
import FolderItem from "@/Components/FolderItem.vue";

let props = defineProps(['list'])
</script>

<template>
    <ul>
        <FolderItem v-for="item in props.list" :key="item.id" :item="item"></FolderItem>
    </ul>
</template>
