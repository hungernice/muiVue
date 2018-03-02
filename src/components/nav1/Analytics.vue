<template>
	<div>
		<table class="table table-bordered table-hover table-striped">
			<thead>
				<tr>
					<th class="text-center">
						<input type="checkbox" />
					</th>
					<th class="text-center">序号</th>
					<th class="text-center">服务名称</th>
					<th class="text-center">基线版本</th>
					<th class="text-center">最新版本</th>
					<th class="text-center">开发负责人</th>
					<th class="text-center">测试负责人</th>
					<th class="text-center">运维负责人</th>
					<th class="text-center">更新时间</th>
					<th class="text-center">上线时间</th>
					<th class="text-center">操作</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in analyData" v-cloak>
					<td class="text-center">
						<input type="checkbox" />
					</td>
					<td class="text-center">{{index+1}}</td>
					<td class="text-center">{{item.servicename}}</td>
					<td class="text-center">{{item.baseVersion}}</td>
					<td class="text-center">{{item.lastVersion}}</td>
					<td class="text-center">{{item.qa}}</td>
					<td class="text-center">{{item.op}}</td>
					<td class="text-center">{{item.rd}}</td>
					<td class="text-center">{{item.newDate}}</td>
					<td class="text-center">{{item.lineDate}}</td>
					
					<td class="text-center">
						<button class="btn btn-sm btn-primary">版本管理</button>
						<button class="btn btn-sm btn-info" @click="edit(index)" data-toggle="modal" data-target="#editModal">编辑</button>
						<button class="btn btn-sm btn-danger">删除</button>
					</td>					
				</tr>
			</tbody>
		</table>
		<div class="modal fade" tabindex="-1" role="dialog" id="editModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span> 
						</button>
						<h4 class="modal-title">版本管理</h4>
					</div>
					<div class="modal-body">
						<form class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-2 col-sm-offset-2 control-label">服务名称</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" >
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-2 col-sm-offset-2 control-label">基线版本</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" >
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-2 col-sm-offset-2 control-label">最新版本</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" >
								</div>
							</div>		
							<div class="form-group">
								<label class="col-sm-2 col-sm-offset-2 control-label">开发负责人</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" >
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-2 col-sm-offset-2 control-label">测试负责人</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" >
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-2 col-sm-offset-2 control-label">运维负责人</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" >
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-2 col-sm-offset-2 control-label">更新时间</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" >
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-2 col-sm-offset-2 control-label">上线时间</label>
								<div class="col-sm-5">
									<input type="text" class="form-control">
								</div>
							</div>								
							<p>{{editanalyData[0].baseVersion}}</p>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
						<button type="button" class="btn btn-primary" >确定</button>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import { getAnaly } from '../../api/navApi.js';
	
	export default {
		data() {
			return {
				analyData: [],
				nowIndex: -10,
				editanalyData: []
			}
		},
		methods:{
			edit: function(nowIndex){
				this.nowIndex =nowIndex
				let editData =this.analyData[nowIndex]
				this.editanalyData.unshift(editData)
				console.log(this.editanalyData[0].baseVersion)
			},
			editSubimt: function(){
				this.editanalyData=[]
			}
		},
		mounted(){			
			getAnaly().then((res)=>{
				this.analyData=res.analyData
			})
			
		}
	}
</script>

<style>

</style>