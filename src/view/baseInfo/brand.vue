<template>
  <div>
    <div>
      <el-form :inline="true" :model="formInline">
        <el-form-item label="Approved by">
          <el-input
            v-model="formInline.user"
            placeholder="Approved by"
            clearable
          />
        </el-form-item>

        <el-form-item label="Activity time">
          <el-date-picker
            v-model="formInline.date"
            type="date"
            placeholder="Pick a date"
            clearable
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table :data="tableData" border style="width: 50%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <el-pagination
      background
      :current-page="1"
      :layout="layout"
      :page-size="20"
      :page-sizes="[20, 50, 100, 200]"
      :total="1000"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const formInline = reactive({
  user: "",
  region: "",
  date: "",
});
const layout = "total, sizes, prev, pager, next, jumper";
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];

const router = useRouter();

const login = () => {
  console.log("login");
  router.push({
    path: "/login",
  });
};
</script>
    
    <style lang="scss" scoped>
.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>