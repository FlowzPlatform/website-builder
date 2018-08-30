<template>
  <div class="ProjectSettings">

    <div class="tabs">
      <h3>Project Settings</h3>
      <el-tooltip class="item" effect="dark" placement="bottom">
        <div slot="content" style="text-align: center">Website Publish<br> Basic Settings<br> User Roles<br> Commits and Revision</div>
        <a class="tab" id="tab1" data-target="#tab1-content">General Settings</a>  
      </el-tooltip>

      <el-tooltip class="item" effect="dark" placement="bottom">
        <div slot="content" style="text-align: center">Import Template<br> Global Variables</div>
        <a class="tab" id="tab2" data-target="#tab2-content">Plugins</a>
      </el-tooltip>

      <el-tooltip class="item" effect="dark" placement="bottom">
        <div slot="content" style="text-align: center">Image Library<br>Tax Cloud<br> URL Bucket<br> External Links <br> Meta Information <br> Global Styles &amp; Scripts </div>
        <a class="tab" id="tab3" data-target="#tab3-content">Assets Management</a>
      </el-tooltip>

      <el-tooltip class="item" effect="dark" placement="bottom">
        <div slot="content" style="text-align: center">Payment Configurations</div>
        <a class="tab" id="tab4" data-target="#tab4-content">Accounting</a>
      </el-tooltip>
    
      <span class="tab-active-bar"></span>
    </div>


    <!-- <div class="tab-contents">
      <div id="tab1-content" class="tab-content">
      </div>
    </div> -->

    <!-- <div class="card-spacer"></div>

    <span class="block-title">Website Details</span>
    <div class="card">
      
    </div> -->

    <div class="tab-contents">
      <div id="tab1-content" class="tab-content">

        <div class="row">
          <div class="col-md-10">
            <span class="block-title" id="publish-website">Publish Website</span>
              <div class="card">
                <div class="row">
                  <div class="col-md-12">

                    <el-radio class="radio" v-model="publishType" label="default">Default Publish</el-radio>
                    <el-radio class="radio" v-model="publishType" label="custom">Custom Domain</el-radio>

                    <div class="row">
                      <div class="col-md-12" v-if="publishType === 'default'">
                        Your Default domain will be: <a :href="projectPublicUrl" target="_blank">{{projectPublicUrl}}</a>
                        <br>
                          <!-- <small>*Preview will open in new tab. Please allow popup to preview your site.</small>
                        <br> -->

                        <div style="margin-top: 15px;">
                          <el-button type="primary" v-bind:disabled="isdisabled" @click="publishjobqueue()" v-loading.fullscreen.lock="fullscreenLoading">Publish</el-button>
          
                          <el-button  v-if='isdisabled==true' @click='cancelpublishjobqueue()' type="primary">Cancel Publish</el-button><br><small v-if='isdisabled==true'>*{{ textdata }}</small>
                          <el-progress v-if='isdisabled==true' style='margin: 21px 0px 6px 0px' v-bind:percentage="percent"></el-progress>
                        </div>
                      </div>

                      <div class="col-md-12" v-else>
                        <el-input v-model="customDomainName" placeholder="http://www.domain.com"></el-input>
                        <p class="custom-note">Before publishing to your custom domain, point your domain to our nameservers: 
                          [1] <strong><span id="ns1-copy">ns1.flowzdigital.com</span>
                            <el-tooltip class="item" effect="dark" content="Copy to clipboard" placement="top">
                              <a href="#" class="btn btn-info btn-xs" @click="copyToClipboard('ns1-copy')"><i class="fa fa-copy"></i></a>
                            </el-tooltip>
                          </strong> 
                          [2] <strong><span id="ns2-copy">ns2.flowzdigital.com</span>
                            <el-tooltip class="item" effect="dark" content="Copy to clipboard" placement="top">
                              <a href="#" class="btn btn-info btn-xs" @click="copyToClipboard('ns2-copy')"><i class="fa fa-copy"></i></a>
                            </el-tooltip>
                          </strong> 
                        </p>
                        <div style="margin-top: 15px;">
                          <el-button type="primary" @click="publishMetalsmith(publishType = 'custom')" v-loading.fullscreen.lock="fullscreenLoading" v-bind:element-loading-text="loadingText">Custom Publish</el-button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-spacer"></div>

              <span class="block-title" id="basic-settings">Basic Settings</span>
              <div class="card">
                <div class="row">
                  <div class="col-md-12">
                    <el-form ref="form1" :model="form" label-width="180px" :rules="rulesProjectSettings">

                      <el-form-item label="Website Id:">
                          <el-input v-model="newRepoId" :disabled="true"></el-input>
                        </el-form-item>

                        <el-form-item label="Website name" prop="websitename">
                          <!-- <el-input v-model="websitename"></el-input> -->
                          <el-input placeholder="Please input" v-model="form.websitename" prop="websitename">
                            <el-button slot="append" @click="updateProjectName('form1')" class="save-project-name-btn"><i class="fa fa-save fa-fw"></i>Save</el-button>
                          </el-input>
                          <!-- {{websitename}} -->
                          <!-- <a id="websiteName" data-title="Website Name">{{websitename}}</a> -->
                        </el-form-item>

                        <!-- <el-form-item label="Favicon Logo">
                           <el-input v-model="faviconhref" placeholder="href" ></el-input>
                        </el-form-item> -->
                        <el-row>
                        <el-col :span='20'>
                        <el-form-item label="V Shop ID">
                           <el-select clearable v-model="form.vid" placeholder="Select vid">
                            <el-option
                              v-for="item in vshopcategory"
                              :key="item.id"
                              :label="item.virtualShopName"
                              :value="item.id">
                            </el-option>
                          </el-select>
                        </el-form-item>
                        </el-col>
                        <el-col :span='2'>
                          <el-tooltip content="Go View V-shop Settings" placement="top">
                          <el-button type="primary" icon='setting' @click='linktovshop()'>V-Shop</el-button></el-tooltip>
                        </el-col>
                        <el-col style='text-align: center;' :span='2'>
                          <!-- <el-button type="primary" icon="el-icon-refresh"></el-button> -->
                           <el-tooltip content="Refresh V-shop settings" placement="top">
                           <el-button type="primary" @click="refreshvshop()"><i class="fa fa-refresh"></i></el-button>
                           </el-tooltip>
                        </el-col>
                        </el-row>
                       

                        <!-- <el-form-item label="Brand name">
                          <el-input v-model="form.brandName" placeholder="My Company"></el-input>
                        </el-form-item> -->

                        <el-form-item label="Website Favicon Logo">
                          <div class="col6 valid">
                            <label for="upload-validation" class="brandLogoUploadLabel">
                              <i class="fa fa-paperclip" aria-hidden="true"></i><span class="uploadText" id="text2">Upload image</span>
                            </label>
                            <br>
                            <span><b>Current file:</b> {{form.brandLogoName}}</span>
                            <el-tooltip  v-if='form.brandLogoName!="!!!No file uploaded!!!"' content="To Remove current file" placement="top">
                            <el-button style='margin-left: 10px' @click='deletefaviconimage()' type="primary" icon="delete"></el-button>
                            </el-tooltip>
                            <input type="file" name="" id="upload-validation">
                            <span class="dis">( .png/ico only max size upto 70KB)</span>

                          </div>
                           <!-- <el-input v-model="faviconhref" placeholder="href" ></el-input> -->
                        </el-form-item>

                        <el-form-item label="Website SEO Title">
                          <el-input v-model="form.seoTitle" placeholder="My Company"></el-input>
                        </el-form-item>

                       <!--  <el-form-item label="Website SEO Keywords">
                          <el-input v-model="form.seoKeywords" placeholder="Design, development, SEO"></el-input>
                        </el-form-item>

                        <el-form-item label="Website SEO Description">
                          <el-input type="textarea" :rows="5" v-model="form.seoDesc" placeholder="Some little description about your project"></el-input>
                        </el-form-item> -->

                    </el-form>
                  </div>
                </div>
              </div>

              <div class="card-spacer"></div>

              <span class="block-title" id="website-details">Details</span>
              <div class="card">
                <div class="row">
                  <div class="col-md-12">
                    <vue-json-editor style="background-color: #fff; margin-top: 2%;" v-model="projectDetailsJson" :showBtns="false" @json-change="onJsonChange"></vue-json-editor>
                  </div>
                </div>
              </div>

              <div class="card-spacer"></div>

              <span class="block-title" id="website-roles">Roles</span>
              <div class="card">
                <div class="row">
                    <div class="col-md-12">
                        <div style="margin: 5px 0;" v-for="(n, index) in websiteRoles">
                          <div class="row">
                            <div class="col-md-11">
                              <el-input v-if="n.roleName != 'guest' && n.roleName != 'registered' " v-model="n.roleName" placeholder="Enter Role Name"></el-input>
                              <el-input v-else v-model="n.roleName" placeholder="Enter Role Name" :disabled="true"></el-input>
                            </div>
                            <!-- <div class="col-md-1">
                              <input type="radio" v-model="isPrimaryRole" :value="n.roleName"> Primary
                              <el-radio class="radio" v-model="isPrimaryRole" @click="setPrimaryRole(index)" :label="index">Primary</el-radio>
                            </div> -->
                            <div class="col-md-1">
                              <el-button v-if="n.roleName != 'guest' && n.roleName != 'registered' " class="pull-right" style="min-width: 100%;" type="danger" @click="deleteWebsiteRole(index)" icon="delete2"></el-button>
                            </div>
                          </div>
                        </div>
                        <br>
                        <!-- Create new variable -->
                        <el-button type="primary" @click="addNewWebsiteRole">New Role</el-button>
                    </div>
                </div>
              </div>

              <div class="card-spacer"></div>

              <span class="block-title" id="website-revisions">Revisions</span>
              <div class="card">
                <el-form :model="commitForm" :rules="commitRules" ref="commitForm" class="demo-ruleForm">
                  <div class="row">
                  
                    <div class="col-md-4">
                      <el-form-item label="Revision Name" prop="branchName">
                        <el-input v-model="commitForm.branchName" placeholder="Enter Revision Name"></el-input>
                      </el-form-item>
                    </div>

                    <div class="col-md-5">
                      <el-form-item label="Revision Message" prop="commitMessage">
                        <el-input v-model="commitForm.commitMessage" placeholder="Enter Revision Message"></el-input>
                      </el-form-item>
                    </div>

                    <div class="col-md-3">
                      <el-form-item label="Submit Revision">
                        <el-button class="publishBtn" type="success" @click="commitProject('commitForm')" :loading="isCommitLoading">Add Revision</el-button>
                      </el-form-item>
                    </div>

                    <!-- <div class="col-md-1">
                      <el-form-item label="Download">
                        <el-tooltip content="Download .zip" placement="top">
                          <el-button class="publishBtn" @click="exportWebsite()"><i class="fa fa-download" title="Download .zip"></i></el-button>
                        </el-tooltip>
                      </el-form-item>
                    </div> -->

                  </div>

                </el-form>

                <!-- <div class="col-md-4">
                  <el-input v-model="branchName" placeholder="Enter Branch Name"></el-input>
                </div>
                <div class="col-md-5">
                  <el-input v-model="commitMessage" placeholder="Enter Commit Message"></el-input>
                </div>
                <div class="col-md-2">
                  <el-button class="publishBtn" type="success" @click="commitProject()" :loading="isCommitLoading">Commit Project</el-button>
                </div>
                <div class="col-md-1">
                  <el-tooltip content="Download .zip" placement="top">
                    <el-button class="publishBtn" @click="exportWebsite()"><i class="fa fa-download" title="Download .zip"></i></el-button>
                  </el-tooltip>
                </div> -->
                <!-- </div> -->
                <div class="row">
                    <div class="col-md-12" style="margin-top: 2%">
                      <div class="table-responsive">
                        <table class="table" id="revisionsTable">
                          <thead>
                            <tr>
                              <th width="260" @click="sortBranchesTable(0)">Revision Date <i class="fa fa-sort pull-right"></i></th>
                              <th @click="sortBranchesTable(1)">Revision Name <i class="fa fa-sort pull-right"></i></th>
                              <th @click="sortBranchesTable(2)">Revision Message <i class="fa fa-sort pull-right"></i></th>
                              <!-- <th>Revision SHA</th> -->
                              <th>Rollback</th>
                              <th>Log</th>
                              <th width="120">Download Code</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(n, index) in branchesData">
                              <td>{{n.commitDate}}</td>
                              <td>{{n.branchName}}</td>
                              <td>{{n.commitsMessage}}</td>
                              <!-- <td>{{n.commitSHA}}</td> -->
                              <td>
                                <el-button @click.native.prevent="revertCommit(index)" type="primary" v-if="n.branchName != currentBranchName" size="small">Restore</el-button>
                                <img src="../../static/img/green-tick.png" class="green-tick-img" v-if="n.branchName == currentBranchName">
                              </td>
                              <td>
                                <el-tooltip content="View Log" placement="top">
                                  <el-button @click.native.prevent="logfile(index)" type="info" size="small"><i class="fa fa-file-text" aria-hidden="true"></i></el-button>
                                </el-tooltip>
                              </td>
                              <td>
                                <el-tooltip content="Download .zip" placement="top">
                                  <el-button @click.native.prevent="exportWebsite(index)" type="info" size="small"><i class="fa fa-download fa-fw"></i></el-button>
                                </el-tooltip>
                              </td>
                              
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- <el-table
                        :data="commitsData"
                        :row-class-name="tableRowClassName"
                        border
                        style="width: 100%">
                        <el-table-column
                          prop="commitDate"
                          label="Commit Date"
                          width="180">
                        </el-table-column>
                        <el-table-column
                          prop="commitsMessage"
                          label="Commit Message"
                          >
                        </el-table-column>

                        <el-table-column
                          prop="commitSHA"
                          label="Commit SHA"
                          >
                        </el-table-column>

                        <el-table-column
                          label="Revert To Commit"
                          width="180">
                          <template scope="scope">
                            <img src="../../static/img/green-tick.png" class="green-tick-img" v-if="(scope.$index, commitSHA) == currentSha">
                            <el-button @click.native.prevent="revertCommit(scope.$index, commitsData)" type="primary" size="small">Restore</el-button>
                          </template>
                        </el-table-column>
                      </el-table> -->
                    </div>
                </div>
              </div>
          </div>
          <div class="col-md-2">
            <div class="fixeddiv">
              <strong>Jump To:</strong>
              <ul class="jumper-links">
                <li><a class="jumper-links-redirect active" href="#publish-website">Publish Website</a></li>
                <li><a class="jumper-links-redirect" href="#basic-settings">Basic Settings</a></li>
                <li><a class="jumper-links-redirect" href="#website-details">Details</a></li>
                <li><a class="jumper-links-redirect" href="#website-roles">Roles</a></li>
                <li><a class="jumper-links-redirect" href="#website-revisions">Revisions</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card-spacer"></div>

      </div>

      <div id="tab2-content" class="tab-content">

        <div class="row">
          <div class="col-md-10">
            <span class="block-title" id="import-template">Import E-Commerce Templates</span>
            <el-tooltip class="item" effect="dark" content="Refresh All Plugins and Directories" placement="top">
              <el-button class="refresh-plugins-btn" @click.native.prevent="refreshPlugins()" :loading="refreshPluginsLoading" type="warning" icon="time" :disabled="refreshDisabled"></el-button>
            </el-tooltip>
            <div class="card">
              <div class="row" style="margin-top: 15px;">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img src="https://res.cloudinary.com/flowz/image/upload/c_scale,w_403/v1520244745/builder/images/template1.png" alt="template 1" class="img-responsive template-image" @click="revertToTemplate(template = 'web1')"/>
                      <a href="#" target="_blank" class="view-template"><i class="fa fa-search"></i></a>
                      <!-- <button class="btn btn-primary btn-lg btn-block" @click="revertToTemplate(template = 'web1')">Template 1</button> -->
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img src="https://res.cloudinary.com/flowz/image/upload/v1523358756/builder/images/template2.png" alt="template 1" class="img-responsive template-image" @click="revertToTemplate(template = 'web2')"/>
                      <a href="#" target="_blank" class="view-template"><i class="fa fa-search"></i></a>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img src="https://res.cloudinary.com/flowz/image/upload/v1523358764/builder/images/tempate3.png" alt="template 1" class="img-responsive template-image" @click="revertToTemplate(template = 'web3')"/>
                      <a href="#" target="_blank" class="view-template"><i class="fa fa-search"></i></a>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img src="https://placehold.it/403x190?text=Template4" alt="template 4" class="img-responsive template-image" @click="revertToTemplate(template = 'web4')"/>
                      <a href="#" target="_blank" class="view-template"><i class="fa fa-search"></i></a>
                      <!-- <button class="btn btn-primary btn-lg btn-block" @click="revertToTemplate(template = 'web1')">Template 1</button> -->
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img src="https://placehold.it/403x190?text=Template5" alt="template 5" class="img-responsive template-image" @click="revertToTemplate(template = 'innovation-line')" />
                      <!-- <a href="#" target="_blank" class="view-template"><i class="fa fa-search"></i></a> -->
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img src="https://placehold.it/403x190?text=Template6" alt="template 6" class="img-responsive template-image" @click="revertToTemplate(template = 'optimisation')" />
                      <!-- <a href="#" target="_blank" class="view-template"><i class="fa fa-search"></i></a> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- <div class="row">
                <div class="col-md-12" align="right" style="margin-bottom: 10px;">
                  
                  <!-- <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList3">
                    <el-button size="small" type="primary">Click to upload</el-button>

                  </el-upload> ->
                </div>
                <div class="col-md-12">
                  <el-tree
                    :data="pluginsTreedata"
                    node-key="id"
                    :default-expand-all="true"
                    :props="defaultProps"
                    :default-checked-keys=checkedList>
                  </el-tree>

                  <!-- :render-content="renderContent" ->

                  <br>

                  <div class="row">
                    <div class="col-md-6">
                      <button class="btn btn-primary" id="pluginJsonUploaderBtn"><i class="fa fa-upload"></i> Upload Plugin</button>
                      <input type="file" name="uploaderPluginJson">
                    </div>
                    <div class="col-md-6" align="right">

                    </div>
                  </div>
                </div>
              </div> -->
            </div>

            <div class="card-spacer"></div>

            <span class="block-title">Import CMS Template</span>
            <div class="card">
              <div class="row" style="margin-top: 15px;">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img src="https://res.cloudinary.com/flowz/image/upload/v1529670155/builder/images/Webp.png" alt="flowz-template" class="img-responsive template-image" @click="revertToCMSTemplate(template = 'flowz-website')"/>
                      <a href="#" target="_blank" class="view-template"><i class="fa fa-search"></i></a>
                      <!-- <button class="btn btn-primary btn-lg btn-block" @click="revertToTemplate(template = 'web1')">Template 1</button> -->
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img src="http://res.cloudinary.com/flowz/image/upload/v1528863699/builder/images/OfficeBeacon.png" alt="officebeacon-template" class="img-responsive template-image" @click="revertToCMSTemplate(template = 'officebeacon-website')"/>
                      <a href="#" target="_blank" class="view-template"><i class="fa fa-search"></i></a>
                      <!-- <button class="btn btn-primary btn-lg btn-block" @click="revertToTemplate(template = 'web1')">Template 1</button> -->
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img src="https://res.cloudinary.com/flowz/image/upload/v1529667007/builder/images/ss_golf.png" alt="officebeacon-template" class="img-responsive template-image" @click="revertToCMSTemplate(template = 'staticwebsite')"/>
                      <a href="#" target="_blank" class="view-template"><i class="fa fa-search"></i></a>
                      <!-- <button class="btn btn-primary btn-lg btn-block" @click="revertToTemplate(template = 'web1')">Template 1</button> -->
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="thumbnail">
                        <img src="https://res.cloudinary.com/flowz/image/upload/v1534426499/builder/sparo.png" alt="flowz-template" class="img-responsive template-image" @click="revertToCMSTemplate(template = 'sparo')"/>
                      <a href="#" target="_blank" class="view-template"><i class="fa fa-search"></i></a>
                      <!-- <button class="btn btn-primary btn-lg btn-block" @click="revertToTemplate(template = 'web1')">Template 1</button> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card-spacer"></div>

            <span class="block-title" id="global-variables">Global Variables</span>
            <div class="card">
              <div class="row">
                <div class="col-md-12" align="right" style="margin-bottom: 10px;">
                  <!-- <el-tooltip class="item" effect="dark" content="Upload JSON" placement="top"> -->
                    <button class="btn btn-primary" id="jsonUploaderBtn"><i class="fa fa-upload"></i> Import</button>
                    <input type="file" name="uploaderVariableJson">
                  <!-- </el-tooltip> -->
                  <!-- <el-tooltip class="item" effect="dark" content="Download JSON" placement="top"> -->
                    <button class="btn btn-warning" @click="downloadGlobalVariables"><i class="fa fa-download"></i> Export</button>
                  <!-- </el-tooltip> -->
                </div>
                <div class="col-md-12">
                  <el-form ref="form" :model="form">
                    <div v-for="(n, index) in globalVariables">
                      <el-form-item>
                        <div class="row">

                          <!-- Enter Variable ID -->
                          <div class="col-md-2">
                            <el-input placeholder="Variable ID" v-model="n.variableId"></el-input>
                          </div>

                          <!-- Select Type -->
                          <div class="col-md-2" style="margin: 0; padding: 0">
                            <el-select v-model="n.variableType" placeholder="Select">
                              <el-option
                                v-for="item in selectVariableType"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>

                          <!-- If type is Text or HTML -->
                          <div class="col-md-7" v-if="n.variableType != 'image' && n.variableType != 'hyperlink'" style="margin: 0; padding-left: 10px">
                            <el-input type="textarea" :rows="5" placeholder="Variable Value" v-model="n.variableValue"></el-input>
                          </div>

                          <!-- If type is Hyperlink -->
                          <div class="col-md-7" v-if="n.variableType === 'hyperlink'" style="margin: 0; padding-left: 10px">
                            <div class="col-md-6" style="margin: 0; padding: 0">
                              <el-input placeholder="Link Title" v-model="n.variableTitle"></el-input>
                            </div>
                            <div class="col-md-6" style="margin-right: 0; padding-right: 0">
                              <el-input placeholder="Link URL" v-model="n.variableValue"></el-input>
                            </div>
                          </div>

                          <!-- If type is Image -->
                          <div class="col-md-7" v-if="n.variableType === 'image'" style="margin: 0; padding-left: 10px">

                            <div class="row">

                              <!-- Image Value as Name -->
                              <div class="col-md-8" style="margin-right: 0; padding-right: 0">
                                <el-input placeholder="Image URL" v-model="n.variableValue" :disabled="imageInputIsDisabled"></el-input>
                              </div>

                              <!-- Image Thumbnail Preview -->
                              <div class="col-md-3" style="margin-right: 0; padding-right: 0">
                                <img :src="n.variableValue" v-bind:name="index" class="img-responsive">
                              </div>

                              <!-- Image upload Button -->
                              <div class="col-md-1" style="padding-left: 5px">
                                <el-tooltip content="Upload Image" placement="top">
                                  <!-- <div class="file-upload">
                                      <label for="globalImageVariableFileUploader" :for="index" class="file-upload__label">
                                        <i class="fa fa-upload"></i>
                                      </label>
                                      <input id="globalImageVariableFileUploader" :id="index" class="file-upload__input" type="file" name="file-upload" @change="globalImageUploading(index, $event)">
                                  </div> -->
                                  <el-button type="primary" icon="upload" @click="globalImageUploading(index, $event)" :loading="uploadGlobalImageButtonLoader"></el-button>
                                </el-tooltip>
                              </div>

                            </div>

                          </div>

                          <!-- Delete Variable -->
                          <div class="col-md-1">
                            <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deleteVariable(index)" icon="delete"></el-button>
                          </div>
                        </div>
                      </el-form-item>
                    </div>
                    <!-- Ends V-FOR looping -->

                    <!-- Create new variable -->
                    <el-button type="primary" @click="addNewVariable">New Variable</el-button>
                  </el-form>
                </div>
              </div>

              <!-- <div class="row">
                <div class="col-md-12" style="margin-top: 4%;">
                  <h3>Dynamic Styles</h3>
                  <hr>
                  <el-form ref="form" :model="form">
                    <div v-for="(n, index) in globalCssVariables">
                      <el-form-item>
                        <div class="row">

                          <!-- Enter Variable ID --
                          <div class="col-md-5">
                            <el-input placeholder="Variable Name" v-model="n.variableName"></el-input>
                          </div>

                          <!-- Select Type --
                          <div class="col-md-2" style="margin: 0; padding: 0">
                            <el-select v-model="n.variableType" placeholder="Select">
                              <el-option
                                v-for="item in selectCssVariableType"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                          </div>

                          <!-- Enter Color Variable Value --
                          <div class="col-md-4" v-if="n.variableType === 'color'">
                            <el-color-picker v-model="n.variableValue" show-alpha></el-color-picker>
                          </div>

                          <!-- Enter Pixel Variable Value --
                          <div class="col-md-4" v-if="n.variableType === 'px'">
                            <el-input placeholder="Pixels Value" v-model="n.variableValue"></el-input>
                          </div>

                          <!-- Enter Percentage Variable Value --
                          <div class="col-md-4" v-if="n.variableType === 'percent'">
                            <el-slider v-model="n.variableValue"></el-slider>
                          </div>

                          <!-- Enter Number Variable Value --
                          <div class="col-md-4" v-if="n.variableType === 'number'">
                            <el-input-number v-model="n.variableValue"></el-input-number>
                          </div>

                          <!-- Enter Custom Variable Value --
                          <div class="col-md-4" v-if="n.variableType === 'custom'">
                            <el-input placeholder="Custom Value" v-model="n.variableValue"></el-input>
                          </div>

                          <!-- Delete Variable --
                          <div class="col-md-1">
                            <el-button class="pull-right" type="danger" @click="deleteCssVariable(index)" icon="delete"></el-button>
                          </div>
                        </div>
                      </el-form-item>
                    </div>
                    <!-- Ends V-FOR looping --

                    <!-- Create new variable --
                    <el-button type="primary" @click="addNewCssVariable">New Variable</el-button>

                  </el-form>
                </div>
              </div> -->
            </div>
          </div>

          <div class="col-md-2">
            <div class="fixeddiv">
              <strong>Jump To:</strong>
              <ul class="jumper-links">
                <li><a class="jumper-links-redirect active" href="#import-template">Import Template</a></li>
                <li><a class="jumper-links-redirect" href="#global-variables">Global Variables</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card-spacer"></div>
      </div>

      <div id="tab3-content" class="tab-content">

        <div class="row">
          <div class="col-md-10">
            <span class="block-title" id="image-library">Image Library</span>
            <div class="card">
              <div class="row">
                <div class="col-md-12">
                  <el-form label-position="left" label-width="200px" :model="cloudinaryDetails" :rules="rulesCloudinaryDetails" ref="cloudinaryDetails">
                    <el-form-item label="API Key" prop="apiKey">
                      <el-input v-model="cloudinaryDetails.apiKey"></el-input>
                    </el-form-item>
                    <el-form-item label="API Secret" prop="apiSecret">
                      <el-input v-model="cloudinaryDetails.apiSecret"></el-input>
                    </el-form-item>
                    <el-form-item label="Cloud Name" prop="cloudName">
                      <el-input v-model="cloudinaryDetails.cloudName"></el-input>
                    </el-form-item>
                    <el-form-item label="Upload Preset" prop="uploadPreset">
                      <el-input v-model="cloudinaryDetails.uploadPreset"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="Upload Folder">
                      <el-input v-model="cloudinaryDetails.uploadFolder"></el-input>
                    </el-form-item> -->
                    <!-- <el-form-item label="Upload Sources">
                      <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllSourcesChange">Check all</el-checkbox>
                      <div style="margin: 15px 0;"></div>
                      <el-checkbox-group v-model="checkedSources" @change="handleCheckedSourcesChange">
                        <el-checkbox v-for="source in cloudinaryDetails.sources" :label="source" :key="source">{{source}}</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item> -->
                  </el-form>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">

                  <div class="row" style="margin-bottom: 15px; ">
                    <div class="col-md-12">
                      <el-button icon="upload2" @click="uploadAssetImage('cloudinaryDetails')" :loading="uploadAssetImageLoader">Upload</el-button>
                      <el-button icon="search" @click="fetchcloudinaryImages('cloudinaryDetails')" :loading="fetchImagesLoader">Fetch Images</el-button>
                      <span class="cloudinaryFilesCount">Total Images: {{assetsImages.length}}</span>
                      <el-button v-if="assetsImages.length > 0" style="float: right" type="danger" icon="delete" @click="removeAllAssetsImages()">Remove All</el-button>
                    </div>
                  </div>

                  <div class="row" style="max-height: 600px; overflow-y: auto;" v-loading="fetchImagesLoader" element-loading-text="Loading...">
                    <div class="col-md-3" v-for="(n, index) in assetsImages" style="margin-top: 15px;">
                      <div class="view-icon">
                        <a :href="n" target="_blank"><i class="fa fa-external-link"></i></a>
                      </div>
                      <div class="delete-icon">
                        <a href="javascript:void(0)" @click="deleteAssetImage(index)"><i class="fa fa-times"></i></a>
                      </div>
                      <div class="thumbnail">
                        <div class="deleteImage"></div>
                        <img :src="n" class="asset-image" />
                        <input :id="n" type="text" class="form-control" :value="n" name="n">
                      </div>

                    </div>
                  </div>

                  <!-- <div class="row" align="center" style="margin: 10px 0;">
                    <div class="col-md-12">
                      <!-- :disabled="isEnabledByNextCursor" --
                      <el-button type="primary" icon="plus" v-if="assetsImages.length > 0" @click="loadMoreImages()" :loading="loadMoreImagesLoader">Load More</el-button>  
                    </div>
                  </div> -->

                </div>
              </div>
            </div>

            <div class="card-spacer"></div>

            <span class="block-title" id="tax-cloud">Tax Cloud</span>
            <div class="card">
              <div class="row">
                <div class="col-md-12">
                  <el-form label-position="left" label-width="200px" :model="taxcloud" :rules="rulesTaxCloud" ref="refTaxCloud">
                    <el-form-item label="API ID" prop="apiId">
                      <el-input v-model.trim="taxcloud.apiId"></el-input>
                    </el-form-item>
                    <el-form-item label="API KEY" prop="apiKey">
                      <el-input v-model.trim="taxcloud.apiKey"></el-input>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </div>

            <div class="card-spacer"></div>

            <span class="block-title" id="url-bucket">URL Bucket</span>
            <div class="card">
              <div class="row">
                <div class="col-md-12">
                  <el-form ref="form" :model="form">

                    <div v-for="(n, index) in urlVariables">
                    <h5>URL {{ index +1}}:</h5>
                      <el-form-item>
                        <div class="row">
                          <div class="col-md-4">
                            <el-input placeholder="URL ID" v-model="n.urlId"></el-input>
                          </div>
                          <div class="col-md-6">
                            <el-input placeholder="URL Value" v-model="n.urlValue"></el-input>
                          </div>
                          <div class="col-md-1">
                            <el-tooltip class="item" effect="dark" content="Add Headers" placement="top-start">
                             <el-button type="primary" icon="plus"  @click="addNewHeader(n,index)"></el-button>
                            </el-tooltip>
                          </div>
                          <!-- Delete Variable -->
                          <div class="col-md-1">
                            <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deleteUrlVariable(index)" icon="delete"></el-button>
                          </div>
                        </div>
                      </el-form-item>
                      <div class="row">
                        <div class="col-md-12">
                         <!--  <el-form ref="form" :model="form"> -->
                            <!-- <h5>Headers:-</h5> -->
                            <div v-for="(m, indexH) in n.urlHeaderVariables">
                              <el-form-item>
                                <div class="row">

                                  <div class="col-md-5">
                                    <el-input placeholder="Header Name" v-model="m.headerName"></el-input>
                                  </div>
                                  <div class="col-md-6">
                                    <el-input placeholder="Header Value" v-model="m.headerValue"></el-input>
                                  </div>

                                  <!-- Delete Variable -->
                                  <div class="col-md-1">
                                    <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deleteUrlHeaderVariable(index,indexH)" icon="delete"></el-button>
                                  </div>
                                </div>
                              </el-form-item>
                            </div>

                            <!-- Create new header variable -->
                           <!--  <el-button type="primary" @click="addNewHeader">New Header</el-button> -->
                          <!-- </el-form> -->
                          <hr>
                        </div>
                      </div>
                    </div>

                    <!-- Create new url variable -->
                    <el-button type="primary" @click="addNewUrl">New URL</el-button>
                  </el-form>
                </div>
              </div>
            </div>

            <div class="card-spacer"></div>

            <span class="block-title" id="external-links">External Links</span>
            <div class="card">
              <div class="row">
                <div class="col-md-12">
                     <div class="row">
                        <div class="col-md-4">
                           <h3> JS Links </h3>
                        </div>
                     </div>
                     <hr>
                     <el-form ref="form" :model="form">

                        <div >
                           <el-form-item>
                              <draggable v-model='externallinksJS' @start="drag=true" @end="drag=false">
                                <div style="margin-bottom: 25px" v-for='(n, index) in externallinksJS' class="row">
                                   <!-- position  -->
                                   <div class="col-md-3" style="margin: 0; padding-left: 15px">
                                      <el-select v-model="n.linkposition" placeholder="Position">
                                         <el-option
                                            v-for="item in Allposition"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                         </el-option>
                                      </el-select>
                                   </div>
                                   <!-- link url -->
                                   <div class="col-md-6" style="margin: 0; padding: 0px">
                                      <el-input type="text" :rows="5" placeholder="Link URL" v-model="n.linkurl"></el-input>
                                   </div>
                                   <!-- Delete Variable -->
                                   <div class="col-md-1">
                                      <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelinkJS(index)" icon="delete2"></el-button>
                                   </div>
                                   <div class="col-md-1">
                                      <el-tooltip class="item" effect="dark" content="Re-position" placement="top-start">
                                        <el-button style="min-width: 100%;" icon="d-caret"></el-button>
                                      </el-tooltip>

                                   </div>

                                </div>
                              </draggable>
                           </el-form-item>
                        </div>

                        <!-- Create new variable -->
                        <el-button type="primary" @click="addNewexternallinkJS">New JS Link</el-button>
                     </el-form>
                  </div>
                  <div class="col-md-12" style="margin-top: 4%;">
                     <div class="row">
                        <div class="col-md-4">
                           <h3> CSS Links </h3>
                        </div>
                     </div>
                     <hr>
                     <el-form ref="form" :model="form">
                     <draggable v-model='externallinksCSS' @start="drag=true" @end="drag=false">

                        <div v-for="(n, index) in externallinksCSS">
                           <el-form-item>
                              <div class="row">
                                 <div class="col-md-3" style="margin: 0; padding-left: 15px">
                                    <el-select v-model="n.linkposition" placeholder="Position">
                                       <el-option
                                          v-for="item in Allposition"
                                          :key="item.value"
                                          :label="item.label"
                                          :value="item.value">
                                       </el-option>
                                    </el-select>
                                 </div>
                                 <!-- link url -->
                                 <div class="col-md-6" style="margin: 0; padding-left: 0px">
                                    <el-input type="text" :rows="5" placeholder="Link URL" v-model="n.linkurl"></el-input>
                                 </div>
                                 <!-- Delete Variable -->
                                 <div class="col-md-1">
                                    <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelinkCSS(index)" icon="delete2"></el-button>
                                 </div>
                                 <div class="col-md-1">
                                   <el-tooltip class="item" effect="dark" content="Re-position" placement="top-start">
                                      <el-button style="min-width: 100%;" icon="d-caret"></el-button>
                                    </el-tooltip>

                                 </div>
                              </div>
                           </el-form-item>
                        </div>
                        <!-- Create new variable -->
                     </draggable></el-form>
                        <el-button type="primary" @click="addNewexternallinkCSS">New CSS Link</el-button>
                  </div>
              </div>
            </div>

            <div class="card-spacer"></div>

            <span class="block-title" id="meta-information">Meta Information</span>
            <div class="card">
              <div class="row">
                <div class="col-md-12">
                   <el-form :inline="true">
                     <el-form-item label="Meta Charset">
                        <el-input placeholder="charset value" v-model="Metacharset"></el-input>
                      </el-form-item>
                    </el-form>
                 </div>
                  <div class="col-md-12" style="margin-top: 2%">
                      <table class="table table-hover  table-bordered">
                          <!-- <draggable @start="drag=true" @end="drag=false"> -->
                          <thead class="thead">
                            <tr>
                              <th>Name</th>
                              <th>Content</th>
                              <th></th>
                              <!-- <th></th> -->
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(n, index) in externallinksMeta" >
                              <td><input type='text' class="form-control" value="n.name" v-model="n.name"></td>
                              <td><textarea class="form-control" rows="1" v-model="n.content">{{n.content}}</textarea></td>
                              <td><el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelinkMeta(index)" icon="delete2"></el-button></td>
                              <!-- <td><el-button style="min-width: 100%;" icon="plus"></el-button></td> -->
                            </tr>
                            <tr><td colspan="4"><el-button type="primary" @click="addNewexternallinkMeta">New Meta Link</el-button></td></tr>
                          </tbody>
                            <!-- </draggable> -->
                        </table>
                        <!-- Create new variable -->
                        <!-- <el-button type="primary" @click="addNewexternallinkMeta">New Meta Link</el-button> -->
                     <!-- </el-form> -->
                  </div>
              </div>
            </div>

            <div class="card-spacer"></div>

            <span class="block-title" id="styles-scripts">Global Styles and Scripts</span>
            <div class="card">
              <div class="row">
                <div class="col-md-12">
                     <div class="row">
                        <div class="col-md-4">
                           <h3> Styles: </h3>
                        </div>
                     </div>
                     <hr>
                     <el-form ref="form" :model="form">

                        <div >
                           <el-form-item>
                              <draggable v-model='localstyles' @start="drag=true" @end="drag=false">
                                <div style="margin-bottom: 25px" v-for='(n, index) in localstyles' class="row">
                                   <!-- position  -->
                                   <div class="col-md-3" style="margin: 0; padding-left: 15px">
                                      <el-select v-model="n.linkposition" placeholder="Position">
                                         <el-option
                                            v-for="item in Allposition"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                         </el-option>
                                      </el-select>
                                   </div>
                                   <!-- link url -->
                                   <div class="col-md-6" style="margin: 0; padding: 0px">
                                      <el-input type="textarea" :rows="5" placeholder="css" v-model="n.style"></el-input>
                                   </div>
                                   <!-- Delete Variable -->
                                   <div class="col-md-1">
                                      <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelocalstyles(index)" icon="delete2"></el-button>
                                   </div>
                                   <div class="col-md-1">
                                     <el-tooltip class="item" effect="dark" content="Re-position" placement="top-start">
                                        <el-button style="min-width: 100%;" icon="d-caret"></el-button>
                                      </el-tooltip>
                                   </div>


                                </div>
                              </draggable>
                           </el-form-item>
                        </div>

                        <!-- Create new variable -->
                        <el-button type="primary" @click="addNewlocalstyles">New Style</el-button>
                     </el-form>
                </div>
              </div>

              <br><br>

              <div class="row">
                <div class="col-md-12">
                     <div class="row">
                        <div class="col-md-4">
                           <h3> Scripts: </h3>
                        </div>
                     </div>
                     <hr>
                     <el-form ref="form" :model="form">

                        <div >
                           <el-form-item>
                              <draggable v-model='localscripts' @start="drag=true" @end="drag=false">
                                <div style="margin-bottom: 25px" v-for='(n, index) in localscripts' class="row">
                                   <!-- position  -->
                                   <div class="col-md-3" style="margin: 0; padding-left: 15px">
                                      <el-select v-model="n.linkposition" placeholder="Position">
                                         <el-option
                                            v-for="item in Allposition"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                         </el-option>
                                      </el-select>
                                   </div>
                                   <!-- link url -->
                                   <div class="col-md-6" style="margin: 0; padding: 0px">
                                      <el-input type="textarea" :rows="5" placeholder="script" v-model="n.script"></el-input>
                                   </div>
                                   <!-- Delete Variable -->
                                   <div class="col-md-1">
                                      <el-button class="pull-right" style="min-width: 100%;" type="danger" @click="deletelocalscripts(index)" icon="delete2"></el-button>
                                   </div>
                                   <div class="col-md-1">
                                      <el-tooltip class="item" effect="dark" content="Re-position" placement="top-start">
                                        <el-button style="min-width: 100%;" icon="d-caret"></el-button>
                                      </el-tooltip>

                                   </div>


                                </div>
                              </draggable>
                           </el-form-item>
                        </div>

                        <!-- Create new variable -->
                        <el-button type="primary" @click="addNewlocalscripts">New script</el-button>
                     </el-form>
                  </div>
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <div class="fixeddiv">
              <strong>Jump To:</strong>
              <ul class="jumper-links">
                <li><a class="jumper-links-redirect active" href="#image-library">Image Library</a></li>
                <li><a class="jumper-links-redirect" href="#tax-cloud">Tax Cloud</a></li>
                <li><a class="jumper-links-redirect" href="#url-bucket">URL Bucket</a></li>
                <li><a class="jumper-links-redirect" href="#external-links">External Links</a></li>
                <li><a class="jumper-links-redirect" href="#meta-information">Meta Information</a></li>
                <li><a class="jumper-links-redirect" href="#styles-scripts">Styles &amp; Scripts</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card-spacer"></div>
      </div>

      <div id="tab4-content" class="tab-content">

        <div class="row">
          <div class="col-md-10">
            <span class="block-title" id="payment-config">Payment Configurations</span>
            <div class="card">
              <div class="row">
                <div class="col-md-12">
                  <div class="row">
                    <div class="col-md-12">
                      <el-form ref="form1" :model="form" label-width="120px">
                        <el-row>
                          <el-col :span='18'>
                            <el-form-item label="Account Used:">
                              <el-select clearable v-model="form.crmid" placeholder="Select" @change='changeconfiguration()'>
                                <el-option
                                           v-for="item in crmdata"
                                           :key="item.id"
                                           :label="item.configName"
                                           :value="item.id">
                                </el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col v-if="crmdata.length>-1" :span='4'>
                            <el-tooltip content="Go View Accounting System" placement="top">
                              <el-button type="primary" icon='setting' @click='linktocrm()'>Accounts System
                              </el-button>
                            </el-tooltip>
                          </el-col>
                          <el-col style='text-align: center' :span='2'>
                            <!-- <Button type="primary" shape="circle" @click="refreshaccounts()" icon="refresh"></Button> -->
                            <el-tooltip content="Refresh Accounts settings" placement="top">
                              <el-button type="primary" @click="refreshaccounts()">
                                <i class="fa fa-refresh">
                                </i>
                              </el-button>
                            </el-tooltip>
                          </el-col>
                        </el-row>
                      </el-form>
                    </div>
                  </div>
                </div>
              </div>
              <hr>
              <!-- testing iviewui -->
              <div class="row">
                <div class="col-md-12">
                  <component :is="componentsID" v-on:addNewConfig="addNewConfig">
                  </component>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-2">
            <div class="fixeddiv">
              <strong>Jump To:</strong>
              <ul class="jumper-links">
                <li><a class="jumper-links-redirect active" href="#payment-config">Payment configurations</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card-spacer"></div>
      </div>
    </div>

    <!-- Save/Publish/Cancel Buttons -->
    <div class="page-buttons">
      <el-button type="primary" size="small" @click="saveProjectSettings">Save Settings</el-button>
      <!-- <el-button type="info" size="small" @click="publishWebsite = true" >Publish Website</el-button> -->

      <el-tooltip class="item" effect="dark" content="Download Project Configurations" placement="top-start">
        <el-button type="info" size="small" @click="downloadConfigFile"><i class="fa fa-download"></i></el-button>
      </el-tooltip>
    </div>

  </div>
