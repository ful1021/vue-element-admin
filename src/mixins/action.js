import confirm from '@/mixins/confirm'
import comm from '@/mixins/comm'
export default {
  mixins: [confirm],
  props: {
    isAdd: { type: Boolean, default: true }
  },
  data() {
    return {
      comm: comm
    }
  }
}
