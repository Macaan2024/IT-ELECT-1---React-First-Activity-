function MainContent(props) {
    return (
        <>
            <main>
                <div class="box-list">
                    
                    <div class="box1-container">
                        <img src={props.image1}/>
                        <h6>{props.title1}</h6>
                    </div>
                    <div class="box2-container">
                        <img src={props.image2} />
                        <h6>{props.title2}</h6>
                    </div>
                    <div class="box3-container">
                        <img src={props.image3} />
                        <h6>{props.title3}</h6>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MainContent;