</template>

<script>

const beautify = require('beautify');

import Vue from 'vue';
import VueSession from 'vue-session';
Vue.use(VueSession);

import vueJsonEditor from 'vue-json-editor';

// import extract from 'extract-zip'
import axios from 'axios';
import _ from 'lodash';
import Cookies from 'js-cookie';
const config = require('../config');
import fileSaver from 'file-saver';
 import psl from 'psl';
import draggable from 'vuedraggable';
import settings from './settings/settings'
import newpaymentsettings from './settings/Online-Payment'
import addnewpaymentgatway from './settings/addpayment'
// import newaccountsettings from './settings/new-settings'
// ProjectName Validator


import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import io from 'socket.io-client';


let socket = config.socketURL;
const app = feathers().configure(socketio(io(socket)))


let checkProjectName = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('Please enter Project Name.'));
    }else if(!(/^[a-z0-9A-Z_]+$/i.test(value))){
        return callback(new Error('Please enter valid Project Name. (Project Name must only contain a-z or A-Z and 0-9. Special characters and spaces are not allowed)'));
    }else{
        return callback();
    }
}
  var daex = require('json-daex');
// ProjectName Validator
let checkBranchName = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('Please enter Branch Name.'));
    }else if(!(/^[a-z0-9A-Z_]+$/i.test(value))){
        return callback(new Error('Special characters and spaces are not allowed'));
    }else{
        return callback();
    }
}

let srvListen = 0;

