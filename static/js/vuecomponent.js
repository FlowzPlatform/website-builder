const dfGroup = Vue.component('datafieldgroup', {
  template: `<div class="grid">
         <template v-for="item in items"><div class="item"><div class="item-content"><slot :text="item"></slot></div></div></template>
         </div>`,
  props: ['data_schema', 'data_api', 'draggable'],
  computed: {},
  data: function () {
    return {
      items: []
    }
  },
  created() {
    //alert(11);
    let self = this;
    let api_url;
    let api_listen;
    if (this.data_schema == undefined) {
      var a = this.data_api.lastIndexOf("/");
      api_url = this.data_api.substring(0, a)
      api_listen = this.data_api.substring(a+2, this.data_api.length)
      
    } else {
      let schemaVal = this.data_schema.split(":");
      let connString = $.trim(schemaVal[0]);
      let schemaName = $.trim(schemaVal[1]);
      api_url = "http://api.flowz.com/dbetl"
      api_listen = 'schema/' + connString + '?schemaname=' + schemaName;
    }

    let socketClient = io(api_url);
    let apiClient = feathers()
      .configure(feathers.hooks())
      .configure(feathers.socketio(socketClient));
    let apiDataService = apiClient.service(api_listen);

    apiDataService.on("created", async function (data) {
      self.items.push(data);
    });
    apiDataService.on("updated", async function (data) {
      let arrIndex = self.search(data.email);
      self.items[arrIndex] = data;
    });
      // let socketClient = io(this.data_api);
      // let apiClient = feathers()
      //   .configure(feathers.hooks())
      //   .configure(feathers.socketio(socketClient));
      // //http://172.16.230.86:3080/connectiondata/Rethink?schemaname=flowsinstance
      // ///let apiDataService = apiClient.service('connectiondata/' + connString + '?schemaname=' + schemaName);
      // let apiDataService = apiClient.service('person-data');

      // apiDataService.on("created", async function (data) {
      //   self.items.push(data);
      // });
      // apiDataService.on("updated", async function (data) {
      //   let arrIndex = self.search(data.email);
      //   self.items[arrIndex] = data;
      // });
  },
  mounted() {
    this.getData()
  },
  watch: {
    items: function (val) { }
  },
  updated() {
  if (this.draggable == 'true') {
    var grid = new Muuri('.grid', {
      dragEnabled: true
      });
    }
    if (this.draggable == 'false') {
      var grid = new Muuri('.grid', {
        dragEnabled: false
      });
    }
  },
  methods: {
    getData() {

      let self = this;
      if (this.data_schema != undefined) {
        if (this.data_schema.length > 0) {
          this.data_schema;
          let schemaVal = this.data_schema.split(":");
          let connString = $.trim(schemaVal[0]);
          let schemaName = $.trim(schemaVal[1]);
          //  let apiUrl = 'http://172.16.230.86:3080/connectiondata/' + connString + '?schemaname=' + schemaName;
          let apiUrl = 'http://api.flowz.com/dbetl/schema/' + connString + '?schemaname=' + schemaName;
          $.getJSON(apiUrl, function (data) {
            self.items = data;
          });
        }
        else {
          $.getJSON(this.data_api, function (data) {
            self.items = data;
          });
        }
      }
      else {
        $.getJSON(this.data_api, function (data) {
          self.items = data;
        });
      }
    },
    search(searchEmail) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].email == searchEmail) {
          return i;
        }
      }
    }
  }
});

