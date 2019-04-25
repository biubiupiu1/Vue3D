/**
 * 总线事件
 */
export default {
    methods: {
        // 触发事件 => $emit
        emit(event, ...args) {
            this.$emit(event, ...args);
        },
        // 监听事件  => $on
        on(event, callback) {
            this.$on(event, callback);
        },
        // 取消监听  => $off
        off(event, callback) {
            this.$off(event, callback);
        },
        // 单次监听事件  => $once
        once(event, callback) {
            this.$once(event, callback);
        },
        /****************************************
         * Event Callback for Debug
         ****************************************/
        // renderer status
        event_status(renderer, status) {
            this.warn("Vue3D Renderer in status: ", {renderer, status})
        },
        // capture object
        event_capture(renderer, target) {
            this.warn("Vue3D 'capture' event: ", {renderer, target})
        },
    },
    created() {
        /** 监听总线事件 **/
        if (this.config.debug) {
            this.$on('status', this.event_status);
            this.$on('capture', this.event_capture);
        }
    },
}
