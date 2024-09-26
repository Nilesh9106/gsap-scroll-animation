import React from "react";

const Page5 = () => {
  return (
    <>
      <div id="page5">
        <div id="pg5-header">
          <h1>
            Why to adopt <span>HeAR</span> ?
          </h1>
        </div>
        <div id="cards-wrapper">
          <div id="pagination-div">
            <div id="circle-1" className="pg5-circle"></div>
            <div id="circle-2" className="pg5-circle"></div>
            <div id="circle-3" className="pg5-circle"></div>
          </div>
          <div id="card1" className="card">
            <div id="left">
              <div id="upper">
                <div id="icon">
                  <i className="ri-user-line"></i>
                </div>
                <div id="text">
                  <div id="text-1" className="text-div">
                    <h5>
                      Tuberculosis (TB) is a leading cause of death worldwide.
                      Early
                    </h5>
                  </div>
                  <div id="text-2" className="text-div">
                    <h5>
                      detection and timely intervention can significantly delay
                      disease
                    </h5>
                  </div>
                  <div id="text-3" className="text-div">
                    <h5>progression and reduce mortality rates.</h5>
                  </div>
                </div>
              </div>
              <div id="lower">
                <div id="sub-head">
                  <div id="sub-head-1" className="sub-head-div">
                    <h3>1.1 million people died of tuberculosis</h3>
                  </div>
                  <div id="sub-head-2" className="sub-head-div">
                    <h3>(TB) last year</h3>
                  </div>
                </div>
                <div id="heading">
                  <div id="heading-1" className="head-div">
                    <h1>
                      <span>Hear’s early detection</span>
                    </h1>
                  </div>
                  <div id="heading-2" className="head-div">
                    <h1>can provide timely</h1>
                  </div>
                  <div id="heading-3" className="head-div">
                    <h1>insights and potentially</h1>
                  </div>
                  <div id="heading-4" className="head-div">
                    <h1>save lives.</h1>
                  </div>
                </div>
              </div>
            </div>
            <div id="right">
              <div id="video">
                <video
                  loop
                  autoPlay
                  muted
                  src="/videos/drop-svg-final_2.mp4"
                ></video>
              </div>
            </div>
          </div>
          <div id="card2" className="card">
            <div id="left">
              <div id="upper">
                <div id="icon">
                  <i className="ri-user-line"></i>
                </div>
                <div id="text">
                  <div id="text-1" className="text-div">
                    <h5>Current TB diagnostic options often have high false</h5>
                  </div>
                  <div id="text-2" className="text-div">
                    <h5>
                      positive rates and can yield inaccurate results influenced
                    </h5>
                  </div>
                  <div id="text-3" className="text-div">
                    <h5>by factors like diet and hemoglobin levels.</h5>
                  </div>
                </div>
              </div>
              <div id="heading">
                <div id="heading-1" className="head-div">
                  <h1>1/3 people can be</h1>
                </div>
                <div id="heading-2" className="head-div">
                  <h1>diagnosed eyery day</h1>
                </div>
                <div id="heading-3" className="head-div">
                  <h1>
                    with <span>HeAR AI</span>
                  </h1>
                </div>
              </div>
            </div>
            <div id="right">
              <div id="video">
                <video
                  loop
                  autoPlay
                  muted
                  src="/videos/smile-svg_final.mp4"
                ></video>
              </div>
            </div>
          </div>
          <div id="card3" className="card">
            <div id="left">
              <div id="upper">
                <div id="icon">
                  <i className="ri-user-line"></i>
                </div>
                <div id="text">
                  <div id="text-1" className="text-div">
                    <h5>
                      25% of children with tuberculosis (TB) are initially
                    </h5>
                  </div>
                  <div id="text-2" className="text-div">
                    <h5>
                      misdiagnosed, increasing complications; early detection
                    </h5>
                  </div>
                  <div id="text-3" className="text-div">
                    <h5>with Hear can help reduce mortality</h5>
                  </div>
                </div>
              </div>
              <div id="heading">
                <div id="heading-1" className="head-div">
                  <h1>
                    Hear AI <span>can save 25%</span> of
                  </h1>
                </div>
                <div id="heading-2" className="head-div">
                  <h1>children misdiagnosed</h1>
                </div>
                <div id="heading-3" className="head-div">
                  <h1>with tuberculosis (TB).</h1>
                </div>
              </div>
            </div>
            <div id="right">
              <div id="video">
                <video
                  loop
                  autoPlay
                  muted
                  src="/videos/people-svg-final_1.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page5;
