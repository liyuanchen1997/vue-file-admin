<template>
    <div class="files-list">
        <div class="file-item" v-for="(item, index) in 10" :key="index">
            <div class="file-icon">
                TXT
            </div>
            <div class="item-file-title">学习笔记.txt</div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>


<style scoped lang="scss">
.files-list{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 100px);
    grid-template-rows: repeat(auto-fill, 120px);
    // grid-gap: 25px;
    
    .file-item{
        padding: 10px;
        width: 80px;
        height: 100px;
        border-radius: 5px;
        &:hover{
            background-color: #eceef5;
        }

        .file-icon{
            width: 80px;
            height: 80px;
            background-image: url('@/assets/icon/filetext.png');
            background-size: 80px 80px;
            background-position: center 0;
            background-repeat: no-repeat;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 600;
            cursor: pointer;
            user-select: none;
            color: #41416e;
        }
        
        .item-file-title{
            font-size: 14px;
            text-align: center;
            word-wrap: break-word;
        }

    }
}
</style>
  