<script setup>
import Hero from '../components/Hero.vue';
import ForCardList from '../components/ForCardList.vue';
import JobListing from '../components/JobListing.vue';
</script>
<template>
    <Hero title="Become a Vue Dev" subtitle="Find the Vue job that fits your skills and needs"/>
    <ForCardList />
    <JobListing :limit="3" :showButton="true"/>
</template>