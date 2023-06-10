export default function ScrollableText({data, heading}) {
    return (
        <div>
           <h5>{heading} :</h5>
           <div style={...stylingObject.div}>
            <p>{data} </p>
           </div>
        </div>
    );
} 

// update Styles later 

var stylingObject = {
    div: {
        "max-height": '150px',
        "overflow": 'scroll',
        "padding": '20px',
        "backgroundColor": "#e9e9e9",
        "::WebkitScrollbarTrack": "red"
      }
  };