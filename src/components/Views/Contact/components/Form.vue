<template>
	<form method="post" class="form">

		<span class="dsadsadever" style="display: none">
			<label for="accaa">Jeżeli jesteś człowiekiem, nie wypełniaj tego pola</label>
			<input type="text" id="accaa" name="hany" v-model="formData.honey">
		</span>

		<div class="form__content">
			<h2>Formularz kontaktowy</h2>
			<div class="form__inputs">


				<div class="form__element">
					<input
							type="text"
							class="form__input"
							v-model="formData.fullName"
							id="fullname"
							@keyup="charCounter"
							@keydown.space.enter="preventLeading"
							placeholder="Imię i nazwisko"
					>
					<span class="error" v-if="errorList.name" style="color: red;">Podaj swoje imię i nazwisko</span>
				</div>

				<div class="form__element">
					<input
							type="email"
							class="form__input"
							v-model="formData.email"
							id="email"
							@keydown.space.enter="preventLeading"
							placeholder="Email"
					>
					<span class="error" v-if="errorList.email.empty" style="color: red;">Podaj email</span>
					<span class="error" v-if="errorList.email.format" style="color: red;">Zły format maila</span>
				</div>

				<div class="form__element">
					<input
							type="tel"
							class="form__input"
							v-model="formData.phone"
							id="phone"
							placeholder="Numer telefonu | Format: 123456789"
							@keyup="charCounter"
							@keydown.space.enter="preventLeading"
					>
					<span class="error" v-if="errorList.phone.empty" style="color: red;">Podaj numer telefonu</span>
					<span class="error" v-else-if="errorList.phone.format" style="color: red;">Zły format numeru</span>
				</div>

				<div class="form__element">
					<input
							type="text"
							class="form__input"
							v-model="formData.subject"
							id="subject"
							@keyup="charCounter"
							@keydown.space.enter="preventLeading"
							placeholder="Temat wiadomości "
					>
					<span class="error" v-if="errorList.title" style="color: red;">Podaj temat wiadomości</span>
				</div>
			</div>

			<div class="form__element form__element--textarea">
				<span class="error" v-if="errorList.message" style="color: red;">Wiadomość nie może być pusta</span>
				<textarea
						name="textarea"
						id="textarea"
						v-model="formData.message"
						class="form__textarea"
						@keyup="charCounter"
						@keydown.space.enter="preventLeading"
						placeholder="Wiadomość"
				></textarea>
			</div>
		</div>

		<div class="form__checkbox">
			<input
					id="checkbox-1"
					type='checkbox'
					@click="changeCheckBoxStatus"
			/>
			<label for="checkbox-1"></label>
			<p>Nie jestem robotem.</p>

		</div>
		<span class="error" v-if="checkBox1Error" style="color: red;">Zaznacz checkbox</span>

		<div class="popup" v-if="sendStatus === true">
			Wiadomość została wysłana pomyślnie.
		</div>

		<Button
				class="form__submit"
				buttonStyle="secondary"
				buttonSize="normal"
				buttonText="Wyślij"
				@click.prevent="validFormBeforeSend"
		>
		</Button>


		<div class="contact__info">
			<div class="contact__box">
				<span>tel. 777 666 555</span>
			</div>
			<div class="contact__box">
				<span>kontakt@pieknedrewno.pl</span>
			</div>
		</div>
	</form>
</template>

<script>
const querystring = require("querystring")
import {formLogic} from './mixins'

export default {
	name: 'Form',
	mixins: [formLogic],
}
</script>

<style lang="sass" scoped>
@import './style'
</style>

<style lang="sass" scoped>
@import '../../../../assets/sass/variables'
@media screen and (min-width: 320px) and (max-width: 980px)
	.form
		width: 100%
		padding: 50px 20px

		&__inputs
			flex-direction: column

		&__element
			width: 100%

</style>