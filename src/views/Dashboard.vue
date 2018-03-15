<template>
  <div class="HomePage">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">Websites</span>
      </div>
      <div v-for="items in websites" class="text item">
        <a href="#" @click="openLink(items.url)" target="_blank"> {{ items.website }} </a>
      </div>
    </el-card>

  </div>
</template>

<script>
    import axios from 'axios'
    import Cookies from 'js-cookie';
    const config = require('../config');

    export default {
        name: 'HomePage',
        props: {
            options: {
                type: Object
            }
        },
        data() {
            return {
                data: 'data',
                websites: [],
                projectPublicUrl: []
            }
        },
        component: {},
        methods: {
            openLink(url) {
                window.open(url);
            },
            getData() {
                this.treeLoading = true;
                let self = this;
                if (Cookies.get('auth_token') != null && Cookies.get('auth_token') != undefined) {
                    axios.get(config.baseURL + '/flows-dir-listing?website=' + Cookies.get('userDetailId') + '&subscriptionId=' + localStorage.getItem('current_sub_id'))
                        .then(async response => {
                            for (let index = 0; index < response.data.children.length; index++) {
                                this.configData = await axios.get(config.baseURL + '/project-configuration/' + response.data.children[index].name).catch((err) => {
                                    console.log(err);
                                });

                                this.repoName = this.configData.data.id;
                                let websiteName = this.configData.data.websiteName
                                console.log("websiteName", websiteName)
                                if (!(process.env.NODE_ENV == 'development')) {
                                    let url_ = 'http://' + Cookies.get('userDetailId') + '.' + this.repoName + '.' + config.domainkey + '/'
                                    this.websites.push({
                                        website: websiteName,
                                        url: url_
                                    })
                                } else {
                                    let url_ = 'http://localhost/websites/' + Cookies.get('userDetailId') + '/' + this.repoName + '/public/'
                                    this.websites.push({
                                        website: websiteName,
                                        url: url_
                                    });
                                }
                            }
                        })
                        .catch(e => {
                            console.log(e)
                        });
                } else {
                    localStorage.removeItem('current_sub_id');
                    let location = psl.parse(window.location.hostname)
                    location = location.domain === null ? location.input : location.domain

                    Cookies.remove('auth_token', {
                        domain: location
                    });
                    Cookies.remove('email', {
                        domain: location
                    });
                    Cookies.remove('userDetailId', {
                        domain: location
                    });
                    Cookies.remove('subscriptionId', {
                        domain: location
                    });
                    this.$message({
                        message: 'You\'re Logged Out From System. Please login again!',
                        type: 'error',
                        onClose() {
                            window.location = '/login'
                        }
                    });
                }
            },
        },
        mounted() {
            this.getData();
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import url(https://fonts.googleapis.com/css?family=Lato);

    body {
        background-color: rgb(230, 230, 233);
        font-family: 'Lato', sans-serif;
    }



    .item {
        border-bottom: 1px solid fade(black, 10%);
        background-color: white;
        width: 400px;
        height: 50px;
        transition-duration: 0.5s;
        position: relative;

        padding-top: 30px;
        text-align: center;


        &.active {
            box-shadow: 0px 5px 10px fade(black, 20%);
            border-bottom: none;
            color: black;

            transition-delay: 0.5s;
            transform: scale(1.1, 1.1);

            -webkit-transition-delay: 0.5s;
            -webkit-transform: scale(1.1, 1.1);
        }
    }
</style>