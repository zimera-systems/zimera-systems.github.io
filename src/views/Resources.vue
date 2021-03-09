<template>
  <div class="about">
    <h1>Resources</h1>
  </div>
  <div v-for="(dt, index) in resources" :key="index">
    {{ dt.Type }}
    <ul>
    <li v-for="(res, id) in dt.List" :key="id">
      {{ res.Title }}: {{ res.URL }}
    </li>
    </ul>
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
