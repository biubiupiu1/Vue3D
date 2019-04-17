export default {
    name: "Helper",
    props: {
        camera_index: {type: Number, default: 0}
    },
    data() {
        return {
            active: false,
            dom: null,
            scene: null,
            camera: null,
        }
    },
    created() {
        if (!this.scene) {
            this.setActive(this.$parent);
        }
    },
    methods: {
        setActive(vnode) {
            if (vnode.hasOwnProperty('V$scene')) {
                this.dom = vnode.V$dom;
                this.scene = vnode.V$scene;
                this.camera = vnode.cameras[this.camera_index];
                this.active = true;
            } else {
                console.error(this.$options.name + " should slot on scene node");
            }
        },
    },
    render() {
        return null
    }
}