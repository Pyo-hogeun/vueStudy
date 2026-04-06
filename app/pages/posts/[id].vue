<script setup>
  const route = useRoute();
  const userId = route.params.id;
</script>

<template>
  유저아이디: {{userId}}
  <br>
  {{ route.params.id }}
</template>
