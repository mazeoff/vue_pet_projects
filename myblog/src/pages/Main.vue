<template>
	<transition name="fade" appear>
		<div class="main__wrapper">
			<!-- <transition name="fade" appear> -->
				<h1>Welcome to My Blog</h1>
			<!-- </transition> -->
		</div>
	</transition>
</template>

<script>

export default {

}

</script>

<style lang="scss" scoped>
.main__wrapper{
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>