<script setup lang="ts">
import GameHeader from './components/GameHeader.vue';
import GameWord from './components/GameWord.vue';
import GameFigure from './components/GameFigure.vue';
import GameWrongLetters from './components/GameWrongLetters.vue';
import GamePopup from './components/GamePopup.vue';
</script>
<template>
	<GameHeader />
	<div class="game-container">
		<GameFigure />
		<GameWrongLetters />

		<GameWord />
	</div>

	<!-- Container for final message -->
	<GamePopup />

	<!-- Notification -->
	<div class="notification-container show">
		<p>Вы уже вводили этот символ</p>
	</div>
</template>
