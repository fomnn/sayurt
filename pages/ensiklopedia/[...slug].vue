<script setup lang="ts">
const route = useRoute()
const { navPageFromPath } = useContentHelpers()
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

const page = navPageFromPath(route.path, navigation.value!)

const links = [{
  label: 'Ensiklopedia',
  to: '/ensiklopedia',
}, {
  label: page!.title,
}]
</script>

<template>
  <main class="px-6 sm:px-24 py-6">
    <UBreadcrumb :links="links" />
    <div class="content">
      <ContentDoc>
        <template #default="{ doc }">
          <article>
            <ContentRenderer :value="doc" />
          </article>
        </template>
      </ContentDoc>
    </div>
  </main>
</template>

<style lang="scss">
.content {
  margin-top: 1.4rem;

  h1 {
    margin-top: 0.6rem;
    font-size: 2.5rem;
    font-weight: 700;
  }

  h2 {
    margin-top: 0.6rem;
    font-size: 1.8rem;
    font-weight: 700;
  }

  h3 {
    margin-top: 0.6rem;
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    text-align: justify;
  }
}
</style>
