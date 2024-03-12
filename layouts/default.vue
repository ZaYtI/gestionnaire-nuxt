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
}
.default-layout-content{
    flex-grow:1;
}
.default-layout{
    min-height: 100vh;
}

</style>