const dfGroupsearch = Vue.component('datafieldgroupsearch', {
  template: `<div> <style> #imaginary_container{ margin-top:20%; } .stylish-input-group .input-group-addon{ background: white !important; } .stylish-input-group .form-control{ border-right:0; box-shadow:0 0 0; border-color:#ccc; } .stylish-input-group button{ border:0; background:transparent; } </style>
   <div class="container"> <div class="row" style="margin: 5px"> <div class="col-md-3" > <span style="width: 35%; display: inline-block;">Key:</span> <select style="width: 60%; display: inline-block;" @change='changekey()' v-model="selectedkey" class="form-control"> <option v-for="i in keys">{{i}}</option> </select> </div> <div class="col-md-9"> <input type="search" id="search" class="form-control input-sm" v-model="search" placeholder="Search" style="width: 70%; display: inline-block;"> <span style="width: 10%; display: inline-block;" title="Search"> <button style="width:80%; height: 30px" type="submit" @click="filterdata()"> <span class="glyphicon glyphicon-search"></span> </button> </span> <span style="width: 10%; display: inline-block;" title="Clear"> <button style="width:80%;height: 30px" type="submit" @click="clearsearch()"> <span class="glyphicon glyphicon-remove"></span> </button> </span> </div> </div> </div> <div class="grid"> 
   <template v-for="item in items"> <div class="item"> <div class="item-content"> <slot :text="item"></slot> </div> </div> </template> </div> </div>`,
  props: ['data_schema', 'data_api', 'draggable'],
  computed: {},
  data: function () {
    return {
      items: [],
      search:'',
      keys:[],
      selectedkey:'',
      backupitems:[]
    }
  },
  created() {

    let self = this;
    let api_url;
    let api_listen;
    if (this.data_schema == undefined) {
      var a = this.data_api.lastIndexOf("/");
      api_url = this.data_api.substring(0, a)
      api_listen = this.data_api.substring(a+2, this.data_api.length)
      
    } else {
      let schemaVal = this.data_schema.split(":");
      let connString = $.trim(schemaVal[0]);
      let schemaName = $.trim(schemaVal[1]);
      api_url = "http://api.flowz.com/dbetl"
      api_listen = 'schema/' + connString + '?schemaname=' + schemaName;
    }

    let socketClient = io(api_url);
    let apiClient = feathers()
      .configure(feathers.hooks())
      .configure(feathers.socketio(socketClient));
    let apiDataService = apiClient.service(api_listen);

    apiDataService.on("created", async function (data) {
      self.items.push(data);
    });
    apiDataService.on("updated", async function (data) {
      let arrIndex = self.search(data.email);
      self.items[arrIndex] = data;
    });
      // let socketClient = io(this.data_api);
      // let apiClient = feathers()
      //   .configure(feathers.hooks())
      //   .configure(feathers.socketio(socketClient));
      // //http://172.16.230.86:3080/connectiondata/Rethink?schemaname=flowsinstance
      // ///let apiDataService = apiClient.service('connectiondata/' + connString + '?schemaname=' + schemaName);
      // let apiDataService = apiClient.service('person-data');

      // apiDataService.on("created", async function (data) {
      //   self.items.push(data);
      // });
      // apiDataService.on("updated", async function (data) {
      //   let arrIndex = self.search(data.email);
      //   self.items[arrIndex] = data;
      // });
      
    
  },
  mounted() {
    this.getData()
  },
  watch: {
    items: function (val) { }
  },
  updated() {
  if (this.draggable == 'true') {
    var grid = new Muuri('.grid', {
      dragEnabled: true
      });
    }
    if (this.draggable == 'false') {
      var grid = new Muuri('.grid', {
        dragEnabled: false
      });
    }
  },
  methods: {
    async getData() {
      let temp;
      let self = this;
      if (this.data_schema != undefined) {
        if (this.data_schema.length > 0) {
          this.data_schema;
          let schemaVal = this.data_schema.split(":");
          let connString = $.trim(schemaVal[0]);
          let schemaName = $.trim(schemaVal[1]);
          //  let apiUrl = 'http://172.16.230.86:3080/connectiondata/' + connString + '?schemaname=' + schemaName;
          let apiUrl = 'http://api.flowz.com/dbetl/schema/' + connString + '?schemaname=' + schemaName;
          await $.getJSON(apiUrl, function (data) {  
            self.items = data;
            if(self.items[0]!=undefined && self.items[0]!=''){
              self.keys=Object.keys(self.items[0])
            }

          });
        }
        else {
          await $.getJSON(this.data_api, function (data) {
            self.items = data;
            if(self.items[0]!=undefined && self.items[0]!=''){
              self.keys=Object.keys(self.items[0])
            }
          });
        }
      }
      else {
        await $.getJSON(this.data_api, function (data) {
          self.items = data;
          if(self.items[0]!=undefined && self.items[0]!=''){
            self.keys=Object.keys(self.items[0])
          }
        });
      }
      console.log('end getdata')
    },
    async filterdata(){
      await this.getData()
      if(this.selectedkey!=''){
        console.log('selectedkey:',this.selectedkey)
        let temp=this.selectedkey
        this.backupitems=this.items
        if(this.search!=''){
          let newitems=[]
          for (let i = 0; i < this.items.length; i++) {
            if (this.items[i][temp] == this.search) {
              let val=this.items[i]
              newitems.push(val)
            }
          }
          this.items=newitems
          console.log('items:',this.items)
        }else{
          alert('Empty search string!!!!')
        }
       
      }else{
        alert('Empty key!!!!!! Please select a key')
      } 
    },
    clearsearch(){
      this.items=this.backupitems;
    },
    changekey(){
      this.getData()
    }
  }
});

const dfObj = Vue.component('datafieldobject', {
  template: `<div class="dfgroup">
               <div class="dfrepeate"><slot :text="items"></slot></div>
             </div>`,
  props: ['data_api', 'data_schema'],
  computed: {
  },
  data: function () {
    return { items: [] }
  },
  mounted() {
    this.getData()
    console.log(this.items);
  },
  methods: {
    getData() {
      let self = this;
      if (this.data_schema != undefined) {
        if (this.data_schema.length > 0) {
          this.data_schema;
          let schemaVal = this.data_schema.split(":");
          let connString = $.trim(schemaVal[0]);
          let schemaName = $.trim(schemaVal[1]);
          let apiUrl = 'http://api.flowz.com/dbetl/schema/' + connString + '?schemaname=' + schemaName;
          $.getJSON(apiUrl, function (data) {
            console.log(data)
            self.items = data;
          });
        }
        else {
          $.getJSON(this.data_api, function (data) {
            console.log(data)
            self.items = data;
          });
        }
      }
      else {
        $.getJSON(this.data_api, function (data) {
          console.log(data)
          self.items = data;
        });
      }
    }
  }
});

const Table = Vue.component('datafieldtable', {
  template: `
           <Table :columns="columns1" :data="data1"></Table>
           `,
  props: ['column_value', 'data_api'],
  computed: {},
  data: function () {
    return {
      columns1: [],
      data1: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      let self = this;
      console.log("data_api", this.data_api)
      let arr_column = []
      var str = this.column_value;
      var res = str.split(",");
      for (let index = 0; index < res.length; index++) {
        let data = { "title": res[index], "key": res[index] }
        arr_column.push(data)
      }
      self.columns1 = arr_column;
      $.getJSON(this.data_api, function (data) {
        console.log(data)
        self.data1 = data;
      });

    }
  }
});

const dfList = Vue.component('datafieldlist', {
  template: '<div><div v-for="item in items"><slot :text="item"></slot></div></div>',
  props: ['items']
});

const dfText = Vue.component('datafieldtext', {
  template: '<h3>{{text}}</h3>',
  props: ['text']
});

new Vue({
  el: '#app',
  components: {
    dfGroup,
    dfGroupsearch,
    dfList,
    dfText,
    dfObj,
    Table
  }
})

