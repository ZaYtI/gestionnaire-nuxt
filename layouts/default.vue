<script setup>

const router = useRouter()

onMounted(() => {
  let token = localStorage.getItem('sae-token')
  if(token == null || token == undefined){
    router.push('/login')
  }
})

</script>

<template>
  <div class="d-flex flex-column default-layout">
      <NavAppNavbar/>

      <main class="default-layout-content overflow-hidden bg-color-primary pb-5">
          <slot />
      </main>

      <NavAppFooter class="bg-color-primary"/>
  </div>
</template>

<style>
.default-layout{
  display: flex ;
  flex-direction: column;
  min-height: 100vh;
}
.default-layout-content{
    flex-grow:1;
}
</style>
