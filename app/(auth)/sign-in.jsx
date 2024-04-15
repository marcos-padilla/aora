import { Text, View, StyleSheet, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/form-field'
import { useState } from 'react'

export default function SignIn() {
	const [form, setForm] = useState({
		email: '',
		password: '',
	})
	return (
		<SafeAreaView className='bg-primary h-full'>
			<ScrollView>
				<View className='w-full justify-center h-full px-4 my-6'>
					<Image
						source={images.logo}
						resizeMode='contain'
						className='w-[115px] h-[35px]'
					/>
					<Text className='text-2xl text-white mt-10 font-semibold font-psemibold'>
						Log in to Aora
					</Text>
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
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({})
