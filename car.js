AFRAME.registerComponent("car-model",{
schema:{
    modelRef:{type:"string",default:"../free_porsche_911_carrera_4s/scene.gltf"},
    rotateY: {type:"number",default:1}
},
init:function(){
    this.el.setAttribute("gltf-model",this.data.modelRef);
    const position = {x:0,y:50,z:349.6};
    const rotation = {x:0,y:-100,z:0};
    const scale = {x:0.1,y:0.1,z:0.1}
    this.el.setAttribute("position",position);
    this.el.setAttribute("rotation",rotation);
    this.el.setAttribute("scale",scale);
},
tick:function(){
    this.data.rotateY += 1
    var rot = this.el.getAttribute("rotation")
    rot.y = this.data.rotateY
    this.el.setAttribute("rotation",{x:rot.x,y:rot.y,z:rot.z})
}
})