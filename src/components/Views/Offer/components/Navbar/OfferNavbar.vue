<template functional>
	<nav class="offer__navbar">
		<ul class="offer__navbar-list">
			<li class="offer__navbar-list-item">
				<span>Wystrój wnętrz</span>
				<ul class="offer__navbar-sub-list">
					<li class="offer__navbar-sub-list-item">
						<Button buttonStyle="default" buttonSize="normal" buttonText="Wystrój wnętrz"></Button>
					</li>
				</ul>
			</li>
			<li class="offer__navbar-list-item">
				<span>Do ogrodu</span>
				<ul class="offer__navbar-sub-list">
					<li class="offer__navbar-sub-list-item">
						<Button buttonStyle="default" buttonSize="normal" buttonText="Donice"></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button buttonStyle="default" buttonSize="normal" buttonText="Regały ogrodowe"></Button>
					</li>
				</ul>
			</li>
			<li class="offer__navbar-list-item">
				<span>Do domu</span>
				<ul class="offer__navbar-sub-list">
					<li class="offer__navbar-sub-list-item">
						<Button buttonStyle="default" buttonSize="normal" buttonText="Ramy luster"></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button buttonStyle="default" buttonSize="normal" buttonText="Skrzynki"></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button buttonStyle="default" buttonSize="normal" buttonText="Regały"></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button buttonStyle="default" buttonSize="normal" buttonText="Deski piknikowe"></Button>
					</li>
				</ul>
			</li>
			<li class="offer__navbar-list-item">
				<span>Gadżety</span>
				<ul class="offer__navbar-sub-list">
					<li class="offer__navbar-sub-list-item">
						<Button buttonStyle="default" buttonSize="normal" buttonText="Stojaki na słuchawki"></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button buttonStyle="default" buttonSize="normal" buttonText="Łyżki do butów"></Button>
					</li>
					<li class="offer__navbar-sub-list-item">
						<Button buttonStyle="default" buttonSize="normal" buttonText="Stojaki na wino"></Button>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	name: 'offer nav',
}
</script>

<style lang="sass" scoped>
@import '../../../../../assets/sass/variables'

</style>