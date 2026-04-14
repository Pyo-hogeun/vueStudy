<script setup lang="ts">
  const productsQuery = useProducts();
  const mode = useMode();
</script>
<template>
  <h2>상품목록 api</h2>
  <div v-if="productsQuery.isLoading.value">..로딩중</div>
  <div v-else-if="productsQuery.isError.value">데이터를 불러오는 중 오류가 발생했습니다.</div>
  <div v-else="">
    <div v-for="product in productsQuery.data.value" :key="product._id" class="item rounded-lg border border-slate-300 my-2 p-4 flex gap-5" :class="mode === 'dark'? 'border-slate-600': ''" >
      <div class="thumbnail w-24 h-24 rounded-sm">
        <img :src="product.imageUrl" alt="">
      </div>
      <div class="flex-auto">
        <div class="name text-slate-600 text-lg">{{ product.name }}</div>
        <div class="price text-slate-600 text-xs">{{ product.price }}</div>
        <div class="store-name text-slate-600 text-xs">{{ product.storeName }} &nbsp;(<span class="store-id text-slate-400 text-xs">{{ product.store }}</span>)</div>
      </div>
      
    </div>
  </div>

</template>
<style scoped lang="scss">
  .item{
    .thumbnail{
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

  }
</style>