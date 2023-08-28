import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import StackJamColors from '../theme/stackJamColors';
import { Button, Image } from 'react-bootstrap';
import "../theme/Global.css"
import "./BuyNowButton.css"

export default function BuyNowButton() {

    return (
        <Button
            href='https://www.etsy.com/shop/StackJam'
            target='blank'
            className='
                buy-now-button 
                rounded-4
                shadow 
            '
        >
            Buy Now!
        </Button>
    );
}

