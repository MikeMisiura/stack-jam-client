import './About.css'
import '../theme/Global.css'

export default function AboutUs() {
	return (
		<div>
			<h1 className="comic">Our Story</h1>
			<p>
				As a small indie game production company based in Anaconda, MT., we are
				passionate about bringing people together through games and providing
				challenges that strengthen you mentally and physically. Relationships
				are best developed face to face and shoulder to shoulder, games can be a
				wonderful tool in this endeavour. Our high quality products that hold up
				year after year will make wonderful gifts for your loved ones (or
				yourself!) as you have fun together.
			</p>
			<p>
				Our flagship game, “Don’t Lose Your Head”, encourages friendly
				competition while increasing hand-eye coordination and providing
				opportunities to learn physics, geometry, and math. The small size and
				light weight of this game allows you to play in your backyard, at the
				park, or during a camping trip. A gentle toss or a decluttered
				environment will even permit indoor play! Simple to understand rules
				allow for enjoyment by all ages and unique game pieces called flyers
				encourage the invention of your own new ways of playing.
			</p>
			<p>
				We are working hard to produce new, original games for your enjoyment so
				stay tuned for the release of those by following us on{' '}
				<a
					className="hidden-links"
					href="https://www.facebook.com/StackJam"
				>
					<strong>Facebook</strong>
				</a>
				.
			</p>{' '}
			<p>
				For more information, feel free to email me at{' '}
				<a
					className="hidden-links"
					href="mailto:stackjam2023@gmail.com"
				>
					<strong> stackjam2023@gmail.com</strong>
				</a>
				.
			</p>
		</div>
	)
}
