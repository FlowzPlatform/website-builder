const MyGroup = Vue.component('datafieldgroup', {
            template: `<div>
								<div v-for="item in items"><slot :text="item"></slot></div>
							</div>`,
            props: ['data_schema', 'data_api'],
            computed: {},
            data: function() {
                return {
                    items: []
                }
            },
            created() {
                console.log('created..');
                let self = this;
                ///let dataApiHost = 'http://172.16.230.80:3080/';
                let dataApiHost = 'http://localhost:3030/';

                let socketClient = io(dataApiHost);
                console.log(socketClient);
                let apiClient = feathers()
                    .configure(feathers.hooks())
                    .configure(feathers.socketio(socketClient));
                console.log(apiClient);

                console.log('******************************');
                let schemaVal = this.data_schema.split(":");
                let connString = $.trim(schemaVal[0]);
                let schemaName = $.trim(schemaVal[1]);

                ///let apiDataService = apiClient.service('connectiondata/' + connString + '?schemaname=' + schemaName);
                let apiDataService = apiClient.service('person-data');

                console.log(apiDataService);

                //console.log('lodash', _u);

                apiDataService.on("created", async function(data) {
                    console.log("data socket", data);
                    console.log('create.........')
                    console.log(self.items);
                    self.items.push(data);
                });
                apiDataService.on("updated", async function(data) {
                    console.log('update.........')
                    console.log("data socket update..", data);
                    console.log(self.items);
                    let arrIndex = self.search(data.email);
                    self.items[arrIndex] = data;
                    //self.items.push(data);
                });


            },
            mounted() {
                this.getData()
            },
            methods: {
                getData() {
                    let self = this;
                    //this.data_schema;
                    console.log('data_api', this.data_api);
                    let schemaVal = this.data_schema.split(":");
                    let connString = $.trim(schemaVal[0]);
                    let schemaName = $.trim(schemaVal[1]);
                    let apiUrl = 'http://172.16.230.222:3080/connectiondata/' + connString + '?schemaname=' + schemaName;
                    $.getJSON(this.data_api, function(data) {
                        self.items = data;
                    });
                },
                search(searchEmail) {
                    console.log('inside search..');
                    console.log(this.items);
                    for (let i = 0; i < this.items.length; i++) {
                        if (this.items[i].email == searchEmail) {
                            return i;
                        }
                    }
                }
            }
        });

        const MyList = Vue.component('datafieldlist', {
            template: '<div><div v-for="item in items"><slot :text="item"></slot></div></div>',
            props: ['items']
        });

        const MyText = Vue.component('datafieldtext', {
            template: '<h3>{{text}}</h3>',
            props: ['text']
        });

        new Vue({
            el: '#app',
            components: {
                MyGroup,
                MyList,
                MyText
            }
        })
