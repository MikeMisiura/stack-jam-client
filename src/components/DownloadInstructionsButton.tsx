import { Button } from 'react-bootstrap'
import '../theme/Global.css'
import './BuyNowButton.css'

export default function DownloadInstructionsButton() {
	return (
		<Button
			// href="http://localhost:3001/pdf/dont-lose-your-head-rules.pdf"
			href='https://s3.us-west-2.amazonaws.com/stackjam.us/Dont%20Lose%20Your%20Head%20Rules.pdf'
			target='blank'
			// download
			className='
                buy-now-button 
                rounded-4
                shadow 
            '
		>
			<strong>Download Rules</strong> for 10 fun games
			<br />
			and make up your own rules, too!
		</Button>
	)
}
