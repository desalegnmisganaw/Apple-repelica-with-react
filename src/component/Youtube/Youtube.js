import React, { Component } from 'react'
import "./Youtube.css"

class Youtube extends Component {
    constructor(){
        super();
        this.state={
            youTubeVideos: [],
        }
    }
    componentDidMount(){
        fetch("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCP9jlAXV0049-SxYZ99rSL5m_N8jioLSk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=6")
        .then(response => response.json())
        .then((data) => {
            const youTubeVideos =data.items;
            this.setState((state)=> {
                return{
                     youTubeVideos: youTubeVideos
                }
                   
            });
        })
    }
 
    render() {
       console.log(this.state.youTubeVideos)
        return (
            <div className="allVideoWrapper">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-12">
                            <div className="title-wrapper">Latest Videos</div>
                        </div>
                              
                            {this.state.youTubeVideos?.map((singleVideo, index) => {
									let vidId = singleVideo.id.videoId; 
									let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
								let videoWrapper =(
									<div key={index} className="col-sm-12 col-md-6 col-lg-4">
										<div className="singleVideoWrapper">
											<div className="videoThumbnail">
												<a href={vidLink} target="_blank">
													<img src={singleVideo.snippet.thumbnails.high.url} alt=""/>
												</a>
											</div>
											<div className="videoInfoWrapper">
												<div className="videoTitle"><a href={vidLink} target="_blank">{singleVideo.snippet.title}</a></div>			
												<div className="videoDesc">{singleVideo.snippet.description}</div>
											</div>
										</div>
									</div>
                                );
									return videoWrapper; 
							})}

							

                    </div>

                </div>
                
            </div>
        )
    }
}

export default Youtube;
