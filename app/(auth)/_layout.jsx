import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import Loader from '../../components/loader'
import { useGlobalContext } from '../../providers/global-provider'

export default function AuthLayout() {
	const { loading, isLogged } = useGlobalContext()

	if (!loading && isLogged) return <Redirect href='/home' />
	return (
		<>
			<Stack>
				<Stack.Screen
					name='sign-in'
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='sign-up'
					options={{
						headerShown: false,
					}}
				/>
			</Stack>
			<Loader isLoading={loading} />
			<StatusBar backgroundColor='#161622' style='light' />
		</>
	)
}
