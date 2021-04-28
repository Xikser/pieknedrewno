import axios from 'axios'

export const formLogic = {
	data() {
		return {
			charLimit: {
				textarea: 7200,
				subject: 40,
				fullname: 30,
				phone: 9,
			},
			formData: {
				subject: '',
				fullName: '',
				email: '',
				phone: '',
				message: '',
				honey: '',
			},

			sendStatus: false,

			errorList: {
				title: false,
				name: false,
				email: {
					empty: false,
					format: false,
				},
				phone: {
					empty: false,
					format: false,
				},
				message: false,
				amount: [],
			},

			checkBox1Status: false,
			checkBox1Error: false,
		}
	},
	methods: {
		charCounter() {
			const textarea = document.querySelector('textarea')
			const subject = document.querySelector('#subject')
			const fullname = document.querySelector('#fullname')
			const phone = document.querySelector('#phone')

			let textareaChars = textarea.value.length
			let subjectChars = subject.value.length
			let fullnameChars = fullname.value.length
			let phoneChars = phone.value.length

			if (textareaChars >= this.charLimit.textarea) {
				textarea.value = textarea.value.substr(0, this.charLimit.textarea)
			}

			if (subjectChars >= this.charLimit.subject) {
				subject.value = subject.value.substr(0, this.charLimit.subject)
			}

			if (fullnameChars >= this.charLimit.fullname) {
				fullname.value = fullname.value.substr(0, this.charLimit.fullname)
			}

			if (phoneChars >= this.charLimit.phone) {
				phone.value = phone.value.substr(0, this.charLimit.phone)
			}
		},

		validData() {
			this.resetValidData()
			return new Promise((resolve, reject) => {
				if (!this.formData.subject) {
					this.errorList.title = true
					this.errorList.amount.push('1')
				}

				if (!this.formData.fullName) {
					this.errorList.name = true
					this.errorList.amount.push('2')
				}

				if (!this.formData.email) {
					this.errorList.email.empty = true
					this.errorList.amount.push('3')
				} else if (!this.validEmail(this.formData.email)) {
					this.errorList.amount.push('3')
					this.errorList.email.format = true
				}

				if (!this.formData.phone) {
					this.errorList.phone.empty = true
					this.errorList.amount.push('4')
				} else if (!this.validPhone(this.formData.phone)) {
					this.errorList.amount.push('4')
					this.errorList.phone.format = true
				}

				if (!this.formData.message) {
					this.errorList.message = true
					this.errorList.amount.push('5')
				}


				if (!this.errorList.amount.length)
					resolve(true)
			})
				.catch(
					(error) => {
						console.log(error)
					}
				)
		},

		validEmail(email) {
			const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			return regex.test(email)
		},

		validPhone(phone) {
			const phoneReg = /(?:1[2-8]|2[2-69]|3[2-49]|4[1-68]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}/
			return phoneReg.test(phone)
		},

		preventLeading(e) {
			if (!e.target.value)
				e.preventDefault();
			else if (e.target.value[0] === ' ' || e.target.value[0] === '\n')
				e.target.value = e.target.value.replace(/^\s*/, "")
		},

		changeCheckBoxStatus(input) {
			if (input.target.id === 'checkbox-1')
				this.checkBox1Status = !this.checkBox1Status

			if (input.target.id === 'checkbox-2')
				this.checkBox2Status = !this.checkBox2Status
		},

		validCheckBox() {
			this.checkBox1Error = false

			return new Promise(resolve => {
				if (!this.checkBox1Status)
					this.checkBox1Error = true

				if (this.checkBox1Error === false) {
					resolve(true)
				}
			})

		},

		async validFormBeforeSend() {
			this.validData().then(() => {
				this.validCheckBox().then(() => {
					this.sendEmail()
				}).catch(
					(error) => {
						console.log(error)
					}
				)
			}).catch(
				(error) => {
					console.log(error)
				}
			)
		},

		resetValidData() {
			this.errorList.amount.length = 0
			this.errorList.title = false
			this.errorList.name = false
			this.errorList.email.empty = false
			this.errorList.email.format = false
			this.errorList.phone.empty = false
			this.errorList.phone.format = false
			this.errorList.message = false
			this.checkBox1Error = false
		},

		resetCheckBox() {
			document.querySelector('#checkbox-1').checked = false
			this.checkBox1Status = !this.checkBox1Status
		},

		resetDataValue() {
			this.formData = {
				subject: '',
				fullName: '',
				email: '',
				phone: '',
				message: '',
			}
		},

		sendEmail() {
			const {fullName, subject, email, phone, message, honey} = this.formData;
			const payload = {fullName, subject, email, phone, message, honey};
			const formData = new FormData()

			for (let key in payload) {
				formData.append(key, payload[key])
			}

			axios.post('./api/file.php', formData, {
				headers: {'Content-Type': 'multipart/form-data'},
			})
				.then(() => {
					this.sendStatus = true
					this.charLimit = 7200
					this.resetDataValue()
					this.resetValidData()
					this.resetCheckBox()
					document.querySelector('.form__submit').disabled = true

					setTimeout(() => {
						document.querySelector('.form__submit').disabled = false
						this.sendStatus = false
					}, 5000)
				})
		}
	}
}