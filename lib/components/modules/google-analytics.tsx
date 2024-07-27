import Script from "next/script"

const GoogleAnalytics = () => {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src="https://www.googletagmanager.com/gtag/js?id=G-E46Y57N7WB"
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', 'G-E46Y57N7WB');
          `,
				}}
			/>
		</>
	)
}

export default GoogleAnalytics
