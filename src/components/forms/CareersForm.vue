<template>
	<div id="careers-form">
		<p>
			Please provide us with the following information if interested in career opportunities with our growing team.
		</p>
		<form action="" @submit.prevent="onSubmit">
			<div class="columns">
				<div class="column">
					<div class="field">
						<label class="label">Name *</label>
						<div class="control has-icons-left">
							<input class="input" type="text" placeholder="" name="name" v-model="form.name" required />
							<span class="icon is-small is-left">
								<i class="fa fa-user"></i>
							</span>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="field">
						<label class="label">Email *</label>
						<div class="control has-icons-left">
							<input class="input" type="text" placeholder="" name="email" v-model="form.email" required />
							<span class="icon is-small is-left">
								<i class="fa fa-envelope"></i>
							</span>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="field">
						<label class="label">Phone *</label>
						<div class="control has-icons-left">
							<input class="input" type="tel" placeholder="" name="phone" v-model="form.phone" required />
							<span class="icon is-small is-left">
								<i class="fa fa-phone"></i>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="columns">
				<div class="column is-4">
					<div class="field">
						<label class="label">City *</label>
						<div class="control">
							<input class="input" type="text" placeholder="" name="city" v-model="form.city" required />
						</div>
					</div>
				</div>
				<div class="column is-4">
					<div class="field">
						<label class="label">Province/Territory *</label>
						<div class="control">
							<input class="input" type="text" placeholder="" name="province" v-model="form.province" required />
						</div>
					</div>
				</div>
			</div>

			<div class="columns">
				<div class="column is-4">
					<div class="field">
						<label class="label">Current Position</label>
						<div class="control">
							<input class="input" type="text" placeholder="" name="current-position" v-model="form.currentPosition" />
						</div>
					</div>
				</div>
			</div>

			<div class="columns">
				<div class="column">
					<div class="field">
						<label class="label">Certified Exposure Device Operator? *</label>
						<div class="control">
							<label class="radio">
								<input type="radio" name="CEDO" value="Yes" v-model="form.cedo" required />
								Yes
							</label>
							<label class="radio">
								<input type="radio" name="CEDO" value="No" v-model="form.cedo" />
								No
							</label>
						</div>
					</div>
				</div>
			</div>

			<div class="columns">
				<div class="column">
					<div class="field">
						<label class="label">Level I CGSB Qualifications</label>
						<div class="control">
							<label class="checkbox">
								<input type="checkbox" name="level-1-CGSB" value="RT" v-model="form.level1Cgsb" />
								RT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-1-CGSB" value="UT" v-model="form.level1Cgsb" />
								UT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-1-CGSB" value="MT" v-model="form.level1Cgsb" />
								MT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-1-CGSB" value="PT" v-model="form.level1Cgsb" />
								PT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-1-CGSB" value="Other" v-model="form.level1Cgsb" />
								Other
							</label>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="field">
						<label class="label">Level II CGSB Qualifications</label>
						<div class="control">
							<label class="checkbox">
								<input type="checkbox" name="level-2-CGSB" value="RT" v-model="form.level2Cgsb" />
								RT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-2-CGSB" value="UT" v-model="form.level2Cgsb" />
								UT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-2-CGSB" value="MT" v-model="form.level2Cgsb" />
								MT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-2-CGSB" value="PT" v-model="form.level2Cgsb" />
								PT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-2-CGSB" value="Other" v-model="form.level2Cgsb" />
								Other
							</label>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="field">
						<label class="label">Level III CGSB Qualifications</label>
						<div class="control">
							<label class="checkbox">
								<input type="checkbox" name="level-3-CGSB" value="RT" v-model="form.level3Cgsb" />
								RT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-3-CGSB" value="UT" v-model="form.level3Cgsb" />
								UT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-3-CGSB" value="MT" v-model="form.level3Cgsb" />
								MT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-3-CGSB" value="PT" v-model="form.level3Cgsb" />
								PT
							</label>
							<label class="checkbox">
								<input type="checkbox" name="level-3-CGSB" value="Other" v-model="form.level3Cgsb" />
								Other
							</label>
						</div>
					</div>
				</div>
			</div>

			<div class="columns">
				<div class="column">
					<div class="field">
						<label class="label">API Qualifications</label>
						<div class="control">
							<label class="checkbox">
								<input type="checkbox" name="api-qualifications" value="510" v-model="form.apiQualifications" />
								510
							</label>
							<label class="checkbox">
								<input type="checkbox" name="api-qualifications" value="570" v-model="form.apiQualifications" />
								570
							</label>
							<label class="checkbox">
								<input type="checkbox" name="api-qualifications" value="653" v-model="form.apiQualifications" />
								653
							</label>
						</div>
					</div>
				</div>
			</div>

			<div class="columns">
				<div class="column">
					<div class="field">
						<label class="label">CWB 178.2 Qualifications</label>
						<div class="control">
							<label class="checkbox">
								<input type="checkbox" name="cwb-178-2-qualifications" value="Level 1" v-model="form.cwb1782Qualifications" />
								Level I
							</label>
							<label class="checkbox">
								<input type="checkbox" name="cwb-178-2-qualifications" value="Level 2" v-model="form.cwb1782Qualifications" />
								Level II
							</label>
							<label class="checkbox">
								<input type="checkbox" name="cwb-178-2-qualifications" value="Level 3" v-model="form.cwb1782Qualifications" />
								Level III
							</label>
						</div>
					</div>
				</div>
			</div>

			<div class="columns">
				<div class="column">
					<div class="field">
						<label class="label">Additional Certifications</label>
						<div class="control">
							<textarea class="textarea" name="additional-certifications" v-model="form.additionalCertifications"></textarea>
						</div>
					</div>
				</div>
				<div class="column">
					<div class="field">
						<label class="label">Additional Information</label>
						<div class="control">
							<textarea class="textarea" name="additional-information" v-model="form.additionalInformation"></textarea>
						</div>
					</div>
				</div>
			</div>

			<div class="columns">
				<div class="column">
					<div class="field">
						<label class="label">Attach Resume *</label>
						<div class="field">
							<div class="file has-name">
								<label class="file-label">
									<input class="file-input" type="file" name="resume" id="attach-resume" @change="updateFileNameDisplay">
									<span class="file-cta">
										<span class="file-icon">
											<i class="fa fa-upload"></i>
										</span>
										<span class="file-label">
											Choose a file…
										</span>
									</span>
									<span class="file-name">
										{{ fileNameDisplay }}
									</span>
								</label>
							</div>
							<p class="help">
								Accepted formats: pdf, doc, docx, odt
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="columns">
				<div class="column">
					<p>
						<input type="submit" class="button is-primary" value="Submit" v-bind:disabled="resultMessageSuccess">
					</p>
					<div class="notification" v-bind:class="[resultMessageSuccess ? 'is-success' : 'is-warning']" v-show="resultMessage" v-html="resultMessage">
					</div>
				</div>
			</div>
		</form>
	</div>
