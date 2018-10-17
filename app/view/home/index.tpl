<!-- app/view/news/list.tpl -->
<html>
<head>
	<title>咖啡猫</title>
	<link rel="stylesheet" href="../../public/css/home.css"/>
</head>
<body>
<div class="home">
	<div id="container">
		<div id="list" style="left:-600px">
			<!--{% for item in list %}-->
			<img src="{{item.url}}" alt="5"/>
			<!--{% endfor %}-->
		</div>
		<div id="buttons">
			<span index="1" class="on"></span>
			<span index="2"></span>
			<span index="3"></span>
			<span index="4"></span>
			<span index="5"></span>
		</div>
		<a href="javascript:;" class="arrow" id="pre"><</a>
		<a href="javascript:;" class="arrow" id="next">></a>
	</div>
</div>
</body>
<script src="../../public/js/home.js"></script>
<script>
  window.onload = bannerSwiper()
</script>
</html>
