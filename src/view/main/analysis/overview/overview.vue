<template>
  <div class="overview">
    <div class="about">
      <h3 class="title">关于</h3>
      <div class="content">
        Vue3Admin
        是基于vue3、pinia、VueRouter、Vite、ElementPlus、TypeScript、Echarts第后台处理方案
      </div>
    </div>
    <div class="tecStack">
      <h3 class="title">技术栈</h3>
      <div class="content">
        <ul>
          <li style="list-style: circle">开发工具：VScode</li>
          <li style="list-style: circle">语言：TypeScript 4.x +JavaScript</li>
          <li style="list-style: circle">构建工具：vite3.x/Webpack 5.x</li>
          <li style="list-style: circle">前端框架：Vue3.x +setup</li>
          <li style="list-style: circle">路由工具：VueRouter 4.x</li>
          <li style="list-style: circle">状态管理：Pinia</li>
          <li style="list-style: circle">UI框架：Element Plus</li>
          <li style="list-style: circle">可视化：Echart5.x</li>
          <li style="list-style: circle">
            工具库：@vueuse/core +dayjs +countup.js
          </li>
          <li style="list-style: circle">css预编译：sass/less</li>
          <li style="list-style: circle">HTTP工具：Axios</li>
          <li style="list-style: circle">git Hook：</li>
          <li style="list-style: circle">
            代码规范：EditorConfig+Prettier+ESLint
          </li>
          <li style="list-style: circle">提交规范：Commitizen+commitlint</li>
          <li style="list-style: circle">自动部署：Centos+jenkins+Nginx</li>
        </ul>
      </div>
    </div>
    <div class="directory">
      <div class="title">项目目录</div>
      <p>|-- undefined</p>
      <p>|-- .editorconfig</p>
      <p>|-- .eslintrc.cjs</p>
      <p>|-- .gitignore</p>
      <p>|-- .prettierignore</p>
      <p>|-- .prettierrc.json</p>
      <p>|-- auto-imports.d.ts</p>
      <p>|-- components.d.ts</p>
      <p>|-- env.d.ts</p>
      <p>|-- index.html</p>
      <p>|-- package-lock.json</p>
      <p>|-- package.json</p>
      <p>|-- pnpm-lock.yaml</p>
      <p>|-- README.md</p>
      <p>|-- tsconfig.app.json</p>
      <p>|-- tsconfig.json</p>
      <p>|-- tsconfig.node.json</p>
      <p>|-- vite.config.ts</p>
      <p>|-- .vscode</p>
      <p>| |-- extensions.json</p>
      <p>| |-- settings.json</p>
      <p>|-- public</p>
      <p>| |-- favicon.ico</p>
      <p>|-- src</p>
      <p>|-- App.vue</p>
      <p>|-- main.ts</p>
      <p>|-- assets</p>
      <p>| |-- china.ts</p>
      <p>| |-- logo.svg</p>
      <p>| |-- css</p>
      <p>| | |-- common.less</p>
      <p>| | |-- index.less</p>
      <p>| | |-- reset.less</p>
      <p>| |-- global</p>
      <p>| | |-- register-icon.ts</p>
      <p>| |-- image</p>
      <p>| |-- login-bg.svg</p>
      <p>| |-- logo.svg</p>
      <p>|-- base-ui</p>
      <p>| |-- baseEcharts.vue</p>
      <p>|-- components</p>
      <p>| |-- main-menu</p>
      <p>| | |-- main-menu.vue</p>
      <p>| |-- mian-header</p>
      <p>| | |-- header-bread.vue</p>
      <p>| | |-- main-header.vue</p>
      <p>| | |-- user-info.vue</p>
      <p>| |-- page-content</p>
      <p>| | |-- page-content.vue</p>
      <p>| |-- page-echarts</p>
      <p>| | |-- data</p>
      <p>| | |-- src</p>
      <p>| | | |-- bar-echart.vue</p>
      <p>| | | |-- geo-echart.vue</p>
      <p>| | | |-- line-echart.vue</p>
      <p>| | | |-- pie-echart.vue</p>
      <p>| | | |-- rose-echart.vue</p>
      <p>| | |-- types</p>
      <p>| | |-- utils</p>
      <p>| |-- page-modal</p>
      <p>| | |-- page-modal.vue</p>
      <p>| |-- page-search</p>
      <p>| |-- page-search.vue</p>
      <p>|-- hooks</p>
      <p>| |-- page-content.ts</p>
      <p>| |-- page-modal.ts</p>
      <p>| |-- useEcharts.ts</p>
      <p>| |-- userPermission.ts</p>
      <p>|-- router</p>
      <p>| |-- index.ts</p>
      <p>|-- server</p>
      <p>| |-- index.ts</p>
      <p>| |-- config</p>
      <p>| | |-- index.ts</p>
      <p>| |-- module</p>
      <p>| | |-- login.ts</p>
      <p>| | |-- main</p>
      <p>| | |-- main.ts</p>
      <p>| | |-- page.ts</p>
      <p>| | |-- user.ts</p>
      <p>| | |-- analysis</p>
      <p>| | |-- dashboard.ts</p>
      <p>| |-- request</p>
      <p>| |-- index.ts</p>
      <p>|-- store</p>
      <p>| |-- index.ts</p>
      <p>| |-- module</p>
      <p>| |-- login.ts</p>
      <p>| |-- main.ts</p>
      <p>| |-- main</p>
      <p>| |-- page.ts</p>
      <p>| |-- user.ts</p>
      <p>| |-- analysis</p>
      <p>| |-- dashbard.ts</p>
      <p>|-- utils</p>
      <p>| |-- cache.ts</p>
      <p>| |-- format.ts</p>
      <p>| |-- mapMenusRouter.ts</p>
      <p>|-- view</p>
      <p>|-- login</p>
      <p>| |-- Login.vue</p>
      <p>| |-- c-cpns</p>
      <p>| |-- login-account.vue</p>
      <p>| |-- login-panel.vue</p>
      <p>| |-- login-phone.vue</p>
      <p>| |-- types</p>
      <p>| |-- login_type.ts</p>
      <p>|-- main</p>
      <p>| |-- Main.vue</p>
      <p>| |-- analysis</p>
      <p>| | |-- dashboard</p>
      <p>| | | |-- dashboard.ts</p>
      <p>| | | |-- dashboard.vue</p>
      <p>| | | |-- c-cnps</p>
      <p>| | | |-- panel.vue</p>
      <p>| | |-- overview</p>
      <p>| | |-- overview.ts</p>
      <p>| | |-- overview.vue</p>
      <p>| |-- product</p>
      <p>| | |-- category</p>
      <p>| | | |-- category.ts</p>
      <p>| | | |-- category.vue</p>
      <p>| | |-- goods</p>
      <p>| | |-- goods.ts</p>
      <p>| | |-- goods.vue</p>
      <p>| |-- story</p>
      <p>| | |-- chat</p>
      <p>| | | |-- chat.ts</p>
      <p>| | | |-- chat.vue</p>
      <p>| | |-- list</p>
      <p>| | |-- list.ts</p>
      <p>| | |-- list.vue</p>
      <p>| |-- system</p>
      <p>| |-- department</p>
      <p>| | |-- department.ts</p>
      <p>| | |-- department.vue</p>
      <p>| | |-- page-cnps</p>
      <p>| | |-- page-content.vue</p>
      <p>| | |-- page-modal.vue</p>
      <p>| | |-- page-search.vue</p>
      <p>| |-- menu</p>
      <p>| | |-- menu.ts</p>
      <p>| | |-- menu.vue</p>
      <p>| | |-- config</p>
      <p>| | |-- contentConfig.ts</p>
      <p>| |-- role</p>
      <p>| | |-- role.ts</p>
      <p>| | |-- role.vue</p>
      <p>| | |-- config</p>
      <p>| | |-- contentConfig.ts</p>
      <p>| | |-- modalConfig.ts</p>
      <p>| | |-- searchConfig.ts</p>
      <p>| |-- user</p>
      <p>| |-- user.ts</p>
      <p>| |-- user.vue</p>
      <p>| |-- c-nps</p>
      <p>| |-- content.vue</p>
      <p>| |-- modal.vue</p>
      <p>| |-- search.vue</p>
      <p>|-- not-found</p>
      <p>|-- NotFound.vue</p>
    </div>
  </div>
</template>

<script setup lang="ts" name="overview"></script>

<style scoped>
.overview {
  background-color: #f6f6f6;
  border-radius: 12px;
  color: #000;
  overflow: hidden;
  .about {
    background-color: #fff;
    padding: 15px;
    .title {
      font-size: 16px;
      font-weight: 600;
      border-bottom: 1px solid #f2f4f6;
      padding: 10px;
    }
  }
  .tecStack {
    margin-top: 20px;
    background-color: #fff;
    padding: 15px;
    .title {
      font-size: 16px;
      font-weight: 600;
      border-bottom: 1px solid #f2f4f6;
      padding: 10px;
    }
    .content {
      margin-left: 30px;
    }
  }
  .directory {
    margin-top: 20px;
    background-color: #fff;
    padding: 15px;
    .title {
      font-size: 16px;
      font-weight: 600;
      border-bottom: 1px solid #f2f4f6;
      padding: 10px;
    }
  }
}
</style>
