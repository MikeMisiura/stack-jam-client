import { Button } from 'react-bootstrap'
import '../theme/Global.css'
import './BuyNowButton.css'

export default function DownloadInstructionsButton() {
	return (
		<Button
			// href="http://localhost:3001/pdf/dont-lose-your-head-rules.pdf"
			href="https://s3.us-west-2.amazonaws.com/stackjam.us/Dont+Lose+Your+Head+Rules.pdf"
			target="blank"
			// download
			className="
                buy-now-button 
                rounded-4
                shadow 
            "
		>
			Download Rules for 8 fun games - and make up your own rules, too!
		</Button>
	)
}
