<template>
  
  <div class="container">
    <div class="left-content">
      <div class="title">网盘管理</div>
      <ul class="list-ul">
        <li class="list-li" v-for="(item, index) in list" :key="index">
          <div class="item-title">
            <img class="file-icon" src="@/assets/icon/harddisk.png" alt="">
            {{ item.title }}
          </div>
          <ul class="files-list">
            <li class="file-item">
              <img class="file-icon" src="@/assets/icon/file.png" alt="">
              学习笔记
            </li>
            <li class="file-item">
              <img class="file-icon" src="@/assets/icon/file.png" alt="">
              学习笔记
            </li>
            <li class="file-item">
              <img class="file-icon" src="@/assets/icon/file.png" alt="">
              学习笔记
            </li>
          </ul>
        </li>
      </ul>

      <div class="options">
        <button>上传进度</button>
      </div>
    </div>
    <div class="right-content">
      <div class="right-top-content">
        <input class="input-search" type="text" placeholder="搜索">
        <button class="update-file">上传文件</button>
      </div>
      <div class="right-bottom-content">
        <filesList></filesList>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import filesList from '@/components/filesList/filesList.vue'
import { ref } from "vue";
import type { FileList } from "../../fileAdminType.d.ts";
const list = ref<Array<FileList>>([
  {
    title: "全部文件夹",
  },
  {
    title: "文档",
  },
  {
    title: "图片",
  },
]);
</script>

<style scoped lang="scss">
.container {
  display: flex;
  width: 100%;
  height: 100%;
  .left-content {
    width: 250px;
    height: 100%;
    border-right: 2px solid #eceef5;
    flex-shrink: 0;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    .title {
      height: 70px;
      line-height: 70px;
      font-size: 24px;
      font-weight: 600;
      text-align: center;
      border-bottom: 2px solid #eceef5;
      user-select: none;
      flex-shrink: 0;
      box-sizing: border-box;
    }
    .options{
      flex-shrink: 0;
      // background-color: pink;
      width: 100%;
      height: 100px;
      border-top: 2px solid #eceef5;
    }
  }
  .right-content {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    .right-top-content{
      flex-shrink: 0;
      width: 100%;
      height: 70px;
      border-bottom: 2px solid #eceef5;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      padding: 0 20px;
      .input-search{
        width: 300px;
        height: 30px;
        border: 2px solid #eceef5;
        border-radius: 30px;
        padding: 0 20px;
        font-size: 16px;
        &:focus{
          border: 2px solid #1dabf7;
        }

      }

      .update-file{
        width: 100px;
        height: 30px;
        background-color: #4e6ef2;
        border: none;
        font-size: 14px;
        color: #fff;
        line-height: 30px;
        cursor: pointer;
        border-radius: 5px;
        &:hover{
          background-color: #4662d9;
        }
      }
    }
    .right-bottom-content{
      width: 100%;
      height: 100%;
      // background-color: pink;
      overflow-y: auto;
    }
  }
}

.item-title {
  font-size: 16px;
  display: flex;
  align-items: center;
}

.list-ul {
  width: 100%;
  height: 100%;
  .list-li {
    .item-title{
      height: 50px;
      line-height: 50px;
      box-sizing: border-box;
      padding: 0 20px;
      cursor: pointer;
      border-bottom: 1px solid #eceef5;
      &:hover {
        background-color: #eceef5;
      }
    }

    .files-list{
      padding-left: 40px;
      border-bottom: 1px solid #eceef5;
      .file-item{
        display: flex;
        align-items: center;
        
        line-height: 35px;

      }
    }
  }
}

.file-icon{
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
</style>
