<template>
  <div class="dashboard-container">
    <editorDashboard />
  </div>
</template>

<script>
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { editorDashboard }
}
</script>
