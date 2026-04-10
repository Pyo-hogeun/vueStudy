<script setup lang="ts">
const address = useAddressStore();
</script>
<template>
  <h2>주소저장</h2>

  <div class="address-wrap">
    <div class="item">
      <label for="">이름</label>
      <input
        v-model="address.addressOwner"
        type="text"
        placeholder="이름을 입력하세요"
      >
    </div>
    <div class="item">
      <label for="">주소</label>
      <input
        v-model="address.address"
        type="text"
        placeholder="주소를 입력하세요"
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.address-wrap{
  .item{
    margin: 1em;
    label{
      margin-right: 0.5em;
    }
  }
}
</style>