import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

// Components
import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

class IndexPage extends React.Component {
	normalizePath(path) {
	  return path.replace(/\/+/g, `/`)
	}

	withPrefix(path) {
	  return this.normalizePath(`${__PATH_PREFIX__}/${path}`)
	}

	render() {
		return (
		  <Layout>
		    <SEO title="2018 OIPM Annual Report" keywords={[
						`New Orleans`, `police`, `OIPM`, `NOPD`, `independent police monitor`,
						`oversight`, `data`, `analysis`, `annual report`, `2018`
					]} />

				<Container>
					<Row className="text-center">
						<Col className="mt-4">
							<h1 className="my-2">2018 Annual Report</h1>
							<h2 className="my-3">New Orleans Office of the Independent Police Monitor (OIPM)</h2>
						</Col>
					</Row>

					<Row className="mt-5">
						<Col>
							<p>Introduction text</p>
							<p>The report is organized into these sections:</p>
							<Nav vertical>
			          <NavLink href={this.withPrefix("/force")}>Use of Force</NavLink>
								<NavLink href={this.withPrefix("/complaints-misconduct")}>Complaints &amp; Misconduct</NavLink>
			        </Nav>
						</Col>
						<Col>
							<h4>Picture or chart here</h4>
						</Col>
					</Row>
				</Container>
		  </Layout>
		)
	}
}


export default IndexPage