export default {
  name: 'ProjectSettings',
  props: {
    options: {
      type: Object
    }
  },
  data () {
    return {
      form: {
        name: '',
        brandName: '',
        brandLogoName: '',
        seoTitle: '',
        seoKeywords: '',
        seoDesc: '',
        Header: [],
        Footer: [],
        selectedHeader: '',
        selectedFooter: '',
        websitename: '',
        vid:'',
        crmid:''
      },
      isdisabled:false,
      commitsData: [],
      configurationdata:[],
      gatewaychecked:'',
      crmdata:[],
      faviconhName:'',
      fileList3: [],
      pluginsData: [],
      textdata:'',
      // commitMessage: '',
      newRepoId: '',
      repoName: '',
      isCommitLoading: false,
      configData: [],
      currentFileIndex: '',
      settings: [],
      folderUrl: '',
      selectVariableType: [{
        value: 'text',
        label: 'Text'
      }, {
        value: 'image',
        label: 'Image'
      }, {
        value: 'hyperlink',
        label: 'Hyperlink'
      }, {
        value: 'html',
        label: 'HTML'
      }],

      selectCssVariableType: [{
        value: 'color',
        label: 'Color'
      }, {
        value: 'px',
        label: 'Pixel'
      }, {
        value: 'percent',
        label: 'Percentage'
      }, {
        value: 'number',
        label: 'Number'
      }, {
        value: 'custom',
        label: 'Custom'
      }],

      globalVariables: [],
      urlVariables: [],
      globalCssVariables: [],
      websiteRoles: [],
      ecommerceVariables: [],
      imageInputIsDisabled: false,
      uploadedVariableJsonData: '',
      layoutOptions: [],
      componentsID:'settings',

      addPluginLoading: false,
      refreshPluginsLoading: false,
      refreshFolderTree: [],

      pluginsTreedata: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      checkedList: [],
      fullscreenLoading: false,

      Allposition:[
        {
          label:'Start of <head> Tag',value:'starthead'
        },{
          label:'End of <head> tag',value:'endhead'
        },{
          label:'Start of <body> Tag',value:'startbody'
        },{
          label:'End of <body> tag',value:'endbody'
        }
      ],
      externallinksJS:[],
      externallinksCSS:[],
      localscripts:[],
      localstyles:[],
      externallinksMeta:[{
        name: 'Edit Me',
        content: 'Update Me'
      }],
      Metacharset: '',
      percent:0,
      publishWebsite: false,
      activeName: 'first',
      customDomainName: '',
      userDetailId: '',
      ipAddress: config.ipAddress,
      // accountpaymentgateway: [],
      // Paymentfields: [],
      Allgateway: [],
      currentSha: '',
      publishType: 'default',
      // faviconhref: '',
      rulesProjectSettings: {
          websitename: [
              { validator: checkProjectName, trigger: 'blur' }
          ]
      },
      assetsImages: [],
      projectDetailsJson: [],
      // isProjectDetailsJsonUpdated: false,
      projectPublicUrl: '',
      isPrimaryRole: false,
      vshopcategory: [],
      uploadGlobalImageButtonLoader: false,
      uploadAssetImageLoader: false,
      refreshDisabled: false,
      loadingText: '',

      branchesData: [],

      currentBranchName: '',

      serviceListen: 0,

      commitForm: {
        branchName: '',
        commitMessage: ''
      },      

      commitRules: {
        branchName: [
          { required: true, message: 'Please enter Branch name.', trigger: 'blur' },
          { validator: checkBranchName, trigger: 'blur' }
        ],
        commitMessage: [
          { required: true, message: 'Please enter commit message.', trigger: 'blur' }
        ]
      },

      cloudinaryDetails: {},
      rulesCloudinaryDetails: {
          apiKey: [
              { required: true, message: 'Enter Cloudinary API key', trigger: 'blur' }
          ],
          apiSecret: [
              { required: true, message: 'Enter Cloudinary API secret', trigger: 'blur' }
          ],
          cloudName: [
              { required: true, message: 'Enter Cloud Name', trigger: 'blur' }
          ],
          uploadPreset: [
              { required: true, message: 'Enter Upload Preset', trigger: 'blur' }
          ]
      },
      fetchImagesLoader: false,
      loadMoreImagesLoader: false,
      isEnabledByNextCursor: true,
      taxcloud: {
        apiId: '',
        apiKey: ''
      },
      rulesTaxCloud: {
        apiId: [
            { required: true, message: 'Enter TaxCloud API ID', trigger: 'blur' }
        ],
        apiKey: [
            { required: true, message: 'Enter TaxCloud API Key', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    draggable,
    vueJsonEditor,
    settings,
    newpaymentsettings,
    addnewpaymentgatway
    // newprofileconfigure,
    // newaccountsettings

  },

  async created() {


      app.service("jobqueue").on("created", async (response) => {
      if(this.repoName==response.websiteid) {
        this.percent=0
        this.isdisabled = true;
        this.textdata='Your request to Publish website is received. Please wait while you are in a Queue.'
        // this.$emit('updateProjectName')
      }
      });

      app.service("jobqueue").on("removed", async (response) => {
        if(this.repoName==response.websiteid) {
          this.percent=0
          this.isdisabled = false;
          this.textdata=''
          this.$emit('updateProjectName')
        }
      });

      app.service("jobqueue").on("patched", async (response) => {
        console.log('patch response:',response)
       if(this.repoName==response.websiteid){

          // console.log('===========================================');
          // console.log("**"+this.repoName+"--"+response.websiteid);
          // console.log(response);
          // console.log(1111111 + '===' + this.isdisabled);
          // console.log('same id.. set disabled to true..')
         // this.isdisabled = true;
          // this.textdata='Job added Successfully. Please wait you are in Queue.'
         if(response.Status!=undefined && response.Status=='completed'){
            console.log('completed..', response)
            let dt = new Date();
            let utcDate = dt.toUTCString();
            let branchName = 'Publish_' + Math.round(new Date().getTime() / 1000);
            let commitMessage = 'Publish - ' + utcDate;            
            await this.publishcommitProject(commitMessage,branchName);
            await this.saveProjectSettings()
            await this.init()
            this.$emit('updateProjectName')
            this.isdisabled=false
         }
        if(response.Status!=undefined && (response.Status=='failed'||response.Status=='cancelled')){
          this.isdisabled=false
          this.$emit('updateProjectName')
          this.percent=0
          // console.log('job failed')
         }
        if(response.Percentage!=undefined && response.Percentage!=''){
          // console.log(1111111 + '===' + this.isdisabled);

          this.percent=response.Percentage
          // console.log('this.percent :: ',this.percent)
         }
       }
      });  
    
  },

  async mounted () {
    // console.log('mounted')
    // console.log( this.$refs['commitForm'])
   // let self = this;
    // Socket Listen for Creating File or Folder
    
    // console.log('this.serviceListen :: ', this.serviceListen);
    // console.log('srvListen :: ', srvListen);


    /*
    if(srvListen == 0)
    {
        app.service("jobqueue").on("created", async (response) => {
        if(this.repoName==response.websiteid) {
          this.percent=0
          this.isdisabled = true;
          this.textdata='Job added Successfully. Please wait you are in Queue.'
          // this.$emit('updateProjectName')
        }
      });

      app.service("jobqueue").on("removed", async (response) => {
        if(this.repoName==response.websiteid) {
          this.percent=0
          this.isdisabled = false;
          this.textdata=''
          this.$emit('updateProjectName')
        }
      });

      app.service("jobqueue").on("patched", async (response) => {
        // console.log('response:',response)
       if(this.repoName==response.websiteid){

          console.log('===========================================');
          console.log("**"+this.repoName+"--"+response.websiteid);
          console.log(response);
          console.log(1111111 + '===' + this.isdisabled);
          // console.log('same id.. set disabled to true..')
         // this.isdisabled = true;
          // this.textdata='Job added Successfully. Please wait you are in Queue.'
         if(response.Status!=undefined && response.Status=='completed'){
            // console.log('completed..', response)
            let dt = new Date();
            let utcDate = dt.toUTCString();
            let branchName = 'Publish_' + Math.round(new Date().getTime() / 1000);
            let commitMessage = 'Publish - ' + utcDate;            
            await this.publishcommitProject(commitMessage,branchName);
            await this.saveProjectSettings()
            await this.init()
            this.$emit('updateProjectName')
            this.isdisabled=false
         }
        if(response.Status!=undefined && (response.Status=='failed'||response.Status=='cancelled')){
          this.isdisabled=false
          this.$emit('updateProjectName')
          this.percent=0
          // console.log('job failed')
         }
        if(response.Percentage!=undefined && response.Percentage!=''){
          console.log(1111111 + '===' + this.isdisabled);

          this.percent=response.Percentage
          // console.log('this.percent :: ',this.percent)
         }
       }
      });  
    } */  
    
    srvListen++;
      

   // Collapsing Divs
    $(document).ready(function($) {


      $("#tooglePublishWebsite").click(function() {
        $("#togglePublishWebsiteContent").slideToggle("slow");
      });

      $("#toogleProjectSettings").click(function() {
        $("#toogleProjectSettingsContent").slideToggle("slow");
      });

      $("#toggleImportPlugin").click(function() {
        $("#toggleImportPluginContent").slideToggle("slow");
      });

      $("#toggleUrlBucket").click(function() {
        $("#toggleUrlBucketContent").slideToggle("slow");
      });

      $("#toggleGlobalVariables").click(function() {
        $("#toggleGlobalVariablesContent").slideToggle("slow");
      });

      $("#toggleExternalLinks").click(function() {
        $("#toggleExternalLinksContent").slideToggle("slow");
      });

      $("#toggleLocalscripts").click(function() {
        $("#toggleLocalscriptsContent").slideToggle("slow");
      });

      $("#toggleLocalstyles").click(function() {
        $("#toggleLocalstylesContent").slideToggle("slow");
      });


      $("#toggleMetaTags").click(function() {
        $("#toggleMetaTagsContent").slideToggle("slow");
      });

      $("#toggleAccounting").click(function() {
        $("#toggleAccountingContent").slideToggle("slow");

      });

      $("#toggleRoles").click(function() {
        $("#toggleRolesContent").slideToggle("slow");

      });

      $("#toggleCommits").click(function() {
        $("#toggleCommitsContent").slideToggle("slow");
        // if ($("#toggleCommits").text() == "List of Commits") {
        //     $("#toggleCommits").html("List of Commits")
        // } else {
        //     $("#toggleCommits").text("List of Commits")
        // }
      });

      $("#toggleAssetImages").click(function() {
        $("#toggleAssetImagesContent").slideToggle("slow");
      });

    });


    // Tabs Click Handle and Iint
    $(document).ready(function(){
      $('.tab').on('click', function(){
        showTab($(this));
      });
      
      function showTab(tab){
        var tabBar = tab.parent().find('.tab-active-bar');
        tabBar.animate({
          left: parseInt(tab.position().left)+'px',
          width: parseInt(tab.innerWidth())+'px'
        });
        $('.tab-content').hide().promise().done(function(){
          $(tab.data('target')).show();
        });
        
      }
      
      showTab($('#tab1'));
    });

    var fixmeTop = $('.fixeddiv').offset().top;
    $(window).scroll(function() {
        var currentScroll = $(window).scrollTop();
        if (currentScroll >= fixmeTop) {
            $('.fixeddiv').css({
                position: 'fixed',
                top: '20px',
                right: '100px'
            });
        } else {
            $('.fixeddiv').css({
                position: 'static'
            });
        }
    });

    // Smooth Scroll
    $(document).on('click', '.jumper-links-redirect', function(event) {
        event.preventDefault();

        $('.jumper-links li a.active').removeClass('active');
        $(this).addClass('active');

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });


    await this.init();

    let self = this;

    // $.fn.editable.defaults.mode = 'inline';

    // Brand Image uploader
    let scope = this;

    var iFileSize = 0;
    function imageSize(fileInput){
     var files = fileInput.files;
     for (var i = 0; i < files.length; i++) {
         var file = files[i];
         iFileSize = file.size;
         var imageType = /image.*/;
         if (!file.type.match(imageType)) {
             continue;
         }
     }
    }

    $('#upload-validation').change(function(e){
      imageSize(this);
      var file = $(this)[0].files[0];

      var fileData = '';

      // readFile
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function(e) {
          // browser completed reading file - display it
          fileData = e.target.result;
      };

      var fileName = e.target.files[0].name;
      var ext = $(this).val().split('.').pop().toLowerCase();
      if($.inArray(ext, ['ico','png']) == -1 && ext != ''){
        $('#text2').text('Invalid image file.');
        $('.valid').addClass('error').removeClass('correct');
        $('.valid i').removeClass('fa-paperclip').addClass('fa-exclamation');
      }else if(iFileSize >= 70000) {
        $('#text2').text('Too large file.');
        $('.valid').addClass('error').removeClass('correct');
        $('.valid i').removeClass('fa-paperclip').addClass('fa-exclamation');
      }else{
        $('.valid').removeClass('error').addClass('correct');
        $('.valid i').removeClass('fa-exclamation').addClass('fa-paperclip');

        setTimeout(function(){
          scope.uploadImage(file, fileData);
        },2000);

        if (fileName.length > 18) {
             $('#text2').text(fileName.substr(0, 10)+'...'+fileName.substr(fileName.length-8, fileName.length));
         }else{
            $('#text2').text(fileName);
        }
      }
    });

    // Global Variable JSON uploader
    $('#jsonUploaderBtn').on('click', function(){
      $('[name=uploaderVariableJson]').trigger('click');
    });

    $('[name=uploaderVariableJson]').on('change', function(e){
      var file = $(this)[0].files[0];

      var fileName = e.target.files[0].name;
      var ext = $(this).val().split('.').pop().toLowerCase();

      if(ext != 'json'){
        scope.$message({
            showClose: true,
            message: 'File must be of "JSON" type.',
            type: 'error'
        });
      } else {

        var fileData = '';

        // readFile
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async function(e) {
            fileData = await e.target.result;
        };

        setTimeout(function(){
          var jsonFileData = JSON.parse(fileData);
          if(jsonFileData.GlobalVariables && jsonFileData.GlobalCssVariables){
            // New values
            scope.globalVariables = jsonFileData.GlobalVariables;
            scope.globalCssVariables = jsonFileData.GlobalCssVariables;

            scope.saveProjectSettings();
          } else {
            scope.$message({
                showClose: true,
                message: 'Not a Proper variables file.',
                type: 'error'
            });
          }
        }, 1000);
      }

    });




    // Plugin Json Uploader
    $('#pluginJsonUploaderBtn').on('click', function(){
      $('[name=uploaderPluginJson]').trigger('click');
    });

    $('[name=uploaderPluginJson]').on('change', function(e){
      var file = $(this)[0].files[0];

      var fileName = e.target.files[0].name;
      var ext = $(this).val().split('.').pop().toLowerCase();

      if(ext != 'json'){
        scope.$message({
            showClose: true,
            message: 'File must be of "JSON" type.',
            type: 'error'
        });
      } else {

        var fileData = '';

        // readFile
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = async function(e) {
            fileData = await e.target.result;
        };

        setTimeout(function(){
          var pluginJsonFileData = JSON.parse(fileData);
          scope.addNewPlugin(pluginJsonFileData);
        }, 1000);
      }

    });
  },

  watch: {
    '$store.state.fileUrl': function(newvalue) {
      this.init()
    }
  },

  methods: {
    addNewConfig(value){
      // console.log('hi');
      this.componentsID = value;
    },
    copyToClipboard(value){
      let elem = document.getElementById(value);
      var $temp = $("<input>");
      $("body").append($temp);
      $temp.val($(elem).text()).select();
      document.execCommand("copy");
      this.$message({
        message: 'Copied to clipboard.',
        type: 'success'
      });
      $temp.remove();
    },
    sortBranchesTable(n){
      var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
      table = document.getElementById("revisionsTable");
      switching = true;
      // Set the sorting direction to ascending:
      dir = "asc"; 
      /* Make a loop that will continue until
      no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.getElementsByTagName("TR");
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare,
          one from current row and one from the next: */
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /* Check if the two rows should switch place,
          based on the direction, asc or desc: */
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch= true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch= true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch
          and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          // Each time a switch is done, increase this count by 1:
          switchcount ++; 
        } else {
          /* If no switching has been done AND the direction is "asc",
          set the direction to "desc" and run the while loop again. */
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    },

    deletefaviconimage(){
      this.form.brandLogoName='!!!No file uploaded!!!';

      $('#text2').text('Upload Image');
      $('.valid').removeClass('correct');
    },
    linktovshop(){
      window.open('https://vshopdata.'+config.domainkey);
    },
    refreshvshop(){

      // this.init();
       axios.get(config.vshopApi, {
        headers: {
          'Authorization': Cookies.get('auth_token')
        }
      }).then(res=>{
        
         this.vshopcategory = res.data;
         if(this.form.vid!=''){
          let tempvid=this.form.vid
          let checkindex=_.findIndex(this.vshopcategory,function(o){
            return o.id == tempvid
          })
         if(checkindex==-1){
          this.form.vid=''
         }
         }
         

      }).catch(err => { console.log(err); });
    },
    linktocrm(){
      window.open('https://crm.'+config.domainkey);
    },
    refreshaccounts(){
      console.log('refreshaccounts')
      // this.init()
      // var temp=this.componentsID;
      axios.get(config.crmsettingapi,{headers:{'Authorization': Cookies.get('auth_token'),'subscriptionId': Cookies.get('subscriptionId')}})
      .then(res=>{
        
        this.crmdata=res.data.data
        if(this.form.crmid!=''){
          let tempcrmid=this.form.crmid
          let checkindex=_.findIndex(this.crmdata,function(o){
            return o.id == tempcrmid
          })
         if(checkindex==-1){
          this.form.crmid=''
         }
         }

        
      })
      .catch(err => { console.log(err);  });
      this.componentsID=''
      this.componentsID='settings'


    },
    changeconfiguration(){
      for(let i=0;i<this.crmdata.length;i++){

      }
    },

    setPrimaryRole(index){
      for(var i = 0; i < this.websiteRoles.length ; i++){
        this.websiteRoles[i].isPrimary = false;
      }
      this.websiteRoles[index].isPrimary = true;
    },

    onJsonChange (value) {
      // this.isProjectDetailsJsonUpdated = true;
    },

     handleCheckAllSourcesChange(event) {
      this.checkedSources = event.target.checked ? this.cloudinaryDetails.sources : [];
      this.isIndeterminate = false;
    },

    handleCheckedSourcesChange(value){
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cloudinaryDetails.sources.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cloudinaryDetails.sources.length;
    },

    fetchcloudinaryImages(formName){
      this.$refs[formName].validate(async (valid) => {
        if(valid){
          this.fetchImagesLoader = true;
          axios.get(config.baseURL + '/cloudinary-service?cloudName=' + this.cloudinaryDetails.cloudName + '&apiKey=' + this.cloudinaryDetails.apiKey + '&apiSecret=' + this.cloudinaryDetails.apiSecret + '&nextCursor=' + this.cloudinaryDetails.nextCursor, {
          })
          .then(async (response) => {
              
              for(let i = 0; i < response.data.resources.length; i++){
                // console.log(response.data.resources[i].secure_url);
                this.assetsImages.push(response.data.resources[i].secure_url);
              }

              console.log('Cursor: ', response.data.next_cursor);

              if(response.data.next_cursor !== undefined){
                this.cloudinaryDetails.nextCursor = response.data.next_cursor;
                await this.fetchcloudinaryImages('cloudinaryDetails');
              } else {
                this.cloudinaryDetails.nextCursor = '';
                this.fetchImagesLoader = false;
              }
          })
          .catch((error) => {
              console.log(error);
              this.fetchImagesLoader = false;
          });
        }
      });
    },

    // loadMoreImages(){
    //   this.loadMoreImagesLoader = true;
    //   axios.get(config.baseURL + '/cloudinary-service?cloudName=' + this.cloudinaryDetails.cloudName + '&apiKey=' + this.cloudinaryDetails.apiKey + '&apiSecret=' + this.cloudinaryDetails.apiSecret + '&nextCursor=' + this.cloudinaryDetails.nextCursor, {
    //   })
    //   .then((response) => {
    //       for(let i = 0; i < response.data.resources.length; i++){
    //         // console.log(response.data.resources[i].secure_url);
    //         this.assetsImages.push(response.data.resources[i].secure_url);
    //       }
    //       console.log('Load More next cursor: ', response.data.next_cursor);
    //       if(response.data.next_cursor){
    //         this.nextCursor = response.data.next_cursor;
    //         this.isEnabledByNextCursor = false;
    //       } else {
    //         this.isEnabledByNextCursor = true;
    //         this.nextCursor = '';
    //       }
    //       // this.nextCursor = response.data.next_cursor;
    //       this.loadMoreImagesLoader = false;
    //   })
    //   .catch((error) => {
    //       console.log(error);
    //       this.loadMoreImagesLoader = false;
    //   });
    // },

    removeAllAssetsImages(){
      this.$confirm('This will all the images. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.assetsImages = [];
        this.isEnabledByNextCursor = false;
        this.cloudinaryDetails.nextCursor = '';
      }).catch(() => {
        console.log('Cancelled.');         
      });
    },

    uploadAssetImage(formName) {

      this.$refs[formName].validate(async (valid) => {
        if(valid){
          this.uploadAssetImageLoader = true;
          // var fsClient = filestack.init('AgfKKwgZjQ8iLBVKGVXMdz');

          // fsClient.pick({
          //   accept: 'image/*',
          //   fromSources:["local_file_system","url","imagesearch","facebook","instagram","googledrive","dropbox","evernote","flickr","box","github","gmail","picasa","onedrive","clouddrive","webcam","customsource"],
          //   rejectOnCancel: true
          // }).then( (response) => {
          //   this.uploadAssetImageLoader = false;
          //   // declare this function to handle response
          //   this.assetsImages.push(response.filesUploaded[0].url);
          //   this.saveProjectSettings();
          // }).catch( (error) => {
          //   console.log(error);
          //   this.uploadAssetImageLoader = false;
          // });

          cloudinary.openUploadWidget({ 
            cloud_name: this.cloudinaryDetails.cloudName, 
            api_key: this.cloudinaryDetails.apiKey,
            upload_preset: this.cloudinaryDetails.uploadPreset, 
            folder: this.cloudinaryDetails.uploadFolder,
            sources: ['local', 'camera', 'url', 'facebook', 'instagram']
          }, (error, result) => { 
            console.log(error, result);
            if(error != null){

              if(error.message == 'User closed widget'){

              } else {
                console.log('Image upload error: ', error);
                this.$message({
                  message: 'Upload image failed. Please try again.',
                  type: 'error'
                });  
              }
              
              this.uploadAssetImageLoader = false;  
            } else {
              for(var i = 0; i < result.length; i++){
                this.assetsImages.push(result[i].secure_url);  
              }
              this.uploadAssetImageLoader = false;  
            }
            
          });
        }
      });

    },

    deleteAssetImage(index){
      this.assetsImages.splice(index,1);
    },

    handleTabClick(tab, event) {
    },

    handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
        // var extract = require('extract-zip')
        // extract(source, {dir: target}, function (err) {
        //  // extraction is complete. make sure to handle the err
        // })
    },

    async globalImageUploading(currentImageVariableIndex, file) {

      // this.imageInputIsDisabled = true;

      // var fileParts = file.target.value.split('\\');
      // var imageName = fileParts[fileParts.length-1];

      // var scope = this;

      // var globalFileData = '';
      // // readFile
      // var reader = new FileReader();
      // reader.readAsDataURL(file.target.files[0]);
      // reader.onload = await function(e) {
      //     $('[name = '+currentImageVariableIndex+']').attr('src', e.target.result);
      //     // browser completed reading file - display it
      //     globalFileData = e.target.result;

      //     axios.post( config.baseURL + '/image-upload', {
      //         filename : scope.folderUrl + '/public/assets/' + imageName,
      //         text : globalFileData,
      //         type : 'file'
      //     })
      //     .then((res) => {
      //       //console.log(res.data);
      //     })
      //     .catch((e) => {
      //       //console.log(e)
      //     })
      // };

      // this.globalVariables[currentImageVariableIndex].variableValue = imageName;
      // this.globalVariables[currentImageVariableIndex].isImageUrl = false;

      this.uploadGlobalImageButtonLoader = true;

      var fsClient = filestack.init('AgfKKwgZjQ8iLBVKGVXMdz');

      fsClient.pick({
        accept: 'image/*',
        fromSources:["local_file_system","url","imagesearch","facebook","instagram","googledrive","dropbox","evernote","flickr","box","github","gmail","picasa","onedrive","clouddrive","webcam","customsource"]
      }).then( (response) => {
        // declare this function to handle response
        // this.assetsImages.push(response.filesUploaded[0].url);
        // this.saveProjectSettings();
        this.globalVariables[currentImageVariableIndex].variableValue = response.filesUploaded[0].url;
        this.uploadGlobalImageButtonLoader = false;
      }).catch( (error) => {
        console.log(error);
        this.uploadGlobalImageButtonLoader = false;
      });

    },

    addNewVariable() {
      let newVariable = { variableId: '', variableType: '', variableTitle: '', variableValue: '' };
      this.globalVariables.push(newVariable);
      this.imageInputIsDisabled = false;
    },

    addNewUrl() {
      let newVariable = { urlId: '', urlValue: '', urlHeaderVariables:[], finalvalue: ''};
      this.urlVariables.push(newVariable);
    },

    addNewHeader(n,index) {
      let newVariable = { headerName: '', headerValue: ''};
      this.urlVariables[index].urlHeaderVariables.push(newVariable);
    },

    addNewCssVariable() {
      let newVariable = { variableName: '', variableType: '', variableValue: ''};
      this.globalCssVariables.push(newVariable);
    },

    addNewexternallinkJS() {
      let newVariable = { linktype: 'JS', linkposition: '', linkurl: ''};
      this.externallinksJS.push(newVariable);
    },

    addNewexternallinkCSS() {
      let newVariable = { linktype: 'CSS', linkposition: '', linkurl: ''};
      this.externallinksCSS.push(newVariable);
    },

    addNewexternallinkMeta() {
      let newVariable = { name:'',content:''};
      this.externallinksMeta.push(newVariable);
      // this.editableInit();
    },

    addNewlocalscripts(){
      let newVariable = { linkposition:'',script:''};
      this.localscripts.push(newVariable);
    },

    addNewlocalstyles(){
      let newVariable = { linkposition:'',style:''};
      this.localstyles.push(newVariable);
    },

    // addNewAccountpaymentgateway(){
    //   let newVariable = {name:'',gateway:'',fields:[]};
    //   this.accountpaymentgateway.push(newVariable);
    //   this.Paymentfields.push([])
    // },

    addNewWebsiteRole(){
      let newVariable = { roleName: '' }
      this.websiteRoles.push(newVariable);
    },

    deleteWebsiteRole(deleteIndex){
      this.websiteRoles.splice(deleteIndex, 1);
    },

    deleteVariable(deleteIndex) {
      this.globalVariables.splice(deleteIndex, 1);
    },

    deleteUrlVariable(deleteIndex) {
      this.urlVariables.splice(deleteIndex, 1);
    },

    deleteUrlHeaderVariable(index,deleteIndex) {
      this.urlVariables[index].urlHeaderVariables.splice(deleteIndex, 1);
    },

    deleteCssVariable(deleteIndex) {
      this.globalCssVariables.splice(deleteIndex, 1);
    },

    deleteEcommerceVariable(deleteIndex) {
      this.ecommerceVariables.splice(deleteIndex, 1);
    },
    deletelocalscripts(deleteIndex){
      this.localscripts.splice(deleteIndex,1);
    },
    deletelocalstyles(deleteIndex){
      this.localstyles.splice(deleteIndex,1);
    },
    deletelinkJS(deleteIndex) {
      this.externallinksJS.splice(deleteIndex, 1);
    },
    deletelinkCSS(deleteIndex) {
      this.externallinksCSS.splice(deleteIndex, 1);
    },
    deletelinkMeta(deleteIndex) {
      this.externallinksMeta.splice(deleteIndex, 1);
    },

    // deleteAccountpaymentgateway(deleteIndex) {
    //   this.accountpaymentgateway.splice(deleteIndex,1);
    //   this.Paymentfields.splice(deleteIndex,1);
    // },

    // gatewaychange(n,index){
    //   this.accountpaymentgateway[index].fields=[]
    //   var indexGateway=_.findIndex(this.Allgateway,function(o){
    //     return o.name==n.gateway
    //   })
    //   for(let j=0;j<this.Allgateway[indexGateway].keys.length;j++){
    //     var temp={}
    //   temp[this.Allgateway[indexGateway].keys[j]]=''
    //   this.accountpaymentgateway[index].fields.push(temp)
    //   }
    //   this.Paymentfields[index]=this.Allgateway[indexGateway].keys
    // },

    async addNewPlugin(pluginFileData) {

      // Turn on Loader
      this.addPluginLoading = true;

      // Validate Schema (pending)

      // If Schema Valid, upload this file to /assets/client-plugins folder
      let uploadNewPluginUrl = this.folderUrl + '/public/assets/client-plugins/' + pluginFileData.name + '.json';

      // Create this file under this particular project
      axios.post(config.baseURL + '/flows-dir-listing', {
          filename : uploadNewPluginUrl ,
          text : pluginFileData,
          type : 'file'
      })
      .then((res) => {
      })
      .catch((e) => {
          this.$message({
              showClose: true,
              message: 'Failed! Please try again.',
              type: 'error'
          });
          //console.log(e)
      });

      // Create Plugin Folder and its variants
      let pluginName = pluginFileData.name;

      // Create this plugin Folder
      axios.post(config.baseURL+'/flows-dir-listing' , {
        foldername : this.folderUrl + '/Partials/' + pluginName,
        type : 'folder'
      })
      .then(async (res) => {

        this.settings[2].layoutOptions[0][pluginName] = [];

        // If it's already uploaded once
        let indexOfPartialInTreeData = _.findIndex(this.pluginsTreedata, function(o) { return o.label == pluginName; });
        if(indexOfPartialInTreeData > -1){
        } else {
          // Push New Object
          let pluginsParentObject = {
                                    children: [],
                                    label: pluginName,
                                    isActive: true
                                  };

          this.pluginsTreedata.push(pluginsParentObject);
        }

        // Loop through all partial variants
        for(let i = 0; i < pluginFileData.partials.length; i++){

          // Create Array Object for variant used to save in config.json file
          let variantEntry = {
            value: pluginFileData.partials[i].title,
            label: pluginFileData.partials[i].title
          };

          // create tree children
          // If variant already exist
          let indexOfPartialChildInTreeData = _.findIndex(this.pluginsTreedata[indexOfPartialInTreeData], function(o) { return o.label == pluginFileData.partials[i].title; });

          if(indexOfPartialChildInTreeData > -1){
          } else {

            let indexOfParentInTreeData = _.findIndex(this.pluginsTreedata, function(o) { return o.label == pluginName; });

            let pluginsChildObject =  {
                                      children: [],
                                      label: pluginFileData.partials[i].title,
                                      isActive: true
                                    };
            this.pluginsTreedata[indexOfParentInTreeData].children.push(pluginsChildObject);
          }

          // Push variantEntry in settings.layoutoptions
          this.settings[2].layoutOptions[0][pluginName].push(variantEntry);

          // Start Creating variant files
          let variantName = this.folderUrl + '/Partials/' + pluginName + '/' + pluginFileData.partials[i].title + '.html';

          let generatedCss, generatedJs;

          // Generate Css Style Tag
          let styleTag = '';
          for(let j = 0; j < pluginFileData.partials[i].css.style.length; j++){
            let key = Object.keys(pluginFileData.partials[i].css.style[j]);
            let value = Object.values(pluginFileData.partials[i].css.style[j]);

            let keyvalue = '.' + pluginFileData.partials[i].title + ' ' + key[0] + value[0] +'\n';

            styleTag += keyvalue;
          }

          // Generate Css Link tags
          let styleHref = '';
          for(let j = 0; j < pluginFileData.partials[i].css.href.length; j++){
            styleHref += '<link rel="stylesheet" type="text/css" href="' + pluginFileData.partials[i].css.href[j] + '">\n';
          }

          // Combine all Css code
          generatedCss = styleHref + '<style type="text/css">\n' + beautify(styleTag, { format: 'css'}) + '\n</style>';

          let addOnScript = 'let configData = [];\n$(function($) { $.getJSON( "../public/assets/config.json", function(data){\n var configDataRaw = data;\n configData = configDataRaw[1].projectSettings[1].GlobalVariables;\n }); ';

          let dynamicVariables = '';

          // Get all Dynamic Properties to be include in user's js code
          for(let k = 0; k < pluginFileData.partials[i].properties.dynamic.length; k++){
            let key = Object.keys(pluginFileData.partials[i].properties.dynamic[k]);
            let value = Object.values(pluginFileData.partials[i].properties.dynamic[k]);

            dynamicVariables += 'let ' + key + ' = configData.filter(function(obj){ return (obj.variableId=="' + key + '"); })[0].variableValue;\n';

            let newVariable = {
              variableId: key[0],
              variableType: 'text',
              variableTitle: '',
              variableValue: value[0]
            }

            this.globalVariables.push(newVariable);

          }

          // Generate Js Script Tag
          let scriptTag = '';
          scriptTag = '<script type="text/javascript">\n' + addOnScript + '\nsetTimeout(function(){' + dynamicVariables + '\n' + beautify(pluginFileData.partials[i].js.script, { format: 'js'}) + '\n},2000); });<\/script>';

          // Generate Js Link tags
          let scriptSrc = '';
          for(let j = 0; j < pluginFileData.partials[i].js.src.length; j++){
            scriptSrc += '<script src="' + pluginFileData.partials[i].js.src[j] + '"><\/script>\n';
          }

          // Combine all Js Code
          generatedJs = scriptTag + '\n' + scriptSrc;

          // Final Code for variant file
          let pluginContents = '<script src="https://code.jquery.com/jquery-3.2.1.js"><\/script>\n' + generatedCss + '\n' + '<div class="' + pluginFileData.partials[i].title + '">\n' + beautify(pluginFileData.partials[i].renderHtml, { format: 'html'}) + '\n</div>\n' + generatedJs;

          // Create variant files
          let pluginVariantCreation = await axios.post(config.baseURL + '/flows-dir-listing', {
              filename : variantName,
              text : pluginContents,
              type : 'file'
          })
          .then((res) => {
          })
          .catch((e) => {
          });

        }

        // Save Config File
        await this.saveProjectSettings();

        this.init();

      })
      .catch((e)=>{
        console.log("Error"+e)
      });

      this.addPluginLoading = false;
    },

    async saveConfigFile(folderUrl,configData){

        // let foldername = folderUrl.split('/');
        // foldername = foldername[6];

        let rethinkdbCheck = await axios.get(config.baseURL + '/project-configuration/' + folderUrl ).catch(err => { console.log(err); this.fullscreenLoading = false }).catch((e)=>{console.log(e)});

        if(rethinkdbCheck.data){

          // update existing data
          await axios.patch(config.baseURL + '/project-configuration/' + rethinkdbCheck.data.id, {
            configData: configData
          })
          .then(async (res) => {
          })
          .catch((e) => {
              this.$message({
                  showClose: true,
                  message: 'Failed! Please try again.',
                  type: 'error'
              });
              //console.log(e)
          });

          } else {
          this.$message({
              showClose: true,
              message: 'Data Error.',
              type: 'error'
          });
        }
    },

    recursivecall(name, partials, defaultListtemp,configData) {
      //console.log('inside recursivecall')
      for (let i = 0; i < configData[1].pageSettings.length; i++) {
        let temp = configData[1].pageSettings[i].PageName
        temp = temp.split('.')[0]
        if (name == temp) {
          for (let y = 0; y < defaultListtemp.length; y++) {
            let checkinner = false
            for (let x = 0; x < partials.length; x++) {
              if (Object.keys(partials[x])[0] == Object.keys(defaultListtemp[y])[0]) {
                if (partials[x][Object.keys(partials[x])[0]] == defaultListtemp[y][Object.keys(defaultListtemp[y])[0]].split('.')[0]) {
                  checkinner = true
                  break;
                }
              }
              var partemp = defaultListtemp[y]
              if (configData[2].layoutOptions[0][Object.keys(partemp)[0]] != undefined) {
                for (let k = 0; k < configData[2].layoutOptions[0][Object.keys(partemp)[0]].length; k++) {
                  if (configData[2].layoutOptions[0][Object.keys(partemp)[0]][k].value == partemp[Object.keys(partemp)[0]]) {
                    if (configData[2].layoutOptions[0][Object.keys(partemp)[0]][k].defaultList != undefined) {
                      this.recursivecall(name, partials, configData[2].layoutOptions[0][Object.keys(partemp)[0]][k].defaultList,configData)
                    }
                  }
                }
              }
            }
            if (checkinner != true) {
              defaultListtemp[y][Object.keys(defaultListtemp[y])[0]] = defaultListtemp[y][Object.keys(defaultListtemp[y])[0]].split('.')[0]

              configData[1].pageSettings[i].partials.push(defaultListtemp[y]);

            }
          }
        }
      }
    },

    async refreshPlugins() {
        this.refreshPluginsLoading = true;
        let getFromBetween = {
            results: [],
            string: "",
            getFromBetween: function(sub1, sub2) {
                if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
                var SP = this.string.indexOf(sub1) + sub1.length;
                var string1 = this.string.substr(0, SP);
                var string2 = this.string.substr(SP);
                var TP = string1.length + string2.indexOf(sub2);
                return this.string.substring(SP, TP);
            },
            removeFromBetween: function(sub1, sub2) {
                if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
                var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
                this.string = this.string.replace(removal, "");
            },
            getAllResults: function(sub1, sub2) {
                if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;
                var result = this.getFromBetween(sub1, sub2);
                this.results.push(result);
                this.removeFromBetween(sub1, sub2);
                if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
                    this.getAllResults(sub1, sub2);
                } else return;
            },
            get: function(string, sub1, sub2) {
                this.results = [];
                this.string = string;
                this.getAllResults(sub1, sub2);
                return this.results;
            }
        };
        // console.log('Url', config.baseURL + '/flows-dir-listing?website=' + this.repoName);

        // Call Listings API and get Tree
        console.log(config.userDetail)
        await axios.get(config.userDetail, {
                headers: {
                    'Authorization': Cookies.get('auth_token')
                }
            })
            .then(async (res) => {
              this.fullscreenLoading = true;
                await axios.get(config.baseURL + '/flows-dir-listing?website=' + Cookies.get('userDetailId') + '/' + this.repoName, {})
                    .then(async (res) => {
                        // console.log(res);
                        this.refreshPluginsLoading = false;

                        let directoryListing = res.data.children;

                        // For Partials
                        let partialsFolderIndex = _.findIndex(directoryListing, function(o) {
                            return o.name == 'Partials';
                        });

                        for (var i = 0; i < directoryListing[partialsFolderIndex].children.length; i++) {
                            if ((_.indexOf(Object.keys(this.settings[2].layoutOptions[0]), directoryListing[partialsFolderIndex].children[i].name)) > -1) {
                                // Partial is registered but check for new partial variants

                                let updates = false;

                                this.settings[2].layoutOptions[0][directoryListing[partialsFolderIndex].children[i].name] = [];

                                // Create Partial Files Entry
                                for (let j = 0; j < directoryListing[partialsFolderIndex].children[i].children.length; j++) {

                                    let fileName = directoryListing[partialsFolderIndex].children[i].children[j].name;
                                    fileName = fileName.split('.');
                                    fileName = fileName[0];

                                    if (_.find(this.settings[2].layoutOptions[0][directoryListing[partialsFolderIndex]], function(o) {
                                            return o.value = fileName;
                                        })) {} else {
                                        updates = true;

                                        let newFtpPartial = {
                                            value: fileName,
                                            label: fileName
                                        }
                                        this.settings[2].layoutOptions[0][directoryListing[partialsFolderIndex].children[i].name].push(newFtpPartial);
                                    }
                                }

                                // Only Save file when there are any new files found in already registered partials
                                // if(updates){
                                //   await this.saveProjectSettings();
                                // }

                                // this.init();

                            } else {
                                // Partial not Registered

                                // Create Partial Entry
                                this.settings[2].layoutOptions[0][directoryListing[partialsFolderIndex].children[i].name] = [];

                                // Push New Object in plugins tree
                                let refreshPluginsParentObject = {
                                    children: [],
                                    label: directoryListing[partialsFolderIndex].children[i].name,
                                    isActive: true
                                };

                                this.pluginsTreedata.push(refreshPluginsParentObject);

                                // Create Partial Files Entry
                                for (let j = 0; j < directoryListing[partialsFolderIndex].children[i].children.length; j++) {

                                    let fileName = directoryListing[partialsFolderIndex].children[i].children[j].name;
                                    fileName = fileName.split('.');
                                    fileName = fileName[0];

                                    let newFtpPartial = {
                                        value: fileName,
                                        label: fileName
                                    }

                                    this.settings[2].layoutOptions[0][directoryListing[partialsFolderIndex].children[i].name].push(newFtpPartial);

                                    let refreshIndexOfParentInTreeData = _.findIndex(this.pluginsTreedata, function(o) {
                                        return o.label == directoryListing[partialsFolderIndex].children[i].name;
                                    });

                                    let refreshPluginsChildObject = {
                                        children: [],
                                        label: fileName,
                                        isActive: true
                                    };
                                    this.pluginsTreedata[refreshIndexOfParentInTreeData].children.push(refreshPluginsChildObject);
                                }
                            }
                        }

                        // For Pages
                        let pagesFolderIndex = _.findIndex(directoryListing, function(o) {
                            return o.name == 'Pages';
                        });

                        for (var i = 0; i < directoryListing[pagesFolderIndex].children.length; i++) {
                            let pageNameIndex = _.findIndex(this.settings[1].pageSettings, function(o) {
                                return o.PageName == directoryListing[pagesFolderIndex].children[i].name;
                            });

                            if (pageNameIndex > -1) {
                                //console.log('Page already registered: ', directoryListing[pagesFolderIndex].children[i].name);
                            } else {

                                let notRegisteredPageSettings = {
                                    "PageName": directoryListing[pagesFolderIndex].children[i].name,
                                    "PageSEOTitle": "",
                                    "PageSEOKeywords": "",
                                    "PageSEODescription": "",
                                    "PageLayout": "default",
                                    "partials": [{
                                        "Header": "default"
                                    }, {
                                        "Footer": "default"
                                    }],
                                    "PageCss": [],
                                    "PageExternalCss": [],
                                    "PageExternalJs": [],
                                    "PageMetaInfo": [],
                                    "PageMetacharset": '',
                                    "ProjectScripts": [],
                                    "ProjectStyles": []

                                };

                                this.settings[1].pageSettings.push(notRegisteredPageSettings);
                            }
                        }
                        // await this.saveConfigFile(this.repoName, this.settings);
                        await this.saveProjectSettings();
                        // console.log('this.Setting',this.settings)
                        this.folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
                        let url = this.$store.state.fileUrl.replace(/\\/g, "\/");

                        let splitUrl = url.split('/');

                        let websiteName = splitUrl[6];


                        // this.configData = await axios.get( config.baseURL + '/flows-dir-listing/0?path=' + url + '/assets/config.json');

                        let configData = await axios.get(config.baseURL + '/project-configuration/' + websiteName).catch(err => {
                            console.log(err);
                            this.fullscreenLoading = false
                        }).catch((e) => {
                            console.log(e)
                        });

                        configData = JSON.parse(JSON.stringify(configData.data.configData))
                        for (let q = 0; q < Object.keys(configData[2].layoutOptions[0]).length; q++) {
                            //// console.log('partial:',Object.keys(configData[2].layoutOptions[0])[q])
                            if (Object.keys(configData[2].layoutOptions[0])[q] != ('Layout')) {
                                if (Object.keys(configData[2].layoutOptions[0])[q] != ('Menu')) {
                                    for (let p = 0; p < configData[2].layoutOptions[0][Object.keys(configData[2].layoutOptions[0])[q]].length; p++) {
                                        var namepartial = configData[2].layoutOptions[0][Object.keys(configData[2].layoutOptions[0])[q]][p].value
                                        //// console.log('name:',namepartial)
                                        var contentpage = await axios.get(config.baseURL + '/flows-dir-listing/0?path=/var/www/html/websites/' + Cookies.get('userDetailId') + '/' + this.repoName + '/Partials/' + Object.keys(configData[2].layoutOptions[0])[q] + '/' + namepartial + '.partial').catch(err => {
                                            console.log(err);
                                            this.fullscreenLoading = false
                                        });
                                        //// console.log('content of partial:',contentpage.data)
                                        //// console.log("inside !=pages directory")
                                        var content = ''
                                        content = contentpage.data;
                                        var result = (getFromBetween.get(content, "{{>", "}}"));
                                        var DefaultParams = [];
                                        if (result.length > 0) {
                                            var resultParam = result
                                            for (let i = 0; i < resultParam.length; i++) {
                                                var temp;
                                                temp = resultParam[i].trim()
                                                result[i] = result[i].trim()
                                                result[i] = result[i].replace(/&nbsp;/g, ' ').trim()
                                                temp = temp.replace(/&nbsp;/g, ' ')
                                                temp = temp.replace(/\s+/g, ' ');
                                                temp = temp.split(' ')
                                                for (let j = 0; j < temp.length; j++) {
                                                    if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                                                        if (temp[j + 1] != undefined) {
                                                            result[i] = temp[0];
                                                            if (temp[j + 1].indexOf('.') > -1) {
                                                                let x = temp[j + 1]
                                                                x = temp[j + 1].split(/'/)[1];
                                                                let obj = {}
                                                                obj[temp[0]] = x
                                                                DefaultParams.push(obj)
                                                                break;
                                                            }
                                                        } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                                                            result[i] = temp[0];
                                                            if (temp[j]) {
                                                                let x = temp[j]
                                                                x = temp[j].split(/'/)[1];
                                                                let obj = {}
                                                                obj[temp[0]] = x
                                                                DefaultParams.push(obj)
                                                                break;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                            let totalPartial = content.match(/{{>/g).length;

                                            let namefile = namepartial
                                            let namefolder = Object.keys(configData[2].layoutOptions[0])[q];
                                            let temp = {
                                                value: namefile,
                                                label: namefile,
                                                partialsList: result,
                                                defaultList: DefaultParams
                                            }
                                            let checkValue = false;
                                            for (var i = 0; i < Object.keys(configData[2].layoutOptions[0]).length; i++) {
                                                var obj = Object.keys(configData[2].layoutOptions[0])[i];
                                                if ((obj) == namefolder) {
                                                    checkValue = true;
                                                }
                                            }
                                            if (checkValue == true) {
                                                let checkFileNamevalue = false;
                                                for (let j = 0; j < configData[2].layoutOptions[0][namefolder].length; j++) {
                                                    if (configData[2].layoutOptions[0][namefolder][j].label == namefile) {
                                                        checkFileNamevalue = true
                                                        configData[2].layoutOptions[0][namefolder][j].partialsList = [];
                                                        configData[2].layoutOptions[0][namefolder][j].defaultList = [];
                                                        configData[2].layoutOptions[0][namefolder][j].partialsList = result;
                                                        configData[2].layoutOptions[0][namefolder][j].defaultList = DefaultParams;

                                                    }
                                                }
                                                if (checkFileNamevalue != true) {

                                                    configData[2].layoutOptions[0][namefolder].push(temp)
                                                }
                                                // this.saveConfigFile(this.repoName, configData);
                                            } else {
                                                //console.log('file doesnt exists');
                                            }
                                        } else {
                                            let namefile = namepartial;
                                            let namefolder = Object.keys(configData[2].layoutOptions[0])[q];
                                            let temp = {
                                                value: namefile,
                                                label: namefile,
                                            }
                                            let checkValue = false;
                                            for (var i = 0; i < Object.keys(configData[2].layoutOptions[0]).length; i++) {
                                                var obj = Object.keys(configData[2].layoutOptions[0])[i];
                                                if ((obj) == namefolder) {
                                                    checkValue = true;
                                                }
                                            }
                                            if (checkValue == true) {
                                                let checkFileNamevalue = false;
                                                for (let j = 0; j < configData[2].layoutOptions[0][namefolder].length; j++) {
                                                    if (configData[2].layoutOptions[0][namefolder][j].label == namefile) {
                                                        checkFileNamevalue = true
                                                        delete configData[2].layoutOptions[0][namefolder][j].partialsList;
                                                        delete configData[2].layoutOptions[0][namefolder][j].defaultList;
                                                    }
                                                }
                                                if (checkFileNamevalue != true) {

                                                    configData[2].layoutOptions[0][namefolder].push(temp)
                                                }
                                            } else {
                                                //console.log('file doesnt exists');
                                            }
                                        }
                                    }
                                }

                            }
                        }
                        for (let r = 0; r < configData[1].pageSettings.length; r++) {
                            let namepage = configData[1].pageSettings[r].PageName
                            let contentpage = await axios.get(config.baseURL + '/flows-dir-listing/0?path=/var/www/html/websites/' + this.userDetailId + '/' + this.repoName + '/Pages/' + namepage).catch(err => {
                                console.log(err);
                                this.fullscreenLoading = false
                            });
                            let content1 = ''
                            let name = namepage;
                            name = name.split('.')[0]
                            content1 = contentpage.data
                            let result1 = [];
                            result1 = (getFromBetween.get(content1, "{{>", "}}"));
                            let DefaultParams = [];
                            if (result1.length > 0) {
                                let resultParam = result1

                                for (let i = 0; i < resultParam.length; i++) {
                                    var temp;
                                    temp = resultParam[i].trim()
                                    result1[i] = result1[i].trim()
                                    result1[i] = result1[i].replace(/&nbsp;/g, ' ').trim()
                                    temp = temp.replace(/&nbsp;/g, ' ')
                                    temp = temp.replace(/\s+/g, ' ');
                                    temp = temp.trim();
                                    temp = temp.split(' ')
                                    for (let j = 0; j < temp.length; j++) {
                                        if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                                            if (temp[j + 1] != undefined) {
                                                result1[i] = temp[0];
                                                if (temp[j + 1].indexOf('.') > -1) {
                                                    let x = temp[j + 1]
                                                    x = temp[j + 1].split(/'/)[1];
                                                    let obj = {}
                                                    obj[temp[0]] = x
                                                    DefaultParams.push(obj)
                                                    break;
                                                }
                                            } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                                                result1[i] = temp[0];
                                                if (temp[j]) {
                                                    let x = temp[j]
                                                    x = temp[j].split(/'/)[1];
                                                    let obj = {}
                                                    obj[temp[0]] = x
                                                    DefaultParams.push(obj)
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                }

                                for (let i = 0; i < configData[1].pageSettings.length; i++) {
                                    let temp = configData[1].pageSettings[i].PageName
                                    temp = temp.split('.')[0]
                                    if (name == temp) {
                                        let partials = configData[1].pageSettings[i].partials
                                        for (let k = 0; k < result1.length; k++) {
                                            let checkpartial = false
                                            for (let l = 0; l < partials.length; l++) {

                                                if (Object.keys(partials[l])[0] == result1[k]) {
                                                    checkpartial = true //partial found in page setting
                                                    let temp1 = DefaultParams[k][result1[k]]
                                                    let temp2 = partials[l][result1[k]]
                                                    if (temp1.split('.')[0] == temp2.split('.')[0]) {
                                                        for (let z = 0; z < configData[2].layoutOptions[0][result1[k]].length; z++) {

                                                            if (configData[2].layoutOptions[0][result1[k]][z].value == DefaultParams[k][result1[k]].split('.')[0]) {
                                                                if (configData[2].layoutOptions[0][result1[k]][z].defaultList != undefined) {
                                                                    let defaultListtemp = configData[2].layoutOptions[0][result1[k]][z].defaultList
                                                                    this.recursivecall(name, partials, defaultListtemp, configData)
                                                                }
                                                            }
                                                        }
                                                        break;
                                                    } else {
                                                        checkpartial = false
                                                    }
                                                }

                                            }
                                            if (checkpartial != true) {
                                                let obj = {}
                                                obj[result1[k]] = DefaultParams[k][result1[k]].split('.')[0]
                                                for (let z = 0; z < configData[2].layoutOptions[0][result1[k]].length; z++) {
                                                    if (configData[2].layoutOptions[0][result1[k]][z].value == DefaultParams[k][result1[k]].split('.')[0]) {
                                                        if (configData[2].layoutOptions[0][result1[k]][z].defaultList != undefined) {
                                                            let defaultListtemp = configData[2].layoutOptions[0][result1[k]][z].defaultList
                                                            this.recursivecall(name, partials, defaultListtemp, configData)
                                                        }
                                                    }
                                                }
                                                configData[1].pageSettings[i].partials.push(obj);
                                                r = r - 1;
                                                break;
                                            }
                                        }
                                    } else if (name != temp) {
                                        //// console.log("file not found in config file")
                                    }
                                }
                            }

                        }
                        for (let p = 0; p < Object.keys(configData[2].layoutOptions[0]).length; p++) {
                            if (Object.keys(configData[2].layoutOptions[0])[p] == ('Layout')) {
                                for (let y = 0; y < configData[2].layoutOptions[0][Object.keys(configData[2].layoutOptions[0])[p]].length; y++) {
                                    var namelayout = configData[2].layoutOptions[0][Object.keys(configData[2].layoutOptions[0])[p]][y].value
                                    // console.log('namelayout:', namelayout)
                                    if (namelayout != 'Blank') {
                                        var content = await axios.get(config.baseURL + '/flows-dir-listing/0?path=/var/www/html/websites/' + Cookies.get('userDetailId') + '/' + this.repoName + '/Layout/' + namelayout + '.layout').catch(err => {
                                            console.log(err);
                                            this.fullscreenLoading = false
                                        });
                                        content = content.data
                                        // console.log('content', content)
                                        var result = (getFromBetween.get(content, "{{>", "}}"));
                                        var changeresult = JSON.parse(JSON.stringify(result))
                                        // console.log("changeresult:",changeresult)

                                        for (let s = 0; s < changeresult.length; s++) {
                                            content = content.replace(changeresult[s], changeresult[s].replace(/&nbsp;/g, '').replace(/\"\s+\b/g, '"').replace(/\'\s+\b/g, "'").replace(/\b\s+\'/g, "'").replace(/\b\s+\"/g, '"').replace(/\s+/g, " ").replace(/\s*$/g, "").replace(/\s*=\s*/g, '='))
                                        }
                                        await axios.post(config.baseURL + '/flows-dir-listing', {
                                            filename: this.folderUrl + '/Layout/' + namelayout + '.layout',
                                            text: content,
                                            type: 'file'
                                        })
                                        var result = (getFromBetween.get(content, "{{>", "}}"));

                                        var DefaultParams = [];
                                        if (result.length > 0) {
                                            var resultParam = result
                                            for (let i = 0; i < resultParam.length; i++) {
                                                // console.log(i)
                                                var temp;
                                                temp = resultParam[i].trim()
                                                result[i] = result[i].trim()
                                                temp = temp.split(' ')
                                                //// console.log('temp:',temp)
                                                for (let j = 0; j < temp.length; j++) {
                                                    temp[j] = temp[j].trim();
                                                    // console.log('temp',temp[j])
                                                    if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {

                                                        if ((temp[j].indexOf('=') > -1) && (temp[j + 1] == undefined) && temp[j].indexOf("'") > -1) {
                                                            result[i] = temp[0];
                                                            if (temp[j]) {
                                                                let x = temp[j]
                                                                x = temp[j].split("'")[1] + '.partial';
                                                                let obj = {}
                                                                obj[temp[0]] = x
                                                                DefaultParams.push(obj)
                                                                break;
                                                            }
                                                        }
                                                        if ((temp[j].indexOf('=') > -1) && (temp[j + 1] == undefined) && temp[j].indexOf('"') > -1) {
                                                            result[i] = temp[0];
                                                            if (temp[j]) {
                                                                let x = temp[j]
                                                                x = temp[j].split('"')[1] + '.partial';
                                                                let obj = {}
                                                                obj[temp[0]] = x
                                                                DefaultParams.push(obj)
                                                                break;
                                                            }
                                                        }
                                                    } else {
                                                        // console.log('error while finding id in layout');
                                                    }
                                                }
                                            }


                                            //here we are adding new partial added inside layout to all pages who uses this following layout.
                                            // console.log('DefaultParams',DefaultParams)
                                            for (let i = 0; i < result.length; i++) {
                                                // console.log('result',result[i])
                                                let checktvalue = false;
                                                for (let k = 0; k < DefaultParams.length; k++) {
                                                    // console.log('DefaultParams',DefaultParams[k])
                                                    if (result[i] == Object.keys(DefaultParams[k])[0]) {
                                                        for (let j = 0; j < configData[1].pageSettings.length; j++) {
                                                            if (configData[1].pageSettings[j].PageLayout == name) {
                                                                let checkdefaultvalue = false;
                                                                for (let x = 0; x < configData[1].pageSettings[j].partials.length; x++) {
                                                                    if (Object.keys(configData[1].pageSettings[j].partials[x])[0] == result[i]) {

                                                                        var defaulttemp = JSON.parse(JSON.stringify(DefaultParams[k]))
                                                                        defaulttemp[Object.keys(defaulttemp)[0]] = defaulttemp[Object.keys(defaulttemp)[0]].split('.')[0]
                                                                        configData[1].pageSettings[j].partials[x] = defaulttemp
                                                                        checkdefaultvalue = true;
                                                                    }
                                                                }
                                                                if (checkdefaultvalue != true) {
                                                                    var defaulttemp = JSON.parse(JSON.stringify(DefaultParams[k]))
                                                                    defaulttemp[Object.keys(defaulttemp)[0]] = defaulttemp[Object.keys(defaulttemp)[0]].split('.')[0]
                                                                    //// console.log('push for DefaultParams:')
                                                                    configData[1].pageSettings[j].partials.push(defaulttemp)
                                                                }
                                                            }
                                                        }
                                                        checktvalue = true
                                                    }
                                                }
                                                if (checktvalue != true) {
                                                    // console.log('!true')
                                                    for (let j = 0; j < configData[1].pageSettings.length; j++) {
                                                        if (configData[1].pageSettings[j].PageLayout == namelayout) {
                                                            let doublecheckvalue = false
                                                            for (let x = 0; x < configData[1].pageSettings[j].partials.length; x++) {
                                                                if (Object.keys(configData[1].pageSettings[j].partials[x])[0] == result[i]) {
                                                                    var defaulttemp = {}
                                                                    defaulttemp[result[i]] = 'default'
                                                                    doublecheckvalue = true
                                                                    configData[1].pageSettings[j].partials[x] = defaulttemp
                                                                }
                                                            }
                                                            if (doublecheckvalue != true) {
                                                                var defaulttemp = {}
                                                                defaulttemp[result[i]] = 'default'
                                                                configData[1].pageSettings[j].partials.push(defaulttemp)
                                                            }
                                                        }
                                                    }

                                                }
                                            }
                                        }
                                        //   let temp = {
                                        //   value: namelayout,
                                        //   label: namelayout,
                                        //   partialsList: result,
                                        //   defaultList: DefaultParams

                                        // }
                                        //Here we are creating new partial which are not present in our partial folder.
                                        // let checkValue = false;
                                        // for (var i = 0; i < configData[2].layoutOptions[0].Layout.length; i++) {
                                        //   var obj = configData[2].layoutOptions[0].Layout[i];
                                        //   if ((obj.label) == name) {
                                        //     checkValue = true;
                                        //   }
                                        // }
                                        // if (checkValue == true) {
                                        let currentFileIndex = daex.indexFirst(configData[2].layoutOptions[0].Layout, {
                                            'label': namelayout
                                        });
                                        // console.log('currentFileIndex',currentFileIndex)
                                        configData[2].layoutOptions[0].Layout[currentFileIndex].partialsList = result;
                                        configData[2].layoutOptions[0].Layout[currentFileIndex].defaultList = DefaultParams; //here default are having .partial as extension
                                        // this.saveConfigFile(folderUrl);

                                        // } else {
                                        //   configData[2].layoutOptions[0].Layout.push(temp);

                                        //   // this.saveConfigFile(folderUrl);
                                        // }
                                    }
                                    // console.log('configData',configData)
                                    // this.saveConfigFile(this.repoName, configData);


                                }

                            }

                        }
                         this.settings=configData
                        await this.saveConfigFile(this.repoName, configData);
                        await this.saveProjectSettings();
                        await this.init();
                        this.$emit('updateProjectName');
                    })
                    .catch((e) => {
                        this.refreshPluginsLoading = false;
                        this.fullscreenLoading = false;
                        let dataMessage = '';
                        if (e.message != undefined) {
                            dataMessage = e.message
                        } else if (e.response.data.message != undefined) {
                            dataMessage = e.response.data.message
                        } else {
                            dataMessage = "Please try again! Some error occured."
                        }
                        this.$confirm(dataMessage, 'Error', {
                            confirmButtonText: 'logout',
                            cancelButtonText: 'reload',
                            type: 'error',
                            center: true
                        }).then(() => {
                            localStorage.removeItem('current_sub_id');
                            this.$session.remove('username');
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
                            this.isLoggedIn = false;
                            // this.$router.push('/login');
                            window.location = '/login';
                        }).catch(() => {
                            location.reload()
                        });
                        console.log(e)
                    });
            })
            .catch((e) => {
                let dataMessage = '';
                if (e.message != undefined) {
                    dataMessage = e.message
                } else if (e.response.data.message != undefined) {
                    dataMessage = e.response.data.message
                } else {
                    dataMessage = "Please try again! Some error occured."
                }
                this.$confirm(dataMessage, 'Error', {
                    confirmButtonText: 'logout',
                    cancelButtonText: 'reload',
                    type: 'error',
                    center: true
                }).then(() => {
                    localStorage.removeItem('current_sub_id');
                    this.$session.remove('username');
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
                    this.isLoggedIn = false;
                    // this.$router.push('/login');
                    window.location = '/login';
                }).catch(() => {
                    location.reload()
                });
            })
        
        this.fullscreenLoading = false;
        // window.location.reload();
    },

    revertToTemplate(template){
      this.$confirm('This will permanatly overwrite current Pages, Partials, Layouts and Website assets. Do you want to continue?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async () => {

        this.fullscreenLoading = true;
        this.refreshDisabled = true;

        // Call service to copy files for selected template
        await axios.post( config.baseURL + '/copy-website', {
            projectPath : this.userDetailId + '/' + this.repoName,
            templateName : template
        })
        .then(async (res) => {
          // await this.refreshPlugins();

          //Copy data of project_settings.json into project-details.json
          axios.get(config.userDetail, {
            headers: {
              'Authorization' : Cookies.get('auth_token')
            }   
          })
          .then(async (res) => {
          let folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");

          var projectSettingsFileData = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/public/assets/'+process.env.domainkey+'.project_settings.json').catch((e) => { 
             let dataMessage = '';
            if (e.message != undefined) {
                dataMessage = e.message              
            } else if (e.response.data.message != undefined) {
              dataMessage = e.response.data.message
            } else{
              dataMessage = "Please try again! Some error occured."
            }
            this.$confirm(dataMessage, 'Error', {
                confirmButtonText: 'logout',
                cancelButtonText: 'reload',
                type: 'error',
                center: true
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
                location.reload()
              });
             this.fullscreenLoading = false 
           });

          // console.log('projectSettingsFileData', projectSettingsFileData);
          let data = JSON.parse(projectSettingsFileData.data);

          // console.log('Custom Json DATA: ', data);

          this.projectDetailsJson[0].project_settings = data.project_settings;

          // console.log('Json data: ', this.projectDetailsJson);

          // this.isProjectDetailsJsonUpdated = true;
          this.saveProjectSettings();

          this.refreshDisabled = false;
          // this.$notify({
          //   title: 'Success',
          //   message: 'Please press "Refresh button" to import all its Settings.',
          //   type: 'info',
          //   offset: 100
          // });

          this.fullscreenLoading = true;

          this.refreshPlugins();
          })
          .catch((e) => {
            let dataMessage = '';
            if (e.message != undefined) {
                dataMessage = e.message
            } else if (e.response.data.message != undefined) {
                dataMessage = e.response.data.message
            } else {
                dataMessage = "Please try again! Some error occured."
            }
            this.$confirm(dataMessage, 'Error', {
              confirmButtonText: 'logout',
              cancelButtonText: 'reload',
              type: 'error',
              center: true
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
                  location.reload()
              });
          })
        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: 'Failed! Please try again.',
            type: 'error'
          });
          console.log(e)
        })

      }).catch((err) => {
        //console.log('Some error occured.', err);
      });
    },

    revertToCMSTemplate(template){
      this.$confirm('This will permanatly overwrite current Pages, Partials, Layouts and Website assets. Do you want to continue?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async () => {

        this.fullscreenLoading = true;
        this.refreshDisabled = true;

        // Call service to copy files for selected template
        await axios.post( config.baseURL + '/copy-website', {
            projectPath : this.userDetailId + '/' + this.repoName,
            templateName : template
        })
        .then(async (res) => {
          // await this.refreshPlugins();

          //Copy data of project_settings.json into project-details.json
          axios.get(config.userDetail, {
            headers: {
              'Authorization' : Cookies.get('auth_token')
            }   
          })
          .then(async (res) => {
            this.saveProjectSettings();

            this.refreshDisabled = false;

            this.fullscreenLoading = true;

            this.refreshPlugins();
          })
          .catch((e) => {
            let dataMessage = '';
            if (e.message != undefined) {
                dataMessage = e.message
            } else if (e.response.data.message != undefined) {
                dataMessage = e.response.data.message
            } else {
                dataMessage = "Please try again! Some error occured."
            }
            this.$confirm(dataMessage, 'Error', {
              confirmButtonText: 'logout',
              cancelButtonText: 'reload',
              type: 'error',
              center: true
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
                  location.reload()
              });
          })
        })
        .catch((e) => {
          this.$message({
            showClose: true,
            message: 'Failed! Please try again.',
            type: 'error'
          });
          console.log(e)
        })

      }).catch((err) => {
        //console.log('Some error occured.', err);
      });
    },

    deletePlugin(deleteIndex){
      this.$confirm('This plugin will be permanently deleted. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: 'Delete completed'
        });
      }).catch(() => {

      });
    },

    downloadGlobalVariables() {
      this.saveProjectSettings();
      let exportVariables = this.settings[1].projectSettings[1];

      let textToSave = JSON.stringify(exportVariables);
      let saveFileName = 'globalVariablesData.json';
      let jsonData = new Blob([textToSave], {type: "application/json;charset=utf-8"});

      fileSaver.saveAs(jsonData, saveFileName);
    },

    downloadConfigFile() {
      this.saveProjectSettings();
      let exportConfigFile = this.settings;

      let textToSave = JSON.stringify(exportConfigFile);
      let saveFileName = 'config.json';
      let jsonData = new Blob([textToSave], {type: "application/json;charset=utf-8"});

      fileSaver.saveAs(jsonData, saveFileName);
    },

    uploadImage(fileData, fileBlob) {

      this.form.brandLogoName = fileData.name;
      // console.log(fileData)
      // this.faviconName=fileData.name
      axios.post( config.baseURL + '/image-upload', {
          filename : this.folderUrl + '/public/favicon.'+this.form.brandLogoName.split('.')[1]  ,
          text : fileBlob,
          type : 'file'
      })
      .then((res) => {
        // console.log('Brand Logo Uploaded: ', res.data);
      })
      .catch((e) => { 
        console.log(' error occured: ', e)
      });
    },

    async saveProjectSettings() {
      if (this.form.websitename == this.configData.data.websiteName) {
      } else {
        await axios.get(config.userDetail, {
          headers: {
            'Authorization' : Cookies.get('auth_token')
          }   
        })
        .then(async (res) => {
          var userid = this.folderUrl.split('/')[this.folderUrl.split('/').length - 2]
          await axios.get(config.baseURL + '/project-configuration?userId=' + userid)
          .then((res)=>{
            let checkdetail = true
            for (let i = 0; i < res.data.data.length; i++) {
              if (this.form.websitename == res.data.data[i].websiteName) {
                checkdetail = false
              }
            }
            if (checkdetail != false) {
            } else {
              this.$swal({
                title:'Save Aborted.',
                text: 'Website with "'+this.form.websitename+'" already exists!!!!',
                type: 'warning',
              })
              this.form.websitename = this.configData.data.websiteName;
              return
            }
          })
          .catch((err) => { 
            let dataMessage = '';
              if (e.message != undefined) {
                  dataMessage = e.message              
              } else if (e.response.data.message != undefined) {
                dataMessage = e.response.data.message
              } else{
                dataMessage = "Please try again! Some error occured."
              }
              this.$confirm(dataMessage, 'Error', {
              confirmButtonText: 'logout',
              cancelButtonText: 'reload',
              type: 'error',
              center: true
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
              location.reload()
            });
          });
        })
        .catch((e) => {
          let dataMessage = '';
          if (e.message != undefined) {
              dataMessage = e.message
          } else if (e.response.data.message != undefined) {
              dataMessage = e.response.data.message
          } else {
              dataMessage = "Please try again! Some error occured."
          }
          this.$confirm(dataMessage, 'Error', {
            confirmButtonText: 'logout',
            cancelButtonText: 'reload',
            type: 'error',
            center: true
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
                location.reload()
            });
        })
        
      }

      var getFromBetween = {
        results: [],
        string: "",
        getFromBetween: function(sub1, sub2) {
          if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
          var SP = this.string.indexOf(sub1) + sub1.length;
          var string1 = this.string.substr(0, SP);
          var string2 = this.string.substr(SP);
          var TP = string1.length + string2.indexOf(sub2);
          return this.string.substring(SP, TP);
        },
        removeFromBetween: function(sub1, sub2) {
          if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
          var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
          this.string = this.string.replace(removal, "");
        },
        getAllResults: function(sub1, sub2) {
          if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;
          var result = this.getFromBetween(sub1, sub2);
          this.results.push(result);
          this.removeFromBetween(sub1, sub2);
          if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
            this.getAllResults(sub1, sub2);
          } else return;
        },
        get: function(string, sub1, sub2) {
          this.results = [];
          this.string = string;
          this.getAllResults(sub1, sub2);
          return this.results;
        }
      };
      for(let i=0;i<this.urlVariables.length;i++){
        var result=getFromBetween.get(this.urlVariables[i].urlValue, "{", "}")
        var checkurl=false
        this.urlVariables[i].finalvalue= this.urlVariables[i].urlValue
        for(let j=0;j<result.length;j++){
          var indexurl=_.findIndex(this.globalVariables,function(o){
              return o.variableId==result[j]
          })
          if(indexurl!=-1 && this.globalVariables[indexurl].variableType=='text'){
          this.urlVariables[i].finalvalue=this.urlVariables[i].finalvalue.split('{'+result[j]+'}').join(this.globalVariables[indexurl].variableValue)
          }
        }
      }
      var uservid=''
      var esuser=''
      var virtualShopName=''
      var passvid=''  
      if(this.form.vid!=''){

        await axios.get('https://api.'+config.domainkey+'/pdmnew/vshopdata/'+this.form.vid,{headers:{'Authorization':Cookies.get('auth_token')}})
        .then(res=>{
           uservid=res.data.userId
           esuser=res.data.esUser
           virtualShopName=res.data.virtualShopName
           passvid=res.data.password  
        }).catch((err) => {  
        
        console.log('@@@@@@@',err);
      });
        
      }
      
      let ProjectSettings = [{
        "RepositoryId": this.newRepoId,
        "ProjectName": this.repoName,
        "BrandName": this.form.brandName,
        "BrandLogoName": this.form.brandLogoName,
        "ProjectSEOTitle": this.form.seoTitle,
        "ProjectVId": {"vid":this.form.vid, "userId":uservid, "password":passvid, "esUser":esuser,"virtualShopName":virtualShopName},
        "CrmSettingId":this.form.crmid
      }, {
        "CloudinaryDetails": this.cloudinaryDetails,
        "TaxCloud": this.taxcloud,
        "AssetImages": this.assetsImages,
        "GlobalVariables": this.globalVariables,
        "GlobalUrlVariables": this.urlVariables,
        "GlobalCssVariables": this.globalCssVariables,
        "EcommerceSettings": this.ecommerceSettings,
        "ProjectExternalCss": this.externallinksCSS,
        "ProjectExternalJs": this.externallinksJS,
        "ProjectMetaInfo": this.externallinksMeta,
        "ProjectMetacharset": this.Metacharset,
        "ProjectScripts": this.localscripts,
        "ProjectStyles": this.localstyles,
        "WebsiteRoles": this.websiteRoles,
        // "AccountPaymentGateways": this.accountpaymentgateway
      }];
      this.settings[1].projectSettings = ProjectSettings;

      let rethinkdbCheck = await axios.get(config.baseURL + '/project-configuration/' + this.repoName).catch((e) => { this.fullscreenLoading = false 
        let dataMessage = '';
            if (e.message != undefined) {
                dataMessage = e.message              
            } else if (e.response.data.message != undefined) {
              dataMessage = e.response.data.message
            } else{
              dataMessage = "Please try again! Some error occured."
            }
            this.$confirm(dataMessage, 'Error', {
          confirmButtonText: 'logout',
          cancelButtonText: 'reload',
          type: 'error',
          center: true
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
          location.reload()
        });
      });
      if (rethinkdbCheck.data) {

        // update existing data
        await axios.patch(config.baseURL + '/project-configuration/' + rethinkdbCheck.data.id, {
            configData: this.settings,
            pluginsData: this.pluginsTreedata,
            websiteName: this.form.websitename
          })
          .then(async(res) => {
            this.$notify({
              showClose: true,
              message: 'Successfully Saved.',
              type: 'success'
            });
          })
          .catch((e) => {
            this.$message({
              showClose: true,
              message: 'Failed! Please try again.',
              type: 'error'
            });
            console.log(e)
          });
          this.projectDetailsJson[0].websiteName=this.form.websitename;
          this.projectDetailsJson[0].Projectvid.vid  = this.form.vid; 
          this.projectDetailsJson[0].Projectvid.userId = uservid;
          this.projectDetailsJson[0].Projectvid.password = passvid;
          this.projectDetailsJson[0].CrmSettingId=this.form.crmid;
          this.projectDetailsJson[0].Projectvid.esUser=esuser
          this.projectDetailsJson[0].Projectvid.virtualShopName=virtualShopName
          let jsonFileName = this.folderUrl + '/public/assets/project-details.json';
          await axios.post(config.baseURL + '/save-menu', {
              filename: jsonFileName,
              text: JSON.stringify(this.projectDetailsJson),
              type: 'file'
            })
            .then((res) => {
            })
            .catch((e) => {
              this.$notify({
                showClose: true,
                message: 'Failed saving project details! Please try again.',
                type: 'error'
              });
              console.log(e)
            })
           await this.init();
          this.$emit('updateProjectName');
      } else {
        this.$notify({
          showClose: true,
          message: 'Data Error.',
          type: 'error'
        });
      }
      
    },

    revertCommit(index) {

      this.$confirm('Do you really want to rollback to "' + this.branchesData[index].branchName + '" revision?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(() => {
        this.$store.state.currentIndex = index;

        this.currentSha = this.branchesData[index].commitSHA;

        this.configData.branchName = this.branchesData[index].branchName;

        this.currentBranchName = this.branchesData[index].branchName;

        //// console.log(this.commitsData[index].commitSHA);
        axios.get( config.baseURL + '/branch-list?branchName=' + this.branchesData[index].branchName + '&repoName='+ this.repoName + '&userDetailId='+ Cookies.get('userDetailId'), {
        }).then(async response => {

          // console.log(response);

          // this.settings[0].repoSettings[0].CurrentHeadSHA = this.currentSha;

          // console.log(config.baseURL + '/configdata-history?branchName=' + this.branchesData[index].branchName + '&websiteName=' + this.repoName);

          await axios.get(config.baseURL + '/configdata-history?currentBranch=' + this.branchesData[index].branchName + '&websiteName=' + this.repoName, {
          })
          .then(async (resp) => {
            console.log('Config data resp: ', resp);
            let configData = resp.data.data[0].configData;
              this.settings = null;
              this.settings = configData;

              // update config data
              axios.patch(config.baseURL + '/project-configuration/' + configData[0].repoSettings[0].RepositoryName, {
                  configData: this.settings
              })
              .then((response) => {
                  console.log(response);
                  this.$notify({
                    message: 'Rollbacked to revision "' + this.branchesData[index].branchName + '" ',
                    type: 'success'
                  });
                  this.init();
                  this.$emit('updateProjectName');
              })
              .catch(function (error) {
                  console.log(error);
              });

              // await this.saveProjectSettings();
              // this.init();
          })
          .catch(function (error) {
              console.log(error);
              this.fullscreenLoading = false;
          });

        }).catch(error => {
          console.log( error);
        })
      }).catch(() => {
        console.log('Cancelled.')         
      });
    },

    async publishcommitProject(commitMessage,branchName){
      let self = this;

          // Check if branch exist
          let indexOfBranchName = _.findIndex(this.branchesData, function(o) { return o.branchName == branchName; });

          // If branchName is different
          if(indexOfBranchName == -1){
            // If .git was successfull
            if( this.settings[0].repoSettings[0].RepositoryId != undefined){

              this.isCommitLoading = true;
              this.$store.state.currentIndex = 0;

              // Push repository changes
              await axios.post(config.baseURL + '/gitlab-add-repo', {
                branchName: branchName,
                commitMessage: commitMessage,
                repoName: this.repoName,
                userDetailId: Cookies.get('userDetailId')
              }).then(async response => {
                if(response.data[0].code == 444){
                  this.$notify({
                    message: response.data[0].message,
                    type: 'warning'
                  });
                  this.isCommitLoading = false;
                  // this.$refs[commitForm].resetFields();
                } else {
                  // console.log('Response after branch commit : ', response);

                  if(response.status == 200 || response.status == 201){

                    await axios.get( config.baseURL + '/commit-service?projectId=' + this.newRepoId, {
                    }).then(async response => {

                      

                      this.commitsData = [];
                      for(var i in response.data){
                        this.commitsData.push({
                          commitDate: response.data[i].created_at,
                          commitSHA: response.data[i].id,
                          commitsMessage: response.data[i].title,
                        });
                      }

                      // let lastCommit = (response.data.length) - 1;

                      // console.log('Last Commit SHA: ', response.data[lastCommit].id);

                      // this.settings[0].repoSettings[0].CurrentHeadSHA = response.data[lastCommit].id;
                      // this.currentSha = response.data[lastCommit].id;

                      this.settings[0].repoSettings[0].CurrentBranch = branchName;

                      // Create entry in configdata-history table
                      await axios.post(config.baseURL + '/configdata-history', {
                          configData: this.settings,
                          currentBranch: branchName,
                          commitSHA: this.currentSha,
                          websiteName: this.repoName,
                          userId: Cookies.get('userDetailId')
                      })
                      .then(function (resp) {
                          console.log('Config revision saved in configdata-history. ', resp);
                      })
                      .catch(function (error) {
                          console.log(error);
                      });

                      this.saveProjectSettings();
                    }).catch(error => {
                      console.log("error : ", error);
                      this.fullscreenLoading = false;
                    });
                     // this.$refs[commitForm].resetFields();
                    // this.commitForm.commitMessage = '';
                    // this.commitForm.branchName = '';
                    //console.log(response.data);
                   this.$notify({
                      message: 'New revision commited. ',
                      type: 'success'
                    });
                    this.isCommitLoading = false;
                    await this.init();
                  }
                }
                
              }).catch(error => {
                console.log("error : ", error);
              })
            } else {
              // If first commit was unsuccessfull

              // add new repo to git
              let gitResponse = await axios.get(config.baseURL + '/gitlab-add-repo?nameOfRepo=' + this.repoName + '&userDetailId=' + Cookies.get('userDetailId'), {}).catch((err) => { console.log(err); this.fullscreenLoading = false });

              if(!(gitResponse.data.statusCode)){
                this.isCommitLoading = true;
                this.$store.state.currentIndex = 0;

                // Push repository changes
                axios.post(config.baseURL + '/gitlab-add-repo', {
                  branchName:branchName,
                  commitMessage: commitMessage,
                  repoName: this.repoName,
                  userDetailId: Cookies.get('userDetailId')
                }).then(async response => {

                  if(response.status == 200 || response.status == 201){

                    await axios.get( config.baseURL + '/commit-service?projectId='+this.newRepoId+'&privateToken='+Cookies.get('auth_token'), {
                    }).then(async resp => {
                      this.commitsData = [];
                      for(var i in resp.data){
                        this.commitsData.push({
                          commitDate: resp.data[i].created_at,
                          commitSHA: resp.data[i].id,
                          commitsMessage: resp.data[i].title,
                        });
                      }

                      // let lastCommit = (response.data.length) - 1;

                      // console.log('Last Commit SHA: ', response.data[lastCommit].id);

                      // this.settings[0].repoSettings[0].CurrentHeadSHA = response.data[lastCommit].id;
                      // this.currentSha = response.data[lastCommit].id;

                      this.settings[0].repoSettings[0].CurrentBranch =branchName;

                      // Create entry in configdata-history table
                      await axios.post(config.baseURL + '/configdata-history', {
                          configData: this.settings,
                          currentBranch: branchName,
                          commitSHA: this.currentSha,
                          websiteName: this.repoName,
                          userId: Cookies.get('userDetailId')
                      })
                      .then(function (resp) {
                          console.log('Config revision saved in configdata-history. ', resp);
                      })
                      .catch(function (error) {
                          console.log(error);
                      });

                      this.saveProjectSettings();
                    }).catch(error => {
                      console.log(error);
                      this.fullscreenLoading = false;
                    });

                    commitMessage = '';
                    branchName = '';

                    //console.log(response.data);
                    this.$notify({
                      message: 'New revision commited. ',
                      type: 'success'
                    });
                    this.isCommitLoading = false;
                    this.init();
                  }
                }).catch(error => {
                  //console.log("Some error occured: ", error);
                })
              } else {
                console.log('Error occured while commiting your changes. ', gitResponse);
              }
            }
          } else {
            console.log('Branch already exist.');
            this.$swal({
              text: 'Branch with name "' + branchName + '" already exists! Please try different name.',
              type: 'warning',
            })
            return false;
          }
    },


    async commitProject(commitForm) {
      axios.get(config.baseURL + '/rethinkservicecheck')
      .then(async response => {
        // console.log('commitForm:',this.$refs[commitForm])
        this.$refs[commitForm].validate(async (valid) => {
        if (valid) {

          let self = this;

          // Check if branch exist
          let indexOfBranchName = _.findIndex(this.branchesData, function(o) { return o.branchName == self.commitForm.branchName; });

          // If branchName is different
          if(indexOfBranchName == -1){
            // If .git was successfull
            if( this.settings[0].repoSettings[0].RepositoryId != undefined){

              this.isCommitLoading = true;
              this.$store.state.currentIndex = 0;

              // Push repository changes
              axios.post(config.baseURL + '/gitlab-add-repo', {
                branchName: this.commitForm.branchName,
                commitMessage: this.commitForm.commitMessage,
                repoName: this.repoName,
                userDetailId: Cookies.get('userDetailId')
              }).then(async response => {
                console.log(response);
                if(response.data[0].code == 444){
                  this.$notify({
                    message: response.data[0].message,
                    type: 'warning'
                  });
                  this.isCommitLoading = false;
                  this.$refs[commitForm].resetFields();
                } else {
                  // console.log('Response after branch commit : ', response);

                  if(response.status == 200 || response.status == 201){

                    await axios.get( config.baseURL + '/commit-service?projectId=' + this.newRepoId, {
                    }).then(async response => {

                      

                      this.commitsData = [];
                      for(var i in response.data){
                        this.commitsData.push({
                          commitDate: response.data[i].created_at,
                          commitSHA: response.data[i].id,
                          commitsMessage: response.data[i].title,
                        });
                      }

                      // let lastCommit = (response.data.length) - 1;

                      // console.log('Last Commit SHA: ', response.data[lastCommit].id);

                      // this.settings[0].repoSettings[0].CurrentHeadSHA = response.data[lastCommit].id;
                      // this.currentSha = response.data[lastCommit].id;

                      this.settings[0].repoSettings[0].CurrentBranch = this.commitForm.branchName;

                      // Create entry in configdata-history table
                      await axios.post(config.baseURL + '/configdata-history', {
                          configData: this.settings,
                          currentBranch: this.commitForm.branchName,
                          commitSHA: this.currentSha,
                          websiteName: this.repoName,
                          userId: Cookies.get('userDetailId')
                      })
                      .then(function (resp) {
                          // console.log('Config revision saved in configdata-history. ', resp);
                      })
                      .catch(function (error) {
                          console.log(error);
                      });

                      this.saveProjectSettings();
                    }).catch(error => {
                      console.log("error : ", error);
                      this.fullscreenLoading = false;
                    });
                     this.$refs[commitForm].resetFields();
                    // this.commitForm.commitMessage = '';
                    // this.commitForm.branchName = '';
                    //console.log(response.data);
                   this.$notify({
                      message: 'New revision commited. ',
                      type: 'success'
                    });
                    this.isCommitLoading = false;
                    await this.init();
                  }
                }
                
              }).catch(error => {
                console.log("error : ", error);
              })
            } else {
              // If first commit was unsuccessfull

              // add new repo to git
              let gitResponse = await axios.get(config.baseURL + '/gitlab-add-repo?nameOfRepo=' + this.repoName + '&userDetailId=' + Cookies.get('userDetailId'), {}).catch((err) => { console.log(err); this.fullscreenLoading = false });

              if(!(gitResponse.data.statusCode)){
                this.isCommitLoading = true;
                this.$store.state.currentIndex = 0;

                // Push repository changes
                axios.post(config.baseURL + '/gitlab-add-repo', {
                  branchName: this.commitForm.branchName,
                  commitMessage: this.commitForm.commitMessage,
                  repoName: this.repoName,
                  userDetailId: Cookies.get('userDetailId')
                }).then(async response => {

                  if(response.status == 200 || response.status == 201){

                    await axios.get( config.baseURL + '/commit-service?projectId='+this.newRepoId+'&privateToken='+Cookies.get('auth_token'), {
                    }).then(async resp => {
                      this.commitsData = [];
                      for(var i in resp.data){
                        this.commitsData.push({
                          commitDate: resp.data[i].created_at,
                          commitSHA: resp.data[i].id,
                          commitsMessage: resp.data[i].title,
                        });
                      }

                      // let lastCommit = (response.data.length) - 1;

                      // console.log('Last Commit SHA: ', response.data[lastCommit].id);

                      // this.settings[0].repoSettings[0].CurrentHeadSHA = response.data[lastCommit].id;
                      // this.currentSha = response.data[lastCommit].id;

                      this.settings[0].repoSettings[0].CurrentBranch = this.commitForm.branchName;

                      // Create entry in configdata-history table
                      await axios.post(config.baseURL + '/configdata-history', {
                          configData: this.settings,
                          currentBranch: this.commitForm.branchName,
                          commitSHA: this.currentSha,
                          websiteName: this.repoName,
                          userId: Cookies.get('userDetailId')
                      })
                      .then(function (resp) {
                          console.log('Config revision saved in configdata-history. ', resp);
                      })
                      .catch(function (error) {
                          console.log(error);
                      });

                      this.saveProjectSettings();
                    }).catch(error => {
                      console.log(error);
                      this.fullscreenLoading = false;
                    });

                    this.commitForm.commitMessage = '';
                    this.commitForm.branchName = '';

                    //console.log(response.data);
                    this.$notify({
                      message: 'New revision commited. ',
                      type: 'success'
                    });
                    this.isCommitLoading = false;
                    this.init();
                  }
                }).catch(error => {
                  //console.log("Some error occured: ", error);
                })
              } else {
                console.log('Error occured while commiting your changes. ', gitResponse);
              }
            }
          } else {
            console.log('Branch already exist.');
            this.$swal({
              text: 'Branch with name "' + this.commitForm.branchName + '" already exists! Please try different name.',
              type: 'warning',
            })
            return false;
          }

        } else {
          console.log('Error submit.');
          return false;
        }
      });

      })
      .catch(e => {
        console.log('e:',e)
        let dataMessage = '';
            if (e.message != undefined) {
                dataMessage = e.message              
            } else if (e.response.data.message != undefined) {
              dataMessage = e.response.data.message
            } else{
              dataMessage = "Please try again! Some error occured."
            }
          this.$confirm(dataMessage, 'Error', {
          confirmButtonText: 'logout',
          cancelButtonText: 'reload',
          type: 'error',
          center: true
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
          location.reload()
        });
      })
      
    },
    cancelpublishjobqueue(){
     if (Cookies.get('auth_token') != null && Cookies.get('auth_token') != undefined) {
        this.$confirm('Do you wish to Cancel publishling your website !!! Continue ?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(async () => {

          await axios.delete(config.baseURL+'/jobqueue?websiteid='+this.repoName).then((res)=>{
             // this.isdisabled=false
             // console.log('canceled called');
             // this.$emit('updateProjectName')
                axios.patch(config.baseURL + '/jobqueue', {
              'Status': 'cancelled',
              'websiteName': this.form.websitename ,
              'websiteid': this.repoName,
              'userId':Cookies.get('userDetailId')
              }).catch((e) => {
                  console.log(e)
              })
          }).catch((e)=>{
            console.log(e)
          })
          // console.log('canceldata',canceldata.data)
        })
     } else {
         this.newProjectFolderDialog = false;
         this.fullscreenLoading = false;
         this.$session.remove('username');
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

         this.$notify({
             message: 'You\'re Logged Out From System. Please login again!',
             duration: 500,
             type: 'error',
             onClose() {
                 window.location = '/login'
             }
         });

         return;
         // this.$swal("You're Logged Out From System. Please login again!")
         // .then((value) => {
         //   window.location = '/login'
         // });
     }
    },
    async publishjobqueue(){
      if (Cookies.get('auth_token') != null && Cookies.get('auth_token') != undefined) {

        this.$confirm('Do you wish to Publish your website: '+this.form.websitename+' ?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(async () => {
          this.fullscreenLoading = true;
          let folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
            //Now disabling the publish button.
            this.percent=0
            this.textdata=''
            //alert(this.isdisabled);
            // this.isdisabled=true;


            //Now calling api to copy of all folder to a temporary location.

            await axios.post(config.baseURL+'/copy-jobqueue-publish-files?projectPath='+folderUrl)
            .then(async(res)=>{
              // console.log('Copy Successfull!!') 

               let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + this.repoName).catch((err) => {
                  console.log(err);
                  this.fullscreenLoading=false;
                  this.isdisabled=false;
                });
               // console.log(responseConfig.data)
              //Now we have all necesary data to call jobqueue api

              await axios.post(config.baseURL+'/jobqueue',{
                RepojsonData:responseConfig.data,
                userId:Cookies.get('userDetailId'),
                websiteId:this.repoName,
                baseURL:config.baseURL})
              .then(async(res)=>{
                // console.log(res)
                if(res.data.data=='successfull'){
                  this.textdata='Job added successfull. Please wait you are in Queue.'
                }
                else if(res.data.data=='failed'){
                  // this.isdisabled=false;
                  console.log('failed')
                }
                // this.$emit('updateProjectName')
                 
                this.fullscreenLoading=false
                //Now we will keep listening for jobqueue completion.
                
                // this.isdisabled=false;
                
              }).catch((err)=>{
                this.fullscreenLoading=false
                this.isdisabled=false;
                console.log(err);
              })
            })
            .catch((err)=>{ 
              this.isdisabled=false;
              this.fullscreenLoading=false;
              console.log(err)
            })         
    
        }).catch((err) => {
          console.log(err);
        });

      } else {
        this.newProjectFolderDialog = false;
        this.fullscreenLoading = false;
        this.$session.remove('username');
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

        this.$notify({
          message: 'You\'re Logged Out From System. Please login again!',
          duration: 500,
          type: 'error',
          onClose() {
            window.location = '/login'
          }
        });

        return;
        // this.$swal("You're Logged Out From System. Please login again!")
        // .then((value) => {
        //   window.location = '/login'
        // });
      }
    },

    async publishMetalsmith(publishType) {

      if (Cookies.get('auth_token') != null && Cookies.get('auth_token') != undefined) {
        if (publishType == 'custom') {
          //console.log('Custom Domain')
          if (this.customDomainName == '') {
            this.fullscreenLoading = false;
            this.$swal({
              text: 'Please enter your domain.',
              type: 'error',
            });
            return;
          }
        }
        
        this.$confirm('Do you want to publish your website? This will take a while to process. Continue?', 'Warning', {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(async () => {

          this.fullscreenLoading = true;

          let folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");

          let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + this.repoName).catch((e) => {
            console.log(e);
            this.fullscreenLoading = false
            let dataMessage = '';
            if (e.message != undefined) {
                dataMessage = e.message              
            } else if (e.response.data.message != undefined) {
              dataMessage = e.response.data.message
            } else{
              dataMessage = "Please try again! Some error occured."
            }
            this.$confirm(dataMessage, 'Error', {
              confirmButtonText: 'logout',
              cancelButtonText: 'reload',
              type: 'error',
              center: true
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
              location.reload()
            }); 
          });
          let rawConfigs = responseConfig.data.configData;
          let partialstotal = []
          let pageSeoTitle;
          let externalJs = rawConfigs[1].projectSettings[1].ProjectExternalJs;
          let externalCss = rawConfigs[1].projectSettings[1].ProjectExternalCss;
          let metaInfo = rawConfigs[1].projectSettings[1].ProjectMetaInfo;
          let ProjectMetacharset = rawConfigs[1].projectSettings[1].ProjectMetacharset
          let projectscripts = rawConfigs[1].projectSettings[1].ProjectScripts
          let projectstyles = rawConfigs[1].projectSettings[1].ProjectStyles
          let projectseotitle = rawConfigs[1].projectSettings[0].ProjectSEOTitle;
          let ProjectFaviconName = rawConfigs[1].projectSettings[0].BrandLogoName
          let favicon = ''
          let SeoTitle = ''
          var getFromBetween = {
            results: [],
            string: "",
            getFromBetween: function(sub1, sub2) {
              if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
              var SP = this.string.indexOf(sub1) + sub1.length;
              var string1 = this.string.substr(0, SP);
              var string2 = this.string.substr(SP);
              var TP = string1.length + string2.indexOf(sub2);
              return this.string.substring(SP, TP);
            },
            removeFromBetween: function(sub1, sub2) {
              if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return false;
              var removal = sub1 + this.getFromBetween(sub1, sub2) + sub2;
              this.string = this.string.replace(removal, "");
            },
            getAllResults: function(sub1, sub2) {
              if (this.string.indexOf(sub1) < 0 || this.string.indexOf(sub2) < 0) return;
              var result = this.getFromBetween(sub1, sub2);
              this.results.push(result);
              this.removeFromBetween(sub1, sub2);
              if (this.string.indexOf(sub1) > -1 && this.string.indexOf(sub2) > -1) {
                this.getAllResults(sub1, sub2);
              } else return;
            },
            get: function(string, sub1, sub2) {
              this.results = [];
              this.string = string;
              this.getAllResults(sub1, sub2);
              return this.results;
            }
          };

          // await axios.get(config.baseURL + '/delete-publish-files', {}).then(async(response) => {
          //   // console.log('deleted previous published files.')
          // }).catch((err) => {
          //   console.log(err);
          //   this.fullscreenLoading = false
          // })
          for (let i = 0; i < rawConfigs[1].pageSettings.length; i++) {
            this.loadingText = ((i / rawConfigs[1].pageSettings.length) * 100).toFixed(0) + '% Done.' + 'Now publishing ' + rawConfigs[1].pageSettings[i].PageName + ' page.';
            var tophead = '';
            var endhead = '';
            var topbody = '';
            var endbody = '';
            if (projectseotitle != undefined && projectseotitle != '') {
              SeoTitle = projectseotitle
            }
            if (ProjectFaviconName != undefined && ProjectFaviconName != '' && ProjectFaviconName != '!!!No file uploaded!!!') {

              favicon = ' <link rel="icon" type="image/png" href="./favicon.' + ProjectFaviconName.split('.')[1] + '">'
            }
            // if(projectfaviconhref!=undefined&& projectfaviconhref!=''){
            //   favicon='<link rel="icon" type="image/png/gif" href="'+projectfaviconhref+'">'
            // }
            if (ProjectMetacharset != undefined && ProjectMetacharset != '') {
              tophead = tophead + '<meta charset="' + ProjectMetacharset + '">'
            }

            if (metaInfo != undefined && metaInfo.length > 0) {
              for (let a = 0; a < metaInfo.length; a++) {

                if ((metaInfo[a].name != '' && metaInfo[a].name.trim().length > 0) && (metaInfo[a].content != '' && metaInfo[a].content.trim().length > 0)) {
                  // console.log('metainfo',a)
                  tophead = tophead + '<meta name="' + metaInfo[a].name + '" content="' + metaInfo[a].content + '">'
                }
              }
            }

            if (externalJs != undefined && externalJs.length > 0) {
              for (let a = 0; a < externalJs.length; a++) {
                if (externalJs[a].linkposition == 'starthead' && externalJs[a].linkurl.trim().length > 0) {
                  tophead = tophead + '<script src="' + externalJs[a].linkurl + '"><\/script>'
                } else if (externalJs[a].linkposition == 'endhead' && externalJs[a].linkurl.trim().length > 0) {
                  endhead = endhead + '<script src="' + externalJs[a].linkurl + '"><\/script>'
                } else if (externalJs[a].linkposition == 'startbody' && externalJs[a].linkurl.trim().length > 0) {
                  topbody = topbody + '<script src="' + externalJs[a].linkurl + '"><\/script>'
                } else if (externalJs[a].linkposition == 'endbody' && externalJs[a].linkurl.trim().length > 0) {
                  endbody = endbody + '<script src="' + externalJs[a].linkurl + '"><\/script>'
                }
              }
            }

            if (externalCss != undefined && externalCss.length > 0) {
              for (let a = 0; a < externalCss.length; a++) {
                if (externalCss[a].linkposition == 'starthead' && externalCss[a].linkurl.trim().length > 0) {
                  tophead = tophead + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
                } else if (externalCss[a].linkposition == 'endhead' && externalCss[a].linkurl.trim().length > 0) {
                  endhead = endhead + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
                } else if (externalCss[a].linkposition == 'startbody' && externalCss[a].linkurl.trim().length > 0) {
                  topbody = topbody + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '">'
                } else if (externalCss[a].linkposition == 'endbody' && externalCss[a].linkurl.trim().length > 0) {
                  endbody = endbody + '<link rel="stylesheet" type="text/css" href="' + externalCss[a].linkurl + '"> '
                }

              }
            }
            if (projectscripts != undefined && projectscripts.length > 0) {
              for (let a = 0; a < projectscripts.length; a++) {
                if (projectscripts[a].linkposition == 'starthead' && projectscripts[a].script.trim().length > 0) {
                  tophead = tophead + '<script type="text/javascript">' + projectscripts[a].script + '<\/script>'
                } else if (projectscripts[a].linkposition == 'endhead' && projectscripts[a].script.trim().length > 0) {
                  endhead = endhead + '<script type="text/javascript">' + projectscripts[a].script + '<\/script>'
                } else if (projectscripts[a].linkposition == 'startbody' && projectscripts[a].script.trim().length > 0) {
                  topbody = topbody + '<script type="text/javascript">' + projectscripts[a].script + '<\/script>'
                } else if (projectscripts[a].linkposition == 'endbody' && projectscripts[a].script.trim().length > 0) {
                  endbody = endbody + '<script type="text/javascript">' + projectscripts[a].script + '<\/script>'
                }
              }
            }
            if (projectstyles != undefined && projectstyles.length > 0) {
              for (let a = 0; a < projectstyles.length; a++) {
                if (projectstyles[a].linkposition == 'starthead' && projectstyles[a].style.trim().length > 0) {
                  tophead = tophead + '<style type="text/css">' + projectstyles[a].style + '<\/style>'
                } else if (projectstyles[a].linkposition == 'endhead' && projectstyles[a].style.trim().length > 0) {
                  endhead = endhead + '<style type="text/css">' + projectstyles[a].style + '<\/style>'
                } else if (projectstyles[a].linkposition == 'startbody' && projectstyles[a].style.trim().length > 0) {
                  topbody = topbody + '<style type="text/css">' + projectstyles[a].style + '<\/style>'
                } else if (projectstyles[a].linkposition == 'endbody' && projectstyles[a].style.trim().length > 0) {
                  endbody = endbody + '<style type="text/css">' + projectstyles[a].style + '<\/style>'
                }
              }
            }
            var partials = ''
            let responseConfigLoop = await axios.get(config.baseURL + '/project-configuration/' + this.repoName).catch((err) => {
              console.log(err);
              this.fullscreenLoading = false
            });

            var rawSettings = responseConfigLoop.data.configData;
            var nameF = rawSettings[1].pageSettings[i].PageName.split('.')[0]
              // console.log('nameF:', nameF)
            var Layout = ''
            var partialsPage = [];
            var vuepartials = [];
            var pagescripts = [];
            var pagestyles = [];
            var layoutdata = '';
            var pageexternalJs = [];
            var pageexternalCss = [];
            var pageMetaInfo = [];

            var PageMetacharset = '';

            Layout = rawSettings[1].pageSettings[i].PageLayout
            partialsPage = rawSettings[1].pageSettings[i].partials
            var back_partials = JSON.parse(JSON.stringify(partialsPage));
            vuepartials = rawSettings[1].pageSettings[i].VueComponents
            pageexternalJs = rawSettings[1].pageSettings[i].PageExternalJs;
            pageexternalCss = rawSettings[1].pageSettings[i].PageExternalCss;
            pageMetaInfo = rawSettings[1].pageSettings[i].PageMetaInfo;
            pageSeoTitle = rawSettings[1].pageSettings[i].PageSEOTitle;
            PageMetacharset = rawSettings[1].pageSettings[i].PageMetacharset;
            pagescripts = rawSettings[1].pageSettings[i].PageScripts;
            pagestyles = rawSettings[1].pageSettings[i].PageStyles;

            if (pageSeoTitle != undefined && pageSeoTitle != '') {
              SeoTitle = pageSeoTitle
            }
            if (PageMetacharset != undefined && PageMetacharset != '' && !(ProjectMetacharset != '')) {
              tophead = tophead + '<meta charset="' + PageMetacharset + '">'
            }
            if (pageMetaInfo != undefined && pageMetaInfo.length > 0) {
              for (let a = 0; a < pageMetaInfo.length; a++) {
                if ((pageMetaInfo[a].name != '' && pageMetaInfo[a].name.trim().length > 0) && (pageMetaInfo[a].content != '' && pageMetaInfo[a].content.trim().length > 0)) {

                  tophead = tophead + '<meta name="' + pageMetaInfo[a].name + '" content="' + pageMetaInfo[a].content + '">'
                }
              }
            }
            if (pageexternalJs != undefined && pageexternalJs.length > 0) {
              for (let a = 0; a < pageexternalJs.length; a++) {
                if (pageexternalJs[a].linkposition == 'starthead' && pageexternalJs[a].linkurl.trim().length > 0) {
                  tophead = tophead + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                } else if (pageexternalJs[a].linkposition == 'endhead' && pageexternalJs[a].linkurl.trim().length > 0) {
                  endhead = endhead + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                } else if (pageexternalJs[a].linkposition == 'startbody' && pageexternalJs[a].linkurl.trim().length > 0) {
                  topbody = topbody + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                } else if (pageexternalJs[a].linkposition == 'endbody' && pageexternalJs[a].linkurl.trim().length > 0) {
                  endbody = endbody + '<script src="' + pageexternalJs[a].linkurl + '"><\/script>'
                }
              }
            }

            if (pageexternalCss != undefined && pageexternalCss.length > 0) {
              for (let a = 0; a < pageexternalCss.length; a++) {
                if (pageexternalCss[a].linkposition == 'starthead' && pageexternalCss[a].linkurl.trim().length > 0) {
                  tophead = tophead + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
                } else if (pageexternalCss[a].linkposition == 'endhead' && pageexternalCss[a].linkurl.trim().length > 0) {
                  endhead = endhead + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
                } else if (pageexternalCss[a].linkposition == 'startbody' && pageexternalCss[a].linkurl.trim().length > 0) {
                  topbody = topbody + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '">'
                } else if (pageexternalCss[a].linkposition == 'endbody' && pageexternalCss[a].linkurl.trim().length > 0) {
                  endbody = endbody + '<link rel="stylesheet" type="text/css" href="' + pageexternalCss[a].linkurl + '"> '
                }
              }
            }
            if (pagescripts != undefined && pagescripts.length > 0) {
              for (let a = 0; a < pagescripts.length; a++) {
                if (pagescripts[a].linkposition == 'starthead' && pagescripts[a].script.trim().length > 0) {
                  tophead = tophead + '<script type="text/javascript">' + pagescripts[a].script + '<\/script>'
                } else if (pagescripts[a].linkposition == 'endhead' && pagescripts[a].script.trim().length > 0) {
                  endhead = endhead + '<script type="text/javascript">' + pagescripts[a].script + '<\/script>'
                } else if (pagescripts[a].linkposition == 'startbody' && pagescripts[a].script.trim().length > 0) {
                  topbody = topbody + '<script type="text/javascript">' + pagescripts[a].script + '<\/script>'
                } else if (pagescripts[a].linkposition == 'endbody' && pagescripts[a].script.trim().length > 0) {
                  endbody = endbody + '<script type="text/javascript">' + pagescripts[a].script + '<\/script>'
                }
              }
            }
            if (pagestyles != undefined && pagestyles.length > 0) {
              for (let a = 0; a < pagestyles.length; a++) {
                if (pagestyles[a].linkposition == 'starthead' && pagestyles[a].style.trim().length > 0) {
                  tophead = tophead + '<style type="text/css">' + pagestyles[a].style + '<\/style>'
                } else if (pagestyles[a].linkposition == 'endhead' && pagestyles[a].style.trim().length > 0) {
                  endhead = endhead + '<style type="text/css">' + pagestyles[a].style + '<\/style>'
                } else if (pagestyles[a].linkposition == 'startbody' && pagestyles[a].style.trim().length > 0) {
                  topbody = topbody + '<style type="text/css">' + pagestyles[a].style + '<\/style>'
                } else if (pagestyles[a].linkposition == 'endbody' && pagestyles[a].style.trim().length > 0) {
                  endbody = endbody + '<style type="text/css">' + pagestyles[a].style + '<\/style>'
                }
              }
            }

            if (Layout == 'Blank') {
              await axios.post(config.baseURL + '/flows-dir-listing', {
                  filename: folderUrl + '/Layout/Blank.layout',
                  text: '{{{ contents }}}',
                  type: 'file'
                })
                .catch((e) => {
                  //console.log("error while blank file creation")
                })
            }
            layoutdata = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Layout/' + Layout + '.layout').catch((err) => {
              console.log(err);
              this.fullscreenLoading = false
            });
            var responseMetal = '';

            let backupMetalSmith = '';

            let contentpartials = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Pages/' + nameF + '.html').catch((err) => {
              console.log(err);
              this.fullscreenLoading = false
            });
            contentpartials = contentpartials.data
            var backlayoutdata = JSON.parse(JSON.stringify(layoutdata));
            let newFolderName = folderUrl + '/temp';
            await axios.post(config.baseURL + '/flows-dir-listing', {
                foldername: newFolderName,
                type: 'folder'
              }).then(async(res) => {
                for (let p = 0; p < back_partials.length; p++) {
                  let responsepartials = await axios.get(config.baseURL + '/flows-dir-listing/0?path=' + folderUrl + '/Partials/' + Object.keys(back_partials[p]) + '/' + back_partials[p][Object.keys(back_partials[p])] + '.partial').catch((err) => {
                    console.log(err);
                    this.fullscreenLoading = false
                  });
                  responsepartials = responsepartials.data
                  let result = (getFromBetween.get(responsepartials, "{{>", "}}"));
                  var DefaultParams = [];
                  if (result.length > 0) {
                    var resultParam = result
                    for (let q = 0; q < resultParam.length; q++) {
                      var temp;
                      temp = resultParam[q].trim()
                      result[q] = result[q].trim()
                      temp = temp.replace(/&nbsp;/g, ' ')
                      temp = temp.replace(/\s+/g, ' ');
                      temp = temp.trim();
                      temp = temp.split(' ')
                      for (let j = 0; j < temp.length; j++) {
                        if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                          if (temp[j + 1] != undefined) {
                            result[q] = temp[0];
                            if (temp[j + 1].indexOf('.') > -1) {
                              let x = temp[j + 1]
                              x = temp[j + 1].split(/'/)[1];
                              let obj = {}
                              obj[temp[0]] = x
                              DefaultParams.push(obj)
                              break;
                            }
                          } else if ((temp[j].indexOf('.') > -1) && (temp[j + 1] == undefined)) {
                            result[q] = temp[0];
                            if (temp[j]) {
                              let x = temp[j]
                              x = temp[j].split(/'/)[1];
                              let obj = {}
                              obj[temp[0]] = x
                              DefaultParams.push(obj)
                              break;
                            }
                          }
                        }
                      }
                    }
                    for (let j = 0; j < result.length; j++) {
                      temp1 = '{{> ' + Object.keys(DefaultParams[j])[0] + " id='" + DefaultParams[j][Object.keys(DefaultParams[j])[0]] + "' }}"

                      temp2 = '{{> ' + Object.keys(DefaultParams[j])[0] + '_' + DefaultParams[j][Object.keys(DefaultParams[j])[0]].split('.')[0] + " id='" + DefaultParams[j][Object.keys(DefaultParams[j])[0]] + "' }}"
                      responsepartials = responsepartials.split(temp1).join(temp2)
                    }
                  }
                  await axios.post(config.baseURL + '/flows-dir-listing', {
                    filename: folderUrl + '/temp/' + Object.keys(back_partials[p]) + '_' + back_partials[p][Object.keys(back_partials[p])] + '.html',
                    text: responsepartials,
                    type: 'file'
                  }).catch((e) => {
                    console.log(e)
                  })
                }
                let result = (getFromBetween.get(layoutdata.data, "{{>", "}}"));
                var changeresult = JSON.parse(JSON.stringify(result))
                for (let s = 0; s < changeresult.length; s++) {
                  layoutdata.data = layoutdata.data.replace(changeresult[s], changeresult[s].replace(/&nbsp;/g, '').replace(/\"\s+\b/g, '"').replace(/\'\s+\b/g, "'").replace(/\b\s+\'/g, "'").replace(/\b\s+\"/g, '"').replace(/\s+/g, " ").replace(/\s*$/g, "").replace(/\s*=\s*/g, '='))
                }
                DefaultParams = [];
                if (result.length > 0) {
                  var resultParam = result
                  for (let i = 0; i < resultParam.length; i++) {
                    var temp;
                    temp = resultParam[i].trim()
                    result[i] = result[i].trim()

                    temp = temp.split(' ')
                    for (let j = 0; j < temp.length; j++) {
                      temp[j] = temp[j].trim();
                      if ((temp[j].indexOf('id') != -1 || temp[j].indexOf('=') != -1)) {
                        if ((temp[j].indexOf('=') > -1) && (temp[j + 1] == undefined) && temp[j].indexOf("'") > -1) {
                          result[i] = temp[0];
                          if (temp[j]) {
                            let x = temp[j]
                            x = temp[j].split("'")[1] + '.partial';
                            let obj = {}
                            obj[temp[0]] = x
                            DefaultParams.push(obj)
                            break;
                          }
                        }
                        if ((temp[j].indexOf('=') > -1) && (temp[j + 1] == undefined) && temp[j].indexOf('"') > -1) {
                          result[i] = temp[0];
                          if (temp[j]) {
                            let x = temp[j]
                            x = temp[j].split('"')[1] + '.partial';
                            let obj = {}
                            obj[temp[0]] = x
                            DefaultParams.push(obj)
                            break;
                          }
                        } else {
                          //console.log('Error while finding ID in layout');
                        }
                      }
                    }
                  }
                  for (let j = 0; j < result.length; j++) {
                    for (let i = 0; i < back_partials.length; i++) {
                      if (Object.keys(back_partials[i])[0] == result[j]) {

                        temp1 = '{{> ' + Object.keys(back_partials[i])[0] + '}}'
                        if (layoutdata.data.search(temp1) > 0) {

                          temp2 = '{{> ' + Object.keys(back_partials[i])[0] + '_' + back_partials[i][Object.keys(back_partials[i])[0]] + '}}'
                        } else {
                          var indexdefault = _.findIndex(DefaultParams, function(o) {
                            return Object.keys(o)[0] == result[j]
                          })
                          temp1 = "{{> " + Object.keys(back_partials[i])[0] + " id='" + DefaultParams[indexdefault][Object.keys(back_partials[i])[0]].split('.')[0] + "'}}"

                          temp2 = "{{> " + Object.keys(back_partials[i])[0] + '_' + back_partials[i][Object.keys(back_partials[i])[0]] + " id='" + DefaultParams[indexdefault][Object.keys(back_partials[i])[0]].split('.')[0] + "'}}"
                        }
                        if (layoutdata.data.split(temp1).join(temp2)) {
                          layoutdata.data = layoutdata.data.split(temp1).join(temp2)
                          break;
                        } else {
                          //console.log('Replacing in layout file failed')
                        }
                      }
                    }
                  }
                }
              })
              .catch((e) => {
                console.log(e)
              })

            responseMetal = "var Metalsmith=require('" + config.metalpath + "metalsmith');\nvar markdown=require('" + config.metalpath + "metalsmith-markdown');\nvar layouts=require('" + config.metalpath + "metalsmith-layouts');\nvar permalinks=require('" + config.metalpath + "metalsmith-permalinks');\nvar inPlace = require('" + config.metalpath + "metalsmith-in-place')\nvar fs=require('" + config.metalpath + "file-system');\nvar Handlebars=require('" + config.metalpath + "handlebars');\n Metalsmith(__dirname)\n.metadata({\ntitle: \"Demo Title\",\ndescription: \"Some Description\",\ngenerator: \"Metalsmith\",\nurl: \"http://www.metalsmith.io/\"})\n.source('')\n.destination('" + folderUrl + "/public')\n.clean(false)\n.use(markdown())\n.use(inPlace(true))\n.use(layouts({engine:'handlebars',directory:'" + folderUrl + "/Layout'}))\n.build(function(err,files)\n{if(err){\nconsole.log(err)\n}});"

            backupMetalSmith = JSON.parse(JSON.stringify(responseMetal));

            var index = responseMetal.search('.source')

            responseMetal = responseMetal.substr(0, index + 9) + folderUrl + '/Preview' + responseMetal.substr(index + 9)
            var indexPartial = responseMetal.search("handlebars");

            for (var j = 0; j < partialsPage.length; j++) {
              var temp1, temp2;
              temp1 = '{{> ' + Object.keys(partialsPage[j])[0] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + ".partial' }}"

              temp2 = '{{> ' + Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]] + " id='" + partialsPage[j][Object.keys(partialsPage[j])[0]] + ".partial' }}"

              //// console.log('temp1:',temp1)
              //// console.log('temp2:',temp2)
              if (contentpartials.match(temp1)) {
                contentpartials = contentpartials.split(temp1).join(temp2)
              }
              var obj = {}
              var key = Object.keys(partialsPage[j])[0] + '_' + partialsPage[j][Object.keys(partialsPage[j])[0]]
                //// console.log('key:',key)
                //// console.log('partialsPage:',partialsPage[j][Object.keys(partialsPage[j])[0]])
              obj[key] = partialsPage[j][Object.keys(partialsPage[j])[0]]
              partialsPage[j] = []
              partialsPage[j] = obj

            }
            for (var z = 0; z < partialsPage.length; z++) {
              let key = Object.keys(partialsPage[z])[0];
              let value = partialsPage[z]
              let key2 = key;
              key = key.trim();
              if (value[key2].match('partial')) {
                key = key.split('.')[0]
                var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/temp/" + Object.keys(back_partials[z])[0] + "_" + value[key2] + "').toString())\n"
              } else {
                var temp = "Handlebars.registerPartial('" + key + "', fs.readFileSync('" + folderUrl + "/temp/" + Object.keys(back_partials[z])[0] + "_" + value[key2] + ".html').toString())\n"
              }
              partials = partials + temp;
            }

            responseMetal = responseMetal.substr(0, indexPartial + 14) + partials + responseMetal.substr(indexPartial + 14);
            // console.log('final responseMetal:', responseMetal)
            var mainMetal = folderUrl + '/public/assets/metalsmithPublish.js'
            var value = true;
            await axios.post(config.baseURL + '/save-menu', {
                filename: mainMetal,
                text: responseMetal,
                type: 'file'
              }).then(async(response) => {
                let vueBodyStart = '';
                let vueBodyEnd = ''
                var newFolderName1 = folderUrl + '/Preview';
                await axios.post(config.baseURL + '/flows-dir-listing', {
                    foldername: newFolderName1,
                    type: 'folder'
                  })
                  .then(async(res) => {
                    //console.log(res);
                    let datadivscript = ''
                    let divappstart = ''
                    let divappend = ''
                    if (contentpartials.indexOf('datafieldgroup') > 0) {
                      datadivscript = "<script type='text/javascript' src='https://cdn.jsdelivr.net/web-animations/latest/web-animations.min.js'><\/script>\n" +
                        "<script type='text/javascript' src='https://hammerjs.github.io/dist/hammer.min.js'><\/script>\n" +
                        "<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/muuri/0.5.3/muuri.min.js'><\/script>\n" +
                        "<script type='text/javascript' src='https://unpkg.com/vue/dist/vue.js'><\/script>\n"
                      divappstart = '<div id="app">'
                      divappend = '</div>'
                    }

                    let newContent = "<html>\n<head>\n" + tophead +
                      "<title>" + SeoTitle + "</title>\n" + favicon + '\n' +
                      '<script src="https://code.jquery.com/jquery-3.3.1.min.js"><\/script>\n' +
                      "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/theme.min.css' />\n" +
                      "<link rel='stylesheet' href='./main-files/main.css'/>\n" +
                      datadivscript +
                      endhead + "\n</head>\n<body>\n" + divappstart +
                      topbody + layoutdata.data +
                      '\n' + divappend +
                      "<script src='https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js'><\/script>\n" +
                      "<script src='https://cdn.rawgit.com/feathersjs/feathers-client/v1.1.0/dist/feathers.js'><\/script>\n" +
                      "<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js' crossorigin='anonymous'><\/script>\n" +
                      '<script src="./assets/client-plugins/flowz-builder-engine.js"><\/script>\n' +
                      '<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.17.1/axios.js"><\/script>\n' +
                      '\n<script src="./assets/client-plugins/global-variables-plugin.js"><\/script>\n' +
                      endbody +
                      '\n</body>\n</html>';

                    // console.log('folderUrl:',folderUrl)
                    await axios.post(config.baseURL + '/flows-dir-listing', {
                      filename: folderUrl + '/Layout/' + Layout + '_temp.layout',
                      text: newContent,
                      type: 'file'
                    }).catch((e)=>{console.log(e)});

                    var rawContent = '<div id="flowz_content">' + contentpartials + '</div>';;

                    if (Layout == 'Blank') {

                      rawContent = '---\nlayout: ' + Layout + '_temp.layout\n---\n' + rawContent

                    } else {
                      let tempValueLayout = '---\nlayout: ' + Layout + '_temp.layout\n---\n';
                      rawContent = tempValueLayout + rawContent
                    }

                    var previewFileName = folderUrl + '/Preview/' + nameF + '.hbs';

                    await axios.post(config.baseURL + '/flows-dir-listing', {
                        filename: previewFileName,
                        text: rawContent,
                        type: 'file'
                      })
                      .then(async(res) => {
                        this.saveFileLoading = false;

                        await axios.get(config.baseURL + '/metalsmith-publish?path=' + folderUrl, {}).then(async(response) => {
                            await axios.post(config.baseURL + '/save-menu', {
                                filename: mainMetal,
                                text: backupMetalSmith,
                                type: 'file'
                              })
                              .then(async(res) => {
                                var previewFile = this.$store.state.fileUrl.replace(/\\/g, "\/");
                                previewFile = folderUrl.replace('/var/www/html', '');

                                await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview')
                                  .then(async(res) => {
                                    await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e) => {
                                      console.log(e)
                                    })
                                    await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + Layout + '_temp.layout').then((res) => {
                                      //// console.log('deleted extra layout file:', res)
                                    }).catch((e) => {
                                      console.log(e)
                                    })
                                    if (vuepartials != undefined && vuepartials.length > 0) {
                                      for (let x = 0; x < vuepartials.length; x++) {

                                        await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + config.pluginsPath + '/public/' + vuepartials[x].value.split('.')[0] + '.js').then((res) => {
                                            //console.log(res)
                                          })
                                          .catch((e) => {
                                            console.log(e)
                                          })
                                      }
                                    }
                                    //console.log("layout file reset")
                                    if (Layout == 'Blank') {
                                      await axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/Blank.layout')
                                        .catch((e) => {
                                          console.log(e)
                                          //console.log("error while deleting blank.layout file")
                                        })
                                    }

                                    // })

                                  })
                                  .catch((e) => {
                                    console.log(e)
                                  })
                              }).catch((e)=>{console.log(e)});

                          })
                          .catch((err) => {
                            this.saveFileLoading = false;
                            this.fullscreenLoading = false;
                            //console.log('error while creating metalsmithJSON file' + err)
                            axios.post(config.baseURL + '/flows-dir-listing', {
                              filename: mainMetal,
                              text: backupMetalSmith,
                              type: 'file'
                            }).catch((e)=>{console.log(e)});
                            axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e) => {
                              console.log(e)
                            })
                            axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview').catch((e)=>{console.log(e)});
                            console.log(err)
                            axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + Layout + '_temp.layout').catch((e)=>{console.log(e)});
                          })
                      })
                      .catch((e) => {
                        this.saveFileLoading = false
                        this.fullscreenLoading = false;
                        axios.post(config.baseURL + '/flows-dir-listing', {
                          filename: mainMetal,
                          text: backupMetalSmith,
                          type: 'file'
                        }).catch((e)=>{console.log(e)});
                        axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + Layout + '_temp.layout').catch((e)=>{console.log(e)});
                        axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e) => {
                          //console.log(e)
                        })
                        axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview').catch((e)=>{console.log(e)});
                        console.log(e)
                      })

                  })
                  .catch((e) => {
                    this.saveFileLoading = false;
                    this.fullscreenLoading = false;
                    console.log(e)
                    axios.post(config.baseURL + '/flows-dir-listing', {
                      filename: mainMetal,
                      text: backupMetalSmith,
                      type: 'file'
                    }).catch((e)=>{console.log(e)});
                    axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + Layout + '_temp.layout').catch((e)=>{console.log(e)});
                    axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e) => {
                      //console.log(e)
                    })
                    axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Preview').catch((e)=>{console.log(e)});
                  })

              })
              .catch((e) => {
                this.saveFileLoading = false;
                this.fullscreenLoading = false;
                console.log(e)
                axios.post(config.baseURL + '/flows-dir-listing', {
                  filename: mainMetal,
                  text: backupMetalSmith,
                  type: 'file'
                }).catch((e)=>{console.log(e)});
                axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/Layout/' + Layout + '_temp.layout').catch((e)=>{console.log(e)});
                axios.delete(config.baseURL + '/flows-dir-listing/0?filename=' + folderUrl + '/temp').catch((e) => {
                  //console.log(e)
                })

              })
          }

          if (publishType == 'custom') {
            //console.log('Custom Domain')

            // Surge.sh API
            axios.post(config.baseURL + '/publish-surge', {
                projectPath: Cookies.get('userDetailId') + '/' + this.repoName + '/public',
                domainName: this.customDomainName
              })
              .then((res) => {
                this.fullscreenLoading = false;
                this.publishWebsite = false;
                window.open(this.customDomainName);
                //console.log(res.data);
              })
              .catch((e) => {
                this.fullscreenLoading = false;
                this.$notify({
                  showClose: true,
                  message: 'Failed! Please try again.',
                  type: 'error'
                });
                console.log(e)
              })

          } else {
            //console.log('Default Publish');
            this.fullscreenLoading = false;
            this.publishWebsite = false;

            // Open in new window
            if (process.env.NODE_ENV !== 'development') {
              window.open('http://' + Cookies.get('userDetailId') + '.' + this.repoName + '.' + config.ipAddress);
            } else {
              window.open(config.ipAddress + '/websites/' + Cookies.get('userDetailId') + '/' + this.repoName + '/public/');
            }
          }
           this.loadingText=''
          var dt = new Date();
          var utcDate = dt.toUTCString();

          this.commitForm.branchName = 'Publish_' + Math.round(new Date().getTime() / 1000);

          this.commitForm.commitMessage = 'Publish - ' + utcDate;

          await this.commitProject('commitForm');

          this.init();
        }).catch(() => {
        });

      } else {
        this.newProjectFolderDialog = false;
        this.fullscreenLoading = false;
        this.$session.remove('username');
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
          duration: 500,
          type: 'error',
          onClose() {
            window.location = '/login'
          }
        });

        return;
        // this.$swal("You're Logged Out From System. Please login again!")
        // .then((value) => {
        //   window.location = '/login'
        // });
      }
    },

    handleRemove(file, fileList) {
      //console.log(file, fileList);
    },

    handlePreview(file) {
      //console.log(file);
    },

    globalImagePreview(file) {
      //console.log(file);
    },

    tableRowClassName(row, index) {
      if (index === this.$store.state.currentIndex) {
        return 'positive-row';
      }
      return '';
    },

    exportWebsite(index){

      let branchName = this.branchesData[index].branchName;
      // console.log(config.gitLabIpAddress + 'fsaiyed/' + this.repoName + '/repository/archive.zip?ref=master');
      window.open(config.gitLabIpAddress + 'fsaiyed/' + this.repoName + '/repository/archive.zip?ref=' + branchName);
    },

    logfile(index){

      let branchName = this.branchesData[index].branchName;
      // console.log(config.gitLabIpAddress + 'fsaiyed/' + this.repoName + '/repository/archive.zip?ref=master');
      window.open(config.gitLabIpAddress + 'fsaiyed/' + this.repoName + '/raw/' + branchName+'/public/log.md');
    },

    async init () { 
      this.isdisabled=false
      this.folderUrl = this.$store.state.fileUrl.replace(/\\/g, "\/");
      let url = this.$store.state.fileUrl.replace(/\\/g, "\/");

      this.userDetailId = Cookies.get('userDetailId');

      let splitUrl = url.split('/');

      let websiteName = splitUrl[6];

      //console.log('website name:', websiteName);
      // this.configData = await axios.get( config.baseURL + '/flows-dir-listing/0?path=' + url + '/assets/config.json');

      this.configData = await axios.get(config.baseURL + '/project-configuration/' + websiteName ).catch((e) => { 
        // this.fullscreenLoading = false 
        let dataMessage = '';
            if (e.message != undefined) {
                dataMessage = e.message              
            } else if (e.response.data.message != undefined) {
              dataMessage = e.response.data.message
            } else{
              dataMessage = "Please try again! Some error occured."
            }
            this.$confirm(dataMessage, 'Error', {
          confirmButtonText: 'logout',
          cancelButtonText: 'reload',
          type: 'error',
          center: true
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
          location.reload()
        });  
      });

      if(this.configData.status == 200 || this.configData.status == 204){

        this.settings = this.configData.data.configData;
        this.form.websitename = this.configData.data.websiteName;
        this.pluginsTreedata = this.configData.data.pluginsData;

        this.currentSha = this.settings[0].repoSettings[0].CurrentHeadSHA;

        this.currentBranchName = this.settings[0].repoSettings[0].CurrentBranch;

        this.newRepoId = this.settings[0].repoSettings[0].RepositoryId;
        this.repoName = this.configData.data.id;

        // this.faviconName = this.settings[1].projectSettings[0].ProjectFaviconName;
        this.form.brandName = this.settings[1].projectSettings[0].BrandName;
        this.form.brandLogoName = this.settings[1].projectSettings[0].BrandLogoName;
        this.form.seoTitle = this.settings[1].projectSettings[0].ProjectSEOTitle;
        // this.form.seoKeywords = this.settings[1].projectSettings[0].ProjectSEOKeywords;
        // this.form.seoDesc = this.settings[1].projectSettings[0].ProjectSEODescription;
        this.globalVariables = this.settings[1].projectSettings[1].GlobalVariables;
        this.urlVariables = this.settings[1].projectSettings[1].GlobalUrlVariables;
        this.assetsImages = this.settings[1].projectSettings[1].AssetImages;
        this.globalCssVariables = this.settings[1].projectSettings[1].GlobalCssVariables;
        this.ecommerceSettings = this.settings[1].projectSettings[1].EcommerceSettings;
        this.externallinksCSS = this.settings[1].projectSettings[1].ProjectExternalCss;
        this.externallinksJS = this.settings[1].projectSettings[1].ProjectExternalJs;
        this.externallinksMeta = this.settings[1].projectSettings[1].ProjectMetaInfo;
        this.Metacharset=this.settings[1].projectSettings[1].ProjectMetacharset;
        this.localscripts=this.settings[1].projectSettings[1].ProjectScripts;
        this.localstyles=this.settings[1].projectSettings[1].ProjectStyles;
        // this.accountpaymentgateway=this.settings[1].projectSettings[1].AccountPaymentGateways;
        // this.faviconhref=this.settings[1].projectSettings[0].ProjectFaviconhref;
        this.form.vid=this.settings[1].projectSettings[0].ProjectVId.vid;
        this.form.crmid=this.settings[1].projectSettings[0].CrmSettingId;
        this.websiteRoles = this.settings[1].projectSettings[1].WebsiteRoles;

        if(!(this.settings[1].projectSettings[1].CloudinaryDetails)){
          this.cloudinaryDetails = {
            "apiKey":  "" ,
            "apiSecret":  "" ,
            "cloudName":  "" ,
            "uploadFolder":  "" ,
            "uploadPreset":  "",
            "nextCursor": ""
          }
        } else {
          this.cloudinaryDetails = this.settings[1].projectSettings[1].CloudinaryDetails;
        }
        if(!(this.settings[1].projectSettings[1].TaxCloud)){
          this.taxcloud = {
            "apiId":  "",
            "apiKey":  "" 
          }
        } else {
          this.taxcloud = this.settings[1].projectSettings[1].TaxCloud;
        }

        

        // if(!(this.settings[1].projectSettings[1].CloudinaryDetails)){
        //   this.cloudinaryDetails = {
        //     "apiKey":  "" ,
        //     "apiSecret":  "" ,
        //     "cloudName":  "" ,
        //     "uploadFolder":  "" ,
        //     "uploadPreset":  ""
        //   }
        // } else {
        //   this.cloudinaryDetails = this.settings[1].projectSettings[1].CloudinaryDetails;
        // }

      } else {
        console.log('Cannot get configurations!');
        // this.fullscreenLoading = false 
      }

      if(this.form.brandLogoName==''){
        this.form.brandLogoName='!!!No file uploaded!!!'
      }

      if(!(process.env.NODE_ENV == 'development')){
        this.projectPublicUrl = 'http://' + Cookies.get('userDetailId') + '.' + this.repoName + '.' + config.domainkey + '/';
      } else {
        this.projectPublicUrl = 'http://localhost/websites/' + Cookies.get('userDetailId') + '/' + this.repoName + '/public/';
      }


      // // console.log('URL: ', this.projectPublicUrl);
      // if(this.accountpaymentgateway != undefined && this.accountpaymentgateway.length>0){
      // for(let i=0;i<this.accountpaymentgateway.length;i++){
      //   var temp=[]
      //   for(let j=0;j<this.accountpaymentgateway[i].fields.length;j++){
      //     temp.push(Object.keys(this.accountpaymentgateway[i].fields[j])[0])
      //   }
      //   this.Paymentfields[i]=temp
      // }
      // }

      // replace all image tag source with index as name attribute to get the image file preview

      // for (var i = 0; i < this.globalVariables.length; i++){
      //   if(this.globalVariables[i].variableType == 'image'){
      //     let _imageIndex = i;
      //     axios.get( config.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/public/assets/' + this.globalVariables[i].variableValue, {
      //     }).then(response => {
      //       $('[name = ' + _imageIndex + ']').attr('src', response.data);
      //     }).catch(error => {
      //       //console.log("Some error occured while fetching image: ", error);
      //     });

      //   }
      // }

      // Get all commits list
      let responseConfig = await axios.get(config.baseURL + '/project-configuration/' + websiteName ).catch((err) => { console.log(err); this.fullscreenLoading = false });
      let configData = responseConfig.data.configData;
      let SHA = configData[0].repoSettings[0].CurrentHeadSHA;

      // await axios.get( config.baseURL + '/commit-service?projectId='+this.newRepoId+'&privateToken='+Cookies.get('auth_token'), {
      // }).then(response => {
      //   this.commitsData = [];
      //   for(var i in response.data){
      //     this.commitsData.push({
      //       commitDate: response.data[i].created_at,
      //       commitSHA: response.data[i].id,
      //       commitsMessage: response.data[i].title,
      //     });
      //   }
      // }).catch(error => {
      //   console.log( error);
      //   this.fullscreenLoading = false;
      // });

      // get all branch list
      await axios.get( config.baseURL + '/branch-list/' + this.newRepoId, {
      }).then(response => {
        this.branchesData = [];
        for(var i in response.data){
          this.branchesData.push({
            commitDate: response.data[i].commit.created_at,
            branchName: response.data[i].name,
            commitSHA: response.data[i].commit.id,
            commitsMessage: response.data[i].commit.title,
          });
        }
      }).catch(error => {
        console.log( error);
        // this.fullscreenLoading = false;
      });

      this.sortBranchesTable(0);


      await axios.get( config.baseURL + '/flows-dir-listing/0?path=' + this.folderUrl + '/public/assets/project-details.json', {
      }).then(response => {
        this.projectDetailsJson = JSON.parse(response.data);
      }).catch(error => {
        console.log("error occured while project details json: ", error);
        // this.fullscreenLoading = false;
      });

       await axios.get(config.vshopApi, {
        headers: {
          'Authorization': Cookies.get('auth_token')
        }
      }).then(res=>{
        
         this.vshopcategory = res.data;
         if(this.form.vid!=''){
          let tempvid=this.form.vid
          let checkindex=_.findIndex(this.vshopcategory,function(o){
            return o.id == tempvid
          })
         if(checkindex==-1){
          this.form.vid=''
         }
         }
         

      }).catch(err => { 
        // console.log('111111',err.response);
          // this.fullscreenLoading = false 
            if(err.response.data.code==401||err.response.data.code==500){
              console.log(err.response.data.message)
                this.$swal({
                  title: 'Authentication token expired',
                  text: 'Please Login Again!!!',
                  type: 'warning',
                  showCancelButton: true,
                }).then(()=>{
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
                    window.location='/login'
                })
            }
       });

     
     await axios.get(config.crmsettingapi,{headers:{'Authorization': Cookies.get('auth_token'),'subscriptionId': Cookies.get('subscriptionId')}})
      .then(res=>{
        
        this.crmdata=res.data.data
        if(this.form.crmid!=''){
          let tempcrmid=this.form.crmid
          let checkindex=_.findIndex(this.crmdata,function(o){
            return o.id == tempcrmid
          })
         if(checkindex==-1){
          this.form.crmid=''
         }
         }

        
      })
      .catch(err => { console.log(err);  });
      // console.log(this.crmdata)
      // console.log('+++++++++++++++',crmdata.data)



       let status=await axios.get(config.baseURL+'/jobqueue?websiteid='+this.repoName).catch((e)=>{this.fullscreenLoading = false })
       if(status.data.data=='active') {
        this.isdisabled=true
        this.textdata='Your request to Publish website is received. Please wait while you are in a Queue.'
       }
       // this.fullscreenLoading = false

      if(this.commitsData[0]){
        return 'positive-row';
      }
    },

    changePluginStatus(index, value){
      //console.log('Change index: ', index);
      //console.log('Change value: ', value);
    },

    removePluginFromTree(store, data) {
      store.remove(data);

      var ids = getRemove(this.pluginsTreedata, data.id)

      function getRemove (ma, idm) {
        if (ma instanceof Array) {
          let k = _.findIndex(ma, {id:idm})
          if (k >= 0) {
            ma.splice(k,1)
            return true
          }
          for (let i in ma) {
            let ii = getRemove(ma[i].children, idm)
            if (ii) return true
          }
        }
        return false
      }
    },

    updateProjectName(form) {
     this.$refs[form].validate(async (valid) => {
          if (valid) {
            if(this.form.websitename==this.configData.data.websiteName){
              this.$swal({
                text: 'Website with "'+this.form.websitename+'" already exists!!!!',
                type: 'warning',
              })
            }else{
              let userid=this.folderUrl.split('/')[this.folderUrl.split('/').length-2]
              let alldatauser=await axios.get( config.baseURL + '/project-configuration?userId='+userid).catch(err => { console.log(err); this.fullscreenLoading = false });
              let checkdetail=true
              for(let i=0;i<alldatauser.data.data.length;i++){
                if(this.form.websitename==alldatauser.data.data[i].websiteName){
                  checkdetail=false

                }
              }
              if(checkdetail!=false){
              //   this.$message({
              //   showClose: true,
              //   message: 'Successfully Changed Websitename.',
              //   type: 'success'
              // });
                await this.saveProjectSettings();
                await this.init();
                // location.reload();
                this.$emit('updateProjectName'); /*it is to be noted that emit event with updateProjectName is for calling get dataof index.vue and is different from function in this components.*/
              }
              else{
                this.$swal({
                  text: 'Website with "'+this.form.websitename+'" already exists!!!!',
                  type: 'warning',
                })
                this.form.websitename=this.configData.data.websiteName;


              }
            }

          } else {
            console.log('error submit!!');
            return false;
          }
        });

    },

    renderContent(h, { node, data, store }) {
      return (
        <span>
          <span>
            <span>{node.label}</span>
          </span>
          <span class="tree-action-button" style="float: right; margin-right: 20px">
            <el-button size="mini" on-click={ () => this.removePluginFromTree(store, data) } type="danger" icon="delete"></el-button>
          </span>
          <span class="tree-action-button" style="float: right; margin-right: 35px">
            <el-switch size="mini"  value={data.isActive} on-change={ (value) => {
              data.isActive = value;
              this.changePluginStatus(data.id, value);
            } } on-text="" off-text=""></el-switch>
          </span>
        </span>
      );
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .ProjectSettings{
    background-color: #f5f5f5;
  }

  div.jsoneditor{
    min-height: 700px;
    margin-bottom: 80px;
  }

  .ace_editor{
    height: 700px !important;
  }

  textarea.jsoneditor-text{
    height: 700px;
  }

  .publishBtn{
    width: 100%;
  }

  /*Brand Image upload button*/
  input[type="file"]{
    display: none;
  }
   label.brandLogoUploadLabel{
    display: inline-block;
    border: 1px dashed #1a1a1a;
    background: #f1f1f1;
    padding:10px 15px;
    min-width:250px;
    color: #5c5c5c;
    font-size:20px;
    text-align: center;
    cursor: pointer;
    transition:300ms;
  }
   label.brandLogoUploadLabel i{
    vertical-align: middle;
    margin-right:10px;
  }
   label.brandLogoUploadLabel:hover{
    border-style: solid;
  }

  h1{
    font-size:15px;
    margin: 0 0 20px;
  }
  .dis{
    display: block;
    margin-top:6px;
    color:#a9a9a9;
  }
  .error  label.brandLogoUploadLabel{
    color:red;
    border-color:red;
    background:#fcd0d0;
  }
  .correct  label.brandLogoUploadLabel{
    background:#cff5c5;
  }

  .well{
    background-color: rgba(245,245,245,0.5);
  }









  /*Global Image Upload Buttons*/
  .file-upload {
    position: relative;
    display: inline-block;
  }

  .file-upload__label {
    display: inline;
    padding: 5px;
    padding-left: 7px;
    color: #fff;
    background: #555;
    transition: background .3s;
  }
  .file-upload__label:hover {
    cursor: pointer;
    background: #000;
  }

  .file-upload__input {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    font-size: 1;
    width: 0;
    height: 100%;
    opacity: 0;
  }

  .page-buttons{
    position: fixed;
    bottom: 7px;
    right: 85px;
    margin-top: 17.5px;
    z-index: 10
  }

  @media(max-width: 680px){
    .page-buttons{
      position: relative;
      left: auto;
      right: auto;
    }
  }

  .el-tree{
    max-height: 500px;
    overflow-x: auto;
  }

  /*Show icons on hover in directory tree */

  .el-tree-node:hover > .el-tree-node__content .tree-action-button {
      display: block;
      position: absolute;
      top: 0;
  }

  .tree-action-button {
      display: none;
  }

  .box-card {
    width: 480px;
    margin:10px;
  }



  /*For Collapsing Divs*/
  .toggleableDivHeaderContent {
      margin-top: 0px;
      margin-bottom: 30px;
      background: #eee;
      width: auto;
      height: auto;
      margin: 0px 5px;
      padding: 15px;
  }

  .toggleableDivHeader {
      height: 35px;
      line-height: 15px;
      text-align: center;
      color: black;
      font-weight: bold;
      text-decoration: none;
  }

  .card {
      padding: 15px;
      box-shadow: 0px 0px 10px #999;
      transition: 0.2s all linear;
      margin: 20px;
  }

  .card:hover {
      box-shadow: 2px 2px 20px #999;
      transition: 0.2s all linear;
  }

  .color-div {
      height: 45px;
      display: block;
      padding: 10px 25px;
      line-height: 25px;
      color: #292929;
      text-transform: uppercase;
      border-radius: 5px;
      box-shadow: 0px 0px 5px #aaa;
      transition: 0.2s all linear;
      margin: 5px 5px;
      background: #8e9eab;
      /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
      /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #eef2f3, #8e9eab);
      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .color-div:hover {
      box-shadow: 2px 2px 10px #aaa;
      transition: 0.2s all linear;
  }

  .margin-50{
    margin: 50px;
  }

  .green-tick-img{
    width: 15px;
    /*margin-right: 56px;*/
  }

  .asset-image{
    height: 100px;
    width: 100%;
  }

  .view-icon{
    text-align: right;
    position: absolute;
    top: -5px;
    right: 33px;
    background-color: #FFC900;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    color: #fff;
  }

  .view-icon a i{
    margin-left: -15px;
    top: 5px;
    position: absolute;
    color: #fff;
    font-size: 12px;
  }

  .delete-icon{
    text-align: right;
    position: absolute;
    top: -5px;
    right: 9px;
    background-color: red;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    color: #fff;
  }

  .delete-icon a i{
    margin-left: -15px;
    top: 3px;
    position: absolute;
    color: #fff;
  }

  .save-project-name-btn{
    background-color: #4baf4f !important;
    color: #fff !important;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .jsoneditor-vue div.jsoneditor-tree{
    background-color: #fff;
  }

  .template-image{
    cursor: pointer;
  }

  .view-template {
    position: absolute;
    right: 5px;
    top: -10px;
    background-color: #292929;
    color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-size: 16px;
  }

  .view-template i {
    margin-left: 6px;
    margin-top: 6px;
  }

  .custom-note{
    margin: 10px 0;
  }

  #revisionsTable th {
      cursor: pointer;
  }

  #revisionsTable th i {
      margin-right: 20px;
  }

  .btn-xs{
    padding: 5px;
  }

  .cloudinaryFilesCount{
    margin-left: 15px;
    font-weight: 900;
  }

  /*Implementation Of Tabs UI*/

  .tabs {
    padding: 15px 0px;
    background-color: #008BE8;
    color: #fff;
    box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.3);
    position: relative;
  }
  .tabs h3 {
    font-size: 28px;
    font-weight: 400;
    margin: 15px;
    margin-left: 30px;
  }
  .tabs .tab {
    text-transform: uppercase;
    padding: 10px 32px;
    display: inline-block;
    cursor: pointer;
  }
  .tabs .tab-active-bar {
    position: absolute;
    height: 3px;
    width: 0;
    left: 0;
    bottom: 0;
    background-color: #fff;
  }

  .tab-content {
    padding: 24px;
    font-size: 16px !important;
    color: #616161;
  }
  .tab-content span.block-title {
    margin-left: 24px;
    font-size: 20px;
  }
  .tab-content .card-spacer {
    min-height: 50px;
  }
  .tab-content .card {
    background-color: #fff;
    font-size: 16px;
    font-weight: 300;
    margin: 24px;
    padding: 24px;
    color: rgba(0, 0, 0, 0.87);
    background-color: white;
    border-radius: 2px;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);
  }

  .refresh-plugins-btn{
    border-radius: 50%;
    width: 30px;
    height: 30px;
    padding: 7px;
    position: absolute;
    right: 50px;
  }

  ul.jumper-links{
    list-style: none;
  }

  .jumper-links-redirect{
    text-decoration: none;
    color: #999;
  }

  .jumper-links-redirect.active{
    /*font-weight: bolder;*/
    color: #2C72EB;
  }
</style>