</template>
<script>
	import axios from 'axios';
	export default {
		name: 'CareersForm',
		data(){
			return {
				form: {
					name: '',
					email: '',
					phone: '',
					city: '',
					province: '',
					currentPosition: '',
					cedo: '',
					level1Cgsb: [],
					level2Cgsb: [],
					level3Cgsb: [],
					apiQualifications: [],
					cwb1782Qualifications: [],
					additionalCertifications: '',
					additionalInformation: ''
				},
				fileNameDisplay: '',
				resultMessage: null,
				resultMessageSuccess: false
			}
		},
		computed:{

		},
		methods: {
			onSubmit(){
				let self = this;
				let formData = new FormData();
				const file = document.getElementById('attach-resume').files[0];
				formData.append('jsonForm', JSON.stringify(this.form))
				formData.append('file', file);

				console.log(formData);

				axios.post('/assets/handlers/CareersFormHandler.php', formData, {

				})
				.then(function(result){
					if(result.data.status == 'success') {
						self.resultMessage = '<strong>Your application has been submitted!</strong> We will review your application as soon as possible. Please note we may only contact candidates selected for an interview.';
						self.resultMessageSuccess = true;
					} else {
						self.resultMessage = '<strong>Error</strong> ' + result.data.message;
						//self.resultMessageSuccess = false;
					}

				}, function(error){
					self.resultMessage = '<strong>' + error.response.status + ' - ' + error.response.statusText + '</strong> | Please report this error and forward your resume &amp; certifications to <a href="mailto:info@triquestndt.com">info@triquestndt.com</a>';
					//self.resultMessageSuccess = false;
				});
			},
			updateFileNameDisplay(e){
				this.fileNameDisplay = e.target.files[0].name;
			}

		}
	}
</script>
