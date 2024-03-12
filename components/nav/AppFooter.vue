<template>
  <div class="footer py-4">
    <h1>footer</h1>
  </div>
</template>

<style scoped>
.footer{
  color: black;
}

.card{
  max-width: 500px;
}


.google-maps-frame{
  width: 100%;
}

.footer-wrapper{
  display: flex;
  justify-content: space-around;
}

@media screen and (max-width:752px){
  .footer-wrapper{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
