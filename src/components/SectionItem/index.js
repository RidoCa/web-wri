import React from 'react'
import { Header, Icon } from 'semantic-ui-react'
import Zoom from 'react-reveal/Zoom'

const SectionItem = ({ title, icon, description, color, size }) => (
	<Header size={size}>
		<Icon name={icon} circular color={color} inverted />

		<Header.Content>
			<Zoom>
				{title}
				<Header.Subheader>{description}</Header.Subheader>
			</Zoom>
		</Header.Content>
	</Header>
)

export default SectionItem