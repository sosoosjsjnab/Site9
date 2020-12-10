import React from "react";
import theme from "theme";
import { Theme, Link, Text } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Section } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			background="rgba(0, 0, 204, 0.81)"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				<Link href="/index">
					MAIN
				</Link>
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Cookies
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Cookies consist of pieces of code installed in the browser that help the owner to provide the service in accordance with the described purposes. Some of the purposes for which cookies are set may also require User consent.
If the installation of cookies is based on consent, such consent may be freely revoked at any time in accordance with the instructions given in this document.
Technical cookies and cookies used for aggregate statistical purposes
* Activities strictly necessary for the operation of the service
* Activity on saving preferences, optimization and statistics
Other types of cookies or third parties that set cookies
Some of the services listed below collect statistics in an anonymous and aggregated form and may not require User consent or may be managed directly by the owner-depending on how they are described-without the assistance of third parties.
If any services operated by third parties are listed among the tools below, they may be used to track users ' browsing habits-in addition to the information provided herein and without the owner's knowledge. Please refer to the privacy policy of the listed services for details.
* Advertising
* Analytics
* Commercial affiliation
* Content and feature performance testing (A / B testing)
* Display content from external platforms
* Hosting and server infrastructure
* Infrastructure monitoring 
* Interaction with external social networks and platforms
* Interact with the platforms, chat
* Remarketing and behavioral targeting
* Manage Tags
How to grant or revoke consent to the installation of cookies
In addition to what is stated in this document, the user can manage the cookie settings directly from their browser and prevent, for example, the installation of cookies by third parties.
Through your browser settings, you can also delete cookies that have been set in the past, including cookies that may have saved your initial consent to the installation of cookies on this website.
For example, users can find information about cookie management in the most commonly used browsers at the following addresses: Google Chrome, Mozilla Firefox, Apple Safari and Microsoft Internet Explorer.
With regard to cookies set by third parties, users can manage their preferences and withdraw their consent by clicking the appropriate opt-out link (if provided), using the means provided in the third party's privacy policy, or contacting the third party.
Notwithstanding the foregoing, owner informs that users may follow the instructions provided in relation to the related initiatives of EDAA (EU), network advertising initiative (USA) and digital advertising Alliance (USA), DAAC (Canada), DDAI (Japan) or other similar services. Such initiatives allow users to choose their tracking preferences for most advertising tools. Therefore, the owner recommends that users use these resources in addition to the information provided in this document.
Since the installation of third party cookies and other tracking systems through the services used in this application cannot be technically controlled by the owner, any specific links to cookies and tracking systems set by third parties should be considered indicative. For full information, the user should read the privacy policy of the relevant third-party services listed in this document. 
Given the objective complexity of identifying cookie-based technologies, users are advised to contact the owner if they want more information about the use of cookies by this application.
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});