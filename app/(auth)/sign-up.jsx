import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/form-field'
import { useState } from 'react'
import CustomButton from '../../components/custom-button'
import { Link } from 'expo-router'

export default function SignUp() {
	const [form, setForm] = useState({
		username: '',
		email: '',
		password: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleSubmit = () => {}

	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center min-h-[85vh] px-4 my-6'>
					<Image
						source={images.logo}
						resizeMode='contain'
						className='w-[115px] h-[35px]'
					/>
					<Text className='text-2xl text-white mt-10 font-semibold font-psemibold'>
						Sign Up to Aora
					</Text>
					<FormField
						title='Username'
						value={form.username}
						handleChangeText={(e) =>
							setForm((prev) => ({
								...prev,
								username: e,
							}))
						}
						otherStyles='mt-10'
					/>
					<FormField
						title='Email'
						value={form.email}
						handleChangeText={(e) =>
							setForm((prev) => ({
								...prev,
								email: e,
							}))
						}
						otherStyles='mt-7'
						keyboardType='email-address'
					/>
					<FormField
						title='Password'
						value={form.password}
						handleChangeText={(e) =>
							setForm((prev) => ({
								...prev,
								password: e,
							}))
						}
						otherStyles='mt-7'
					/>
					<CustomButton
						title={'Sign Up'}
						handlePress={handleSubmit}
						containerStyles={'mt-7'}
						isLoading={isSubmitting}
					/>
					<View className='justify-center pt-5 flex-row gap-2'>
						<Text className='text-lg text-gray-100 font-pregular'>
							Already have an account?
						</Text>
						<Link
							href={'/sign-in'}
							className='text-lg font-psemibold text-secondary-100'
						>
							Sign In
						</Link>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({})
