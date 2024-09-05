<script lang="ts" setup>
defineProps<{
  bodyPart: string
  icon: string
}>()
</script>

<template>
  <UCard :ui="{ header: { padding: 'px-4 py-3 sm:px-6' }, body: { padding: 'px-4 !py-2' } }">
    <template #header>
      <div class="flex items-center gap-2">
        <Icon :name="icon" class="text-3xl" />
        <h3 class="text-lg font-semibold !mt-0">{{ bodyPart }}</h3>
      </div>
    </template>
    <div class="*:list-disc *:list-outside px-2 container-body">
      <slot />
    </div>
  </UCard>
</template>

<style lang="scss">
.container-body {
  p {
    font-size: 0.8rem;
  }
}
</style>