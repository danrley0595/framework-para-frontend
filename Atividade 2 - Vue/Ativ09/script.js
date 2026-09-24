const { createApp } = Vue
createApp({
  data() {
    return { 
      inftec: '', 
      tecnologias: ["Vue", "React", "Angular"] 
    }
  }
}).mount("#app")