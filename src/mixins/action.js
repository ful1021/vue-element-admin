import confirm from '@/mixins/confirm'
import biz from '@/utils/biz'
export default {
  mixins: [confirm],
  props: {
    isAdd: { type: Boolean, default: true }
  },
  data() {
    return {
      biz: biz
    }
  }
}
