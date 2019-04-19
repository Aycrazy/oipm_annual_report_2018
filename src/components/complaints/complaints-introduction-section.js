import React from "react"
import { Row, Col } from 'reactstrap'

import AllegationsMostCommonPlot from './allegations-most-common-plot'
import ComplaintsByCityPlot from './complaints-by-city-plot'

const ComplaintsIntroductionSection = () => (
	<div>
		<Row>
			<Col>
				<h2 id="complaints-introduction-section">Introduction &amp; terms</h2>
				<p>TODO</p>
			</Col>


		</Row>
		<Row>
			<Col>
				<h4>Complaints in other cities</h4>
				<p>New Orleans gets more complaints from the public when compared to other cities.</p>
			</Col>
			<Col>
				<ComplaintsByCityPlot />
			</Col>
		</Row>
		<Row>
			<Col>
				<h4>Most common allegations</h4>
				<ul>
					<li>The three most common complaint allegations in 2018, representing roughly 80% of all allegations, were: “neglect of duty,” “professionalism,” and “adherence to law.” Similar to findings analyzed of other departments, complaints overwhelming stem from the ways the officers interact with community members <a href="#ref-2-officers-interact">[2]</a>.</li>
					<li>Complaint allegations have shifted slightly from 2017. While “neglect of duty” and “professionalism” remained the most common allegations, the third most common switched from “instructions from an authoritative source” in 2017 to “adherence to law” in 2018. While there was not a significant percentage change in “adherence to law” allegations between 2017 and 2018, “instructions from an authoritative source” allegations decreased by almost 60 instances, or over 3%.</li>
				</ul>

				<p id="ref-2-officers-interact">[2] - Chicago Police Department, Chicago Police Department <a href="https://home.chicagopolice.org/wp-content/uploads/2019/03/Chicago-Police-Department-Annual-Report-2017.pdf">Annual Report 2017, p. 28-30</a>, accessed April 9, 2019.</p>
			</Col>
			<Col>
				<AllegationsMostCommonPlot />
			</Col>
		</Row>
	</div>
)

export default ComplaintsIntroductionSection
