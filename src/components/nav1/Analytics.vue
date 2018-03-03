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
						<button class="btn btn-sm btn-info" @click="edit(index)" data-toggle="modal" data-target="#editModal">编辑</button>
						<button class="btn btn-sm btn-danger" @click="nowIndex=index" data-toggle = "modal" data-target="#delModal">删除</button>
					</td>					
				</tr>
			</tbody>
		</table>
		<button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#addModal">新增记录</button>
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
								<label class="col-sm-3 col-sm-offset-1 control-label">服务名称</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalEdit.servicename">
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">基线版本</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalEdit.baseVersion">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">最新版本</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalEdit.lastVersion">
								</div>
							</div>		
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">开发负责人</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalEdit.qa">
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">测试负责人</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalEdit.op">
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">运维负责人</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalEdit.rd">
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">更新时间</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalEdit.newDate">
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">上线时间</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalEdit.lineDate">
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
						<button type="button" class="btn btn-primary" data-dismiss="modal" @click="editSubimt">确定</button>
					</div>
				</div>
			</div>
		</div>
		<!--编辑模态框结束-->
		
		<div class="modal fade" tabindex="-1" id="delModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title">删除记录</h4>
					</div>
					<div class="modal-body">
						<p class="text-danger text-center">是否删除选项</p>
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" data-dismiss="modal">关闭</button>
						<button class="btn btn-primary" data-dismiss="modal" @click="delItem(index)">确定</button>
					</div>
				</div>
			</div>
		</div>
		<!--删除模态框结束-->
		
		<div class="modal fade" id="addModal">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button class="close" data-dismiss="modal">
							<span aria-hidden="true">&times;</span>
						</button>
						<h4 class="modal-title">新增记录</h4>
					</div>
					<div class="modal-body">
						<form class="form-horizontal">
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">服务名称</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalAdd.servicename">
								</div>
							</div>

							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">基线版本</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalAdd.baseVersion">
								</div>
							</div>
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">最新版本</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalAdd.lastVersion">
								</div>
							</div>		
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">开发负责人</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalAdd.qa">
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">测试负责人</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalAdd.op">
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">运维负责人</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalAdd.rd">
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">更新时间</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalAdd.newDate">
								</div>
							</div>	
							<div class="form-group">
								<label class="col-sm-3 col-sm-offset-1 control-label">上线时间</label>
								<div class="col-sm-5">
									<input type="text" class="form-control" v-model="modalAdd.lineDate">
								</div>
							</div>
						</form>						
					</div>
					<div class="modal-footer">
						<button class="btn btn-default" data-dismiss="modal">关闭</button>
						<button class="btn btn-primary" data-dismiss="modal" @click="addItems">确定</button>
					</div>
				</div>
			</div>
		</div>
		<!--新增记录模态框-->
	</div>

</template>

<script>
	import { getAnaly } from '../../api/navApi.js';
	
	export default {
		data() {
			return {
				analyData: [],	//表格初始数据
				nowIndex: -10,			
				modalEdit:{		//编辑数据
					servicename: "",
					baseVersion: "",
					lastVersion:"",
					qa: "",
					op:"",
					rd: "",
					newDate: "",
					lineDate: "",
				},
				modalAdd:{		//编辑数据
					servicename: "",
					baseVersion: "",
					lastVersion:"",
					qa: "",
					op:"",
					rd: "",
					newDate: "",
					lineDate: "",
				},
				
			}
		},
		methods:{
			addItems: function(){		//新增
				let addData= this.modalAdd
				this.analyData.push(addData)
				this.modalAdd={}		//新增记录后将上一条记录清空
			},
			edit: function(nowIndex){		//点击编辑
				this.nowIndex =nowIndex
				let editData =this.analyData[nowIndex]
				this.modalEdit={
					servicename: editData.servicename,
					baseVersion: editData.baseVersion,
					lastVersion: editData.lastVersion,
					qa: editData.qa,
					op: editData.op,
					rd: editData.rd,
					newDate: editData.newDate,
					lineDate: editData.lineDate,					
				}
			},
			editSubimt: function(){		//编辑
				let i = this.nowIndex
				this.analyData.splice(i, 1, this.modalEdit)				
			},
			delItem: function(){		//删除
				let i = this.nowIndex
				this.analyData.splice(i, 1)		
				
			}
		},
		mounted(){			//vue挂载完毕执行
			getAnaly().then((res)=>{
				this.analyData=res.analyData
			})
			
		}
	}
</script>

<style>

</style>