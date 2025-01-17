export default async function Page() {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<div>
			<h1>Dynamic Page</h1>
		</div>
	);
}
