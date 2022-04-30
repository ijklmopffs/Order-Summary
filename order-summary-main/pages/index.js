import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Order Summary</title>
        <meta name="description" content="Order Summary Component" />
        <link rel="icon" href="/favicon.png" />
      </Head>
        <div id="base">
        <img id="image" src="/illustration-hero.svg" alt="Person Dancing"></img>
          <div id="text">
          <p id="title">Order Summary</p>
          <p className="paleblue">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
          <div id="price">
          <img id="music" src="icon-music.svg" alt="Music"></img>
            <div id="undertitle">Annual Plan<p id="cost" className="paleblue">$59.99/year</p></div>
            
            <a id="change">Change</a>
          </div>
          <a><div id="proceed">Proceed to Payment</div></a>
          <a className="paleblue" id="cancel">Cancel Order</a>
          </div>
        </div>

      <footer>

      </footer>
    </div>
  )
}
