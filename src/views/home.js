import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Highlight from '../components/highlight'
import Point from '../components/point'
import Accordion from '../components/accordion'
import Feature from '../components/feature'
import Check from '../components/check'
import Quote from '../components/quote'
import Footer from '../components/footer'
import './home.css'

import SyntaxHighLighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs'


import Particles from '../components/Particles'
import Chart from '../components/charts/testchart'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>DVD Dataset</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Finbest" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>

        <div className="home-header">
          <div className="home-heading">
            <Navbar rootClassName="navbar-root-class-name"></Navbar>
          </div>

          <div className="home-hero">

          <div className='particles'>
          <Particles id="particles-here" />
          </div>
            {/* <video
              src="https://www.youtube.com/watch?v=0hf3qP-Lvbg&list=TLGGEJZPjI1o8wsxMjEyMjAyMw&t=1s"
              loop
              poster="/pastedimage-v2-900w.png"
              preload="auto"
              autoPlay
              className="home-video"
            ></video> */}
            <img 
            className="home-video"
            src={require("../ressources/images/dvd_dataset.gif")} 
            alt="gif">
            
            </img>

            <div className="home-content">
              <h1 className="home-title">
                <span>Dual-View Drone Dataset · DVD</span>
                <br></br>
              </h1>
              <span className="home-caption">
                Can Multi-view Improve Aerial Visual Perception?
              </span>
              <div className="home-dataset">
                <a href="https://drive.google.com/drive/folders/1X7M2EpYpBMA09j-TF8S5mrwTNBGnKhFd?usp=share_link" target="_blank" rel="noopener noreferrer" className="home-ios-btn">
                  {/* <img
                    alt="pastedImage"
                    src="/pastedimage-zmzg.svg"
                    className="home-apple"
                  /> */}
                  <span className="home-caption01">Dataset</span>
                </a>
                <a href="/dvddataset/pdfs/main_paper.pdf" target="_blank" rel="noopener noreferrer" className="home-paper">
                  {/* <img
                    alt="pastedImage"
                    src="/pastedimage-zmzg.svg"
                    className="home-apple"
                  /> */}
                  <span className="home-caption01">Paper</span>
                </a>    
                <a href="https://github.com/DVD-dataset/dvdv1-code" target="_blank" rel="noopener noreferrer" className="home-code">
                  {/* <img
                    alt="pastedImage"
                    src="/pastedimage-zmzg.svg"
                    className="home-apple"
                  /> */}
                  <span className="home-caption01">Code</span>
                </a>
                <a href="/dvddataset/pdfs/dual_view_drone_dataset_can_mu-Supplementary.pdf" target="_blank" rel="noopener noreferrer" className="home-code1">
                  {/* <img
                    alt="pastedImage"
                    src="/pastedimage-zmzg.svg"
                    className="home-apple"
                  /> */}
                  <span className="home-caption01">Supplementary</span>
                </a>
              </div>
            </div>
          </div>

      </div>
      <div className="home-stats">
        <div className="home-stat">
          <span className="home-caption05">12 Scenes</span>
          <span className="home-description">
            <span className="home-text04">
              12 synchronized aerial/ground multi-view scenes
            </span>
            <br></br>
          </span>
        </div>
        <div className="home-stat1">
          <span className="home-caption06">0.5M Frames</span>
          <span className="home-description01">
            Half a million frames included all views
          </span>
        </div>
        <div className="home-stat2">
          <span className="home-caption07">1.1M Boxes</span>
          <span className="home-description02">
            1.1 Million validated bounding boxes
          </span>
        </div>
      </div>

      <div className="home-stats1">
        <div className="home-stat3">
          <span className="home-caption08">10 Classes </span>
          <span className="home-description03">
            <span className="home-text06">
              10 object classes common in traffic
            </span>
            <br></br>
          </span>
        </div>
        <div className="home-stat4">
          <span className="home-caption09">2.5 Hours</span>
          <span className="home-description04">2.5 Hours of videos</span>
        </div>
        <div className="home-stat5">
          <span className="home-caption10">2.7K</span>
          <span className="home-description05">
            2.7K is the lowest available resolution
          </span>
        </div>
      </div>

      
      <div className="home-video1">
        <div className="home-content01">
          <div className="home-header1">
            <h2 className="home-text08">
              Created specifically for pioneers in aerial detection
            </h2>
          </div>
          <div className="home-video-container">
            {/* <video
              src="https://www.youtube.com/watch?v=0hf3qP-Lvbg&list=TLGGEJZPjI1o8wsxMjEyMjAyMw&t=1s"
              loop
              muted
              poster="/pastedimage-v2-900w.png"
              autoPlay
              className="home-video2"
            ></video> */}

            <div className="home-heading-container">
              <div className="home-heading01">
                <span className="home-text09">
                  Abstract
                </span>
                <span className="home-text10">
                Object detection from aerial images are essential in many applications, such as self-driving cars, robotics, surveillance, to mention a few.~Despite commercial abundance of unmanned aerial vehicles (UAVs), aerial data acquisition remains challenging due to UAV-flight regulations, atmospheric turbulence, sensor failure, etc. Additionally, the color content of the scenes, solar-zenith angle, and population density of different geographies are latitude-dependent, and influence the diversity of the collected data and generalization capacity of the deep neural network (DNN) models trained on it. The existing drone datasets collected primarily in the urban pasture of Asia and North America, do not exhaustively represent different geographies.
                </span>
                <span className="home-text10"> In this work, we present Dual View Drone or DVD, a video dataset where synchronized scenes are recorded from different perspectives --- ground camera and drone-mounted camera. DVD consists of around 2.5 hours of industry-standard 2.7K resolution video sequences, more than 0.5 million frames, and 1.1 million annotated bounding boxes, covering rural and urban pastures during spring and summer in high-latitude European geographies.~This makes DVD the largest ground and aerial-view dataset, and the second largest among all drone-based datasets across all modalities and tasks. Additionally, we recognize that annotating raw videos is a resource-heavy task. Therefore, while benchmarking, we focus on both supervised and semi-supervised object detection baselines that can distill knowledge from multiple views and learn collaboratively.</span>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="home-sections">
        <div className="home-section">
          <div className="home-image">
            {/* <div className="home-image-highlight">
              <span className="home-text11">
                <span>
                  always know your in and out
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
              </span>
            </div> */}
            <div  class="frames-image-container-plots">
             <img src={require("../ressources/images/ground_aerial_class_distribution_3.png")} alt="ClassDistribution"></img>
            </div>

          </div>
          <div className="home-content02">
            <h2 className="home-text14">10 Object Classes</h2>
            <Highlight
              Title="Common Traffic Objects"
              Description="Car, other, Street Light, Person, Traffic Light, Bicycle, Van, Truck, Tram and Bus"
            ></Highlight>
            <Highlight
              Title="European Pasture"
              Description="The dataset is represented by European pasture. The objects aswell as their colors is likewise European."
            ></Highlight>
            {/* <div className="home-explore">
              <span>Explore pricing plans -&gt;</span>
            </div> */}
          </div>
        </div>
        
        <div className="home-section1">
          <div className="home-content03">
            <div className="home-heading02">
              <h2 className="home-text16">Object Sizes</h2>
              <span className="home-text17">
               We devide the objects into three sizes as MSCOCO. 
              </span>
            </div>
            <div className="home-content04">
              <div className="home-points">
                {/* <Point></Point>
                <Point text="Quis nostrud exercitation ullamco"></Point>
                <Point text="Reprehenderit qui in ea voluptate velit"></Point> */}
              <Highlight
                Title="Object Common Traffic Objects"
                Description="Car, other, Street Light, Person, Traffic Light, Bicycle, Van, Truck, Tram and Bus"
              ></Highlight>
              <Highlight
                Title="Lorem ipsum dolor sit amet, consectetur "
                Description="Sed do eiusmod tempor incididunt ut labore et dolore"
              ></Highlight>
              </div>
              {/* <Link to="/" className="home-navlink">
                <div className="home-get-started">
                  <span className="home-sign-up">Get started now</span>
                </div>
              </Link> */}
            </div>
          </div>
          <div className="home-image1">
          {/* <Chart /> */}
          <div class="frames-image-container-plots">
             <img src={require("../ressources/images/ground_aerial_size_distribution_4.png")} alt="ClassDistribution"></img>
            </div>

          </div>
        </div>

        <div className="home-section2">
          {/* <div className="home-image2">
          <div className="home-image-overlay"></div>
          </div>
          <div className="home-content05">
            <h2 className="home-text18">
              <span>Create milestones</span>
              <br></br>
            </h2>
            <Accordion></Accordion>
          </div> */}
        </div>

      </div>
      <div className="home-banner-container">
        <div className="home-banner">
          <div className="home-overlay">
            <span className="home-text21">Benchmark Challenges</span>
            <div className="home-book-btn">
              <span className="home-text22">Submit</span>
            </div>
          </div>
          {/* <img
            alt="pastedImage"
            src="/pastedimage-ylke.svg"
            className="home-pasted-image"
          /> */}
        </div>
      </div>

      <div className="home-features">
        <div className="home-header2">
          <div className="home-tag">
            <span className="home-text23">Samples</span>
          </div>
          <div className="home-heading03">
            <h2 className="home-text24">Frames</h2>
            <span className="home-text25">
            Different sample scenes (with annotation) from our dataset; the first row is the aerial-view, second row presents the same scenes from a ground camera. Similarly, the third row is the aerial-view, and the fourth row presents the same scenes from a ground camera. Some scenes have a dense object annotations, while some scenes have very few object annotations. This high variance in object distribution across different scenes in DVD is complementary to datasets like VisDrone where object detection is relatively straightforward due to their biased object distribution (dense), reflecting its demographic characteristics.
            </span>
          </div>
          <div class="frames-image-container">
            <img src={require("../ressources/images/different_scenes_extra.png")} alt="Image 1"></img>
            <img src={require("../ressources/images/different_scenes_extra.png")} alt="Image 2"></img>
          </div>

        </div>

        {/* <div className="home-feature-list">
          <Feature></Feature>
          <Feature
            Title="Multiple Devices"
            Thumbnail="/vector6113-r6dl.svg"
          ></Feature>
          <Feature Title="Analytics" Thumbnail="/vector6113-6zj.svg"></Feature>
          <Feature
            Title="Virtual Card"
            Thumbnail="/vector6113-lvvs.svg"
          ></Feature>
          <Feature
            Title="Safe Transactions"
            Thumbnail="/vector6114-cupp.svg"
          ></Feature>
          <Feature
            Title="Milestones"
            Thumbnail="/vector6114-6m1e.svg"
          ></Feature>
          <Feature Title="Trade" Thumbnail="/vector6114-yjl.svg"></Feature>
          <Feature Title="Wallet" Thumbnail="/vector6113-lvvs.svg"></Feature>
        </div> */}

        
      </div>
      <div className="home-pricing">
        <div className="home-content06">
          <div className="home-header3">
            <div className="home-tag1">
              <span className="home-text26">Annotation Format</span>
            </div>
            <div className="home-heading04">
              <h2 className="home-text27">Annotations</h2>
            </div>
            <span className="home-text72">We adopt the MSCOCO Annotation Format. We extend the format of images by adding a scene and a frame identifier. We provide aligned annotation files for corresponding ground and aerial.</span>
          </div>
          <div className="home-header3">

            <SyntaxHighLighter language="javascript" style={docco}>
              {
                  'images: [{\n "id":1, \n "file_name": "scene_length_view_frame.png",\n "height": 337, \n "width:", 600, \n "scene": 12, \n "frameID": 826 \n}, ...]'
                }
              </SyntaxHighLighter>
          </div>
          

          {/* <div className="home-pricing-plans">
            <div className="home-plans">
              <div className="home-plan">
                <div className="home-top">
                  <div className="home-heading05">
                    <span className="home-text28">Standard</span>
                    <span className="home-text29">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost">
                    <span className="home-text30">Free</span>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-check-list">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button">
                    <span className="home-text31">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan1">
                <div className="home-top1">
                  <div className="home-heading06">
                    <span className="home-text32">Plus</span>
                    <span className="home-text33">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost1">
                    <span className="home-text34">$8</span>
                    <span className="home-text35">/month</span>
                  </div>
                </div>
                <div className="home-bottom1">
                  <div className="home-check-list1">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button1">
                    <span className="home-text36">Get Standard</span>
                  </div>
                </div>
              </div>
              <div className="home-plan2">
                <div className="home-top2">
                  <div className="home-heading07">
                    <span className="home-text37">Premium</span>
                    <span className="home-text38">
                      Sed ut perspiciatis unde omnis iste natus error sit.
                    </span>
                  </div>
                  <div className="home-cost2">
                    <span className="home-text39">$16</span>
                    <span className="home-text40">/month</span>
                  </div>
                </div>
                <div className="home-bottom2">
                  <div className="home-check-list2">
                    <Check></Check>
                    <Check Feature="Quis nostrud exercitation ulla"></Check>
                    <Check Feature="Duis aute irure dolor intuit"></Check>
                    <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                    <Check Feature="Corporis suscipit laboriosam"></Check>
                  </div>
                  <div className="home-button2">
                    <span className="home-text41">Get Standard</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-expand">
              <div className="home-overlay1">
                <div className="home-header4">
                  <div className="home-heading08">
                    <span className="home-text42">Expand</span>
                    <span className="home-text43">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="home-check-list3">
                    <div className="home-check">
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text44">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="home-check1">
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text45">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="home-check2">
                      <svg viewBox="0 0 1024 1024" className="home-icon04">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text46">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-button3">
                  <span className="home-text47">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div> */}

          {/* <div className="home-plans1">
            <div className="home-plan3">
              <div className="home-top3">
                <div className="home-heading09">
                  <span className="home-text50">Standard</span>
                  <span className="home-text51">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost3">
                  <span className="home-text52">Free</span>
                </div>
              </div>
              <div className="home-bottom3">
                <div className="home-check-list4">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button4">
                  <span className="home-text53">Get Standard</span>
                </div>
              </div>
            </div>
            <div className="home-plan4">
              <div className="home-top4">
                <div className="home-heading10">
                  <span className="home-text54">Plus</span>
                  <span className="home-text55">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost4">
                  <span className="home-text56">$8</span>
                  <span className="home-text57">/month</span>
                </div>
              </div>
              <div className="home-bottom4">
                <div className="home-check-list5">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button5">
                  <span className="home-text58">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="home-plan5">
              <div className="home-top5">
                <div className="home-heading11">
                  <span className="home-text59">Premium</span>
                  <span className="home-text60">
                    Sed ut perspiciatis unde omnis iste natus error sit.
                  </span>
                </div>
                <div className="home-cost5">
                  <span className="home-text61">$16</span>
                  <span className="home-text62">/month</span>
                </div>
              </div>
              <div className="home-bottom5">
                <div className="home-check-list6">
                  <Check></Check>
                  <Check Feature="Quis nostrud exercitation ulla"></Check>
                  <Check Feature="Duis aute irure dolor intuit"></Check>
                  <Check Feature="Voluptas sit aspernatur aut odit"></Check>
                  <Check Feature="Corporis suscipit laboriosam"></Check>
                </div>
                <div className="home-button6">
                  <span className="home-text63">Get Plus</span>
                </div>
              </div>
            </div>
            <div className="home-expand1">
              <div className="home-overlay2">
                <div className="home-header5">
                  <div className="home-heading12">
                    <span className="home-text64">Expand</span>
                    <span className="home-text65">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </span>
                  </div>
                  <div className="home-check-list7">
                    <div className="home-check3">
                      <svg viewBox="0 0 1024 1024" className="home-icon06">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text66">
                        Sed ut perspiciatis unde
                      </span>
                    </div>
                    <div className="home-check4">
                      <svg viewBox="0 0 1024 1024" className="home-icon08">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text67">
                        Quis nostrud exercitation ulla
                      </span>
                    </div>
                    <div className="home-check5">
                      <svg viewBox="0 0 1024 1024" className="home-icon10">
                        <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                      </svg>
                      <span className="home-text68">
                        Duis aute irure dolor intuit
                      </span>
                    </div>
                  </div>
                </div>
                <div className="home-button7">
                  <span className="home-text69">
                    <span>Contact us</span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        
        {/* <div className="home-help">
          <span className="home-text72">Need any help?</span>
          <div className="home-explore1">
            <span className="home-text73">
              Get in touch with us right away -&gt;
            </span>
          </div>
        </div> */}
      </div>
      <div className="home-testimonials">
        <div className="home-logo-container">
          <img
            alt="pastedImage"
            src="/pastedimage-idcu.svg"
            className="home-logo"
          />
        </div>
        <div className="home-content07">
          <div id="quotes" className="home-quotes">
            <div className="quote active-quote">
              <Quote rootClassName="quote-root-class-name"></Quote>
            </div>
            <div className="quote">
              <Quote
                Quote='Utilize the multi-view to enhance detection performance in your algorithms'
                Title="use the arrows"
                Author="DVD Dataset"
                rootClassName="quote-root-class-name"
              ></Quote>
            </div>
            <div className="quote">
              <Quote
                Quote='Use the toy dataset to get a feeling'
                Title="use the arrows"
                Author="DVD Dataset"
                rootClassName=""
              ></Quote>
            </div>
          </div>
          <div className="home-buttons">
            <div id="quote-before" className="home-left">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M854 470v84h-520l238 240-60 60-342-342 342-342 60 60-238 240h520z"></path>
              </svg>
            </div>
            <div id="quote-next" className="home-right">
              <svg viewBox="0 0 1024 1024" className="home-icon14">
                <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
              </svg>
            </div>
          </div>
          <div>
            <div className="home-container2">
              <Script
                html={` <script>
    /* Quote Slider - Code Embed */

    let current = 1;

    const nextButton = document.querySelector("#quote-next");
    const previousButton = document.querySelector("#quote-before");
    const quotes = document.querySelectorAll(".quote");

    if (nextButton && previousButton && quotes) {
      nextButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == quotes.length ? (current = 1) : current++;
        quotes[current - 1].classList.add("active-quote");
      });

      previousButton.addEventListener("click", () => {
        quotes.forEach((quote) => {
          quote.classList.remove("active-quote");
        });

        current == 1 ? (current = quotes.length) : current--;
        quotes[current - 1].classList.add("active-quote");
      });
    }
  </script>`}
              ></Script>
            </div>
          </div>
        </div>
      </div>
      <div className="home-faq">
        <div className="home-content08">
          <div className="home-header6">
            <div className="home-tag2">
              <span className="home-text74">
                <span>License</span>
                <br></br>
              </span>
            </div>
            <div className="home-heading13">
              <h2 className="home-text77">Usage License</h2>
            </div>
            <span className="home-text72">The dataset is protected under the CC-BY license of creative commons, which allows the users to distribute, remix, adapt, and build upon the material in any medium or format, as long as the creator is attributed. The license allows DVD for commercial use. As the authors of this manuscript and collectors of this dataset, we reserve the right to distribute the data.</span>
          </div>

          {/* <div className="home-rows">
            <div className="home-column">
              <div className="Question">
                <span className="home-title1">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description06">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="Question">
                <span className="home-title2">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description07">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    tempor incididunt ut labore et dolore magna aliqua.
                    Excepteur sint occaecat
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <div className="home-question2 Question">
                <span className="home-title3">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description08">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
            </div>
            <div className="home-column1">
              <div className="home-question3 Question">
                <span className="home-title4">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description09">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
              <div className="home-question4 Question">
                <span className="home-title5">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
              <div className="home-question5 Question">
                <span className="home-title6">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description11">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    tempor incididunt ut labore et dolore magna aliqua.
                    Excepteur sint occaecat
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
          </div>*/}
        </div>
      </div> 
      
      <div className="home-features">
        <div className="home-header2">
          <div className="home-tag">
            <span className="home-text23">Samples</span>
          </div>
          <div className="home-heading03">
            <h2 className="home-text24">Qualitative Results</h2>
            <span className="home-text25">
              Different sample scenes with predictions from different object detectors 
            </span>
          </div>
          <div class="prediction-samples-image-container">
            <img src={require("../ressources/images/qualitative_results.png")} alt="Image 1"></img>
          </div>
        </div>
      </div>

      <div className="home-get-started1">
        <div className="home-content09">
          <div className="home-heading14">
            <h2 className="home-text84">Download Now!</h2>
            <span className="home-text85">
              Download the full dataset or take a look using our toy-dataset consisting of a subset of samples at a lower resolution
            </span>
          </div>
          <div className="home-hero-buttons">
            <div className="home-ios-btn1">
              {/* <img
                alt="pastedImage"
                src="/pastedimage-zmzg.svg"
                className="home-apple1"
              /> */}
              <a href="https://drive.google.com/drive/folders/1X7M2EpYpBMA09j-TF8S5mrwTNBGnKhFd?usp=share_link" target="_blank" rel="noopener noreferrer" className="navbar-navlink1">
                <span className="home-caption11">Download Here</span>
              </a>
            </div>


            {/* <div className="home-android-btn">
              <img
                alt="pastedImage"
                src="/pastedimage-ld65.svg"
                className="home-android3"
              />
              <span className="home-caption12">Download for Android</span>
            </div> */}
          </div>
        </div>
      </div>

      {/* <Footer></Footer> */}
    </div>
  )
}

export default Home
