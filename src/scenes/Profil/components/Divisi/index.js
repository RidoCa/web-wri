import React, { Component } from 'react'
import { SectionItem } from '../../../../components'
import { Header, Image, Grid } from 'semantic-ui-react'
import Fade from 'react-reveal/Fade'
import Rotate from 'react-reveal/Rotate'
import PropTypes from 'prop-types'

class Divisi extends Component {
	static propTypes = {
		image: PropTypes.string,
		name: PropTypes.string,
		description: PropTypes.string,
		subdivisi: PropTypes.array
	}

	render() {
		return (
			<div>
				<div align="center">
					<Rotate>
						<Image src={this.props.image} size="small" />
						<br />
					</Rotate>

					<Fade top>
						<Header size="huge" content={this.props.name} />
						<p>{this.props.description}</p>
						<br />
					</Fade>
				</div>

				<Grid columns={3} doubling>
					{this.props.subdivisi.map((subdivisi, index) => (
						<Grid.Column key={index}>
							<SectionItem
								title={subdivisi.name}
								icon={subdivisi.icon}
								size="small"
							/>
						</Grid.Column>
					))}
				</Grid>
			</div>
		)
	}
}

export default Divisi
