import { ref } from 'vue'

export default {
  setup() {
    const data = ref([])

    fetch('http://localhost:5054/api/data')
      .then(response => response.json())
      .then(json => data.value = json)
      console.log(data.value());
    return {
      data
    }
  }
}