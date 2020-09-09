<template>
  <div class="style-sheet">
    <el-collapse v-model="activeNames" @change="handleChange" accordion>
      <el-collapse-item title="1. 文字遇回车换行、遇空格不换行" name="1">
        <div>给需要的标签添加css属性: white-space: pre-wrap;</div>
        <div>额外扩展:</div>
        <div>今天我们就来讲一讲white-space这个属性, white-space属性指定元素内的空白怎样处理, 这个属性一共有5个值: normal(defaul)、pre、pre-wrap、pre-line、inherit</div>
        <div>1. normal</div>
        <div>默认值，空白会被浏览器忽略</div>
        <div>2. pre</div>
        <div>空白会被浏览器保留，其行为方式类似于HTML标签中的 pre 标签</div>
        <div>3. nowrap</div>
        <div>文本不会换行，文本会在同一行上继续，直到遇到 br 标签位置</div>
        <div>4. pre-line</div>
        <div>合并空白符序列，但是保留换行符</div>
        <div>5. inherit</div>
        <div>规定应该从父元素继承 white-space 属性的值</div>
        <div>项目中用到的地方</div>
        <div>例子一: ims中使用 white-space: pre-wrap; 实现保留用户输入的空格和换行符</div>
        <div>例子二: remotepay app中如果支付链接过长，将超过长度的部分隐藏并显示...,通过 white-space: nowrap; 设置</div>
        <div>既然提到了超过规定长度不换行，显示..., 那么我们就扩展一下，如何实现这种需求，需要通过一下css样式去实现 white-space: nowrap; overflow: hidden; text-overflow: ellipsis;</div>
        <div style="white-space: pre-line;">{{ difference }}</div>
        <el-row>
          <el-col :span="8" v-for="(item, index) in cardList" :key="item.id" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.src" class="image">
              <div style="padding: 14px;">
                <span>{{ item.content }}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.currentDate }}</time>
                  <!-- <el-button type="text" class="button">操作按钮</el-button> -->
                  <a :href="item.src" :download="item.fileName" class="button">下载图片</a>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-collapse-item>
      <el-collapse-item title="2. 动态绑定本地图片，src绑定的值，如果不生效，可以使用require引入" name="2">
        <div>require('图片路径')</div>
      </el-collapse-item>
      <el-collapse-item title="3. 跟客户端的交互" name="3">
        <div>详情请查看客户端专栏</div>
      </el-collapse-item>
      <el-collapse-item title="ELE - 4" name="4">
        <div></div>
        <div></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: '',
      textarea:
      `<el-form :model="form">
  <el-table :data="form.tableData">
    <el-table-column prop="name" label="姓名">
      <template slot-scope="scope">
        <el-form-item :prop=" 'tableData' + scope.$index + '.name' " :rules="rules.name”>
          <el-input v-model="scope.row.name"></el-input>
        </el-form-item>
      </template>
    </el-table-column>
  </el-table>
</el-form>`,
      difference: `white-space: pre-wrap 和 white-space: pre-line 的区别
      1. 关于回车换行之后的内容前面的空格问题:
      white-space: pre-wrap; 会将回车换行的内容前面的空格也展示出来
      white-space: pre-line; 会将回车换行的内容前面的空格忽略掉`,
      cardList: [
        {
          id: 1,
          fileName: 'preline',
          src: require('../../assets/img/preline.png'),
          currentDate: new Date(),
          content: 'white-space: pre-line;'
        },
        {
          id: 2,
          fileName: 'prewrap',
          src: require('../../assets/img/prewrap.png'),
          currentDate: new Date(),
          content: 'white-space: pre-wrap;'
        }
      ]
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
  .style-sheet {
    .el-collapse {
      .el-collapse-item {
        .el-collapse-item__header {
          padding-left: 15px;
          padding-right: 15px;
          font-weight: 600;
        }
        .el-collapse-item__content {
          padding-left: 15px;
          padding-right: 15px;
          padding-bottom: 15px;
        }
      }
    }
    .time {
      font-size: 13px;
      color: #999;
    }
    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }
    .button {
      text-decoration: none;
      cursor: pointer;
      padding: 0;
      float: right;
    }
    .image {
      width: 100%;
      display: block;
    }
    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
  }
</style>
