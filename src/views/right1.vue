<template>
    <div class="visual_box">
			<div class="visual_title">
				<span>实时视频监控</span>
				<img src="../assets/ksh33.png">

			</div>
	</div>
</template>

<script>

</script>



<style scoped>
.visual_box .visual_title {
	position: relative;
	height: 35px;
	margin: 5px 0;
}

.visual_box .visual_title span {
	color: #72d4fc;
	font-size: 26px;
	line-height: 35px;
}

.visual_box .visual_title img {
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
}

.visual_box .visual_chart {
	height: calc(100% - 35px);
}


</style>