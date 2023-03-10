<script setup>
import { Head, router } from '@inertiajs/vue3';
import { useFolderStore } from "@/Stores/Folder";
import FolderList from "@/Components/FolderList.vue";
import DefaultLayout from "@/Layouts/DefaultLayout.vue";

let store = useFolderStore()

function submit() {
    router.post(route('home'), {structure: store.structure})
}
</script>

<template>
    <DefaultLayout>
        <Head title="Folders"/>
        <div class="max-w-7xl mx-auto p-6 lg:p-8">
            <div class="mt-16">
                <h1 class="text-center text-5xl font-bold mb-10">
                    Create Your Own Custom Structure </h1>
                <div>
                    <form @submit.prevent="submit" class="max-w-fit mx-auto ">
                        <div>
                            <FolderList :list="store.structure"/>
                        </div>
                        <button class="w-fit mx-auto cursor-pointer mt-10 text-xl bg-red-500 hover:bg-red-700 text-white px-10 py-2 font-semibold rounded-md" type="submit">
                            SAVE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </DefaultLayout>
</template>
