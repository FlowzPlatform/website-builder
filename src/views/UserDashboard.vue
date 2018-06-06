<template>
  <div class="UserDashboard">
    <div class="flat-theme">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lykmapipo/themify-icons@0.1.2/css/themify-icons.css">
        <!-- <section>
            <header>
                <nav class="hh-navigation">
                    <div class="hh-logo-container">
                        <a href="#" class="hh-logo"><img src="../../static/img/Flowz-logo.png"></a>
                        <a href="#" class="hh-toggle-btn pull-right"><i class="fa fa-bars"></i></a>
                    </div>
                    <a href="#" class="hh-logo-hidden">Radar</a>
                    <div class="hh-top-nav-container">
                        <a href="" class="brand-icon"><i class="fa fa-recycle"></i></a>
                        <ul class="pull-right links">
                            <!-- <li class="hh-dropdown"><a class="hh-menu-item" href="#"><i class="fa fa-cog"></i></a>
                                <ul class="hh-dropmenu-item hh-settings">
                                    <li class="hh-dropmenu-header"><a href="#">Settings</a></li>
                                    <li class="hh-notification-item text-left">
                                        <div class="pull-left"><i class="fa fa-link"></i></div>
                                        <div class="pull-right">
                                            <label class="hh-chk-pin pull-right">
                                                <input type="checkbox" /><span></span></label>
                                        </div>
                                        <div class="hh-notification-body">
                                            <div class="lg-text">Change to Flat Theme</div>
                                            <div class="sm-text">Flattify it</div>
                                        </div>
                                    </li>
                                    <li id="hh-color-opts" class="hh-notification-item text-left hide">
                                        <div class="pull-left"><i class="fa fa-puzzle-piece"></i></div>
                                        <div class="pull-right">
                                            <div class="hh-color-swatch">
                                                <label class="colors hh-bg-crimson hh-option-selected">
                                                    <input type="radio" checked name="color" value="crimson" />
                                                </label>
                                                <label class="colors hh-bg-teal">
                                                    <input type="radio" name="color" value="teal" />
                                                </label>
                                                <label class="colors hh-bg-purple">
                                                    <input type="radio" name="color" value="purple">
                                                </label>
                                                <label class="colors hh-bg-orange">
                                                    <input type="radio" name="color" value="orange" />
                                                </label>
                                                <label class="colors hh-bg-twitter">
                                                    <input type="radio" name="color" value="twitter" />
                                                </label>
                                            </div>
                                        </div>
                                        <div class="hh-notification-body">
                                            <div class="lg-text">Choose a color</div>
                                            <div class="sm-text">Make it colorful</div>
                                        </div>
                                    </li>
                                </ul>
                            </li> -->
                            <!-- <span><h5>Welcome<b> {{userEmailId}}</b></h5></span> ->
                            <div class="skewedbox">
                              <span>Welcome: <span>{{userEmailId}}</span></span>
                            </div>
                            <el-tooltip class="item" effect="dark" content="Logout">
                               <a class="skew-logout-btn" @click="doLogout">
                                  <i class="fa fa-sign-out"></i>
                              </a>
                            </el-tooltip> 
                           
                            <!-- <li class="hh-dropdown no-color">
                                <a class="hh-menu-item" href="#">
                                    <img class="hh-list-img sm-img" src="https://api.adorable.io/avatars/285/gaurav@adorable.io.png" alt="me" /></a>
                                <ul class="hh-dropmenu-item sm-menu">
                                    <li class="hh-notification-item">
                                        <i class="fa fa-user"></i>
                                        {{userEmailId}}
                                    </li>
                                    <li class="hh-notification-item">
                                        <a class="hh-notification-content lg-text" href="#" @click="doLogout"><i class="fa fa-power-off"></i>Log out</a>
                                    </li>
                                </ul>
                            </li> ->
                        </ul>
                        <ul class="pull-right links">
                            <!-- <li>
                                <a class="hh-menu-item" href="#"><i class="fa fa-comment-o"><span class="hh-menu-badge hh-bg-success">0</span></i></a>
                            </li> ->
                            <li class="hh-dropdown"><a class="hh-menu-item" href="#"><i class="fa fa-envelope-o"><span class="hh-menu-badge hh-bg-primary">23</span></i></a>
                                <ul class="hh-dropmenu-item">
                                    <li class="hh-dropmenu-header"><a href="#">Your Notifications</a></li>
                                    <li class="hh-notification-item text-left">
                                        <a class="hh-notification-content" href="#">
                                            <div class="pull-left">
                                                <i class="fa fa-html5 fa-2x"></i>
                                            </div>
                                            <div class="hh-notification-body">
                                                <div class="lg-text">Introduction to fetch()</div>
                                                <div class="sm-text">The fetch API</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="hh-notification-item text-left">
                                        <a class="hh-notification-content" href="#">
                                            <div class="pull-left">
                                                <i class="fa fa-bitbucket fa-2x"></i>
                                            </div>
                                            <div class="hh-notification-body">
                                                <div class="lg-text">Check your BitBucket</div>
                                                <div class="sm-text">Last Chance</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="hh-notification-item text-left">
                                        <a class="hh-notification-content" href="#">
                                            <div class="pull-left">
                                                <i class="fa fa-google fa-2x"></i>
                                            </div>
                                            <div class="hh-notification-body">
                                                <div class="lg-text">Google Account</div>
                                                <div class="sm-text">sathishlxg@gmail.com</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="hh-dropmenu-footer"><a href="#">See all notifications</a></li>
                                </ul>
                            </li>
                            <li class="hh-dropdown"><a class="hh-menu-item" href="#"><i class="fa fa-bell-o"><span class="hh-menu-badge">49</span></i></a>
                                <ul class="hh-dropmenu-item">
                                    <li class="hh-dropmenu-header"><a href="#">Your Alerts</a></li>
                                    <li class="hh-notification-item text-left">
                                        <a class="hh-notification-content" href="#">
                                            <div class="pull-left">
                                                <i class="fa fa-html5 fa-2x"></i>
                                            </div>
                                            <div class="hh-notification-body">
                                                <div class="lg-text">Introduction to fetch()</div>
                                                <div class="sm-text">The fetch API</div>
                                                <em class="pull-right sm-text"><i class="fa fa-clock-o"></i>2 sec ago</em>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="hh-notification-item text-left">
                                        <a class="hh-notification-content" href="#">
                                            <div class="pull-left">
                                                <i class="fa fa-bitbucket fa-2x"></i>
                                            </div>
                                            <div class="hh-notification-body">
                                                <div class="lg-text">Check your BitBucket</div>
                                                <div class="sm-text">Last Chance</div>
                                                <em class="pull-right sm-text"><i class="fa fa-clock-o"></i>49 mins ago</em>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="hh-notification-item text-left">
                                        <a class="hh-notification-content" href="#">
                                            <div class="pull-left">
                                                <i class="fa fa-google fa-2x"></i>
                                            </div>
                                            <div class="hh-notification-body">
                                                <div class="lg-text">Google Account</div>
                                                <div class="sm-text">sathishlxg@gmail.com</div>
                                                <em class="pull-right sm-text"><i class="fa fa-clock-o"></i>2 days ago</em>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="hh-dropmenu-footer"><a href="#">See all alerts</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </section> -->
        <aside>
            <nav class="hh-sidebar">
                <div class="profile-bar">
                  <div class="contents">
                    <img src="https://gravatar.com/avatar/cd62d88a83461e0b1daa8f2fa31c4dcb?s=512&d=https://codepen.io/assets/avatars/user-avatar-512x512-6e240cf350d2f1cc07c2bed234c3a3bb5f1b237023c204c782622e80d6b212ba.png" alt="UserAvatar">
                  <p class="profile-name">Good Job, John!</p>
                    <p class="profile-description">You haven't miss any task this week!</p>
                    <div class="buttons">
                      <ul>
                        <li>
                          <a href="javascript:void(0)" @click='goToUserSettings()'><i class="ti-panel"></i><span> Settings</span></a>
                        </li>
                        <li>
                          <a href="javascript:void(0)"><i class="ti-user"></i><span> Profile</span></a>
                        </li>
                        <li>
                          <a href="javascript:void(0)" @click="doLogout"><i class="ti-power-off"></i><span> Logout</span></a>
                        </li>
                      </ul>
                      
                    </div>
                  </div>
                  
                </div>
                <ul class="main-links">
                    <li>
                        <a href="#" class="inbox" @click='goToDashboard()'>
                            <i class="fa fa-dashboard">
                                <span class="icon-bg hh-bg-success"></span>
                            </i>
                            <span class="hh-sidebar-item">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" @click='goToEditor()'>
                            <i class="fa fa-globe">
                                <span class="icon-bg hh-bg-danger"></span>
                            </i>
                            <span class="hh-sidebar-item">Website Builder</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" @click='goToInvite()'>
                            <i class="fa fa-handshake-o">
                                <span class="icon-bg hh-bg-primary"></span>
                            </i>
                            <span class="hh-sidebar-item">Invite</span>
                        </a>
                    </li>

                    <!-- <li>
                        <a href="#" class="snooz">
                            <i class="fa fa-line-chart">
                                <span class="icon-bg hh-bg-primary"></span>
                            </i>
                            <span class="hh-sidebar-item">Transactions</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="done">
                            <i class="fa fa-area-chart">
                                <span class="icon-bg hh-bg-warning"></span>
                            </i>
                            <span class="hh-sidebar-item">Revenue</span>
                        </a>
                    </li> -->
                    <!-- <li>
                        <a href="#" @click='goToUserSettings()'>
                            <i class="fa fa-cog">
                                <span class="icon-bg hh-bg-success"></span>
                            </i>
                            <span class="hh-sidebar-item">Settings</span>
                        </a>
                    </li> -->
                    <li>
                        <a href="#" class="done" @click="bExpand = !bExpand">
                            <i class="fa fa-file-image-o">
                                <span class="icon-bg hh-bg-warning"></span>
                            </i>
                            <span class="hh-sidebar-item">Banner Management</span>
                        </a>
                    </li>
                    <li v-if="bExpand">
                        <a href="#" class="inside-items" @click='goToBanner("bt_add")'>
                            <i class="">
                                <span class="icon-bg"></span>
                            </i>
                            <span class="hh-sidebar-item">Add Banner Type</span>
                        </a>
                    </li>
                    <li  v-if="bExpand"  @click='goToBanner("bt_list")'>
                        <a href="#" class="inside-items">
                            <i class="">
                                <span class="icon-bg"></span>
                            </i>
                            <span class="hh-sidebar-item">List BannerType</span>
                        </a>
                    </li>
                    <li  v-if="bExpand"  @click='goToBanner("b_add")'>
                        <a href="#" class="inside-items">
                            <i class="">
                                <span class="icon-bg"></span>
                            </i>
                            <span class="hh-sidebar-item">Add Banner</span>
                        </a>
                    </li>
                    <li  v-if="bExpand"  @click='goToBanner("b_list")'>
                        <a href="#" class="inside-items">
                            <i class="">
                                <span class="icon-bg"></span>
                            </i>
                            <span class="hh-sidebar-item">List Banners</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" @click='goToColors()'>
                            <i class="fa fa-list">
                                <span class="icon-bg hh-bg-success"></span>
                            </i>
                            <span class="hh-sidebar-item">Product & Imprint Color</span>
                        </a>
                    </li>
                    <!-- <li>
                        <a href="javascript:void(0)" @click="doLogout">
                            <i class="fa fa-sign-out">
                                <span class="icon-bg hh-bg-violet"></span>
                            </i>
                            <span class="hh-sidebar-item">Logout</span>
                        </a>
                    </li> -->
                </ul>
            </nav>
        </aside>

       <section>
            <div class="hh-body-wrapper">
                <!-- <div class="container-fluid"> -->
                    <!-- 
                    <div class="row">
                        <div class="col-md-12"> -->
                            <component :is="componentId" ref="contentComponent" :bdata="rowdata" v-on:updateBanner="EditBanner"></component>
                        <!-- </div>
                        
                    </div>
                     -->


                <!-- </div> -->
            </div>
        </section>

    </div>
  </div>
