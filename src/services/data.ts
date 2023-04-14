export default async function traer_api() {
	try {
			const starData = await fetch('https://swapi.dev/api/people/').then((res) => {
				return res.json();
			});

			return starData.results;

	} catch (error) {
		console.log(error);
	}
}
