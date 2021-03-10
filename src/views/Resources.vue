<template>
  <div v-for="(dt, index) in resources" :key="index">
    <p class="header">{{ dt.Type }}</p>
    <table class="center">
      <tr v-for="(res, id) in dt.List" :key="id">
        <td>{{ res.Title }}</td><td>:</td><td><a :href="res.URL">{{ res.URL }}</a></td>
      </tr>
    </table>
  </div>
</template>
<script>
import jsonResources from '@/assets/resources.json'

export default {
  data() {
    return {
      resources: jsonResources
    }
  }
}
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}
tr {
  text-align: left;
}
td {
  padding: 5px;
  border-bottom: 1px solid #ddd;
}
tr:hover {background-color: #f5f5f5;}
a:active {
  color: #008080;
}
.header {
  margin-left: auto;
  margin-right: auto;
  white-space: nowrap;
  width: 200px;
  border: 1px solid #000000;
  overflow: hidden;
  text-overflow: clip;
  background: #008080;
  color: white;
  text-decoration: bold;
}
</style>