</template>

<script>

import psl from 'psl';
import Cookies from 'js-cookie';

import Invite from './invite';
import HomePage from './Dashboard';
import UserSettings from './user-settings';
// import DashboardVue from './Dashboard.vue';

// Banners Templates
import AddBannerType from './Banner/add_bannertype';
import AddBanner from './Banner/add_banner';
import BannerTypeList from './Banner/bannertypeList';
import BannerList from './Banner/bannersList';
import ColorSwatch from './ColorSwatch'

export default {
  name: 'UserDashboard',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      data: 'data',
      bExpand: false,
      componentId: '',
      userEmailId: '',
      rowdata: {}
    }
  },
  component: {
  },
  methods: {
    EditBanner (item) {
        // console.log(item)
        this.rowdata = item
        if (item.type === 'bannertype') {
          this.componentId = AddBannerType
        } else if (item.type == 'banner') {
          this.componentId = AddBanner
        } else if (item.type == 'bannertypelist') {
          this.componentId = BannerTypeList
        } else if (item.type == 'bannerlist') {
          this.componentId = BannerList
        } else {
          this.rowdata = {}
        }
    },
    goToBanner (name) {
      this.rowdata = {}
        if (name === 'bt_add') {
            this.componentId = AddBannerType;
        } else if (name === 'b_add') {
            this.componentId = AddBanner;
        } else if (name === 'bt_list') {
            this.componentId = BannerTypeList;
        } else if (name === 'b_list') {
            this.componentId = BannerList;
        } else {}
    },
    goToColors() {
      this.componentId = ColorSwatch;
    },
    goToEditor() {
      // this.$router.push('/editor');
      window.location = '/editor';
    },
    goToInvite(){
        this.componentId = Invite;
    },
    goToDashboard(){
        this.componentId = HomePage;
    },
    goToUserSettings(){
        this.componentId = UserSettings;
    },
    doLogout() {
      this.$confirm('Do you want to logout?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
             localStorage.removeItem('current_sub_id');
            this.$session.remove('username');
            let location = psl.parse(window.location.hostname)
            location = location.domain === null ? location.input : location.domain
            Cookies.remove('auth_token' ,{domain: location});
            Cookies.remove('email' ,{domain: location});
            Cookies.remove('userDetailId' ,{domain: location}); 
            Cookies.remove('subscriptionId' ,{domain: location}); 

            this.isLoggedIn = false;
            // this.$router.push('/login');
            window.location = '/login';
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: 'Delete canceled'
          // });          
        });
    }
  },
  mounted () {

      this.goToDashboard();

    this.userEmailId = Cookies.get('email');

    $(function () {

        $(window).on("scroll", function (e) {
            if ($(window).scrollTop() > 50) {
                $(".flat-theme").addClass("sticky");
            } else {
                $(".flat-theme").removeClass("sticky");
            }
        });

        // $(document).on("click", function (e) {
        //     // e.preventDefault();
        //     var $item = $(".hh-dropmenu-item");
        //     if ($item.hasClass("active")) {
        //         $item.removeClass("active");
        //     }
        // });

        $('.hh-chat-body').slimScroll({
            height: '450px',
            color: "#c6c6c6"
        });

        $('.hh-timeline-body').slimScroll({
            height: '450px',
            color: '#c6c6c6'
        });

        $(".hh-toggle-btn").on('click', function () {
            $(".hh-logo-container").toggleClass("hh-nav-min");
            $(".hh-sidebar").toggleClass("hh-nav-min");
            $(".hh-body-wrapper").toggleClass("hh-nav-min");
        });

        // $("li.hh-dropdown > a.hh-menu-item").on('click', function (e) {
        //     e.preventDefault();
        //     e.stopPropagation();
        //     $(".hh-dropmenu-item").removeClass("active");
        //     $(this).next(".hh-dropmenu-item").toggleClass("active");
        // });

        $(".fa-chevron-down").on("click", function () {
            var $ele = $(this).parents('.panel-heading');
            $ele.siblings('.panel-footer').toggleClass("hh-collapse");
            $ele.siblings('.panel-body').toggleClass("hh-collapse", function () {
            });
        });

        $(".fa-close").on("click", function () {
            var $ele = $(this).parents('.panel');
            $ele.addClass('panel-close');
            setTimeout(function () {
                $ele.parent().remove();
            }, 210);
        });

        $(".fa-rotate-right").on("click", function () {
            var $ele = $(this).parents('.panel-heading').siblings('.panel-body');
            $ele.append('<div class="overlay"><div class="overlay-content"><i class="fa fa-refresh fa-2x fa-spin"></i></div></div>');
            setTimeout(function () {
                $ele.find('.overlay').remove();
            }, 2000);
        });

        $("#hh-chat-send").on("click", function () {
            var value = $("#hh-chat-txt").val();
            var $ele = $(".hh-chat-body");
            var img = "https://lh4.googleusercontent.com/-GXmmnYTuWkg/AAAAAAAAAAI/AAAAAAAAAAA/oK6DEDS7grM/w56-h56/photo.jpg";
            if (value) {
                $("#hh-chat-txt").val('');
                $ele.append(getTempl(img, value, 'left'));
                setTimeout(function () {
                    img = "http://www.gravatar.com/avatar/9099c2946891970eb4739e6455400913.png";
                    $ele.append(getTempl(img, "Cool!!!", 'right'));
                    $ele.slimScroll({
                        scrollTo: $ele[0].scrollHeight
                    });
                }, 2000);

                $ele.slimScroll({
                    scrollTo: $ele[0].scrollHeight
                });

            }

        });



        $(".hh-notification-item").on("click", function (e) {
            e.stopPropagation();
        });

    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}

body {
    background: #f0f0f0;
    line-height: normal;
    font-size: 16px;
    overflow-Y: scroll;
    font-family: 'Roboto Condensed', "Helvetica Neue",Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased !important;
}

a, a:hover, a:visited, a:link, a:active {
    text-decoration: none;
}

    a:active {
        color: #fff !important;
    }

.sm-img {
    height: 30px !important;
    width: 30px !important;
}

::-moz-selection {
    background: #5af;
    color: #fff;
    text-shadow: none;
}

::selection {
    background: #5af;
    color: #fff;
    text-shadow: none;
}

.hh-page-title {
    margin-bottom: 20px;
    text-shadow: 1px 4px 6px #c6c6c6, 0 0 0 #000, 1px 4px 6px #c6c6c6;
}

    .hh-page-title span {
        font-size: 22px;
        font-weight: 500;
        display: block;
    }

.hh-navigation {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    -webkit-box-shadow: 0 0px 9px 4px rgba(0, 0, 0, 0.1), 0 -5px 2px 2px rgba(0, 0, 0, 0.1);
            box-shadow: 0 0px 9px 4px rgba(0, 0, 0, 0.1), 0 -5px 2px 2px rgba(0, 0, 0, 0.1);
    background: white;
    z-index: 1;
    text-align: center;
}

    .hh-navigation ul {
        margin-bottom: 0;
    }

.hh-logo-hidden {
    line-height: 75px;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 22px;
    text-decoration: none;
    color: #222533;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    left: 50%;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.links {
    margin-right: 10px;
    position: relative;
}

    .links > li {
        list-style: none;
        position: relative;
        margin: 10px;
        display: inline-block;
    }

.hh-dropmenu-item.active {
    display: block;
    -webkit-animation: flipInX 1s ease;
}

.lg-text {
    font-size: 13px;
    font-weight: 600;
    color: #333;
}

.sm-text {
    font-size: 11px;
    color: #c6c6c6;
}

.md-text {
    font-size: 12px;
    color: #c6c6c6;
}

.hh-notification-item {
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #EEEEEE;
}

    .hh-notification-item:hover {
        background: #F5F5F5;
    }

    .hh-notification-item .hh-notification-content {
        color: #404040;
    }

.hh-notification-body {
    color: black;
    vertical-align: middle;
    margin-left: 30px;
}

.hh-logo-container {
    width: 230px;
    text-align: center;
    height: 82px;
    float: left;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.hh-top-nav-container {
    float: right;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.hh-toggle-btn,
.hh-logo {
    text-decoration: none;
    position: relative;
    height: 50px;
    line-height: 50px;
    padding: 0 15px;
    font-size: 22px;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: none;
    color: #222533;
    display: inline-block;
}

    .hh-logo img {
        padding-top: 2px;
        vertical-align: middle;
        margin-right: 10px;
        width: 120px;
    }

    .hh-toggle-btn:hover {
        background: #f9f9f9;
    }

.hh-menu-item {
    position: relative;
    padding: 0 5px;
    line-height: 30px;
    height: 30px;
    color: #89949B;
    z-index: 5;
    display: inline-block;
}

.hh-badge {
    height: 20px;
    color: white;
    border-radius: 10px;
    line-height: 20px;
    font-size: 12px;
    background: #E94B3B;
    -webkit-box-shadow: 0.5px 0.2px 1px rgba(0, 0, 0, 0.5);
            box-shadow: 0.5px 0.2px 1px rgba(0, 0, 0, 0.5);
    display: inline-block;
    text-align: center;
}

.hh-menu-badge {
    position: absolute;
    min-width: 20px;
    min-height: 20px;
    line-height: 20px;
    font-weight: bold;
    color: white;
    border-radius: 100%;
    font-size: 12px;
    background: #E94B3B;
    -webkit-box-shadow: 0.5px 0.2px 1px rgba(0, 0, 0, 0.5);
            box-shadow: 0.5px 0.2px 1px rgba(0, 0, 0, 0.5);
    display: inline-block;
    text-align: center;
    top: -10px;
    z-index: 1;
}

.sm-menu {
    min-width: 150px !important;
}

    .sm-menu > li {
        padding: 10px;
        text-align: left;
    }

        .sm-menu > li i {
            margin: 0 10px 0 0;
        }

        .sm-menu > li > a {
            padding: 10px;
        }

.hh-dropmenu-item {
    position: absolute;
    right: -6px;
    top: 45px;
    min-width: 250px;
    background: white;
    border: 1px solid #BDBDBD;
    border-top: 5px solid #515d6e;
    border-radius: 2px;
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    display: none;
}

ul.hh-dropmenu-item {
  list-style: none;
  -webkit-padding-start: 0px;
}

    .hh-dropmenu-item:before {
        content: "";
        position: absolute;
        border-width: 0 10px 10px 10px;
        border-style: solid;
        border-color: #515d6e transparent;
        top: -14px;
        right: 8px;
    }

    .hh-dropmenu-item.hh-settings {
        right: 0 !important;
        left: auto !important;
    }

        .hh-dropmenu-item.hh-settings:before {
            right: 5px !important;
            left: auto !important;
        }

        .hh-dropmenu-item.hh-settings > .hh-notification-item:hover {
            background: #fff !important;
        }

        .hh-dropmenu-item.hh-settings > .hh-notification-item i {
            font-size: 24px;
        }

.hh-dropmenu-footer,
.hh-dropmenu-header {
    display: block !important;
    background: #CFD8DC;
    text-transform: uppercase;
    font-size: 12px;
    margin: 0 !important;
    padding: 6px;
    text-align: center;
}

    .hh-dropmenu-footer > a,
    .hh-dropmenu-header > a {
        color: white;
        line-height: 12px;
        text-decoration: none;
    }

.hh-dropmenu-header {
    border-bottom: 1px solid #CFD8DC;
}

.hh-dropmenu-footer {
    border-top: 1px solid #CFD8DC;
}

.hh-chk-pin {
    margin: 0 !important;
}

    .hh-chk-pin span {
        display: inline-block;
        position: relative;
        height: 20px;
        width: 40px;
        border-radius: 4px;
        background: #3680f4;
        border: 1px solid #f6f6f6;
    }

        .hh-chk-pin span:after {
            content: "";
            position: absolute;
            background: white;
            width: 20px;
            height: 20px;
            border-radius: 4px;
            top: -1px;
            left: 0px;
            -webkit-box-shadow: 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
                    box-shadow: 0 0 0.5px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            -webkit-transition: all .2s ease;
            transition: all .2s ease;
        }

    .hh-chk-pin input {
        display: none;
    }

        .hh-chk-pin input:checked + span {
            background: #23AE89;
        }

            .hh-chk-pin input:checked + span:after {
                left: 19px;
            }

.hide {
    display: none;
}

.hh-option-selected {
    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -2px 4px rgba(0, 0, 0, 0.2);
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 -2px 4px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}

.hh-color-swatch {
    display: table;
    width: 90px;
    height: 25px;
    border-radius: 4px;
}

    .hh-color-swatch .colors {
        width: 25px;
        height: 25px;
        display: table-cell;
        cursor: pointer;
    }

        .hh-color-swatch .colors input[type="radio"] {
            display: none;
        }

        .hh-color-swatch .colors:first-child {
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        .hh-color-swatch .colors:last-child {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }

.hh-sidebar {
    z-index: 9999;
    position: fixed;
    font-weight: 600;
    background: white !important;
    width: 230px;
    height: 100vh;
    /*top: 50px;*/
    left: 0;
    bottom: 0;
    -webkit-box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 2px 4px 8px rgba(0, 0, 0, 0.28);
            box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 2px 4px 8px rgba(0, 0, 0, 0.28);
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.hh-sidebar ul.main-links {
  list-style: none;
  -webkit-padding-start: 0px;
}

    .hh-sidebar ul.main-links li {
        text-align: left;
        height: 45px;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: .025em;
        line-height: 1.5;
    }

        .hh-sidebar ul.main-links li a {
            text-decoration: none;
            display: block;
            color: #515d6e;
        }

            .hh-sidebar ul.main-links li a i {
                position: relative;
                width: 45px;
                line-height: 45px;
                text-align: center;
            }

                .hh-sidebar ul.main-links li a i:before {
                    z-index: 10;
                    position: relative;
                }

            .hh-sidebar ul.main-links li a > span {
                display: inline-block;
                visibility: visible;
                opacity: 1;
                padding-left: 10px;
                -webkit-transition: all .2s ease-in-out .2s;
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
                text-transform: uppercase;
                font-size: 11px;
            }

        .hh-sidebar ul.main-links li:hover {
            background: #f2f2f2;
        }

            .hh-sidebar ul.main-links li:hover .icon-bg {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }

            .hh-sidebar ul.main-links li:hover a > i {
                color: white;
            }

.icon-bg {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    -webkit-transform: translate3d(-43px, 0, 0);
    transform: translate3d(-43px, 0, 0);
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

.hh-txt-primary {
    color: #1C7EBB;
}

.hh-bg-primary {
    background: #1C7EBB;
}

.hh-txt-success {
    color: #23AE89;
}

.hh-bg-success {
    background: #23AE89;
}

.hh-txt-danger {
    color: #E94B3B;
}

.hh-bg-danger {
    background: #E94B3B;
}

.hh-txt-warning {
    color: #F98E33;
}

.hh-bg-warning {
    background: #F98E33;
}

.hh-txt-violet {
    color: #6A55C2;
}

.hh-bg-violet {
    background: #6A55C2;
}

.hh-logo-container.hh-nav-min {
    -webkit-transform: translate3d(-180px, 0, 0);
    transform: translate3d(-180px, 0, 0);
}

    .hh-logo-container.hh-nav-min .hh-logo {
        opacity: 0;
    }

    .hh-logo-container.hh-nav-min + .hh-logo-hidden {
        opacity: 1;
        visibility: visible;
    }

.hh-sidebar.hh-nav-min {
    width: 45px !important;
}

    .hh-sidebar.hh-nav-min .hh-sidebar-item {
        opacity: 0;
        visibility: hidden;
        -webkit-transition: all .1s linear;
        -webkit-transform: translate3d(-200px, 0, 0);
        transform: translate3d(-200px, 0, 0);
    }

    .hh-sidebar.hh-nav-min .icon-bg {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
    }

    .hh-sidebar.hh-nav-min i {
        border: 0px;
        color: white;
        -webkit-transition: all .2s linear;
        transition: all .2s linear;
    }

    .hh-sidebar.hh-nav-min li:hover .icon-bg {
        -webkit-transform: scale(1.2, 1);
        transform: scale(1.2, 1);
    }

.hh-body-wrapper {
    position: absolute;
    left: 230px;
    top: 75px;
    width: auto;
    right: 0;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
}

    .hh-body-wrapper.hh-nav-min {
        left: 50px;
    }

.hh-chart {
    height: 250px;
}

.hh-collapse {
    height: 0px;
    padding: 0;
    opacity: 0;
    overflow: hidden;
}

@-webkit-keyframes rotating {
    from {
        -webkit-transform: rotate(0deg);
    }

    to {
        -webkit-transform: rotate(360deg);
    }
}

@-webkit-keyframes flipInX {
    0% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
        -webkit-transition-timing-function: ease-in;
        opacity: 0;
    }

    40% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
        -webkit-transition-timing-function: ease-in;
    }

    60% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
        opacity: 1;
    }

    80% {
        -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }

    100% {
        -webkit-transform: perspective(400px);
    }
}

@media screen and (max-width: 450px) {
    .hh-info-box i {
        opacity: .3;
    }

    .flat-theme .hh-toggle-btn {
        right: 20px !important;
    }

    .flat-theme .hh-top-nav-container .links:last-child {
        display: none;
    }
}

@media screen and (min-width: 850px) {
    .hh-logo-container {
        height: 75px;
    }

        .hh-logo-container .hh-logo {
            line-height: 75px;
        }

        .hh-logo-container .hh-toggle-btn {
            line-height: 75px;
            height: auto;
        }

    .hh-top-nav-container {
        padding: 10px;
    }

    .hh-sidebar {
        /*top: 75px;*/
    }

    .hh-body-wrapper {
        top: 100px;
    }

    .flat-theme .hh-toggle-btn {
        top: 20px !important;
    }
}

@media screen and (max-width: 850px) {
    .flat-theme .hh-menu-badge {
        top: -3px;
    }

    .flat-theme .hh-toggle-btn {
        right: 20px !important;
    }

    .flat-theme .hh-body-wrapper {
        top: 125px !important;
    }

    .flat-theme .hh-sidebar {
        position: absolute;
    }

    .flat-theme .hh-navigation {
        position: absolute;
    }

        .flat-theme .hh-navigation .links > li:first-child {
            margin-left: 15px !important;
        }

    .flat-theme.sticky .hh-logo-container {
        z-index: 10000;
    }

        .flat-theme.sticky .hh-logo-container .hh-toggle-btn {
            color: #89949B !important;
            position: fixed;
            right: 120px !important;
            background: #f6f6f6;
            top: 11px;
        }

            .flat-theme.sticky .hh-logo-container .hh-toggle-btn:hover {
                background: #3680f4;
                color: #fff !important;
            }

    .flat-theme.sticky .hh-navigation {
        height: 50px;
    }

    .flat-theme.sticky .hh-sidebar {
        top: 50px;
        position: fixed;
    }

    .flat-theme.sticky .hh-top-nav-container {
        background: #FFF important;
        -webkit-box-shadow: 0 0px 9px 4px rgba(0, 0, 0, 0.1), 0 -5px 2px 2px rgba(0, 0, 0, 0.1);
                box-shadow: 0 0px 9px 4px rgba(0, 0, 0, 0.1), 0 -5px 2px 2px rgba(0, 0, 0, 0.1);
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1000;
    }

    .flat-theme.sticky .links {
        margin-left: 50px;
    }

    .flat-theme.sticky .brand-icon {
        margin-left: 0px;
    }

        .flat-theme.sticky .brand-icon:hover {
            color: #fff;
        }

    .hh-navigation {
        height: 100px;
    }

    .hh-logo-container.hh-nav-min {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        background: transparent;
    }

        .hh-logo-container.hh-nav-min .hh-logo {
            opacity: 1;
        }

        .hh-logo-container.hh-nav-min + .hh-logo-hidden {
            display: none;
        }

    .hh-logo-container {
        display: block;
        float: none;
        width: 100%;
        border-bottom: 1px solid #F2F2F2;
    }

    .hh-top-nav-container {
        display: block;
        float: none;
        height: 50px;
        background: white;
    }

        .hh-top-nav-container .links > li > a {
            font-size: 12px;
        }

    .hh-menu-badge {
        font-size: 10px;
        min-width: 15px;
        min-height: 15px;
        line-height: 15px;
    }

    .hh-sidebar {
        /*top: 100px;*/
    }

        .hh-sidebar.hh-nav-min {
            -webkit-transform: translate3d(-200px, 0, 0);
            transform: translate3d(-200px, 0, 0);
        }

    .hh-body-wrapper {
        top: 125px;
        position: relative;
    }

        .hh-body-wrapper.hh-nav-min {
            left: 0px;
        }
}

.panel {
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    border-radius: 0 !important;
    position: relative;
    -webkit-transition: all .2s linear;
}

.panel-close {
    -webkit-transform: scale3d(0, 0, 0);
    transform: scale3d(0, 0, 0);
}

.panel-body {
    position: relative;
    -webkit-transition: all .2s linear;
}

.panel-heading {
    background: white !important;
    border-radius: 0;
    padding: 15px;
    border-bottom: 0 !important;
}

    .panel-heading .panel-title {
        text-transform: uppercase;
        font-weight: 600;
        font-size: 13px;
        color: #515d6e;
    }

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1001;
    background: rgba(255, 255, 255, 0.75);
    text-align: center;
}

    .overlay:before {
        content: "";
        height: 100%;
        vertical-align: middle;
        width: 1px;
        display: inline-block;
        margin-left: -5px;
    }

    .overlay .overlay-content {
        display: inline-block;
        vertical-align: middle;
    }

    .overlay i {
        display: block;
        position: inline-block;
        vertical-align: middle;
        color: black;
    }

.hh-panel-action {
    list-style: none;
    display: inline-block;
    float: right;
}

    .hh-panel-action li {
        display: inline-block;
        color: #515d6e;
        margin: 0 5px;
        cursor: pointer;
    }

.hh-info-box {
    margin-bottom: 16px;
    -webkit-box-shadow: 1px 1px 2px 0 #CCCCCC;
            box-shadow: 1px 1px 2px 0 #CCCCCC;
    padding: 20px;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
    background: #eee !important;
}

    .hh-info-box i {
        display: block;
        background-clip: padding-box;
        margin-right: 15px;
        height: 60px;
        width: 60px;
        border-radius: 100%;
        line-height: 60px;
        text-align: center;
        font-size: 4.4em;
        position: absolute;
    }

    .hh-info-box .value,
    .hh-info-box .heading {
        display: block;
        position: relative;
        color: #515d6e;
        text-align: right;
        z-index: 10;
    }

    .hh-info-box .heading {
        font-size: 1.2em;
        font-weight: 300;
        text-transform: uppercase;
    }

    .hh-info-box .value {
        font-size: 2.1em;
        font-weight: 600;
        margin-top: 5px;
    }

.hh-list-group-item {
    margin: 5px 10px 25px 5px;
}

    .hh-list-group-item:after {
        content: "";
        display: table;
    }

.hh-chat {
    border: 1px solid rgba(198, 198, 198, 0.5);
    padding: 0 10px;
    border-radius: 2px;
    position: relative;
}

.hh-chat-body {
    position: relative;
}

.hh-list-group-item.left .hh-chat {
    margin-left: 50px;
}

    .hh-list-group-item.left .hh-chat .sm-text {
        float: right;
    }

    .hh-list-group-item.left .hh-chat:after {
        content: "";
        border-top: 1px solid rgba(198, 198, 198, 0.5);
        border-left: 1px solid rgba(198, 198, 198, 0.5);
        height: 10px;
        width: 10px;
        background: white;
        position: absolute;
        left: -6px;
        top: 10px;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }

.hh-chat-msg {
    font-size: 14px;
    color: #585f69;
}

.hh-list-group-item.right .hh-chat {
    margin-right: 50px;
}

    .hh-list-group-item.right .hh-chat .lg-text {
        float: right;
    }

    .hh-list-group-item.right .hh-chat:after {
        content: "";
        border-top: 1px solid rgba(198, 198, 198, 0.5);
        border-right: 1px solid rgba(198, 198, 198, 0.5);
        height: 10px;
        width: 10px;
        background: white;
        position: absolute;
        right: -6px;
        top: 10px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }

.hh-list-icon {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: 100%;
    line-height: 40px;
    text-align: center;
    color: white;
    top: -5px;
}

.icon-shadow {
    -webkit-box-shadow: 0 0px 3px 1px rgba(0, 0, 0, 0.26);
            box-shadow: 0 0px 3px 1px rgba(0, 0, 0, 0.26);
}

.hh-list-img {
    border-radius: 100%;
    width: 32px;
    height: 32px;
}

.hh-list-group {
    position: relative;
}

    .hh-list-group.group:before {
        content: "";
        position: absolute;
        background: rgba(198, 198, 198, 0.3);
        top: -20px;
        bottom: -20px;
        left: 25px;
        width: 1px;
    }

.hh-list-content {
    line-height: 1.3;
    margin-left: 50px;
}

.hh-timeline {
    padding: 10px 0;
    position: relative;
}

    .hh-timeline:before {
        content: "";
        position: absolute;
        border: 1px solid #c6c6c6;
        left: 50%;
        top: 0;
        height: 100%;
        bottom: 1px;
        -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
                box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    }

    .hh-timeline .hh-timeline-item {
        list-style: none;
        padding: 10px;
        position: relative;
        vertical-align: middle;
        margin-bottom: 20px;
        font-size: 14px;
    }

        .hh-timeline .hh-timeline-item .hh-timeline-badge {
            position: absolute;
            left: 50%;
            top: 0;
            margin-left: -15px;
            color: #FFF;
            width: 30px;
            height: 30px;
            font-size: 12px;
            border-radius: 100%;
            text-align: center;
            line-height: 25px;
            -webkit-box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
                    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
            cursor: pointer;
            -webkit-transition: all .2s easein-out;
            transition: all .2s easein-out;
            border: 2px solid #fff;
        }

            .hh-timeline .hh-timeline-item .hh-timeline-badge span {
                -webkit-transition: all 200ms linear;
                transition: all 200ms linear;
                -webkit-transform: scale(0);
                transform: scale(0);
                opacity: 0;
                position: absolute;
                color: #e6e6e6;
                background: Grey;
                min-width: 70px;
                border-radius: 3px;
            }

                .hh-timeline .hh-timeline-item .hh-timeline-badge span.pull-right {
                    right: 35px;
                }

                .hh-timeline .hh-timeline-item .hh-timeline-badge span.pull-left {
                    left: 35px;
                }

            .hh-timeline .hh-timeline-item .hh-timeline-badge:hover span {
                opacity: 1;
                -webkit-transform: scale(1);
                transform: scale(1);
            }

        .hh-timeline .hh-timeline-item .hh-timeline-panel {
            position: relative;
            width: 40%;
            background: #FFF;
            padding: 15px;
            top: -20px;
            margin-left: 10px;
            border-radius: 6px;
            border: 1px solid rgba(0, 0, 0, 0.2);
        }

            .hh-timeline .hh-timeline-item .hh-timeline-panel:after {
                content: "";
                width: 15px;
                height: 15px;
                background: #FFF;
                position: absolute;
                top: 30px;
                right: -8.5px;
                margin-top: -10px;
                -webkit-transform: rotate(135deg);
                transform: rotate(135deg);
                border-top: 1px solid rgba(0, 0, 0, 0.2);
                border-left: 1px solid rgba(0, 0, 0, 0.2);
            }

        .hh-timeline .hh-timeline-item:before {
            content: "";
            display: table;
        }

        .hh-timeline .hh-timeline-item:after {
            content: "";
            clear: both;
            display: block;
            overflow: hidden;
        }

        .hh-timeline .hh-timeline-item:first-child {
            margin-top: 20px;
        }

        .hh-timeline .hh-timeline-item .pull-right.hh-timeline-panel {
            background: #e6e6e6;
            margin-right: 10px;
        }

            .hh-timeline .hh-timeline-item .pull-right.hh-timeline-panel:after {
                content: "";
                left: -8.5px;
                -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
                background: #e6e6e6;
            }

.hh-timeline-footer p {
    display: inline-block;
    font-weight: 600;
    color: #515d6e;
}

    .hh-timeline-footer p i {
        font-size: 24px;
        color: #3680f4;
    }

.hh-chart .morris-hover {
    display: none !important;
}

.hh-chart:hover .morris-hover {
    display: block !important;
}

.fa-spin {
    -webkit-animation: fa-spin .5s infinite linear;
    animation: fa-spin .5s infinite linear;
}

.brand-icon {
    font-size: 22px;
    height: 50px;
    display: inline-block;
    float: left;
    width: 50px;
    background-color: #3680f4;
    text-align: center;
    line-height: 50px;
    color: white;
    font-weight: 700;
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
    margin-left: -230px;
    display: none;
}

.flat-theme {
    background: #f1f2f7;
}

    .flat-theme .brand-icon {
        display: inline-block;
    }

    .flat-theme .hh-logo {
        color: white;
    }

    .flat-theme .hh-navigation {
        text-align: left;
    }

        .flat-theme .hh-navigation .hh-top-nav-container {
            float: none !important;
        }

            .flat-theme .hh-navigation .hh-top-nav-container .links:last-child {
                float: none !important;
            }

                .flat-theme .hh-navigation .hh-top-nav-container .links:last-child > li > ul.hh-dropmenu-item {
                    left: 0;
                }

                    .flat-theme .hh-navigation .hh-top-nav-container .links:last-child > li > ul.hh-dropmenu-item:before {
                        left: 8px;
                        right: 100%;
                    }

                .flat-theme .hh-navigation .hh-top-nav-container .links:last-child > li:first-child {
                    margin-left: 30px;
                }

            .flat-theme .hh-navigation .hh-top-nav-container .links > li {
                text-align: center;
            }

                .flat-theme .hh-navigation .hh-top-nav-container .links > li > a {
                    border-radius: 50%;
                    width: 32px;
                    height: 32px;
                    background: #f6f6f6;
                    display: inline-block;
                    line-height: 32px;
                    transition: 0.2s all linear;
                }

                .flat-theme .hh-navigation .hh-top-nav-container .links > li:hover > a {
                    color: black !important;
                    transition: 0.2s all linear;
                }

    .flat-theme .hh-dropmenu-item {
        border-color: #292929 !important;
    }

        .flat-theme .hh-dropmenu-item:before {
            border-color: #292929 transparent;
        }

    .flat-theme .hh-logo-container.hh-nav-min {
        -webkit-transform: none;
        transform: none;
    }

        .flat-theme .hh-logo-container.hh-nav-min .hh-logo {
            opacity: 1;
        }

        .flat-theme .hh-logo-container.hh-nav-min + .hh-logo-hidden {
            opacity: 0;
        }

    .flat-theme .hh-logo-container {
        background: #292929;
        position: relative;
        z-index: 1000;
    }

        .flat-theme .hh-logo-container .hh-toggle-btn {
            color: #fff !important;
            font-size: 14px;
            width: 30px;
            height: 30px;
            display: inline-block;
            position: absolute;
            line-height: 30px;
            text-align: center;
            padding: 0;
            border-radius: 50%;
            right: -15px;
            background: #2c6bc9;
            top: 7.5px;
            -webkit-transition: all .2s linear;
            transition: all .2s linear;
        }

    .flat-theme .hh-sidebar {
        background: #32323a !important;
    }

        .flat-theme .hh-sidebar ul.main-links li {
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

            .flat-theme .hh-sidebar ul.main-links li:hover {
                background: #28282a !important;
            }

                .flat-theme .hh-sidebar ul.main-links li:hover span {
                    color: #3680F4;
                }

            .flat-theme .hh-sidebar ul.main-links li a i {
                color: white;
            }

            .flat-theme .hh-sidebar ul.main-links li a > span {
                color: #aeb2b7 !important;
                -webkit-transition: none;
            }

    .flat-theme .hh-info-box {
        -webkit-box-shadow: none !important;
                box-shadow: none !important;
        border-radius: 4px;
    }

    .flat-theme .panel {
        -webkit-box-shadow: none !important;
                box-shadow: none !important;
        border-radius: 4px !important;
        border: none !important;
    }

        .flat-theme .panel .panel-heading {
            background: #fafafa !important;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
        }

        .flat-theme .panel .panel-body {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
        }

    .flat-theme .panel-default {
        border-color: none;
    }

.hh-bg-crimson {
    background: #3680F4;
}

.flat-theme.crimson .hh-logo-container {
    background: #3680F4 !important;
}

.flat-theme.crimson .hh-toggle-btn {
    background: #ad102f !important;
}

.flat-theme.crimson .hh-dropmenu-footer,
.flat-theme.crimson .hh-dropmenu-header {
    background: #ad102f !important;
}

.flat-theme.crimson .links > li:not(.no-color):hover > a {
    background: #eb1f48 !important;
}

.flat-theme.crimson .hh-dropmenu-item {
    border-color: #ad102f !important;
}

    .flat-theme.crimson .hh-dropmenu-item:before {
        border-color: #ad102f transparent;
    }

.flat-theme.crimson .hh-sidebar ul.main-links li:hover a > span {
    color: #3680f4 !important;
}

@media screen and (max-width: 850px) {
    .flat-theme.crimson.sticky .hh-toggle-btn {
        background: #fafafa !important;
        color: #89949B !important;
    }
}

.flat-theme.crimson.sticky .brand-icon,
.flat-theme.crimson.sticky .hh-toggle-btn:hover {
    background: #3680f4 !important;
    color: #fff !important;
}

.hh-bg-teal {
    background: #1fb5ad;
}

.flat-theme.teal .hh-logo-container {
    background: #1fb5ad !important;
}

.flat-theme.teal .hh-toggle-btn {
    background: #188983 !important;
}

.flat-theme.teal .hh-dropmenu-footer,
.flat-theme.teal .hh-dropmenu-header {
    background: #188983 !important;
}

.flat-theme.teal .links > li:not(.no-color):hover > a {
    background: #23cbc2 !important;
}

.flat-theme.teal .hh-dropmenu-item {
    border-color: #188983 !important;
}

    .flat-theme.teal .hh-dropmenu-item:before {
        border-color: #188983 transparent;
    }

.flat-theme.teal .hh-sidebar ul.main-links li:hover a > span {
    color: #1fb5ad !important;
}

@media screen and (max-width: 850px) {
    .flat-theme.teal.sticky .hh-toggle-btn {
        background: #fafafa !important;
        color: #89949B !important;
    }
}

.flat-theme.teal.sticky .brand-icon,
.flat-theme.teal.sticky .hh-toggle-btn:hover {
    background: #1fb5ad !important;
    color: #fff !important;
}

.hh-bg-orange {
    background: #ff503f;
}

.flat-theme.orange .hh-logo-container {
    background: #ff503f !important;
}

.flat-theme.orange .hh-toggle-btn {
    background: #ff220c !important;
}

.flat-theme.orange .hh-dropmenu-footer,
.flat-theme.orange .hh-dropmenu-header {
    background: #ff220c !important;
}

.flat-theme.orange .links > li:not(.no-color):hover > a {
    background: #ff6759 !important;
}

.flat-theme.orange .hh-dropmenu-item {
    border-color: #ff220c !important;
}

    .flat-theme.orange .hh-dropmenu-item:before {
        border-color: #ff220c transparent;
    }

.flat-theme.orange .hh-sidebar ul.main-links li:hover a > span {
    color: #ff503f !important;
}

@media screen and (max-width: 850px) {
    .flat-theme.orange.sticky .hh-toggle-btn {
        background: #fafafa !important;
        color: #89949B !important;
    }
}

.flat-theme.orange.sticky .brand-icon,
.flat-theme.orange.sticky .hh-toggle-btn:hover {
    background: #ff503f !important;
    color: #fff !important;
}

.hh-bg-purple {
    background: rebeccapurple;
}

.flat-theme.purple .hh-logo-container {
    background: rebeccapurple !important;
}

.flat-theme.purple .hh-toggle-btn {
    background: #4d2673 !important;
}

.flat-theme.purple .hh-dropmenu-footer,
.flat-theme.purple .hh-dropmenu-header {
    background: #4d2673 !important;
}

.flat-theme.purple .links > li:not(.no-color):hover > a {
    background: #7339ac !important;
}

.flat-theme.purple .hh-dropmenu-item {
    border-color: #4d2673 !important;
}

    .flat-theme.purple .hh-dropmenu-item:before {
        border-color: #4d2673 transparent;
    }

.flat-theme.purple .hh-sidebar ul.main-links li:hover a > span {
    color: rebeccapurple !important;
}

@media screen and (max-width: 850px) {
    .flat-theme.purple.sticky .hh-toggle-btn {
        background: #fafafa !important;
        color: #89949B !important;
    }
}

.flat-theme.purple.sticky .brand-icon,
.flat-theme.purple.sticky .hh-toggle-btn:hover {
    background: rebeccapurple !important;
    color: #fff !important;
}

.hh-bg-twitter {
    background: #55acee;
}

.flat-theme.twitter .hh-logo-container {
    background: #55acee !important;
}

.flat-theme.twitter .hh-toggle-btn {
    background: #2795e9 !important;
}

.flat-theme.twitter .hh-dropmenu-footer,
.flat-theme.twitter .hh-dropmenu-header {
    background: #2795e9 !important;
}

.flat-theme.twitter .links > li:not(.no-color):hover > a {
    background: #6cb7f0 !important;
}

.flat-theme.twitter .hh-dropmenu-item {
    border-color: #2795e9 !important;
}

    .flat-theme.twitter .hh-dropmenu-item:before {
        border-color: #2795e9 transparent;
    }

.flat-theme.twitter .hh-sidebar ul.main-links li:hover a > span {
    color: #55acee !important;
}

@media screen and (max-width: 850px) {
    .flat-theme.twitter.sticky .hh-toggle-btn {
        background: #fafafa !important;
        color: #89949B !important;
    }
}

.flat-theme.twitter.sticky .brand-icon,
.flat-theme.twitter.sticky .hh-toggle-btn:hover {
    background: #55acee !important;
    color: #fff !important;
}

.skewedbox {
  position:relative;
  background-color:#000000;
  /*width:200px;*/
  color:#FFFFFF;
  padding:15px;
  margin:0 auto;
  margin-right: 50px;
}

.skewedbox:before {
  content:'';
  position:absolute;
  left:-10%;
  top:0;
  width:120%;
  height:100%;
  background-color:#58ADFF;
  transform:skewX(-20deg);
  box-shadow:0 0 5px rgba(0,0,0,0.5);
}

.skewedbox span {
    position:relative;
}

.skewedbox span span {
    font-weight: 900;
    text-transform: lowercase;
}

.skew-logout-btn{
  position: absolute;
  right: 10px;
  top: 30px;
  background-color: rgba(255,0,0,0.7);
  transition: 0.2s all linear;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-shadow: 0px 0px 10px #999;
}

.skew-logout-btn:hover{
  background-color: rgba(255,0,0,1);
  transition: 0.2s all linear;
}

.skew-logout-btn i{
  color: #fff;
  margin: 5px 7px;
}










.inside-items{
  
}

.inside-items:before{
  content: '⤷';
  color: #fff;    
  margin-left: 25px;    
}









.profile-bar{
  background-image: url(https://i.pinimg.com/originals/ae/84/18/ae8418bc8397210c37ba7fc802dbc020.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  max-height: 100%;
  max-width: 100%;
  color: #eee;
}

.profile-bar .contents{
  background-color: rgba(0,0,0,0.65);
}

.profile-bar .contents img{
  display: block;
  width: 70px;
  margin: auto;
  padding-top: 25px;
}

.profile-bar .contents .profile-name{
  text-align: center;
  margin: 10px 0px;
  font-size: 18px;
  font-weight: 300;
}

.profile-bar .contents .profile-description{
  text-align: center;
  margin: 10px 0px;
  font-weight: 300;
}

.profile-bar .contents .buttons{
  text-align: center;
  background-color: rgba(31,45,61,.7);
}

.profile-bar .contents .buttons ul{
  list-style: none;
  -webkit-padding-start: 0;
}

.profile-bar .contents .buttons ul li{
  display: inline-block;
  margin: 5px 10px;
}

.profile-bar .contents .buttons ul li a{
  color: #eee;
  font-size: 22px;
  display: block;
  text-decoration: none;
  opacity: 0.7;
  transition: 0.2s all linear;
}

.profile-bar .contents .buttons ul li a:hover{
  opacity: 1;
  transition: 0.2s all linear;
}

.profile-bar .contents .buttons ul li a span{
  font-size: 14px;
  display: block;
}
</style>
